document.addEventListener('DOMContentLoaded', function () {
    let btnAdicionar = document.querySelectorAll('.btn-adicionar');

    btnAdicionar.forEach(button => {
        button.addEventListener('click', function () {
            let printerName = this.parentElement.querySelector('.printer-name').textContent.trim();

            fetch('/adicionarImpressora', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ printerName: printerName })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Impressora adicionada com sucesso') {
                    console.log('Printer added successfully');
                    alert('Impressora adicionada com sucesso!');
                } else {
                    console.log('Failed to add printer.');
                    alert('Não foi possível adicionar a impressora.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error: ' + error);
            });
        });
    });
});
