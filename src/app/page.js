import Hero from '@/components/Hero';
import ValoresBarra from '@/components/ValoresBarra';
import SobreNos from '@/components/SobreNos';
import Produtos from '@/components/Produtos';
import Localizacao from '@/components/Localizacao';

export default function Home() {
  return (
    <>
      <Hero />
      <ValoresBarra />
      <SobreNos />
      <Produtos />
      <Localizacao />
    </>
  );
}
