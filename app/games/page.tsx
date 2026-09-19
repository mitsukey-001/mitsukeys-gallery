import { Footer, Header } from '../site-parts';

export default function Games() {
  return <main className="sub-page"><Header/><section className="sub-title"><p>01 / GAMES</p><h1>つくった<br/><em>ゲーム</em></h1><span>遊んでもらうために作った、石ノ神みつきぃのゲーム一覧です。</span></section><section className="game-list">
    <article className="featured-game"><div className="shells-game-art"><span className="shell-one">◒</span><span className="shell-two">◓</span><b>SHELLS<br/>PAIR</b><i>♠</i><i>♥</i><i>♦</i></div><div><small>PLAYABLE / CARD GAME</small><h2>シェルズペア</h2><p>貝殻をモチーフにした、BGM付きのブラウザカードゲーム。サイト上ですぐに遊べます。</p><dl><div><dt>対応</dt><dd>ChromeなどのWebブラウザ</dd></div><div><dt>形式</dt><dd>ブラウザゲーム</dd></div></dl><div className="sub-actions"><a className="primary" href="/games/shells-pair/index.html">今すぐあそぶ <span>→</span></a><a href="/games/shells-pair/index.html" target="_blank" rel="noopener noreferrer">新しい画面で開く</a></div></div></article>
    <article className="prototype-game"><div className="prototype-art"><span>02</span><b>AEGIS</b><i>OUTPOST DEFENSE</i></div><div><small>PLAYABLE / 2D SHOOTING</small><h2>AEGIS</h2><p>迫り来る敵と弾から拠点を守る、PC向けの2D防衛シューティングです。機体と装備を選び、3つのWAVEとボスに挑みます。</p><p><strong>まだ開発段階です。1面しか実装されていません。</strong></p><dl><div><dt>対応</dt><dd>PCのWebブラウザ（スマートフォンでは遊べません）</dd></div><div><dt>操作方法</dt><dd>WASD：移動／Shift：低速移動／J：攻撃／K：シールド／L：スピリットバリア／I：EX／O：必殺技／E長押し：最終兵器取得／Q：分解／Esc：一時停止。標準ゲームパッドにも対応しています。</dd></div><div><dt>クリア条件</dt><dd>3つのWAVEを突破し、最後に出現するボスを倒す。</dd></div><div><dt>失敗条件</dt><dd>自機のHPまたは拠点耐久が0になる、もしくは作戦時間が10分を超える。</dd></div></dl><div className="sub-actions"><a className="primary" href="/games/aegis/index.html">今すぐあそぶ <span>→</span></a><a href="/games/aegis/index.html" target="_blank" rel="noopener noreferrer">新しい画面で開く</a></div></div></article>
  </section><Footer/></main>;
}

