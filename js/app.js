// Btn
const closeBtn = document.querySelector('.close_sidebar');
const openSidebar = document.querySelector('.open_sidebar');


// Side bar 
const sideBar = document.querySelector('.side_bar');
const sidebarWidth = sideBar.getBoundingClientRect().width;

// Panel 
const panel = document.querySelector('.panel');
const panelWidth = panel.getBoundingClientRect().width;

openSidebar.addEventListener('click', function () {
    sideBar.classList.add('active');
    panel.classList.add('active');
    openSidebar.classList.add('deactive');
});

closeBtn.addEventListener('click', function () {
    sideBar.classList.remove('active');
    panel.classList.remove('active');
    openSidebar.classList.remove('deactive');
});

window.onclick = function (e) {
    if (e.target == sideBar) {
        panel.classList.remove('active');
        sideBar.classList.remove('active');
        openSidebar.classList.remove('deactive');
    }
}