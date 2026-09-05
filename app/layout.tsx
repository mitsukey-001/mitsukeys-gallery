import type { Metadata } from 'next';
import './globals.css';
import './extras.css';
import './portal.css';
import './subpages.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://starlight-secret-garden.mitsukii1220.chatgpt.site'),
  title: '石ノ神みつきぃ｜ゲーム・絵・漫画',
  description: '石ノ神みつきぃが制作したゲーム、イラスト、漫画をまとめた創作サイトです。',
  openGraph: { title: '石ノ神みつきぃ｜ゲーム・絵・漫画', description: 'つくったものを、ひとつの場所に。', images: [{ url: 'https://starlight-secret-garden.mitsukii1220.chatgpt.site/og.png', width: 1732, height: 909 }] },
  twitter: { card: 'summary_large_image', title: '石ノ神みつきぃ｜ゲーム・絵・漫画', description: 'つくったものを、ひとつの場所に。', images: ['https://starlight-secret-garden.mitsukii1220.chatgpt.site/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ja"><body>{children}</body></html>; }
