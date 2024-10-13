import {
  Clock,
  Clock10,
  Clock11,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  MapPin,
} from 'lucide-react'
import { Menubar } from '../components/menubar'

export function Schedule() {
  return (
    <>
      <Menubar />
      <header>
        <h1 className=" text-3xl font-light">
          Programação - Semana das Missões
        </h1>
        <p className="font-light">Acompanhe nosso calendário de eventos</p>
      </header>

      <section className="flex flex-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[15%_85%] gap-2 p-4 border rounded-xl mt-4 w-full ">
          <div className="lg:border-e-2 lg:border-b-0 border-b-2 pe-3 text-center">
            <p className="text-gray-700 whitespace-nowrap">Domingo</p>
            <strong className="text-3xl">20/10</strong>
          </div>

          <div className="px-3">
            <h5 className="text-xl">Abertura</h5>
            <ul className="flex flex-col gap-4">
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start lg:gap-12 border-b pb-2">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    07:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>

                <span className="font-semibold text-wrap">
                  Santa Missa - transmitida pela Rádio 104,9 FM
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock8 size={18} color="#FFFF" fill="#6b7280" />
                    08:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold text-wrap">Acolhida</span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock9 size={18} color="#FFFF" fill="#6b7280" />
                    09:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Missa de Abertura (Envio)
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock10 size={18} color="#FFFF" fill="#6b7280" />
                    10:30
                  </span>
                  {/* <span className="flex items-center gap-1">
                  <MapPin size={20} color="#FFFF" fill="#6b7280" />
                  Matriz São Pedro e São Paulo
                </span> */}
                </div>
                <span className="font-semibold text-wrap">
                  Lanche e alinhamento <br /> Almoço nas casas onde os
                  missionários serão acolhidos
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock2 size={18} color="#FFFF" fill="#6b7280" />
                    14:00
                  </span>
                  {/* <span className="flex items-center gap-1">
                  <MapPin size={20} color="#FFFF" fill="#6b7280" />
                  Matriz São Pedro e São Paulo
                </span> */}
                </div>
                <span className="font-semibold text-wrap">
                  Tarde de Louvor com a Juventude
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock5 size={18} color="#FFFF" fill="#6b7280" />
                    17:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidade de Tereza Mendonça
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidade da Barragem
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidade do Maria Cristina
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Celebração da Palavra e/ou Missa de acolhida
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    19:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Celebração de Acolhida
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[15%_85%] gap-2 p-4 border rounded-xl mt-4 w-full ">
          <div className="lg:border-e-2 lg:border-b-0 border-b-2 pe-3 text-center">
            <p className="text-gray-700 whitespace-nowrap">Segunda-feira</p>
            <strong className="text-3xl">21/10</strong>
          </div>
          <div className="px-3">
            {/* <h5 className="text-xl">Abertura</h5> */}
            <ul className=" flex flex-col gap-4">
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start lg:gap-12 border-b pb-2">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    07:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Oração, benção de envio e café
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  {/* <span className="flex items-center gap-1">
                    <Clock8 size={18} color="#FFFF" fill="#6b7280" />
                    08:00
                  </span> */}
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Hospitais Júlio Alves de Lira e Santa Fé
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Benção da Saúde: Visita aos Hospitais Júlio Alves de Lira e
                  Santa Fé
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  {/* <span className="flex items-center gap-1">
                    <Clock9 size={18} color="#FFFF" fill="#6b7280" />
                    09:00
                  </span> */}
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Colégio Diocesano e demais Colégios católicos particulares
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Visita no Colégio Diocesano e demais Colégios particulares
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    19:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório e Comunidades Urbanas
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Missa ou Celebração da Palavra com Benção das Famílias
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[15%_85%] gap-2 p-4 border rounded-xl mt-4 w-full ">
          <div className="lg:border-e-2 lg:border-b-0 border-b-2 pe-3 text-center">
            <p className="text-gray-700 whitespace-nowrap">Terça-feira</p>
            <strong className="text-3xl">22/10</strong>
          </div>
          <div className="px-3">
            {/* <h5 className="text-xl">Abertura</h5> */}
            <ul className=" flex flex-col gap-4">
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start lg:gap-12 border-b pb-2">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    07:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold">
                  Oração, benção de envio e café
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock size={18} color="#FFFF" fill="#6b7280" />
                    Durante o dia
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidades Urbanas
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Porta a porta em todas as Comunidades Urbanas <br /> com
                  Benção das Casas
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    19:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório e Comunidades Urbanas
                  </span>
                </div>
                <span className="font-semibold">
                  Missa ou Celebração da Palavra
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[15%_85%] gap-2 p-4 border rounded-xl mt-4 w-full ">
          <div className="lg:border-e-2 lg:border-b-0 border-b-2 pe-3 text-center">
            <p className="text-gray-700 whitespace-nowrap">Quarta-feira</p>
            <strong className="text-3xl">23/10</strong>
          </div>
          <div className="px-3">
            {/* <h5 className="text-xl">Abertura</h5> */}
            <ul className=" flex flex-col gap-4">
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start lg:gap-12 border-b pb-2">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    07:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold">
                  Oração, benção de envio e café
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock8 size={18} color="#FFFF" fill="#6b7280" />
                    08:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold">Mutirão de Confissões</span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start pb-2 lg:gap-12 border-b">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock size={18} color="#FFFF" fill="#6b7280" />
                    Durante o dia
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Escolas Públicas e demais instituições
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Visita às Escolas Públicas e demais instituições
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start pb-2 lg:gap-12 border-b">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    19:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório do São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Missa e Benção da Saúde
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock8 size={18} color="#FFFF" fill="#6b7280" />
                    20:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Celebração Penitencial
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[15%_85%] gap-2 p-4 border rounded-xl mt-4 w-full ">
          <div className="lg:border-e-2 lg:border-b-0 border-b-2 pe-3 text-center">
            <p className="text-gray-700 whitespace-nowrap">Quinta-feira</p>
            <strong className="text-3xl">24/10</strong>
          </div>
          <div className="px-3">
            {/* <h5 className="text-xl">Abertura</h5> */}
            <ul className=" flex flex-col gap-4">
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start lg:gap-12 border-b pb-2">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    07:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold">Santa Missa</span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock size={18} color="#FFFF" fill="#6b7280" />
                    Durante todo o dia logo após a Santa Missa
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold">Adoração</span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock size={18} color="#FFFF" fill="#6b7280" />
                    Durante todo o dia
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidades Rurais
                  </span>
                </div>
                <span className="font-semibold text-wrap">Hora Santa</span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock3 size={18} color="#FFFF" fill="#6b7280" />
                    15:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidades Rurais
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Celebração da Misericórdia e Envio dos Missionários
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  {/* <span className="flex items-center gap-1">
                    <Clock8 size={18} color="#FFFF" fill="#6b7280" />
                    20:00
                  </span> */}
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidades Rurais
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Inicio das atividades Missionárias
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    19:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório São Pedro e São Paulo
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidades Rurais
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Missa ou Celebração da Palavra
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[15%_85%] gap-2 p-4 border rounded-xl mt-4 w-full ">
          <div className="lg:border-e-2 lg:border-b-0 border-b-2 pe-3 text-center">
            <p className="text-gray-700 whitespace-nowrap">Sexta-feira</p>
            <strong className="text-3xl">25/10</strong>
          </div>
          <div className="px-3">
            {/* <h5 className="text-xl">Abertura</h5> */}
            <ul className=" flex flex-col gap-4">
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start lg:gap-12 border-b pb-2">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    07:00
                  </span>
                  {/* <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório São Pedro e São Paulo
                  </span> */}
                </div>
                <span className="font-semibold">
                  Oração, benção de envio e café
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock8 size={18} color="#FFFF" fill="#6b7280" />
                    08:00
                  </span>
                  {/* <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório São Pedro e São Paulo
                  </span> */}
                </div>
                <span className="font-semibold">Visitas aos enfermos</span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock4 size={18} color="#FFFF" fill="#6b7280" />
                    16:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Unção dos Enfermos
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    19:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidades Rurais
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Missa ou Celebração da Palavra
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  {/* <span className="flex items-center gap-1">
                    <Clock8 size={18} color="#FFFF" fill="#6b7280" />
                    20:00
                  </span> */}
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidades Rurais
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Inicio das atividades Missionárias
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    19:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório São Pedro e São Paulo
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidades Urbanas
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidades Rurais
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Missa ou Celebração da Palavra
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock8 size={18} color="#FFFF" fill="#6b7280" />
                    20:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Celebração penitencial para Casais
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[15%_85%] gap-2 p-4 border rounded-xl mt-4 w-full ">
          <div className="lg:border-e-2 lg:border-b-0 border-b-2 pe-3 text-center">
            <p className="text-gray-700 whitespace-nowrap">Sábado</p>
            <strong className="text-3xl">26/10</strong>
          </div>
          <div className="px-3">
            {/* <h5 className="text-xl">Abertura</h5> */}
            <ul className=" flex flex-col gap-4">
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start lg:gap-12 border-b pb-2">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock6 size={18} color="#FFFF" fill="#6b7280" />
                    06:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold">
                  Ofício da Imaculada Conceição
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    07:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold">
                  Oração e envio para os feirantes
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock11 size={18} color="#FFFF" fill="#6b7280" />
                    11:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Oratório São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Missa com os feirantes
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock2 size={18} color="#FFFF" fill="#6b7280" />
                    14:30
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Encontro com a IAM e Catequese
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock4 size={18} color="#FFFF" fill="#6b7280" />
                    17:00
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Missa e Festa das Crianças
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    19:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Comunidades Urbanas
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Missa ou Celebração da Palavra
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock10 size={18} color="#FFFF" fill="#6b7280" />
                    20:00 às 23:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Quadra do Diocesano
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Vigília com a Juventude - Ton Lima RCC Arcoverde
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[15%_85%] gap-2 p-4 border rounded-xl mt-4 w-full ">
          <div className="lg:border-e-2 lg:border-b-0 border-b-2 pe-3 text-center">
            <p className="text-gray-700 whitespace-nowrap">Domingo</p>
            <strong className="text-3xl">27/10</strong>
          </div>
          <div className="px-3">
            <h5 className="text-xl">Encerramento</h5>
            <ul className=" flex flex-col gap-4">
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start lg:gap-12 border-b pb-2">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock7 size={18} color="#FFFF" fill="#6b7280" />
                    07:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold">
                  Santa Missa - transmitida pela Rádio 104,9 FM
                </span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start border-b pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock9 size={18} color="#FFFF" fill="#6b7280" />
                    09:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={20} color="#FFFF" fill="#6b7280" />
                    Matriz São Pedro e São Paulo
                  </span>
                </div>
                <span className="font-semibold">Santa Missa</span>
              </li>
              <li className="grid grid-cols-1 lg:grid-cols-[35%_65%] lg:items-start pb-2 lg:gap-12">
                <div>
                  <span className="flex items-center gap-1">
                    <Clock8 size={18} color="#FFFF" fill="#6b7280" />
                    08:30 às 16:30
                  </span>
                </div>
                <span className="font-semibold text-wrap">
                  Encontrão Missionário (Palestras e Oficinas com todos os
                  Grupos e Movimentos, Hora Santa e Santa Missa <br /> com
                  Conclusão da Missão)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
