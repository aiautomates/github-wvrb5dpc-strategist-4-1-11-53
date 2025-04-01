const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

// List of routes to pre-render
const routes = [
  '/',
  '/solutions',
  '/chatbots',
  '/agents',
  '/workflows',
  '/agentic-rag',
  '/why-us',
  '/contact',
  '/consultation',
  '/privacy-policy',
  '/terms-conditions',
  '/blog',
  '/ai-strategist'
];

async function generateStaticFiles() {
  // Create output directory
  const outputDir = path.join(process.cwd(), 'static-html');
  await fs.mkdir(outputDir, { recursive: true });

  // Build the project first
  console.log('Building project...');
  execSync('npm run build');

  // Copy all static assets
  console.log('Copying static assets...');
  await fs.cp(path.join(process.cwd(), 'dist'), outputDir, { recursive: true });

  console.log('Static files generated in /static-html directory');
  console.log('\nTo use these files:');
  console.log('1. Copy the contents of the /static-html directory');
  console.log('2. Upload them to your WordPress server');
  console.log('3. Update your WordPress theme to include these static pages');
}

generateStaticFiles().catch(console.error);