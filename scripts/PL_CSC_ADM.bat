@echo off
@echo "Adicionando impressora: \\192.0.0.61\csc-adm-preto-sp5200s"
rundll32 printui.dll PrintUIEntry /in /n \\192.0.0.61\csc-adm-preto-sp5200s

@echo Impressora adicionada com sucesso.
pause
