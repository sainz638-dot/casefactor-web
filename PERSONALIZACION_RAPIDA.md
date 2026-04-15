# ⚡ PERSONALIZACIÓN RÁPIDA

Si quieres cambiar números, links o textos rápidamente, aquí están todos los lugares:

---

## 📞 CONTACTO (Footer + Enlaces)

**Archivo:** `src/components/Footer.tsx`

Busca y reemplaza:
```
528000000000 → Tu número de WhatsApp
hola@case-factor.com → Tu email
https://instagram.com/casefactor → Tu Instagram
https://tiktok.com/@casefactor → Tu TikTok
```

---

## 🏢 NOMBRE Y BRANDING

**Archivo:** `src/components/Navbar.tsx` y `src/components/Footer.tsx`

Reemplaza:
```
CASE FACTOR → Tu nombre de marca
CF → Tu sigla (si quieres)
```

---

## 📝 TEXTOS PRINCIPALES

### Hero (Primera pantalla)
**Archivo:** `src/components/HeroSection.tsx`

Líneas a cambiar:
- Línea 116: Título principal
- Línea 125: Descripción
- Línea 111: Badge "Envío a Todo México"

### Productos
**Archivo:** `src/lib/products.ts`

Cambiar nombres, precios, descripciones de productos

### Secciones
- **HowItWorks.tsx** - Los 4 pasos
- **ProductsSection.tsx** - Texto de introducción
- **ShowcaseSection.tsx** - Stats (2,847+, 4.9/5, etc.)
- **SocialProof.tsx** - Reviews de clientes

---

## 🎨 COLORES

**Archivo:** `tailwind.config.ts` y `src/app/globals.css`

```css
--brand-cyan: #00DBFF  → Tu color principal
--brand-green: #00E676 → Tu color secundario
--brand-dark: #050A14  → Fondo oscuro
--brand-purple: #A855F7 → Acentos
--brand-orange: #FF9100
--brand-red: #FF3B5C
```

---

## 🔗 LINKS EXTERNOS

**Shopify checkout:** `src/components/EditorSection.tsx`

Línea 5:
```javascript
const BASE_URL = 'https://dashboard.case-factor.com/disenador-publico'
```

Reemplaza con tu URL de editor real.

---

## 📊 ESTADÍSTICAS (Stats)

**Archivo:** `src/components/ShowcaseSection.tsx`

Líneas 187-191:
```javascript
{ value: '2,847+', label: 'Productos creados', icon: 'fa-solid fa-box' },
{ value: '4.9/5', label: 'Calificación promedio', icon: 'fa-solid fa-star' },
{ value: '98%', label: 'Clientes satisfechos', icon: 'fa-solid fa-face-smile' },
{ value: '24-48h', label: 'Tiempo de entrega', icon: 'fa-solid fa-truck-fast' },
```

---

## 👥 TESTIMONIOS

**Archivo:** `src/components/SocialProof.tsx`

Líneas 3-10 (array `reviews`):
```javascript
{
  name: 'María G.',
  location: 'CDMX',
  text: 'La funda quedó increíble...',
  stars: 5,
  product: 'Funda Premium'
}
```

---

## 📦 PRODUCTOS

**Archivo:** `src/lib/products.ts`

Ejemplo:
```javascript
{
  id: 'personalizada',
  name: 'Funda Personalizada',
  price: '$350',
  subtitle: 'La clásica',
  icon: 'fa-solid fa-mobile-screen-button',
  gradient: 'from-brand-cyan to-brand-green',
  badge: 'MÁS VENDIDA',
  features: ['1 foto', 'Impresión HD', 'Envío rápido'],
  editorUrl: 'https://tu-dashboard.com/personalizada'
}
```

---

## 🎭 ANIMACIONES

**Archivo:** `tailwind.config.ts`

Para cambiar duración de animaciones:
```javascript
animation: {
  'float': 'float 6s ease-in-out infinite',  // Cambiar 6s
  'glow-pulse': 'glow-pulse 3s ease-in-out infinite',  // Cambiar 3s
}
```

---

## 🔄 DESPUÉS DE CAMBIOS

```bash
# 1. Verifica localmente
npm run dev

# 2. Navega a http://localhost:3000
# 3. Prueba todo en móvil

# 4. Si está bien, haz commit
git add .
git commit -m "Cambios de personalización: [describe qué cambiaste]"
git push

# 5. Vercel auto-deploya automáticamente ✅
```

---

## ✅ CHECKLIST PERSONALIZACIÓN

- [ ] Nombre de marca actualizado
- [ ] Números de contacto correctos
- [ ] Email correcto
- [ ] Redes sociales correctas
- [ ] Colores de marca aplicados
- [ ] Productos listados
- [ ] Precios correctos
- [ ] Testimonios reales (opcional)
- [ ] Stats reales (opcional)
- [ ] Links a Shopify correctos

---

**💡 Tip:** Si cambias algo importante, pruebalo en `npm run dev` primero. Verifica en móvil con `ngrok` o en el mismo dispositivo en la red local.

**🚀 Ready?** Una vez personalizado, es solo un `git push` y estás en vivo.
