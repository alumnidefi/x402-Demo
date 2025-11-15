# The Battle's End · x402 Demo

This Next.js project mirrors the mood of [thebattlesend.com](https://thebattlesend.com/) while wiring up an x402-powered paywall, membership tiers, and a live test facilitator endpoint. It's intended to deploy with a single click on Vercel and demonstrate everything from cost-per-article access to a sample Onramp session token.

## Features

- **Hero experience**: A visually rich landing section inspired by The Battle's End with quick facts about membership and payments.
- **Membership tiers**: Three curated tiers that explain what each level unlocks while noting that x402 handles recurring access.
- **Pay-per-article story**: `/stories/when-the-flames-fall` is protected by the x402 middleware and responds with a paywall until a payment header is supplied.
- **Live facilitator endpoint**: `/api/x402/facilitator-test` forwards to `https://x402.org/facilitator/supported` so you can validate the default test facilitator from your deployment.
- **Onramp session token**: `/api/x402/session-token` reuses the production-ready handler from `x402-next` so the paywall can show the "Get more USDC" option in test mode.
- **Vercel-ready**: Configured scripts, TypeScript, and documentation for one-click deployment.

## Getting started

```bash
npm install
cp .env.template .env
# Update .env with your wallet, network, and optional facilitator/CDP keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the hero, membership tiers, and the `stories` list. Click a story to hit the paywall.

## Environment variables

| Key | Purpose | Example |
| --- | --- | --- |
| `RESOURCE_WALLET_ADDRESS` | The address that receives x402 payments | `0x52908400098527886E0F7030069857D2E4169EE7` |
| `NETWORK` | x402 network used by the middleware | `base-sepolia` (default) |
| `NEXT_PUBLIC_FACILITATOR_URL` | Override the facilitator base URL | `https://x402.org/facilitator` |
| `NEXT_PUBLIC_X402_SESSION_TOKEN_PATH` | Path used by x402 paywall for Onramp | `/api/x402/session-token` |
| `NEXT_PUBLIC_CDP_CLIENT_KEY` | Optional CDP client key for onramp branding | `demo-app` |
| `CDP_API_KEY_ID` / `CDP_API_KEY_SECRET` | (Optional) Coinbase Onramp API keys used by `/api/x402/session-token` |

The middleware will throw if `RESOURCE_WALLET_ADDRESS` is missing. `NETWORK` defaults to `base-sepolia` to keep everything on the x402 test rail.

## X402 endpoints

- `/stories/:slug` – Protected by `middleware.ts`; the paywall requires `$1` in Base Sepolia. After paying, the response includes `X-PAYMENT-RESPONSE` with settlement info.
- `/api/x402/facilitator-test` – Server route that proxies to the test facilitator's `supported` endpoint so you can confirm connectivity (useful when deploying).
- `/api/x402/session-token` – Re-use of `x402-next`'s Onramp token generator for the paywall. Requires `CDP_API_KEY_ID` & `CDP_API_KEY_SECRET` to succeed.

## Scripts

- `npm run dev` – Start the Next.js dev server
- `npm run build` – Create a production build
- `npm run start` – Run the production build
- `npm run lint` – Run Next's linters

## Deploy to Vercel (single click)

1. Visit [https://vercel.com/new](https://vercel.com/new?utm_source=thebattlesend-demo) and import this repository.
2. Set the required environment variables (`RESOURCE_WALLET_ADDRESS`, `NETWORK`, `NEXT_PUBLIC_FACILITATOR_URL`, etc.) in the Vercel dashboard.
3. Deploy. Vercel will run `npm run build` automatically and expose the paywall at `/stories/when-the-flames-fall`.

## Testing the paywall

1. Visit `/api/x402/facilitator-test` after deployment to confirm the facilitators `supported` list can be retrieved.
2. Navigate to `/stories/when-the-flames-fall`. The middleware will respond with the x402 paywall on first load.
3. Use an x402-compatible client (or the `x402` reference app) to send a request with `X-PAYMENT` and unlock the article. After settlement, check the `X-PAYMENT-RESPONSE` header for transaction info.

## Next steps

1. Replace the placeholder wallet with your own production address.
2. Swap `NEXT_PUBLIC_FACILITATOR_URL` for your managed facilitator (or keep the x402 test facilitator for quick demos).
3. Provide CDP keys to enable the Onramp “Get more USDC” experience.
4. Harden the membership portal with additional gated routes (e.g., `/members`).
