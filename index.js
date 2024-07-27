let input = document.querySelector('#input-field')
let Elemdiv = document.querySelector('#listed')
let btnAdd = document.querySelector('#btn-save')
let btnDelete = document.querySelector('#btn-delete')
let colors = document.querySelectorAll('.color-box')


function inputHandler(event){
    
    if(event.key === 'Enter'){
        newdivElem = document.createElement('div')
        newdivElem.className = 'card shadow-sm rounded'

        let inputBg = input.style.backgroundColor
        newdivElem.style.backgroundColor = inputBg
        input.style.backgroundColor = '#ffff'

        newdivElem.addEventListener('click', remove)

        newPElem = document.createElement('p')
        newPElem.className = 'class="card-text p-3'
        newPElem.innerHTML = input.value

        newdivElem.append(newPElem)
        console.log(newdivElem)

        Elemdiv.append(newdivElem)
        console.log(Elemdiv)

        input.value = ''
    }

}

function addNote(){
        
        newdivElem = document.createElement('div')
        newdivElem.className = 'card shadow-sm rounded'

        newPElem = document.createElement('p')
        newPElem.className = 'class="card-text p-3'
        newPElem.innerHTML = input.value


        newdivElem.append(newPElem)
        console.log(newdivElem)

        Elemdiv.append(newdivElem)
        console.log(Elemdiv)
        input.value = ''

        let inputBg = input.style.backgroundColor
        newdivElem.style.backgroundColor = inputBg
        input.style.backgroundColor = '#ffff'
}

function deleteNote(){
    input.value = ''
    input.style.backgroundColor = '#ffff'
}

colors.forEach(function(color){

    color.addEventListener('click' , function(event){
        console.log(event.target)
        let mainColor = event.target.style.backgroundColor
        console.log(mainColor)
        input.style.backgroundColor = mainColor
    })
})

function remove(event){
    console.log(event.target)
    event.target.parentElement.remove()
}



input.addEventListener('keydown' ,inputHandler)
btnAdd.addEventListener('click' , addNote)
btnDelete.addEventListener('click' , deleteNote)
