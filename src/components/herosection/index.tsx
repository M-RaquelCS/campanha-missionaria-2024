import { Menubar } from '../menubar'
import { CTA } from './components/cta'
import { ImagesHeroSection } from './components/imgs'
import { Leitura } from './components/leitura'

import cmLogo from '/CM.png'
import pomLogo from '/POM_Laranja.png'
import cnbbLogo from '/CNBB.png'
import paroquiaLogo from '/Paroquia.png'
import dioceseLogo from '/Diocese-nobg.png'

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

        <div className="flex flex-wrap justify-center items-start gap-1.5">
          <img
            src={cmLogo}
            alt="Logo da Campanha Missionária"
            className="h-14 shadow-md bg-contain rounded-md"
          />
          <img
            src={pomLogo}
            alt="Logo da POM"
            className="h-14 bg-white rounded-md shadow-md"
          />
          <img
            src={cnbbLogo}
            alt="Logo da CNBB"
            className="h-14 bg-white rounded-md shadow-md"
          />
          <img
            src={dioceseLogo}
            alt="Logo da CNBB"
            className="h-14 bg-white rounded-md shadow-md"
          />
          <img
            src={paroquiaLogo}
            alt="Logo da Paróquia São Pedro e São Paulo Apóstolos"
            className="h-14 bg-white rounded-md shadow-md"
          />
        </div>
      </div>

      <ImagesHeroSection />
    </section>
  )
}
