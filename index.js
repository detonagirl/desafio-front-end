var contador = 0
campo.value = contador

menos.addEventListener('click', () => {

    if (contador > 0) {
        contador-=1
    }
    campo.value = contador
})
mais.addEventListener('click', () => {
    contador+=1
    campo.value = contador
})

