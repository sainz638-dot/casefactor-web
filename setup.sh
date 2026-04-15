#!/bin/bash

# ====================================
# CASEFACTOR WEB - SETUP SCRIPT
# ====================================
# Este script te ayuda a:
# 1. Instalar dependencias
# 2. Verificar build
# 3. Correr en desarrollo
# 4. Buildear para producción

echo "╔════════════════════════════════════════════════════════╗"
echo "║          CASEFACTOR WEB - SETUP                        ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Detectar si Node está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    echo "👉 Descarga desde: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo "✅ npm encontrado: $(npm --version)"
echo ""

# Menu
echo "¿Qué quieres hacer?"
echo ""
echo "1) Instalar dependencias (npm install)"
echo "2) Correr en desarrollo (npm run dev)"
echo "3) Build para producción (npm run build)"
echo "4) Verificar build + correr producción"
echo "5) Lint TypeScript (npm run lint)"
echo "6) Todo lo anterior (setup completo)"
echo ""
read -p "Elige una opción (1-6): " choice

case $choice in
    1)
        echo ""
        echo "📦 Instalando dependencias..."
        npm install
        echo "✅ Dependencias instaladas"
        ;;
    2)
        echo ""
        echo "🚀 Corriendo en desarrollo..."
        echo "🌐 Abre: http://localhost:3000"
        echo "⚡ Presiona Ctrl+C para parar"
        echo ""
        npm run dev
        ;;
    3)
        echo ""
        echo "🏗️  Building para producción..."
        npm run build
        if [ $? -eq 0 ]; then
            echo "✅ Build completado exitosamente"
        else
            echo "❌ Build falló - revisa los errores arriba"
            exit 1
        fi
        ;;
    4)
        echo ""
        echo "🏗️  Building para producción..."
        npm run build
        if [ $? -eq 0 ]; then
            echo "✅ Build completado"
            echo ""
            echo "🚀 Iniciando servidor de producción..."
            echo "🌐 Abre: http://localhost:3000"
            echo "⚡ Presiona Ctrl+C para parar"
            echo ""
            npm run start
        else
            echo "❌ Build falló"
            exit 1
        fi
        ;;
    5)
        echo ""
        echo "🔍 Verificando TypeScript..."
        npm run lint
        echo "✅ Lint completado"
        ;;
    6)
        echo ""
        echo "📦 Instalando dependencias..."
        npm install
        echo "✅ Dependencias instaladas"
        echo ""
        echo "🔍 Verificando TypeScript..."
        npm run lint
        echo "✅ Lint completado"
        echo ""
        echo "🏗️  Building para producción..."
        npm run build
        if [ $? -eq 0 ]; then
            echo "✅ Build completado"
            echo ""
            echo "🚀 Iniciando servidor de producción..."
            echo "🌐 Abre: http://localhost:3000"
            echo "⚡ Presiona Ctrl+C para parar"
            echo ""
            npm run start
        else
            echo "❌ Build falló"
            exit 1
        fi
        ;;
    *)
        echo "❌ Opción inválida"
        exit 1
        ;;
esac

echo ""
echo "✅ Listo!"
