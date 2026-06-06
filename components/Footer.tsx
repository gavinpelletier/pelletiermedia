import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="container-shell pb-10 pt-6">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/60 pt-8 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Gavin Pelletier
        </p>
        <a
          href="https://github.com/gavinpelletier"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
      </div>
    </footer>
  );
}
