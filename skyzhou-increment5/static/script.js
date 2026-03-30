// var x = 5;
// var y = 7;
// var z = x+y;
// console.log(z);

// var A = "hello ";
// var B = "world";
// var C = A + B;
// console.log(C);

// function sumnPrint(x1, x2) {
//     var x3 = x1 + x2;
//     console.log(x3);  
// }

// sumnPrint(x, y);
// sumnPrint(A, B);

// if (C.length > z) {
//     console.log(C);
//     if (C.length < z){
//         console.log(z);
//     }  
// } else {
//     console.log("good job!")
// }

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];

// // function findTheBanana(L) {
// //     for(var i = 0; i < L.length; i++)
// //     {
// //         if (L[i] == "Banana")
// //         {
// //             alert("Banana found!");
// //         }
// //     }
    
// // }

// // findTheBanana(L1);
// // findTheBanana(L2);


// function findTheBanana2(element) {
//     if (element === "Banana") {
//         alert("Banana Found");
//     }
// }

// L1.forEach(findTheBanana2);

var now = new Date();
var hour = now.getHours();

function greeting(x){
    var message = "";

    if (x < 5 || x >= 20){
        message = "Good night";
    }

    else if (x < 12){
        message = "Good morning";
    }

    else if (x < 18){
        message = "Good afternoon";
    }

    else{
        message = "Good evening";
    }

    document.getElementById("greeting").innerHTML = message;

}

if (document.getElementById("greeting")) { 
    greeting(hour);
}

function addYear(){
    var now = new Date();
    var year = now.getFullYear();
    document.getElementById("copyYear").innerHTML = "&copy; " + year + " MonoMuse. All rights reserved.";

}

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();


if (typeof $ !== 'undefined') {             
    $("#readMore").click(function() {
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });
    $("#readLess").click(function() {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });
}

function showForm(date) {
    document.getElementById("ticketForm").style.display = "block";
    document.getElementById("selectedDate").value = date;
}

function submitForm() {
    alert("Redirecting to payment system.");
}


function toggleNav() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "nav_bar") {
        nav.className += " responsive";
    } else {
        nav.className = "nav_bar";
    }
}


if (document.getElementById("map")) {
    var map = L.map('map').setView([40.4433, -79.9500], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([40.4433, -79.9500]).addTo(map);
    
}