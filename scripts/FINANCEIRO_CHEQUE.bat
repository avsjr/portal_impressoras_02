@echo off
@echo "Adicionando impressora: \\192.0.0.61\csc-financeiro-1102w"
rundll32 printui.dll PrintUIEntry /in /n \\192.0.0.61\csc-financeiro-1102w

@echo Impressora adicionada com sucesso.
pause
