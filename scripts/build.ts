import fs from 'fs';
import path from 'path';

const REPO_URL = "https://raw.githubusercontent.com/KYC-rip/xmr402-ecosystem/main";
const PROJECTS_DIR = path.join(process.cwd(), 'data/projects');
const OUTPUT_FILE = path.join(process.cwd(), 'public/ecosystem.json');

const build = () => {
  const categories = [
    { id: "guards", name: "Guards", description: "Middlewares that enforce the 402 challenge and verify 0-conf (e.g., Ripley)." },
    { id: "gateways", name: "Gateways", description: "Commercial entry points providing XMR402 payment rails." },
    { id: "agent-skills", name: "Agent Skills", description: "Toolkits that give AI Agents the ability to pay (e.g., Monero-MCP)." },
    { id: "services", name: "Services", description: "Services that provide XMR402 payment rails (e.g., XMR402.org)." },
    { id: "wallets", name: "Wallets", description: "Wallets that support XMR402 (e.g., Ripley Terminal)." },
    { id: "tools", name: "Tools", description: "Other tools that help with XMR402 (e.g., XMR402 CLI)." },
    { id: "misc", name: "Misc", description: "Other projects that are relevant to XMR402 (e.g., XMR402.org)." }
  ];

  const projects = fs.readdirSync(PROJECTS_DIR).filter(f =>
    fs.lstatSync(path.join(PROJECTS_DIR, f)).isDirectory()
  ).map((id: any) => {
    const manifestPath = path.join(PROJECTS_DIR, id, 'manifest.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

    let logoFile = manifest.logo;

    if (!logoFile) {
      const files = fs.readdirSync(path.join(PROJECTS_DIR, id));
      logoFile = files.find((file: string) => file.startsWith('logo.') && /\.(png|jpe?g|svg|webp)$/i.test(file));
    }

    if (logoFile) {
      manifest.logo_url = `${REPO_URL}/data/projects/${id}/${logoFile}`;
      if (manifest.logo) delete manifest.logo;
    }

    return manifest;
  });

  const output = {
    categories,
    featured_ids: ["ripley-terminal", "molt-production"],
    projects
  };

  if (!fs.existsSync(path.dirname(OUTPUT_FILE))) fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(path.join(path.dirname(OUTPUT_FILE), '.nojekyll'), '');
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`✅ Success: ${projects.length} projects indexed.`);
};

build();