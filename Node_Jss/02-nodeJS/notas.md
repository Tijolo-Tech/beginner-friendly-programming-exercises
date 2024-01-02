/** 
obterUsuario(function resolverUsuario(error, usuario) {
    // null || 0 === false
    if(error) {
        console.error('Deu ruim em Usuario', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error("deu ruim no telefone", error)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
        if (error2) {
            console.error('deu ruim em endereço', error)
            return;
        }
console.log(` 
Nome: ${usuario.nome},
Endereco: ${endereco.rua}, ${endereco.numero}
Telefone: ${telefone.ddd})${telefone.telefone}
`) 

})

})

})

 */