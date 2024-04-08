// Definir a função downloadScript fora do evento DOMContentLoaded
function downloadScript(scriptName) {
  const link = document.createElement('a');
  link.href = `scripts/${scriptName}`;
  link.download = `${scriptName}`;
  link.click();
}

// Modificação para chamar a função JavaScript para download
console.log('Script carregado com sucesso!');
document.addEventListener("DOMContentLoaded", function() {
const links = document.querySelectorAll('button[download]');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do botão
        const scriptName = this.getAttribute('download');
        downloadScript(scriptName);
    });
});
});