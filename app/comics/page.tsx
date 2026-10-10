import { Footer, Header } from '../site-parts';
import { ComicReader } from './reader';

const pages = Array.from({ length: 19 }, (_, index) =>
  `/comics/multidimensional-entertainer-tcg/page-${String(index + 1).padStart(2, '0')}.jpg`,
);

export default function ComicsPage() {
  return <main className="sub-page comic-library">
    <Header />
    <section className="sub-title comic-title">
      <p>03 / COMICS</p>
      <h1>描いた漫画を、<br/><em>読む。</em></h1>
      <span>タイトルまたはサムネイルを選ぶと、閲覧ウインドウが開きます。</span>
    </section>
    <section className="comic-shelf" aria-label="漫画作品一覧">
      <article className="comic-entry">
        <ComicReader title="多次元エンターテイナーTCG" pages={pages} thumbnail={pages[0]} />
      </article>
    </section>
    <Footer />
  </main>;
}

