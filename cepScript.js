const campoCep = document.getElementById('cep');
    const campoCity = document.getElementById('city');
    const campoBairro = document.getElementById('bairro');
    const campoRua = document.getElementById('rua');
    const campoNumb = document.getElementById('numb');

    campoCep.addEventListener("blur", infosDoEvent => {
        const cep = infosDoEvent.target.value
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((respostaDoServer) => {
            return respostaDoServer.json()
        })
        .then((dados) => {
            
            campoCity.value = dados.localidade
            campoBairro.value = dados.bairro
            campoRua.value = dados.logradouro
        })

        const campo_cep = document.getElementById("#city")
        console.log(campo_cep)

        if(campo_cep){
            alert(teste)
        }
    })