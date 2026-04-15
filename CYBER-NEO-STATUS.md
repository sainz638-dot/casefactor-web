# Cyber Neo — Remediation Status

**Proyecto:** casefactor-web
**Auditoría:** 2026-04-15 (Risk Score 49/100 — Medium)
**Aplicado:** 2026-04-15

---

## Hallazgos aplicados en código

| ID | Severidad | Archivo | Estado |
|----|-----------|---------|--------|
| CN-002 | High | `.gitignore` | ✅ Aplicado — ahora excluye `.env*`, `node_modules/`, `.next/`, `*.pem`, `*.key`, service accounts, etc. |
| CN-003 | High | `src/app/api/register/route.ts` | ✅ Aplicado — usa `x-real-ip` (firmado por Vercel) antes que `x-forwarded-for`. |
| CN-005 | Medium | `next.config.mjs` | ✅ Aplicado — headers HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. |
| CN-006 | Medium | `src/app/layout.tsx` | ✅ Aplicado — Font Awesome con `integrity` SRI + `crossorigin=anonymous`. |
| CN-007 | Medium | `src/app/api/register/route.ts` | ✅ Aplicado — validación de `Origin` contra lista blanca (case-factor.com + localhost). |
| CN-008 | Medium | `src/components/EditorModal.tsx` | ✅ Aplicado — URL del iframe validada contra `https://dashboard.case-factor.com`. |
| CN-009 | Low | `EditorModal.tsx`, `EditorSection.tsx` | ✅ Aplicado — `sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"`. |
| CN-010 | Low | `src/app/api/register/route.ts` | ✅ Aplicado — límites de longitud por campo y validación de `portfolio_url` como URL. |
| CN-011 | Low | `src/app/api/register/route.ts` | ✅ Aplicado — `catch (err)` con `console.error` en lugar de silenciarlo. |

---

## Hallazgos pendientes — requieren acción manual

### CN-001 — Upgrade Next.js (High)
Next.js 14.2.35 tiene 5 advisories (2 High). Actualizar a 14.2.33+ o 15.x.

**Comando:**
```
npm install next@14.2.33
```

O si quieres limpiarlos todos:
```
npm install next@latest
```

Después verificar:
```
npm audit
npm run build
```

### CN-004 — Rate limiter en memoria (Medium)
Aceptable en dev/localhost. En producción (Vercel serverless) cada instancia tiene su propio Map, por lo que un atacante con suerte puede evadir el límite. Antes de volver a producción, migrar a `@upstash/ratelimit` + Redis o usar Vercel WAF.

### CN-012 — `.vercel/` trackeado
Si estás iniciando el repo nuevo (tras sacar de OneDrive), no hay problema porque `.gitignore` ya lo excluye. Si más tarde reapareciera en `git status`, ejecutar:
```
git rm -r --cached .vercel
git commit -m "stop tracking .vercel"
```

### CN-013 — Separar clientes Supabase (Info)
Dividir `src/lib/supabase.ts` en `supabase-browser.ts` y `supabase-server.ts` (con `import 'server-only'`). No bloquea el deploy.

### CN-014 — `rel="noopener noreferrer"` (Info)
Pasar por los componentes y agregar `rel="noopener noreferrer"` en todos los `target="_blank"`.

### CN-015 — GitHub Action de `npm audit` semanal (Info)
Crear `.github/workflows/security.yml` con `npm audit --audit-level=high`.

---

## Acciones operativas pendientes

1. **Sacar el proyecto de OneDrive** (bloquea git).
   Mover `C:\Users\abdie\OneDrive\Documentos\casefactor-web` a `C:\Users\abdie\Proyectos\casefactor-web`.
2. **Crear `.env.local`** si no existe, con las claves Stripe live + Supabase service_role (seguir `DEPLOYMENT_INSTRUCTIONS.md`). **NO subirlo a git** — ya está ignorado.
3. **`git init` + push a GitHub** en la nueva ruta (ver pasos en la conversación).
4. **Upgrade Next.js** (CN-001) — `npm install next@14.2.33`.

---

## Nota sobre deployment

Este proyecto está en modo desarrollo local hasta terminar toda la remediación Cyber Neo.
No está recibiendo clientes. Activación a producción se hará al finalizar todos los proyectos.
