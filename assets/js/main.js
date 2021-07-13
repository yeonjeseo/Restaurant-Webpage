/*================== SHOW MENU ==================*/
'use strict'
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    // Validate if variables exist
    if(toggle && nav) {
        //if clicked, add the show-menu class to the div tag with the nav__menu class
        toggle.addEventListener('click', () => {
            // classList.toggle 자체가 
            // 클릭 - 추가, 클릭 - 삭제 
            nav.classList.toggle('show-menu');
        })
    }
};

showMenu('nav-toggle', 'nav-menu');

/*================== Remove MENU mobile ==================*/
// Toggle은 알아서 사라지는데, 링크 클릭하면 페이지 이동하면서 다시 창이 닫혀야 함
// classList.toggle let class 'show-menu' removed automatically,
// but if we click the link, it won't disappear
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
// navLink 각각의 요소(.nav__link가 있는 객체 : a tag)에 이벤트 리스너 생성
navLink.forEach(element => element.addEventListener('click', linkAction));


/*================== Scroll Sections active link ==================*/
// 현재 위치 파악하는 함수인가??
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive);

/*================== Change background header ==================*/
function scrollHeader() {
    const nav = document.getElementById('header');

    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*================== Show scroll top ==================*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class
    // to a tag with the scroll-top class
    console.log(scrollY);
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollTop);