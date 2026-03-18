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

greeting(hour);

function addYear(){
    var now = new Date();
    var year = now.getFullYear();
    document.getElementById("copyYear").innerHTML = "&copy; " + year + " MonoMuse. All rights reserved.";

}
