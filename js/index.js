
let btnjogar = document.querySelector('#btnjogar')
let nomein = document.querySelector('#nomeinput')


btnjogar.addEventListener('click', () =>{
    jogador = new Jogador(nomein.value)
    jogo = new Jogo(jogador)
    jogo.iniciarJogo()
    jogo.getLetra()

})

let btnv =document.querySelector('.btnv')
btnv.addEventListener('click',()=>{
    document.location.reload(true)
}
)

let btnd =document.querySelector('.btnd')
btnd.addEventListener('click',()=>{
    document.location.reload(true)
}
)