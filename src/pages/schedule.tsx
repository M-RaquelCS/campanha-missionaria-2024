import { Clock7 } from 'lucide-react'
import { Menubar } from '../components/menubar'

export default function Schedule() {
  return (
    <>
      <Menubar />
      <header>
        <h1 className=" text-3xl font-light">
          Programação - Semana das Missões
        </h1>
        <p className="font-light">Acompanhe nosso calendário de eventos</p>
      </header>

      <div className="flex gap-2 p-4 border rounded-xl ">
        <div className="border-e-2 pe-2">
          <p className="text-center text-gray-700">Domingo</p>
          <strong className="text-3xl">20/10</strong>
        </div>
        <div>
          <p className=" text-gray-700">Abertura</p>
          <ul className=" flex flex-col gap-2.5">
            <li className="flex flex-col lg:flex-row lg:items-center justify-center lg:gap-2">
              <strong className="flex items-center gap-1">
                <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                07:00 -
              </strong>
              Santa Missa Matriz São Pedro e São Paulo transmitida pela Rádio
              104,9 FM{' '}
            </li>
            <li>08h Acolhida</li>
            <li>09h Missa de Abertura (Envio)</li>
            <li>
              10h30 Lanche e alinhamento Almoço nas casas onde os missionários
              serão acolhidos
            </li>
            <li>14h Tarde de Louvor com a Juventude</li>
            <li>
              17h Celebração da Palavra e/ou Missa de acolhida na Comunidade de
              Tereza Mendonça
            </li>
            <li>
              17h Celebração da Palavra e/ou Missa na Comunidade da Barragem
            </li>
            <li>
              17h Celebração da Palavra e/ou Missa na Comunidade Maria Cristina
            </li>
            <li>19h Celebração de Acolhida - Matriz</li>
          </ul>
        </div>
      </div>
    </>
  )
}
