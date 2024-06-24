
document.querySelectorAll('button').forEach((botao)=>{
    botao.addEventListener('click',(event)=>{
        del()
        for(let i = 0; i< 250; i+=10){
            let tmp = document.createElement('div')
            tmp.classList.add('caixa')
            let id = event.target.id
            if(id ==='btn_vermelho'){
                tmp.style.backgroundColor = `rgb(${i},0,0)`
            }else if(id === 'btn_verde'){
                tmp.style.backgroundColor = `rgb(0,${i},0)`
            }else{
                tmp.style.backgroundColor = `rgb(0,0,${i})`
            }
            document.body.appendChild(tmp)
        }
        
})
})

function del(){
    let el = document.querySelectorAll('.caixa')
    el.forEach((rem)=>{
        rem.remove()
    })
}


