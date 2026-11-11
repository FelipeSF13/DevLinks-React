import { MoonStars } from '@phosphor-icons/react'
import { links, socials } from './data/links'
import './App.css'

function App() {
  return (
    <main className="page">
      <section className="content" aria-label="Perfil e links">
        <header className="profile">
          {/* Provisório: o avatar original do Figma ainda não foi fornecido. */}
          <div className="avatar" aria-label="Avatar pendente" role="img" />
          <p>@seu.perfil</p>
        </header>

        <div className="theme-toggle" aria-label="Tema escuro ativo">
          <span className="theme-icon"><MoonStars size={16} aria-hidden="true" /></span>
        </div>

        <ul className="links" aria-label="Links">
          {links.map((link) => (
            <li key={link.label}>
              <span className="link" aria-disabled="true">{link.label}</span>
            </li>
          ))}
        </ul>

        <nav className="socials" aria-label="Redes sociais">
          {socials.map((social) => (
            <span className="social" key={social.label} aria-label={`${social.label}: endereço pendente`}>
              <span className="social-icon" style={{ maskImage: `url("${social.icon}")` }} aria-hidden="true" />
            </span>
          ))}
        </nav>

        <footer>Feito com ♥ pela/por</footer>
      </section>
    </main>
  )
}

export default App
