

function validarCadastro(){

    var layout = document.querySelector('.form')

    var firstName = document.querySelector('#first-name').value
    
    var lastName = document.querySelector('#last-name').value

    var email = document.querySelector('#email').value

    var age = document.querySelector('#age')
    var age = Number(age.value)

    var gender = document.getElementById('gender');
	var genderValue = gender.options[gender.selectedIndex].text

    var comments = document.querySelector('#comments').value

    layout.innerHTML = `<div>
    <p>Nome: ${firstName} ${lastName}<br>
    Idade: ${age} anos<br>
    Sexo: ${genderValue}<br>
    E-mail: ${email}<br>
    </p>
    Comentário:
    <textarea cols="30" rows="10">${comments}</textarea>
   
    </div>`

}
