
class Jogador{
    constructor(name){
        this.name = name
        
        
    }

    

        

    }




class Jogo{
    constructor(jogador){
        this.jogador = jogador
        this.pool = ['arroz', 'feijao', 'titanic','sopa','feliz','amor','amizade', 'roupa','carta','cavalo','nuvem','pistola','teclado','violao','agosto',
        'julho','viking', 'melancia', 'ancora','navio', 'barco', 'floresta']
         this.criarinputs = ''
         this.pontosP = 1
         this.pontosV = 0
    }

    iniciarJogo(){
        let telainicial = document.getElementById('tela-1')
        telainicial.className = 'display-none'
        let inputs = document.querySelector('.inputs')
        let index = Math.floor(Math.random() * this.pool.length)
        this.criarinputs = this.pool[index]
        
        for( let i in this.criarinputs ){ // este for cria um input para cada letra da palavra selecionada com nome igual a çetra que o input representa
            let input = document.createElement('span')
            input.id = this.criarinputs[i] 
            input.className = 'letra'
            inputs.appendChild(input)
    }
}
    getLetra(){

        let letrainput = document.getElementById('letrainput')
        let letras = document.querySelectorAll('.letra')

        letrainput.addEventListener('keyup',()=>{  // adiciona o event listner para cada input, 
            if(this.criarinputs.includes(letrainput.value) && letrainput.value){ // verifica se a letra digitada contem na palavra
                for( let i of letras){          
                    if(letrainput.value === i.id){ //se sim, ele itera os inputs e busca os com o mesmo nome da letra 
                        i.innerText = letrainput.value  // e altera o value para a letra digitada
                        this.pontosV++             
                    }                    
                }        
                    }if( !this.criarinputs.includes(letrainput.value) && letrainput.value){ //se nao, retira pontos.
                        
                        let usadas = document.getElementById('letras')
                        let enforcar = document.getElementById('enforcar')
                        let usadaschild = document.createElement('span')
                        usadas.appendChild(usadaschild)
                        usadaschild.innerText = letrainput.value 
                        this.pontosP ++
                        enforcar.src = `/assets/${this.pontosP}.png`

                    }     
                    setTimeout(()=>{letrainput.value =''},'300')
                    
            this.vitoria()
        })
    }

    vitoria(){
    
    console.log(this.pontosV)
     if(this.pontosV === this.criarinputs.length )  {
        let vitoria = document.querySelector('.tela-vitoria')
        let name = document.querySelector('.tela-vitoria span')
        name.innerText = `${this.jogador.name}`
        vitoria.className = 'aparecer'
        console.log("ganhou")

     }
     if(this.pontosP === 6){
        let perda = document.querySelector('.tela-derrota')
        perda.className = 'aparecer'
        console.log('perdeu')
     }
    }

}

class Dom{
    constructor(){
       

    }

    

    
}


/* class Rodar{
    constructor(jogador,jogo, dom){
        this.Jogador = jogador
        this. jogo = jogo
        this.dom = dom
    }
 
    
} */
