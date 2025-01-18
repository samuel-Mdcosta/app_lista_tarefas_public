function editar(id, txt_tarefa){
					
    //formulario de edicao
    let form = document.createElement('form')
    form.action = 'tarefa_controler.php?acao=atualizar'	//action e o destino do formulario
    form.method = 'post'	//metodo de envio do formulario
    form.className = 'row'	//classe para estilizar bootstrap ou css

    //entrada de texto
    let inputTarefa = document.createElement('input')
    inputTarefa.type = 'text' //tipo do input
    inputTarefa.name = 'tarefa' //nome que sera recuperado no backend
    inputTarefa.className = 'col-9 form-control' //classe para estilizar bootstrap ou css
    inputTarefa.value = txt_tarefa //valor do input

    //campo oculto para enviar o id da tarefa
    let inputId = document.createElement('input')
    inputId.type = 'hidden' //tipo do input oculto
    inputId.name = 'id' //nome que sera recuperado no backend
    inputId.value = id //valor do input

    //botao para enviar ao banco
    let button = document.createElement('button')
    button.type = 'submit' //tipo do botao
    button.className = 'col-3 btn btn-info' //classe para estilizar bootstrap ou css
    button.innerHTML = 'Atualizar' //texto do botao

    //arvore de elementos
    form.appendChild(inputTarefa) 	//coloca o input dentro da raiz nesse caso o formulario
    form.appendChild(button)		//coloca o botao dentro da raiz nesse caso o formulario
    form.appendChild(inputId)		//coloca o input oculto dentro da raiz nesse caso o formulario

    //seleciona a div que contem a tarefa
    let tarefa = document.getElementById('tarefa_'+id)
    tarefa.innerHTML = '' //limpa o texto da tarefa
    tarefa.insertBefore(form, tarefa[0]) //coloca o formulario dentro da div
}

function remover(id){
    location.href = 'todas_tarefas.php?acao=remover&id='+id
}

function check(id){
    location.href = 'todas_tarefas.php?acao=check&id='+id
}