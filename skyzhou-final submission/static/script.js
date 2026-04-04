document.addEventListener("DOMContentLoaded", function () {
    setGreeting();
    addYear();
    ActiveNav();
    setupReadMore();
    setupFAQ();
    setupTicketForm();
    setupConfirmation();
    setupMap();
});

function setGreeting() {
    var greeting = document.getElementById("greeting");
    if (!greeting) return;

    var hour = new Date().getHours();

    if (hour < 12) {
        greeting.innerHTML = "Good morning, welcome to MonoMuse";
    } else if (hour < 18) {
        greeting.innerHTML = "Good afternoon, welcome to MonoMuse";
    } else {
        greeting.innerHTML = "Good evening, welcome to MonoMuse";
    }
}

function addYear() {
    var yearText = document.getElementById("copyYear");
    if (yearText) {
        yearText.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}

function ActiveNav() {
    var links = document.querySelectorAll(".nav_bar a");
    var current = window.location.pathname.split("/").pop();

    links.forEach(function (link) {
        var href = link.getAttribute("href");
        if (href && href.split("/").pop() === current) {
            link.classList.add("active");
        }
    });
}

function toggleNav() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "nav_bar") {
        nav.className += " responsive";
    } else {
        nav.className = "nav_bar";
    }
}

function setupReadMore() {
    if ($("#readMore").length) {
        $("#readMore").click(function () {
            $("#longIntro").slideDown();
            $("#readMore").hide();
            $("#readLess").show();
        });

        $("#readLess").click(function () {
            $("#longIntro").slideUp();
            $("#readLess").hide();
            $("#readMore").show();
        });
    }
}

function setupFAQ() {
    if ($(".faq-question").length) {
        $(".faq-question").click(function () {
            $(this).next(".faq-answer").slideToggle();
        });
    }
}

function setupTicketForm() {
    var form = document.getElementById("ticketForm");
    if (!form) return;

    var visitDate = document.getElementById("visitDate");
    var ticketType = document.getElementById("ticketType");
    var quantity = document.getElementById("quantity");
    var email = document.getElementById("email");
    var zipCode = document.getElementById("zipCode");
    var mailingList = document.getElementById("mailingList");
    var totalPrice = document.getElementById("totalPrice");

    function clearErrors() {
        document.getElementById("dateError").innerHTML = "";
        document.getElementById("typeError").innerHTML = "";
        document.getElementById("quantityError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("zipError").innerHTML = "";
    }

    function updateTotal() {
        var q = parseInt(quantity.value);
        if (!isNaN(q) && q >= 1 && q <= 10) {
            totalPrice.innerHTML = "$" + q * 18;
        } else {
            totalPrice.innerHTML = "$0";
        }
    }

    quantity.addEventListener("input", updateTotal);
    ticketType.addEventListener("change", updateTotal);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        clearErrors();

        var valid = true;
        var q = parseInt(quantity.value);
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var zipPattern = /^\d{5}$/;

        if (visitDate.value === "") {
            document.getElementById("dateError").innerHTML = "Please select a visit date.";
            valid = false;
        }

        if (ticketType.value === "") {
            document.getElementById("typeError").innerHTML = "Please select a ticket type.";
            valid = false;
        }

        if (isNaN(q) || q < 1 || q > 10) {
            document.getElementById("quantityError").innerHTML = "Please enter a quantity from 1 to 10.";
            valid = false;
        }

        if (email.value === "" || !emailPattern.test(email.value)) {
            document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
            valid = false;
        }

        if (zipCode.value !== "" && !zipPattern.test(zipCode.value)) {
            document.getElementById("zipError").innerHTML = "Zip code must be five digits.";
            valid = false;
        }

        if (valid) {
            var total = q * 18;
            var url = "checkout.html?date=" + encodeURIComponent(visitDate.value)
                + "&type=" + encodeURIComponent(ticketType.value)
                + "&quantity=" + encodeURIComponent(q)
                + "&email=" + encodeURIComponent(email.value)
                + "&mailing=" + encodeURIComponent(mailingList.checked ? "Yes" : "No")
                + "&total=" + encodeURIComponent(total);

            window.location.href = url;
        }
    });
}

function setupConfirmation() {
    if (!document.getElementById("confirmDate")) return;

    var params = new URLSearchParams(window.location.search);

    document.getElementById("confirmDate").innerHTML = params.get("date") || "Not available";
    document.getElementById("confirmType").innerHTML = params.get("type") || "Not available";
    document.getElementById("confirmQuantity").innerHTML = params.get("quantity") || "Not available";
    document.getElementById("confirmEmail").innerHTML = params.get("email") || "Not available";
    document.getElementById("confirmMailing").innerHTML = params.get("mailing") || "Not available";
    document.getElementById("confirmTotal").innerHTML = "$" + (params.get("total") || "0");
}

function setupMap() {
    if (document.getElementById("map") && typeof L !== "undefined") {
        var map = L.map("map").setView([40.4433, -79.9500], 14);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        L.marker([40.4433, -79.9500]).addTo(map)
            .bindPopup("MonoMuse<br>5030 Forbes Avenue, Pittsburgh");
    }
}