@echo off
@echo "Adicionando impressora: \\192.0.0.61\csc-mkt-preto-c368"
rundll32 printui.dll PrintUIEntry /in /n \\192.0.0.61\csc-mkt-preto-c368

@echo Impressora adicionada com sucesso.
pause
