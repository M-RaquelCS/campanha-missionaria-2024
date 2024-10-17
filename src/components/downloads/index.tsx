import { Download } from 'lucide-react'

import santinhoPaolo from '../../assets/archive_to_downloads/Santinho_Paolo.pdf'
import roteiroVisitaMissionaria from '../../assets/archive_to_downloads/roteiro_visita.pdf'
import roteiroVisitaMissionariaEscolas from '../../assets/archive_to_downloads/roteiro_visita_escolas.pdf'
import roteiroVisitaMissionariaIAM from '../../assets/archive_to_downloads/IAM.pdf'

export default function Downloads() {
  const downloadItems = [
    {
      id: 1,
      name: 'Roteiro de Visita Missionária',
      file: roteiroVisitaMissionaria,
    },
    {
      id: 2,
      name: 'Roteiro de Visita Missionária nas Escolas católicas',
      file: roteiroVisitaMissionariaEscolas,
    },
    {
      id: 3,
      name: 'Roteiro de Visita Missionária com a IAM',
      file: roteiroVisitaMissionariaIAM,
    },
    {
      id: 4,
      name: 'Santinho Paolo Manna',
      file: santinhoPaolo,
    },
  ]
  async function handleDownloadArchive(file: string, fileName: string) {
    const link = document.createElement('a')
    link.href = file
    link.download = fileName
    link.click()
  }

  return (
    <section id="downloads">
      <h2 className="text-3xl mb-6 mt-8">Downloads</h2>
      <ul>
        {downloadItems.map((item, _) => (
          <li
            key={item.id} // Use the unique property of the item as the key
            className="bg-sky-500/10 rounded-lg px-4 py-4 font-medium flex justify-between items-center mb-4"
          >
            {item.name}
            <button
              type="button"
              className="bg-sky-500/20 rounded-lg p-2"
              onClick={() =>
                handleDownloadArchive(item.file, `${item.name}.pdf`)
              }
            >
              <Download />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
