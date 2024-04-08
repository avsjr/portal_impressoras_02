@echo off
@echo "Adicionando impressora: \\192.0.0.61\csc-exportacao-preto-sp377sf"
rundll32 printui.dll PrintUIEntry /in /n \\192.0.0.61\csc-exportacao-preto-sp377sf

@echo Impressora adicionada com sucesso.
pause
