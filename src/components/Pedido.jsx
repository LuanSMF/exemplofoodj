import { useState } from "react"

// Array de Objetos contendo o estado inicial do cardápio
const cardapio =[
    {id:1,nome:"Combo-01",preco:25.00,disponivel:true,quatidade:0},
    {id:2,nome:"Combo-01",preco:25.00,disponivel:false,quatidade:0},
    {id:3,nome:"Combo-01",preco:25.00,disponivel:false,quatidade:0},
    {id:4,nome:"Combo-01",preco:25.00,disponivel:true,quatidade:0},
]

const Pedido=() => {

    //HOOK -  useState- Manipula o estado da variavel
    //Estados para gerenciar a lista de items do cardápio
    const [items,setItems]=useState(cardapio);
    const [status,setStatus]=useState("");
    const [enviar,setEnviar]=useState(false);

    const taxaEntrega = 5.00;

    const AlterarQuantidade =(id,valor)=>{
        setItems(alt =>
            //MAP:CRIAR UM NOVO E PERCORRE OS ITEMS SEM MODIFICAR O ORIGINAL(IMUTABILIDADE)
            //TERNARIO: verifica se o item da iteração atual é que deve ser alterado 
            //SPREAD(...item)- mantem os valores antigos e adiciona os novos
            //MATH.max - Objeto que garante que ,ii9
            alt.map(item=>
                item.id === id ?{...item,quantidade:Math.max(0,item.quantidade + valor)}:item
            )
        )
    }
    const produtosDisponiveis = items.filter(item=>item.disponivel);
    const carrinho = items.filter(item => item.quantidade >0)
    
    const subTotal= carrinho.reduce((ac,item)=>ac+item.preco*item.quantidade,0)
    const total = subTotal>0 ? subTotal+taxaEntrega:0;

    const ConfirmarPedido =()=>{
        setEnviar(true);
        setStatus("Restaurante confirmou pagamento, Preparando seu Pedido!")
        setTimeout(()=>{
            setStatus("Seu Pedido saiu para Entrega!")
            setEnviar(false)
        },5000)
        setTimeout(()=>{
            setStatus("Seu Pedido foi entregue com sucesso")
            setEnviar(false)
        },10000) // 10 segundos
    }
  return (
    <>

    </>
  )
}

export default App
