// var
var data_menu = ["Home" , "Shop" , "Blogs" , "About" , "Contact"];
var menu = document.getElementById('menu');
// map
data_menu.map((item , index) => {
    var element = document.createElement('p');
    element.textContent = item;
    if(index == 0){
        element.classList.add('menu-item-first');
    }
    menu.appendChild(element)
})