function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("closebtn").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("closebtn").style.display = "none";
}

function toggleNightMode() {
    const html = document.querySelector('html'); // or 'body' depending on where your attribute is set
    const darkSwitchMobile = document.getElementById('darkSwitchMobile');
    const darkSwitchLargeScreen = document.getElementById('darkSwitchLargeScreen');
    
    if (darkSwitchMobile.checked || darkSwitchLargeScreen.checked) {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }
}
