const display = document.getElementById('display');
        
        function adicionar(valor) {
            display.value += valor;
        }

        function apagar() {
            display.value = '';
        }

        function calcular() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Erro';
            }
        }