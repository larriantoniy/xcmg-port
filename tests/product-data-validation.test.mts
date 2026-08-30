import assert from "node:assert/strict";
import test from "node:test";
import { products } from "../data/products.ts";
import { companyData, contactHref } from "../data/company.ts";
import { heroMedia } from "../data/hero-media.ts";
import { sources } from "../data/sources.ts";
import { validateProductData } from "../lib/product-data-validation.ts";
import { absoluteUrl, SITE_URL } from "../lib/site.ts";
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
  product.features = [];
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
  assert.equal(absoluteUrl("/richstackery/xcs4545k"), `${SITE_URL}/richstackery/xcs4545k`);
  assert.ok(SITE_URL.startsWith("http://") || SITE_URL.startsWith("https://"));
});

test("product SEO titles and descriptions are unique", () => {
  assert.equal(new Set(products.map(({ seo }) => seo.title)).size, products.length);
  assert.equal(new Set(products.map(({ seo }) => seo.description)).size, products.length);
});

test("product landing content is complete and unique", () => {
  assert.equal(new Set(products.map(({ description }) => description)).size, products.length);
  assert.ok(products.every((product) => product.overview.length >= 2));
  assert.ok(products.every((product) => product.applications.length >= 3));
  assert.ok(products.every((product) => product.features.length >= 4));
  assert.ok(products.every((product) => product.selectionReasons.length >= 4));
  assert.ok(products.every((product) => product.faq.length >= 5));
  assert.ok(products.every((product) => product.specifications.every(({ group }) => group.length > 0)));
});

test("owner-approved powertrain data is verified", () => {
  const specification = (slug: string, label: string) => products
    .find((product) => product.slug === slug)
    ?.specifications.find((item) => item.label === label);

  const expected = [
    ["xcs4545k", "Модель двигателя", "Volvo TAD1151", undefined],
    ["xcs4541k", "Мощность двигателя", "265", "кВт"],
    ["xcs4531k", "Модель двигателя", "Volvo X12", undefined],
    ["xcs4531e", "Мощность электродвигателя", "300", "кВт"],
    ["xcs4531e", "Батарея", "Fudi", undefined],
    ["xcs4531e", "Ёмкость батареи", "535", "кВт·ч"],
    ["xcs4531e", "Автономность", "10", "ч"],
    ["xcs4531e", "Время полной зарядки", "85", "мин"],
  ] as const;

  for (const [slug, label, value, unit] of expected) {
    const item = specification(slug, label);
    assert.equal(item?.value, value);
    assert.equal(item?.unit, unit);
    assert.equal(item?.verificationStatus, "verified");
    assert.ok(item && item.sourceIds.length > 0);
  }
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
  assert.equal(heroMedia.videoDelayMs, 12_000);
  assert.equal(heroMedia.desktopMediaQuery, "(min-width: 768px)");
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
