function changeName(){
    let name = document.querySelector('.card-body h1')
    name.innerText = "Totally a Really Real Name"
}
function adUser(element, option){
    let request_user = element.closest('li')
    let request_number = document.querySelector('.card-header .badge')
    let connections_number = document.querySelector('#your-connections .badge')
    if(option === 'accept'){
        connections_number.innerText++;
    }
    request_user.remove()
    request_number.innerText--;
}