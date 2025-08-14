
# ForgeStream

Unlock exclusive creator communities with token-gated access and micro-subscriptions on Base.

## Features

- **🔗 Wallet Integration**: Connect Base-compatible wallets with OnchainKit
- **👑 Creator Profiles**: Discover creators and their tiered membership offerings
- **🔒 Token-Gated Access**: Exclusive chat rooms based on NFT ownership or subscriptions
- **💰 Micro-Subscriptions**: Monthly/yearly payments in ETH or USDC on Base
- **🎯 Access Control**: Secure verification of user permissions
- **💬 Community Chat**: Exclusive discussion spaces for supporters

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Blockchain**: Base (Ethereum L2) with OnchainKit and MiniKit
- **Wallet**: Base Wallet integration via OnchainKit
- **Identity**: Farcaster integration for social profiles

## Design System

ForgeStream uses a carefully crafted design system with:

- **Colors**: Clean, modern palette with accent blue (`hsl(220 90% 50%)`)
- **Typography**: Hierarchical text system from display to caption
- **Components**: Reusable UI components (Button, Card, TierCard, etc.)
- **Motion**: Smooth animations with cubic-bezier easing
- **Layout**: Responsive 12-column grid with fluid containers

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment**:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your OnchainKit API key and other configuration.

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Core Components

### Data Model
- **User**: EVM address, Privy/Farcaster integration
- **Creator**: Profile with bio, tiers, and followers
- **Tier**: Access levels with pricing and requirements
- **Subscription**: Time-based access with payment tracking
- **AccessKey**: Token-based verification for gated content

### API Routes
- `GET /api/creators` - Fetch creator profiles and tiers
- `POST /api/subscriptions` - Process subscription payments
- `GET /api/subscriptions` - Get user's active subscriptions
- `POST /api/access/verify` - Verify tier access permissions

### User Flows
1. **Wallet Connection**: Connect Base wallet via OnchainKit
2. **Creator Discovery**: Browse featured creators and their tiers
3. **Subscription**: Subscribe to creator tiers with crypto payments
4. **Access Verification**: Check permissions for gated content
5. **Community Participation**: Join exclusive chat rooms

## Customization

The app is built with modularity in mind:

- **Design Tokens**: Modify `tailwind.config.js` for brand customization
- **Components**: Extend base components in `app/components/`
- **API Integration**: Implement real backends in `app/api/`
- **Blockchain**: Configure contracts in `app/lib/constants.ts`

## Deployment

This is a Base Mini App optimized for mobile-first experiences:

1. **Build**: `npm run build`
2. **Deploy**: Compatible with Vercel, Netlify, or any Node.js host
3. **Configure**: Set production environment variables
4. **Frame Setup**: Configure Farcaster frame metadata

## License

MIT License - see LICENSE file for details.
