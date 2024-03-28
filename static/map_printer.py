import win32print
from flask import Flask, jsonify, request

app = Flask(__name__)

def adicionar_impressora(printer_path):
    try:
        win32print.AddPrinterConnection(printer_path)
        print("Impressora adicionada com sucesso!")
        return True
    except Exception as e:
        print(f"Erro ao adicionar a impressora: {e}")
        return False

platina_csc_printers = {
    "PL CSC ADM": "\\\\192.0.0.61\\csc-adm-preto-sp5200s",
    "Exportação": "\\\\192.0.0.61\\csc-exportacao-preto-sp377sf",
    "Comercial": "\\\\192.0.0.61\\csc-comercial-preto-sp5200s",
    "Marketing": "\\\\192.0.0.61\\csc-mkt-preto-c368",
    "Financeiro": "\\\\192.0.0.61\\csc-financeiro-1102w"
}

@app.route('/adicionarImpressora', methods=['POST'])
def add_printer_route():
    data = request.json
    printer_name = data.get('printerName')
    caminho_impressora = platina_csc_printers.get(printer_name)

    if caminho_impressora is None:
        return jsonify({'message': 'Printer not found'}), 404

    try:
        adicionar_impressora(caminho_impressora)
        print("Impressora adicionada com sucesso!")
        return jsonify({'message': 'Impressora adicionada com sucesso'}), 200
    except win32print.error as e:
        print(f"Erro ao adicionar a impressora: {e}")
        return jsonify({'message': f'Erro ao adicionar a impressora: {e}'}, 500)

if __name__ == '__main__':
    app.run(debug=True)
