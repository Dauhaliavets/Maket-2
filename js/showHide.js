var serviceItemControl = document.querySelectorAll('.serviceItemControl');
var itemContent = document.querySelectorAll('.service_item_content');

serviceItemControl[0].addEventListener ('click', function (){
    if (itemContent[0].style.display == 'none') {
        itemContent[0].style.display = 'block';
        serviceItemControl[0].style.transform = 'rotate(180deg)';
        serviceItemControl[0].style.transition = 'all 0.3s ease 0s';
        if (itemContent[1].style.display == 'block' || itemContent[2].style.display == 'block'){
            itemContent[1].style.display = 'none';
            itemContent[2].style.display = 'none';
            serviceItemControl[1].style.transform = 'rotate(0deg)';
            serviceItemControl[1].style.transition = 'all 0.3s ease 0s';
            serviceItemControl[2].style.transform = 'rotate(0deg)';
            serviceItemControl[2].style.transition = 'all 0.3s ease 0s';
        }
    }
    else {
        itemContent[0].style.display = 'none';
        serviceItemControl[0].style.transform = 'rotate(0deg)';
        serviceItemControl[0].style.transition = 'all 0.3s ease 0s';
    }
});

serviceItemControl[1].addEventListener ('click', function (){
    if (itemContent[1].style.display == 'none') {
        itemContent[1].style.display = 'block';
        serviceItemControl[1].style.transform = 'rotate(180deg)';
        serviceItemControl[1].style.transition = 'all 0.3s ease 0s';
        if (itemContent[0].style.display == 'block' || itemContent[2].style.display == 'block'){
            itemContent[0].style.display = 'none';
            itemContent[2].style.display = 'none';
            serviceItemControl[0].style.transform = 'rotate(0deg)';
            serviceItemControl[0].style.transition = 'all 0.3s ease 0s';
            serviceItemControl[2].style.transform = 'rotate(0deg)';
            serviceItemControl[2].style.transition = 'all 0.3s ease 0s';
        }
    }
    else {
        itemContent[1].style.display = 'none';
        serviceItemControl[1].style.transform = 'rotate(0deg)';
        serviceItemControl[1].style.transition = 'all 0.3s ease 0s';
    }
});

serviceItemControl[2].addEventListener ('click', function (){
    if (itemContent[2].style.display == 'none') {
        itemContent[2].style.display = 'block';
        serviceItemControl[2].style.transform = 'rotate(180deg)';
        serviceItemControl[2].style.transition = 'all 0.3s ease 0s';
        if (itemContent[0].style.display == 'block' || itemContent[1].style.display == 'block'){
            itemContent[0].style.display = 'none';
            itemContent[1].style.display = 'none';
            serviceItemControl[0].style.transform = 'rotate(0deg)';
            serviceItemControl[0].style.transition = 'all 0.3s ease 0s';
            serviceItemControl[1].style.transform = 'rotate(0deg)';
            serviceItemControl[1].style.transition = 'all 0.3s ease 0s';
        }
    }
    else {
        itemContent[2].style.display = 'none';
        serviceItemControl[2].style.transform = 'rotate(0deg)';
        serviceItemControl[2].style.transition = 'all 0.3s ease 0s';
    }
});