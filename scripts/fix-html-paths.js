import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist', 'index.html');

try {
  let html = readFileSync(distPath, 'utf-8');
  
  // base 경로가 /Convi/인 경우 경로 수정
  if (process.env.GITHUB_PAGES === 'true') {
    // 절대 경로를 base 경로로 변환
    html = html.replace(/href="\/([^"]+)"/g, 'href="/Convi/$1"');
    html = html.replace(/src="\/([^"]+)"/g, 'src="/Convi/$1"');
    // 이미 /Convi/로 시작하는 경우는 제외
    html = html.replace(/href="\/Convi\/Convi\//g, 'href="/Convi/');
    html = html.replace(/src="\/Convi\/Convi\//g, 'src="/Convi/');
  }
  
  writeFileSync(distPath, html, 'utf-8');
  console.log('✅ HTML paths fixed for GitHub Pages');
} catch (error) {
  console.error('❌ Error fixing HTML paths:', error);
  process.exit(1);
}
