## 🛠️ XMR402 Ecosystem Contribution Guide

Want to get your project listed on [xmr402.org](https://xmr402.org)? We love builders, but we hate manual overhead. Follow this protocol to get added to the directory. 

### 1. Submission Rules

* **No Tokens**: If your project is a speculative meme coin or a "XMR402 reward token," do not apply. We only list technical implementations.
* **Code First**: Provide a GitHub link or a live URL. If it doesn't run, it doesn't get listed. 
* **Privacy Centric**: We prioritize projects that respect Monero's privacy-by-default ethos.

### 2. How to Submit

1. Fork this repository.
2. Create a new directory for your project under `data/projects/your-project-id`.
3. Add a `manifest.json` file in that directory following the schema below.
4. Open a Pull Request.

### 3. Data Schema

Ensure your entry follows this format:

```json
{
  "id": "your-project-id",
  "name": "Project Name",
  "category": "guards | gateways | agent-skills | services | wallets | tools | misc",
  "tagline": "A short, punchy sentence about what it does.",
  "status": "Production | Alpha | Planning",
  "url": "https://your-project-link.com",
  "github": "https://github.com/your/repo",
  "author": "@YourTwitterHandle",
  "logo": "logo.png" // Optional. We will auto-detect any logo.(png|jpg|svg|webp) in your folder.
}

```

### 4. Categorization

* **Guards**: Middlewares that enforce the 402 challenge and verify 0-conf (e.g., Ripley).
* **Gateways**: Commercial entry points providing XMR402 payment rails.
* **Agent Skills**: Toolkits that give AI Agents the ability to pay (e.g., Monero-MCP).
* **Services**: Services that provide XMR402 payment rails (e.g., XMR402.org).
* **Wallets**: Wallets that support XMR402 (e.g., Ripley Terminal).
* **Tools**: Other tools that help with XMR402 (e.g., XMR402 CLI).
* **Misc**: Other projects that are relevant to XMR402 (e.g., XMR402.org).