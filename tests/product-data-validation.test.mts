import assert from "node:assert/strict";
import test from "node:test";
import { products } from "../data/products.ts";
import { companyData, contactHref } from "../data/company.ts";
import { heroMedia } from "../data/hero-media.ts";
import { sources } from "../data/sources.ts";
import { validateProductData } from "../lib/product-data-validation.ts";
import { absoluteUrl, siteConfig } from "../lib/site.ts";
import type { Product } from "../types/product.ts";
import type { SourceReference } from "../types/source.ts";

const verifiedSource: SourceReference = {
  id: "xcmg-document-example",
  type: "manufacturer_document",
  title: "Test fixture source",
  documentIdentifier: "TEST-ONLY",
  pageNumber: 1,
  verifiedAt: "2026-08-28T00:00:00.000Z",
};

function copyProduct(): Product {
  const product = structuredClone(products[0]);
  product.sourceIds = [];
  product.specifications = [{
    ...product.specifications[0],
    value: null,
    verificationStatus: "unverified",
    sourceIds: [],
  }];
  return product;
}

test("current production product data is valid", () => {
  assert.deepEqual(validateProductData(products, sources), []);
});

test("MVP contains only the four approved reach stackers", () => {
  assert.deepEqual(products.map(({ model }) => model), ["XCS4545K", "XCS4541K", "XCS4531K", "XCS4531E"]);
  assert.ok(products.every(({ category }) => category === "Ричстакеры"));
});

test("site URLs share one normalized public origin", () => {
  assert.equal(absoluteUrl("/richstackery/xcs4545k"), `${siteConfig.url}/richstackery/xcs4545k`);
  assert.ok(siteConfig.url.startsWith("http://") || siteConfig.url.startsWith("https://"));
});

test("no unapproved product images are configured", () => {
  assert.ok(products.every(({ media }) => media.hero === null && media.gallery.length === 0));
});

test("product SEO titles and descriptions are unique", () => {
  assert.equal(new Set(products.map(({ seo }) => seo.title)).size, products.length);
  assert.equal(new Set(products.map(({ seo }) => seo.description)).size, products.length);
});

test("company contacts use only the approved channels", () => {
  assert.equal(companyData.phone, "+7 932 019 99 93");
  assert.equal(companyData.phoneHref, "tel:+79320199993");
  assert.equal(companyData.email, "kra@xcmg.ru");
  assert.equal(companyData.emailHref, "mailto:kra@xcmg.ru");
  assert.equal(contactHref("consultation"), companyData.phoneHref);
  assert.equal(contactHref("selection"), companyData.phoneHref);
  assert.ok(contactHref("quote").startsWith(`${companyData.emailHref}?subject=`));
});

test("company legal data and map location match the centralized source", () => {
  assert.equal(companyData.inn, "9718288568");
  assert.equal(companyData.kpp, "771801001");
  assert.equal(companyData.ogrn, null);
  assert.match(companyData.address.full, /Краснобогатырская/);
  assert.equal(companyData.coordinates.latitude, 55.814558);
  assert.equal(companyData.coordinates.longitude, 37.693723);
  assert.ok(companyData.yandexMapEmbedUrl.includes("37.693723%2C55.814558"));
});

test("hero media uses the documented local assets and delayed video", () => {
  assert.equal(heroMedia.image, "/media/hero/PROMO-XCMG.webp");
  assert.equal(heroMedia.video, "/media/hero/PROMO-XCMG.mp4");
  assert.equal(heroMedia.videoDelayMs, 18_000);
  assert.equal(heroMedia.desktopMediaQuery, "(min-width: 768px)");
});

test("configured product images have valid local metadata", () => {
  for (const product of products) {
    for (const image of [product.media.hero, ...product.media.gallery].filter((item) => item !== null)) {
      assert.ok(image.src.startsWith(`/images/products/${product.slug}/`));
      assert.ok(image.alt.trim().length > 0);
      assert.ok(image.width > 0 && image.height > 0);
    }
  }
});

test("rejects duplicate product slugs", () => {
  const product = copyProduct();
  const issues = validateProductData([product, { ...product, id: "second" }], []);
  assert.equal(issues.filter(({ code }) => code === "DUPLICATE_PRODUCT_SLUG").length, 1);
});

test("rejects duplicate source IDs", () => {
  const issues = validateProductData([], [verifiedSource, { ...verifiedSource, title: "Duplicate" }]);
  assert.equal(issues.filter(({ code }) => code === "DUPLICATE_SOURCE_ID").length, 1);
});

test("rejects references to sources outside the registry", () => {
  const product = copyProduct();
  product.specifications[0].sourceIds = ["missing-source"];
  const issues = validateProductData([product], []);
  assert.equal(issues.filter(({ code }) => code === "UNKNOWN_SOURCE_REFERENCE").length, 1);
});

test("requires a valid source for every verified specification", () => {
  const product = copyProduct();
  product.specifications[0].verificationStatus = "verified";
  product.specifications[0].value = "test fixture value";
  const issues = validateProductData([product], []);
  assert.equal(issues.filter(({ code }) => code === "VERIFIED_SPECIFICATION_WITHOUT_SOURCE").length, 1);
});

test("accepts a verified specification backed by a registered source", () => {
  const product = copyProduct();
  product.specifications[0].verificationStatus = "verified";
  product.specifications[0].value = "test fixture value";
  product.specifications[0].sourceIds = [verifiedSource.id];
  assert.deepEqual(validateProductData([product], [verifiedSource]), []);
});
