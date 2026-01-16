import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist', 'index.html');

try {
  let html = readFileSync(distPath, 'utf-8');
  
  // base 경로가 /Convi/인 경우 경로 수정
  if (process.env.GITHUB_PAGES === 'true') {
    // Vite가 이미 변환한 경로는 건드리지 않음
    // 하지만 public 폴더의 파일들(/vite.svg 등)은 변환되지 않을 수 있음
    
    // /vite.svg 같은 public 폴더 파일들 수정
    html = html.replace(/href="\/vite\.svg"/g, 'href="/Convi/vite.svg"');
    
    // 다른 public 폴더 파일들도 수정 (이미 /Convi/로 시작하지 않는 경우만)
    html = html.replace(/href="\/([^/"]+\.(svg|png|jpg|jpeg|gif|ico|webp))"/g, (match, filename) => {
      if (!match.includes('/Convi/')) {
        return `href="/Convi/${filename}"`;
      }
      return match;
    });
    
    // src 속성도 수정 (이미 /Convi/로 시작하지 않는 경우만)
    html = html.replace(/src="\/([^/"]+\.(svg|png|jpg|jpeg|gif|ico|webp))"/g, (match, filename) => {
      if (!match.includes('/Convi/')) {
        return `src="/Convi/${filename}"`;
      }
      return match;
    });
    
    // 이미 /Convi/로 시작하는 경우 중복 방지
    html = html.replace(/href="\/Convi\/Convi\//g, 'href="/Convi/');
    html = html.replace(/src="\/Convi\/Convi\//g, 'src="/Convi/');
    
    console.log('✅ HTML paths fixed for GitHub Pages');
  } else {
    console.log('ℹ️  Not GitHub Pages build, skipping path fix');
  }
  
  writeFileSync(distPath, html, 'utf-8');
} catch (error) {
  console.error('❌ Error fixing HTML paths:', error);
  process.exit(1);
}
