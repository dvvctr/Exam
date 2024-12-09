function aboutLogo(){
    // const img=document.getElementById("about-slider-logo");
    // img.style.filter='brightness(0.7) sepia(1) hue-rotate(-20deg) saturate(2) #59ab6e'
}

document.addEventListener('DOMContentLoaded', function () {
    aboutLogo();
     let allPanels = document.querySelectorAll('.templatemo-accordion > li > ul');
    allPanels.forEach(panel => panel.style.display = 'none');

     let accordionLinks = document.querySelectorAll('.templatemo-accordion > li > a');
    accordionLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            console.log('in cont load');
             let target = this.nextElementSibling;

            if (!target.classList.contains('active')) {
                allPanels.forEach(panel => {
                    panel.classList.remove('active');
                    panel.style.display = 'none';
                });
                target.classList.add('active');
                target.style.display = 'block';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
     let productLinks = document.querySelectorAll('.product-links-wap a');
    productLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
             let thisSrc = this.querySelector('img').getAttribute('src');
            document.getElementById('product-detail').setAttribute('src', thisSrc);
        });
    });

    document.getElementById('btn-minus').addEventListener('click', function (event) {
        event.preventDefault();
        let val = parseInt(document.getElementById('let-value').textContent, 10);
        val = (val === 1) ? val : val - 1;
        document.getElementById('let-value').textContent = val;
        document.getElementById('product-quanity').value = val;
    });

    document.getElementById('btn-plus').addEventListener('click', function (event) {
        event.preventDefault();
         let val = parseInt(document.getElementById('let-value').textContent, 10);
        val++;
        document.getElementById('let-value').textContent = val;
        document.getElementById('product-quanity').value = val;
    });

     let sizeButtons = document.querySelectorAll('.btn-size');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('product-size').value = this.textContent;

            sizeButtons.forEach(btn => {
                btn.classList.remove('btn-secondary');
                btn.classList.add('btn-success');
            });

            this.classList.remove('btn-success');
            this.classList.add('btn-secondary');
        });
    });
});
