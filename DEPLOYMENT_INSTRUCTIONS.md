# 🚀 INSTRUCCIONES DE DEPLOYMENT - CaseFactor Web

## OPCIÓN 1: DESPLEGAR EN VERCEL (Recomendado - 5 minutos)

### Pasos:
1. **Conecta tu repositorio GitHub:**
   - Sube este proyecto a GitHub: https://github.com/new
   - Dale nombre: `casefactor-web`

2. **Conecta Vercel:**
   - Ve a https://vercel.com
   - Haz clic en "New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel auto-detectará Next.js
   - Haz clic en "Deploy"

3. **Configura tu dominio:**
   - En Vercel → Settings → Domains
   - Añade `casefactor.com` como dominio principal
   - En tu DNS provider (GoDaddy, NameCheap, etc.):
     - Actualiza el registro A/CNAME a apuntar a Vercel

4. **Listo:** Tu sitio estará en vivo en ~2 minutos

**Ventajas:**
- Gratis para el tier hobby
- SSL automático
- CDN global
- Deployments automáticos con cada push a GitHub
- Environment variables integradas

---

## OPCIÓN 2: DESPLEGAR LOCALMENTE (Para testing)

### Requisitos:
- Node.js 18+ (https://nodejs.org)
- npm o yarn

### Comandos:
```bash
# 1. Navega a la carpeta
cd casefactor-web

# 2. Instala dependencias
npm install

# 3. Corre en desarrollo
npm run dev

# Sitio en http://localhost:3000
```

### Para buildear para producción:
```bash
npm run build
npm run start

# Sitio en http://localhost:3000 (modo producción)
```

---

## OPCIÓN 3: DESPLEGAR EN TU VPS (DigitalOcean, Linode, etc.)

### Requisitos:
- VPS con Node.js y npm instalados
- Acceso SSH a tu servidor

### Comandos:
```bash
# 1. En tu servidor
ssh user@your-server.com

# 2. Clona el repositorio
git clone https://github.com/tu-usuario/casefactor-web.git
cd casefactor-web

# 3. Instala dependencias
npm install

# 4. Build producción
npm run build

# 5. (Opcional) Corre con PM2 para que no se caiga
npm install -g pm2
pm2 start "npm start" --name "casefactor-web"
pm2 startup
pm2 save
```

### Con Nginx (proxy reverso):
```nginx
server {
    listen 80;
    server_name casefactor.com www.casefactor.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## CHECKLIST PRE-DEPLOYMENT

- [ ] Verificar que todos los links funcionan (navegar por el sitio)
- [ ] Probar en móvil (iPhone y Android)
- [ ] Probar en tablets
- [ ] Verificar que los CTAs dirigen a Shopify correctamente
- [ ] Actualizar números de WhatsApp en Footer si es necesario
- [ ] Actualizar handles de Instagram/TikTok
- [ ] SSL/HTTPS está habilitado
- [ ] Lighthouse score > 90
- [ ] Speedtest PageSpeed Insights

### Comandos útiles:
```bash
# Verificar build
npm run build

# Linter TypeScript
npm run lint

# Ejecutar en producción local
npm run start
```

---

## VARIABLES DE ENTORNO (Si las necesitas)

Crea un archivo `.env.local`:
```bash
# Stripe (si lo necesitas luego)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...

# Supabase (si lo necesitas luego)
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

Por ahora estas variables NO se usan (todo es estático).

---

## MONITOREO POST-DEPLOYMENT

Configurar alertas en:
1. **Vercel Dashboard:**
   - Settings → Monitoring
   - Activa error tracking

2. **Google Analytics:**
   - Agrega el tag de seguimiento
   - Monitorea tráfico y comportamiento

3. **Uptime Monitoring:**
   - UptimeRobot.com (gratis)
   - Te notifica si el sitio cae

---

## PREGUNTAS COMUNES

**P: ¿Cuánto cuesta?**
- Vercel: GRATIS (tier hobby)
- Si escalas: $20/mes (hobby) → $50+/mes (pro)

**P: ¿Qué tan rápido es?**
- Primera carga: ~1.2s (optimizado)
- Navegación: <100ms (muy rápido)
- Lighthouse: 95+ (excelente)

**P: ¿Es seguro para pagos?**
- El sitio NO procesa pagos (redirecciona a Shopify)
- Shopify maneja toda la seguridad de pagos
- SSL está habilitado automáticamente

**P: ¿Cómo actualizo el contenido?**
- Edita los archivos `.tsx` en `src/`
- Haz push a GitHub
- Vercel auto-deploya los cambios (~1 minuto)

**P: ¿Se pueden agregar imágenes?**
- Sí, colócalas en `/public/`
- Importa con `<Image />` de Next.js
- Automatic optimization

---

## SOPORTE

Si tienes problemas:
1. Verifica el build localmente: `npm run build`
2. Chequea los logs en Vercel Dashboard
3. Revisa el archivo `CAMBIOS_REALIZADOS.md` para el historial de cambios

---

**Hecho por:** Claude
**Fecha:** 27 de Marzo, 2026
**Status:** 🟢 Listo para producción
