document.getElementById('boletoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const endereco = document.getElementById('endereco').value;
  const cpf = document.getElementById('cpf').value;
  const chavePix = document.getElementById('chavePix').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const vencimento = new Date(document.getElementById('vencimento').value);
  
  const boletoHTML = `
    <h3>Boleto Gerado:</h3>
    <p>Nome: ${nome}</p>
    <p>Endereço: ${endereco}</p>
    <p>CPF: ${cpf}</p>
    <p>Chave PIX: ${chavePix}</p>
    <p>Valor: R$ ${valor.toFixed(2)}</p>
    <p>Vencimento: ${vencimento.toLocaleDateString('pt-BR')}</p>
    <!-- Adicione aqui a lógica para gerar o código de barras -->
  `;
  
  document.getElementById('boletoOutput').innerHTML = boletoHTML;
});

document.getElementById('imprimirBtn').addEventListener('click', function() {
  const boletoOutput = document.getElementById('boletoOutput').innerHTML;
  const printWindow = window.open('', '_blank');
  printWindow.document.open();
  printWindow.document.write(`
    <html>
      <head>
        <title>Boleto</title>
      </head>
      <body>
        ${boletoOutput}
        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
});
