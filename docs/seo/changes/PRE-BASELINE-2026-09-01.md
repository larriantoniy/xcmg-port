# PRE-BASELINE-2026-09-01

This record lists significant repository changes known to have happened before
the SiteMind baseline. It is based on the current repository and Git history.
It is not a record of measured SEO outcomes.

## Initial site implementation

Change: Initial XCMG reach stacker website implementation, including the home page and the base Next.js application.

Date: 2026-08-28

Pages: `/`

Evidence: Git commit `68eb4b8` (`chore: initialize XCMG port website`).

Expected purpose: Establish the application foundation.

Measured SEO result: UNKNOWN

## Reach stacker catalogue and model pages

Change: Catalogue, four reach stacker model pages, commercial content blocks, technical data presentation, and related page structure.

Date: 2026-08-29

Pages: `/`, `/richstackery`, `/richstackery/xcs4545k`, `/richstackery/xcs4541k`, `/richstackery/xcs4531k`, `/richstackery/xcs4531e`, `/garantiya`, `/about`, `/contacts`

Evidence: Git commits `7e14933` and `edadfdd`.

Expected purpose: Present the approved XCMG reach stacker range and commercial information.

Measured SEO result: UNKNOWN

## Metadata, canonical URLs, structured data, sitemap, and robots

Change: Metadata helpers, canonical URLs, structured data components, `robots.txt`, and `sitemap.xml` were added or refined.

Date: 2026-08-29

Pages: indexable public routes available at that time.

Evidence: Git commit `7e14933`; current files `app/layout.tsx`, `lib/metadata.ts`, `app/robots.ts`, `app/sitemap.ts`, and structured-data components.

Expected purpose: Provide indexability and canonical URL signals.

Measured SEO result: UNKNOWN

## Static production URL configuration

Change: Production site URL was centralized as static configuration in `lib/site.ts`.

Date: 2026-08-30

Pages: all routes using absolute SEO URLs.

Evidence: Git commit `64fe547` (`site-url static now`).

Expected purpose: Keep canonical URLs, sitemap, robots, metadata, and structured data on one production origin.

Measured SEO result: UNKNOWN

## Yandex Metrika integration

Change: Yandex Metrika counter code was added to the root layout.

Date: 2026-08-30

Pages: all public routes.

Evidence: Git commit `784cb29` (`add yandex metric`).

Expected purpose: Enable analytics collection.

Measured SEO result: UNKNOWN

## Company and commercial-content update

Change: Company identity, contacts, certificate asset, service content, and related public page copy were updated.

Date: 2026-08-31

Pages: `/about`, `/contacts`, `/garantiya`, product pages, Header, and Footer.

Evidence: Git commit `8ac47e8` (`update contacts about , optimize video and webp`).

Expected purpose: Align public company and commercial information with the current approved data.

Measured SEO result: UNKNOWN

## Leasing landing page

Change: Leasing page, internal links, sitemap entry, local leasing media, and Header/Footer navigation updates were added.

Date: 2026-08-31

Pages: `/lizing`, `/`, `/richstackery`, sitemap, Header, and Footer.

Evidence: Git commit `c523849` (`final mvp`).

Expected purpose: Add a commercial leasing route for XCMG reach stackers.

Measured SEO result: UNKNOWN

## www-domain redirect configuration

Change: A Caddy redirect block from `www.port-tech.ru` to `https://port-tech.ru{uri}` was added.

Date: 2026-09-01

Pages: all `www.port-tech.ru` paths after deployment.

Evidence: Git commit `c682812` (`add www redir`).

Expected purpose: Consolidate the secondary hostname onto the canonical host.

Measured SEO result: UNKNOWN

## Interpretation

These changes happened before the SiteMind baseline.

Their SEO impact is currently unknown.

They are historical pre-baseline changes,
not isolated controlled experiments.

Any future change in indexing, impressions,
queries, positions, CTR or clicks must not
automatically be attributed to these changes.

Correlation does not establish causation.
