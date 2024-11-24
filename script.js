// const a = 15
// const b = 5
// var sekcjaTest = document.getElementById("test");
// var testText = document.getElementById('testText');
// var button = document.getElementById('testButton')

// sekcjaTest.style.backgroundColor = 'red';
// testText.innerHTML = a + '+' + b + '=' + (a+b);
// button.style.backgroundColor = 'green';

// button.addEventListener('click', function(){
//     console.log('klikniety przycisk');
// })

var mobileMenuIcon = document.getElementById('mobile-menu-icon');
var menu = document.getElementById('main-menu')

if(mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', function(){
        mobileMenuIcon.classList.toggle("opened")
        menu.classList.toggle("opened")
    })
}