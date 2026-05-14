import { FlaskConical } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <FlaskConical className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">
              Carlos Alberto Orozco Castaño
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Investigador Asociado · Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
