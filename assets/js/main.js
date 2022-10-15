function criaCalculadora () {
    
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia (){
            this.cliqueBotoes()
        },

        realizaConta(){
            let conta = this.display.value
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta Invalida');
                }

                this.display.value = String(conta);
            }catch(e){
                alert('Conta Invalida');
                return;
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDispay(el.innerText);
                }
                
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },

        btnParaDispay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();