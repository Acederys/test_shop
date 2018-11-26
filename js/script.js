 let menuItem = document.getElementsByClassName('catalog-menu-item'),
    article = document.getElementsByClassName('catalog-product-list');

for(let i=1; i<article.length; i++) {
    article[i].style.display = "none";
}

let menu = document.getElementsByClassName('catalog-menu')[0];
    menu.addEventListener('click', function(event){
        if(event.target.classList.contains('catalog-menu-item')){
            for(let i=0; i<menuItem.length; i++){
                menuItem[i].classList.remove('active');
            }
            event.target.classList.add('active');

            let dataTarget = event.target.getAttribute('data-tab');
            for(let i=0; i<article.length; i++){
                article[i].style.display = "none";
                if(article[i].getAttribute('data-tab') == dataTarget){
                    article[i].style.display = "flex";
                }
            }
        }
    });