
function Produto(props){

    let desconto = props.descontoProduto

    return <h1>{desconto ?"Produto tem desconto!":"Produto não tem desconto!"}</h1> 
}


export default Produto