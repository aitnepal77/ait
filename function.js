function navbar(x){
    let container = document.getElementById("navbar");
    // container2 = document.getElementById("navSlider");
    a = document.createElement("a");
    a.href = "./index.html"; a.innerHTML = "<div>Home<div>";
    if (x == 0){ a.classList = "navbarLink navlinkFocous";}
    else { a.classList = "navbarLink";}
    container.appendChild(a);
    // container2.appendChild(a);

    a = document.createElement("a");
    a.href = "./showcase.html"; a.innerHTML = "<div>Showcase<div>";
    if (x == 1){ a.classList = "navbarLink navlinkFocous";}
    else { a.classList = "navbarLink";}
    container.appendChild(a);
    // container2.appendChild(a);

    a = document.createElement("a");
    a.href = "./aboutUs.html"; a.innerHTML = "<div>About Us<div>";
    if (x == 2){ a.classList = "navbarLink navlinkFocous";}
    else { a.classList = "navbarLink";}
    container.appendChild(a);
    // container2.appendChild(a);

    a = document.createElement("a");
    a.href = "./contact.html"; a.innerHTML = "<div>Contact Us<div>";
    if (x == 3){ a.classList = "navbarLink navlinkFocous";}
    else { a.classList = "navbarLink";}
    container.appendChild(a);
    // container2.appendChild(a);

    // a = document.createElement("a");
    // a.href = "./pricing.html"; a.innerHTML = "<div>Pricing<div>";  
    // if (x == 4){ a.classList = "navlinkFocous";}
    // container.appendChild(a);
}

function navBoxFill(x){
    let container = document.getElementById("navBoxInnerContainer");
    container.innerHTML = `<div class="navLink" onclick="closeNavBox()">&lt;-</div>`;
    // container2 = document.getElementById("navSlider");
    a = document.createElement("a");
    a.href = "./index.html"; a.innerHTML = "<div>Home<div>";
    a.classList = "navLink";
    if (x == 0){ a.classList = "navLink navlinkFocous";}
    container.appendChild(a);
    // container2.appendChild(a);

    a = document.createElement("a");
    a.href = "./showcase.html"; a.innerHTML = "<div>Showcase<div>";
    a.classList = "navLink";
    if (x == 1){ a.classList = "navLink navlinkFocous";}
    container.appendChild(a);
    // container2.appendChild(a);

    a = document.createElement("a");
    a.href = "./aboutUs.html"; a.innerHTML = "<div>About Us<div>";
    a.classList = "navLink";
    if (x == 2){ a.classList = "navLink navlinkFocous";}
    container.appendChild(a);
    // container2.appendChild(a);

    a = document.createElement("a");
    a.href = "./contact.html"; a.innerHTML = "<div>Contact Us<div>";
    a.classList = "navLink";
    if (x == 3){ a.classList = "navLink navlinkFocous";}
    container.appendChild(a);
    // container2.appendChild(a);

    // a = document.createElement("a");
    // a.href = "./pricing.html"; a.innerHTML = "<div>Pricing<div>";  
    // if (x == 4){ a.classList = "navlinkFocous";}
    // container.appendChild(a);
}

function openNavBox(x){
    document.getElementById("navBox").style.display = "flex";
    navBoxFill(x);
    document.getElementById("navBox").style.width = "100%";
    document.getElementById("navBox").style.height = "100vh";
    
}
function closeNavBox(){
    document.getElementById("navBox").style.width = "0";
    document.getElementById("navBoxInnerContainer").innerHTML = "";
    document.getElementById("navBox").style.display = "none";
    
}

function placeNavbar(x) {
    document.getElementById("header").innerHTML = `
    <a href="./index.html"><img src="./assets/logo_t.png" class="logo"></a>
            <div onclick="openNavBox(${x})" class="navLinkSmall">:::</div>
            <nav class="navbar" id="navbar">
            </nav>
    `;
}