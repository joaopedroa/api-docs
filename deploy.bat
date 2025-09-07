@echo off
echo 🚀 Fazendo deploy para GitHub Pages...
echo.

echo 📦 Fazendo build do projeto...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Erro no build!
    pause
    exit /b 1
)

echo.
echo 🔄 Fazendo deploy...
call npm run deploy
if %errorlevel% neq 0 (
    echo ❌ Erro no deploy!
    pause
    exit /b 1
)

echo.
echo ✅ Deploy concluído com sucesso!
echo 🌐 Sua documentação está disponível em: https://SEU_USUARIO.github.io/api-docs/
echo.
pause
