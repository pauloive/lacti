'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll(
      '.revelar, .revelar-esquerda, .revelar-direita'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
          }
        });
      },
      { threshold: 0.15 }
    );

    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
