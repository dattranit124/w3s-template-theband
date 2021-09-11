const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.tickets-modal');
const modalCLose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
const pay = document.querySelector('#buy-tickets');
var header = document.querySelector('.header');
const mobileBtn = document.getElementById('mobile-menu');
const headerHeight = header.clientHeight;
const main = document.querySelector('.main');
for(const buyBtn of buyBtns)
    {
        buyBtn.addEventListener('click',()=> {
            modal.classList.add('open');
        })
    }
    modalCLose.addEventListener('click',()=>{
        modal.classList.remove('open');
    })   
    modal.addEventListener('click',()=>{

        modal.classList.remove('open');
        
    })
    modalContainer.addEventListener('click',(event)=> {
        event.stopPropagation();
    })
    pay.addEventListener('click',()=>{
            alert('Suscess');
            modal.classList.remove('open');
    })
    // Dong mo mobile menu

    mobileBtn.onclick = ()=>{
        var isClosed = header.clientHeight === headerHeight;
        if(isClosed) {
                header.style.height = 'auto';
        }
        else {
            header.style.height = null;
        }
    }
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for(var i=0;i<menuItems.length;i++)
    {
        var menuItem = menuItems[i];  

        menuItem.onclick = function() {
            header.style.height = null;
        }

    }

  

    
