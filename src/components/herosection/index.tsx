import { Menubar } from '../menubar'
import { CTA } from './components/cta'
import { ImagesHeroSection } from './components/imgs'
import { Leitura } from './components/leitura'

export function HeroSection() {
  return (
    <section>
      <Menubar />

      <div className="flex max-md:flex-col max-md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-light text-center max-w-[230px]">
          IDE, CONVIDAI A TODOS PARA O BANQUETE
        </h1>
        <Leitura />
        <p className="font-light text-center">
          Com a força do Espírito, testemunhas de Cristo
        </p>
        <CTA />

        <div className="flex items-start gap-1.5">
          <div className="w-20 h-20 bg-zinc-500 rounded-md" />
          <div className="w-20 h-20 bg-zinc-500 rounded-md" />
          <div className="w-20 h-20 bg-zinc-500 rounded-md" />
          <div className="w-20 h-20 bg-zinc-500 rounded-md" />
        </div>
      </div>

      <ImagesHeroSection />
    </section>
  )
}
