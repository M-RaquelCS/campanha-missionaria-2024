import { Download } from 'lucide-react'

import santinhoPaolo from '../../assets/archive_to_downloads/Santinho_Paolo.pdf'

export default function Downloads() {
  const downloadItems = [
    {
      id: 1,
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
            className="bg-sky-50/10 rounded-lg px-4 py-4 flex justify-between items-center mb-4"
          >
            {item.name}
            <button
              type="button"
              className="bg-sky-100/30 rounded-lg p-2"
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
