const Todo = document.myform.todo
const Span = document.querySelector('span')

document.addEventListener('submit', (e) => {
    e.preventDefault()
    ValidateUser()
})
const ValidateUser = () => {
    const LI = document.createElement('li')
    const TopLeftSideOrderedList = document.querySelector('.top-left-side ol')
    const CauncelButton = document.createElement('button')

    CauncelButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-440v-80h560v80H200Z"/></svg>`
    CauncelButton.className = 'councel-button'
    CauncelButton.title = 'Remove Todo'

    CauncelButton.addEventListener('click', () => {
        TopLeftSideOrderedList.removeChild(LI, CauncelButton)
    })

    if (!Todo.value) {
        Span.innerText = 'Please provide the text...'
        Span.className = 'error'
    }
    else {
        Span.innerText = ''
        LI.append(Todo.value, CauncelButton)
        TopLeftSideOrderedList.appendChild(LI)
    }
}



