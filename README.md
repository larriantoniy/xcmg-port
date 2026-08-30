# XCMG Reach Stackers

Commercial Russian-language Next.js website for four XCMG reach stackers:

- XCS4545K
- XCS4541K
- XCS4531K
- XCS4531E

Product facts are stored as typed data with explicit source references. Unknown commercial and company information must not be invented.

## Local development

```bash
npm ci
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Configuration

The production site URL is configured centrally in `lib/site.ts`. Contact, company and legal variables must contain only approved public information.

## Deployment

Follow [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) before the first production release.
