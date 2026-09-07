const banners = [
  { href: '/games', no: '01', en: 'GAMES', title: 'ゲーム', copy: 'ゲームの紹介・購入・ブラウザプレイ', cls: 'portal-games', mark: '▲' },
  { href: '/art', no: '02', en: 'ARTWORKS', title: '絵', copy: 'イラスト・キャラクター・デザイン', cls: 'portal-art', mark: '●' },
  { href: '/comic', no: '03', en: 'COMICS', title: '漫画', copy: 'オリジナル漫画と制作中のお話', cls: 'portal-comic', mark: '□' },
];

export default function Home() {
  return <main className="portal">
    <header className="portal-header">
      <a className="mitsukii-logo" href="/"><b>石ノ神</b>みつきぃ<small>ISHINOGAMI MITSUKII</small></a>
      <nav><a href="/games">GAME</a><a href="/art">ART</a><a href="/comic">COMIC</a></nav>
      <a className="contact-pill" href="#about">ABOUT</a>
    </header>
    <section className="portal-hero">
      <div><p className="portal-kicker">GAMES, ILLUSTRATIONS & COMICS</p><h1>つくったものを、<br/><em>ひとつの場所に。</em></h1><p>石ノ神みつきぃのゲームと絵と漫画。<br/>遊んだり、眺めたり、のんびりどうぞ。</p></div>
      <div className="creator-art"><span className="big-sun"/><span className="creator-head"/><span className="creator-body"/><i className="spark p1">✦</i><i className="spark p2">✦</i><i className="spark p3">✦</i><strong>MITSUKII<br/>WORKS</strong></div>
    </section>
    <section className="portal-menu" aria-label="作品カテゴリー">{banners.map(b => <a key={b.href} href={b.href} className={`portal-banner ${b.cls}`}><span className="banner-no">{b.no}</span><div className="banner-visual"><i>{b.mark}</i><span/><b/></div><div className="banner-copy"><small>{b.en}</small><h2>{b.title}</h2><p>{b.copy}</p></div><span className="banner-arrow">↗</span></a>)}</section>
    <section className="portal-about" id="about"><p>ABOUT THE CREATOR</p><h2>石ノ神みつきぃ</h2><div><p>個人でゲームを作ったり、絵や漫画を描いたりしています。物語のあるもの、少し不思議で温かい世界が好きです。</p><a href="#">X / TWITTER　↗</a></div></section>
    <footer className="portal-footer"><a className="mitsukii-logo" href="/"><b>石ノ神</b>みつきぃ</a><span>GAMES / ILLUSTRATIONS / COMICS</span><small>© 2026 ISHINOGAMI MITSUKII</small></footer>
  </main>;
}
