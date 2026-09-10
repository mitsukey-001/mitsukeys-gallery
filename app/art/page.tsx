import Gallery from './gallery';
import { Footer, Header } from '../site-parts';

export default function Art() {
  return (
    <main className="sub-page">
      <Header />
      <section className="sub-title">
        <p>02 / ARTWORKS</p>
        <h1>描いた<br /><em>もの</em></h1>
        <span>ゲームのデザイン、イラスト、気ままに描いた絵をまとめています。</span>
      </section>
      <Gallery />
      <Footer />
    </main>
  );
}

