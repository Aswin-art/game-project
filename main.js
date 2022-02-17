const rating = document.querySelectorAll('.rating input');
rating.forEach((e, index) => {
    e.nextElementSibling.addEventListener('mouseover', function(){
        e.nextElementSibling.style.cursor = 'pointer';
    });
    e.nextElementSibling.addEventListener('click', function(){
        for (let i = 0; i < 5; i++) {
            rating[i].nextElementSibling.style.color = 'white';
        }
        for (let i = 0; i <= index; i++) {
            localStorage.setItem('star', index+1);
            rating[i].nextElementSibling.style.color = '#ff1';
        }
    })
});