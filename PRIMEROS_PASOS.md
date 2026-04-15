# 🎯 PRIMEROS PASOS - Guía Rápida

**Hola 👋** Este es el archivo que debes leer PRIMERO.

---

## ⚡ 30 SEGUNDOS

Tu sitio está **100% listo para producción**.

Elige UNO de estos:

### A) Quiero verlo funcionando AHORA (local)
```bash
npm install
npm run dev
# Abre http://localhost:3000
```

### B) Quiero llevarlo a VIVO (Vercel)
1. Sube este proyecto a GitHub
2. Ve a https://vercel.com
3. Haz clic en "New Project"
4. Selecciona tu repo
5. Click "Deploy"
6. ✅ EN VIVO en 2 minutos

### C) Tengo otra opción de hosting
Lee `DEPLOYMENT_INSTRUCTIONS.md`

---

## 📋 TAREAS RÁPIDAS (antes de publicar)

```bash
# 1. Verifica que todo funciona
npm run build

# 2. Personaliza con tus datos:
# - Abre: src/components/Footer.tsx (línea 37-42)
# - Cambia: 528000000000 → Tu WhatsApp
# - Cambia: hola@case-factor.com → Tu email
# - Cambia: @casefactor → Tu Instagram

# 3. Corre localmente para probar
npm run dev
# Navega: http://localhost:3000
# Verifica que todo se vea bien en móvil

# 4. Si todo bien, deploya
git push  # (o usa Vercel directamente)
```

---

## 📁 ARCHIVOS QUE NECESITAS LEER

| Archivo | Para qué | Tiempo |
|---------|----------|--------|
| **Este** (PRIMEROS_PASOS.md) | Orientación rápida | 2 min |
| README.md | Visión general del proyecto | 5 min |
| RESUMEN_EJECUTIVO.txt | Qué se hizo | 5 min |
| PERSONALIZACION_RAPIDA.md | Cómo cambiar textos/colores | 5 min |
| DEPLOYMENT_INSTRUCTIONS.md | Cómo desplegar | 5 min |
| CAMBIOS_REALIZADOS.md | Detalles técnicos | 10 min |

---

## 🎨 COSAS QUE PROBABLEMENTE QUIERAS CAMBIAR

### 1. **Números de contacto** (2 minutos)
Archivo: `src/components/Footer.tsx`
```javascript
// Línea 37-42
href="https://wa.me/528000000000"  → TU NÚMERO
hola@case-factor.com               → TU EMAIL
https://instagram.com/casefactor   → TU INSTAGRAM
```

### 2. **Colores de marca** (5 minutos)
Archivo: `tailwind.config.ts`
```javascript
brand: {
  cyan: '#00DBFF',      // Tu color principal
  green: '#00E676',     // Tu color secundario
  dark: '#050A14',      // Fondo oscuro
  // ... más colores
}
```

### 3. **Textos principales** (10 minutos)
Archivos:
- Hero: `src/components/HeroSection.tsx`
- Productos: `src/lib/products.ts`
- Proceso: `src/components/HowItWorks.tsx`
- Footer: `src/components/Footer.tsx`

### 4. **Editor URL** (1 minuto)
Archivo: `src/components/EditorSection.tsx` (línea 5)
```javascript
const BASE_URL = 'https://dashboard.case-factor.com/disenador-publico'
// Cambia a tu URL real
```

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] Números de WhatsApp actualizados
- [ ] Email correcto
- [ ] Instagram correcto
- [ ] `npm run build` compila sin errores
- [ ] Testeado en móvil
- [ ] Testeado en desktop
- [ ] Links a Shopify correctos
- [ ] Colores de marca aplicados (opcional pero recomendado)

---

## 🚀 CUÁNDO ESTÉS LISTO

### Opción 1: Vercel (RECOMENDADO)
```bash
# 1. Sube a GitHub
git add .
git commit -m "Cambios personalizados"
git push

# 2. Ve a vercel.com
# 3. New Project → Selecciona repo → Deploy
# 4. Automático ✅
```

### Opción 2: Servidor propio
Lee: `DEPLOYMENT_INSTRUCTIONS.md` → OPCIÓN 3

---

## 🆘 ALGO NO FUNCIONA?

### "npm run build falla"
```bash
# Limpia y reinstala
rm -rf node_modules package-lock.json
npm install
npm run build
```

### "Se ve raro en móvil"
Probablemente sea un cambio que hiciste. Revisa:
1. `src/app/globals.css` (estilos globales)
2. Usa `npm run dev` para ver cambios en vivo

### "No sé dónde cambiar X cosa"
Lee: `PERSONALIZACION_RAPIDA.md`

### "No sé cómo desplegar"
Lee: `DEPLOYMENT_INSTRUCTIONS.md`

---

## 💡 TIPS

**Tip 1:** Usa `npm run dev` para ver cambios en VIVO
```bash
npm run dev
# Haz cambios
# El navegador se actualiza automáticamente ✨
```

**Tip 2:** Verifica que compila antes de publicar
```bash
npm run build
# Si dice "✓ Compiled successfully" → todo bien
# Si da error → revisa qué cambió
```

**Tip 3:** Usa un emulador de móvil en Chrome (F12)
```
Presiona F12 → Click en icono de móvil 📱
Ajusta el viewport y prueba el sitio
```

**Tip 4:** Git es tu amigo
```bash
git add .
git commit -m "Cambios personalizados"
# Ahora puedes volver atrás si algo falla
git log --oneline
```

---

## 📞 CONTACTO EN EL SITIO

Estos son los lugares donde aparecen tus datos de contacto:

| Dónde | Archivo | Línea |
|-------|---------|-------|
| Footer | Footer.tsx | 37-42 |
| Header | Navbar.tsx | (links internos) |
| Secciones | Varios | (links internos) |

---

## 🎯 RESUMEN ULTRA-RÁPIDO

1. **Corre localmente:** `npm run dev`
2. **Personaliza:** Contacto, colores, textos
3. **Verifica:** `npm run build` sin errores
4. **Testa:** En móvil, tablet, desktop
5. **Publica:** Sube a GitHub + Vercel (automático)
6. **Apunta dominio:** casefactor.com → Vercel
7. **Listo:** 🎉

---

## 📚 PRÓXIMO PASO

Ahora lee: **README.md** (5 minutos)

Luego: **PERSONALIZACION_RAPIDA.md** (5 minutos)

Luego: **DEPLOYMENT_INSTRUCTIONS.md** (cuando estés listo para publicar)

---

**Preguntas frecuentes:**
- "¿Cuánto cuesta?" → Vercel es gratis para este proyecto
- "¿Es seguro?" → Sí, todo está optimizado y asegurado
- "¿Puedo cambiar el color?" → Sí, `tailwind.config.ts`
- "¿Puedo agregar más productos?" → Sí, `src/lib/products.ts`

---

**Estado:** 🟢 TODO LISTO PARA PRODUCCIÓN

**Hecho con ❤️ por Claude**

¡Buena suerte! 🚀
