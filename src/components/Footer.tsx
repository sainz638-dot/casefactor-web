export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/8 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                <span className="font-display font-bold text-brand-gold text-lg">CF</span>
              </div>
              <p className="font-display font-bold text-white text-sm tracking-[0.2em]">CASE FACTOR</p>
            </div>
            <p className="text-sm text-white/30 leading-relaxed">
              Productos personalizados premium, fabricados bajo demanda en México.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://wa.me/528000000000" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-green-400 hover:border-green-400/30 hover:bg-green-400/5 transition-all">
                <i className="fa-brands fa-whatsapp text-sm" />
              </a>
              <a href="https://instagram.com/casefactor" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-400/5 transition-all">
                <i className="fa-brands fa-instagram text-sm" />
              </a>
              <a href="https://tiktok.com/@casefactor" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                <i className="fa-brands fa-tiktok text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-brand-gold/60 uppercase tracking-wider mb-4">Productos</h4>
            <ul className="space-y-3">
              <li><a href="#productos" className="text-sm text-white/30 hover:text-brand-gold transition">Fundas Premium</a></li>
              <li><a href="#productos" className="text-sm text-white/30 hover:text-brand-gold transition">Fundas Tough</a></li>
              <li><a href="#productos" className="text-sm text-white/30 hover:text-brand-gold transition">Lenticular 3D</a></li>
              <li><a href="/catalogo" className="text-sm text-white/30 hover:text-brand-gold transition">Ver Catálogo Completo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-gold/60 uppercase tracking-wider mb-4">Ecosistema</h4>
            <ul className="space-y-3">
              <li><a href="/como-trabajamos" className="text-sm text-white/30 hover:text-brand-gold transition">Como Trabajamos</a></li>
              <li><a href="/artistas" className="text-sm text-white/30 hover:text-purple-400 transition">Para Artistas</a></li>
              <li><a href="/creadores" className="text-sm text-white/30 hover:text-green-400 transition">Para Creadores</a></li>
              <li><a href="/vendedores" className="text-sm text-white/30 hover:text-cyan-400 transition">Para Vendedores</a></li>
              <li><a href="/proveedores" className="text-sm text-white/30 hover:text-amber-400 transition">Para Proveedores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-gold/60 uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/528000000000" target="_blank" rel="noopener noreferrer"
                   className="text-sm text-white/30 hover:text-green-400 transition flex items-center gap-2">
                  <i className="fa-brands fa-whatsapp text-green-400" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hola@case-factor.com"
                   className="text-sm text-white/30 hover:text-brand-gold transition flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-brand-gold text-xs" /> hola@case-factor.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/casefactor" target="_blank" rel="noopener noreferrer"
                   className="text-sm text-white/30 hover:text-pink-400 transition flex items-center gap-2">
                  <i className="fa-brands fa-instagram text-pink-400 text-xs" /> @casefactor
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Case Factor. Hecho en México.</p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-white/15">Pagos seguros con</span>
            <div className="flex items-center gap-2">
              {['fa-cc-visa', 'fa-cc-mastercard', 'fa-cc-amex'].map(icon => (
                <i key={icon} className={`fa-brands ${icon} text-white/20 text-lg`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
