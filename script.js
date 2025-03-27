</head>
<body>

<div class="container">
    <h1>Verificador de Par ou Ímpar</h1>
    <input type="number" id="numero" placeholder="Digite um número" />
    <button onclick="verificarParImpar()">Verificar</button>
    <div class="result" id="resultado"></div>
</div>

<script>
    function verificarParImpar() {
        const numero = document.getElementById('numero').value;
        const resultado = document.getElementById('resultado');

        if (numero === '') {
            resultado.textContent = 'Por favor, insira um número.';
            return;
        }

        const num = parseInt(numero);
        if (isNaN(num)) {
            resultado.textContent = 'Por favor, insira um número válido.';
            return;
        }

        if (num % 2 === 0) {
            resultado.textContent = ${num} é um número par.;
        } else {
            resultado.textContent = ${num} é um número ímpar.;
        }
    }
</script>

</body>
</html>