'use client';

import { useEffect, useState } from 'react';

const works = [
  '/art/art-01.webp',
  '/art/art-02.webp',
  '/art/art-03.webp',
  '/art/art-04.webp',
  '/art/art-05.webp',
  '/art/art-06.webp',
  '/art/art-07.webp',
  '/art/art-08.webp',
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [selected]);

  return (
    <>
      <section className="art-gallery" aria-label="イラスト一覧">
        {works.map((src, index) => (
          <button
            className="art-thumb"
            key={src}
            type="button"
            onClick={() => setSelected(index)}
            aria-label={`イラスト ${index + 1} を拡大表示`}
          >
            <img src={`/art/thumb-${String(index + 1).padStart(2, '0')}.webp`} alt={`イラスト ${index + 1}`} loading="lazy" />
            <span>{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </section>
      {selected !== null && (
        <div
          className="art-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`イラスト ${selected + 1} の全体表示`}
          onClick={() => setSelected(null)}
        >
          <button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="閉じる">
            閉じる　×
          </button>
          <img
            src={works[selected]}
            alt={`イラスト ${selected + 1} の全体図`}
            onClick={(event) => event.stopPropagation()}
          />
          <p>{String(selected + 1).padStart(2, '0')} / {String(works.length).padStart(2, '0')}</p>
        </div>
      )}
    </>
  );
}

