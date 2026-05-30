'use client';

import { useState, useEffect, useRef } from 'react';

export default function ContadorAnimado({ valor, sufixo = '', duracao = 1800 }) {
  const [atual, setAtual] = useState(0);
  const ref = useRef(null);
  const iniciado = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !iniciado.current) {
          iniciado.current = true;
          const inicio = performance.now();
          const animar = (agora) => {
            const progresso = Math.min((agora - inicio) / duracao, 1);
            const easing = 1 - Math.pow(1 - progresso, 3);
            setAtual(Math.floor(easing * valor));
            if (progresso < 1) requestAnimationFrame(animar);
            else setAtual(valor);
          };
          requestAnimationFrame(animar);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [valor, duracao]);

  return (
    <span ref={ref}>
      {atual}<span style={{ color: 'var(--cor-dourado)' }}>{sufixo}</span>
    </span>
  );
}
