'use client';

import { useEffect, useRef, useState } from 'react';

type ComicReaderProps = { title: string; pages: string[]; thumbnail: string };

export function ComicReader({ title, pages, thumbnail }: ComicReaderProps) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const openReader = () => { setPage(0); setOpen(true); };
  const closeReader = () => setOpen(false);
  const nextPage = () => {
    if (page < pages.length - 1) { setPage(current => current + 1); return; }
    if (window.confirm('最後のページです。ウインドウを閉じますか？')) closeReader();
  };
  const previousPage = () => setPage(current => Math.max(0, current - 1));

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeReader();
      if (event.key === 'ArrowLeft') nextPage();
      if (event.key === 'ArrowRight') previousPage();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = originalOverflow; window.removeEventListener('keydown', onKeyDown); };
  }, [open, page]);

  return <>
    <button className="comic-launch comic-launch-cover" type="button" onClick={openReader} aria-label={`${title}を読む`}>
      <img src={thumbnail} alt={`${title}のサムネイル`} />
      <span>クリックして読む</span>
    </button>
    <div className="comic-entry-copy">
      <small>TRIAL READING / 19 PAGES</small>
      <button className="comic-launch comic-launch-title" type="button" onClick={openReader}>{title}</button>
      <p>多次元世界から集まったエンターテイナーたちをプロデュースする、TCG企画のお試し掲載です。</p>
      <button className="primary comic-read-button" type="button" onClick={openReader}>ウインドウで読む <span>→</span></button>
    </div>
    {open && <div className="comic-reader" role="dialog" aria-modal="true" aria-label={`${title} 閲覧ウインドウ`}>
      <header><strong>{title}</strong><span>{page + 1} / {pages.length}</span><button type="button" onClick={closeReader} aria-label="閲覧ウインドウを閉じる">閉じる ×</button></header>
      <div className="comic-reader-stage"
        onTouchStart={event => { touchStartX.current = event.changedTouches[0].clientX; }}
        onTouchEnd={event => {
          if (touchStartX.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (distance > 55) nextPage(); else if (distance < -55) previousPage();
        }}>
        <img src={pages[page]} alt={`${title} ${page + 1}ページ目`} draggable={false} />
        <button className="comic-page-zone comic-next-zone" type="button" onClick={nextPage} aria-label="次のページへ"><span>次へ</span></button>
        <button className="comic-page-zone comic-prev-zone" type="button" onClick={previousPage} disabled={page === 0} aria-label="前のページへ"><span>前へ</span></button>
      </div>
      <p className="comic-reader-guide">左側をクリック、または左から右へフリックで次のページ</p>
    </div>}
  </>;
}

