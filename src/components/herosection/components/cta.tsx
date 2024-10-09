import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <a
      href="https://docs.google.com/forms/d/1SH84bYoPLtizGYjBDFoIz_AwFjKmK1QJQGRWlsFfGVs/viewform?edit_requested=true"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-2xl text-white bg-sky-900 hover:bg-sky-800 transition-all cursor-pointer"
    >
      Inscreva-se aqui
      <ArrowRight size={18} />
    </a>
  )
}
