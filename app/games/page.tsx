import { Footer, Header } from '../site-parts';

export default function Games() {
  return <main className="sub-page"><Header/><section className="sub-title"><p>01 / GAMES</p><h1>つくった<br/><em>ゲーム</em></h1><span>遊んでもらうために作った、石ノ神みつきぃのゲーム一覧です。</span></section><section className="game-list">
    <article className="featured-game"><div className="shells-game-art"><span className="shell-one">◒</span><span className="shell-two">◓</span><b>SHELLS<br/>PAIR</b><i>♠</i><i>♥</i><i>♦</i></div><div><small>PLAYABLE / CARD GAME</small><h2>シェルズペア</h2><p>貝殻をモチーフにした、BGM付きのブラウザカードゲーム。サイト上ですぐに遊べます。</p><dl><div><dt>対応</dt><dd>ChromeなどのWebブラウザ</dd></div><div><dt>形式</dt><dd>ブラウザゲーム</dd></div></dl><div className="sub-actions"><a className="primary" href="/games/shells-pair/index.html">今すぐあそぶ <span>→</span></a><a href="/games/shells-pair/index.html" target="_blank" rel="noopener noreferrer">新しい画面で開く</a></div></div></article>
    <article className="prototype-game"><div className="prototype-art"><span>02</span><b>PROTOTYPE</b><i>UNITY WEBGL</i></div><div><small>PLAYABLE / PROTOTYPE</small><h2>試作ゲーム</h2><p>Unityで制作した試作ゲームです。ブラウザからそのまま遊べます。</p><dl><div><dt>対応</dt><dd>PCのWebブラウザ</dd></div><div><dt>形式</dt><dd>Unity WebGL</dd></div></dl><div className="sub-actions"><a className="primary" href="/games/prototype/index.html">今すぐあそぶ <span>→</span></a><a href="/games/prototype/index.html" target="_blank" rel="noopener noreferrer">新しい画面で開く</a></div></div></article>
  </section><Footer/></main>;
}
