alert("Bienvenido a la tienda en línea. Los prescios son los siguientes: \n Producto 1, $15 \n Prodcuto 2, $10 \n Producto 3, $5 \n Producto 4, $3 \n Producto 5, $20. \n Puedes comprar máximo 1 producto")

let precioProductoUno = 15
let precioProductoDos = 10
let precioProductoTres = 5
let precioProductoCuatro = 3
let precioProductoCinco = 20


for(let i=0; i<1; i++){
  
    CantidadProductosDeseados = prompt("¿Cuántos productos deseas comprar?")
  
  if(CantidadProductosDeseados == 0){
    alert("No debes pagar nada, vuelve pronto")
  }else if(CantidadProductosDeseados == 1){
    alert("Excelente, entendiste la instrucción")  
  }else if(CantidadProductosDeseados > 1){
    alert(`No es posible comprar ${CantidadProductosDeseados}, recuerda que solo puedes comprar un producto`)
  }else if(CantidadProductosDeseados = ESC){
    break
  }
  
}

let productosAComprar = prompt("¿Estás listo para seleccionar tu producto? Qué bien, lo único que debes hacer es ingresar el número del producto que deseas comprar.")

switch(productosAComprar){
    case "1":
        productosAComprar = precioProductoUno
        alert(`Genial, este cuesta $${precioProductoUno}`)
        break
    case "2":
        productosAComprar = precioProductoDos
        alert(`Genial, este cuesta $${precioProductoDos}`)
        break
    case "3":
        productosAComprar = precioProductoTres
        alert(`Genial, este cuesta $${precioProductoTres}`)
        break
    case "4":
        productosAComprar = precioProductoCuatro
        alert(`Genial, este cuesta $${precioProductoCuatro}`)
        break
    case "5":
        productosAComprar = precioProductoCinco
        alert(`Genial, este cuesta $${precioProductoCinco}`)
        break
    default:
        productosAComprar = 0
        alert("Ese producto no está en existencia")
}


function comprar(val1, val2){
    let resultado = val1 + val2

    return resultado
}


let totalAPagar = comprar(`Debes pagar $${productosAComprar}`, " más el 16% de impuestos, gracias por tu compra")
alert(totalAPagar)


const productoDeseado = []
let cantidad = 1

do{
  let entrada = prompt("Tu opinión es muy importante para nosotros. Sabemos que nuestro inventario es muy limitado. Si no tenemos el producto que te interesa, indícanoslo, por favor. \n Ingresa el producto")
  productoDeseado.push(entrada)
  console.log(productoDeseado.length)
}while(productoDeseado.length != cantidad)
  
  const nuevaLista = productoDeseado.concat(["Este es el producto que te gustaría tuviéramos en nuestro inventario. Haremos lo posible por conseguirlo y te avisaremos por medio de correo"])
  alert(nuevaLista.join("\n"))





