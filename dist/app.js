"use strict";
window.onload = function () {
    var listCount = 0;
    var filled = 0;
    var total = 0;
    var avg = 0;
    var num = 0;
    var btnSubmit = document.getElementById("submit");
    var txtName = document.getElementById("name");
    var txtReview = document.getElementById("review");
    var txtRating = document.getElementById("ratingstars");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var ten = document.getElementById("ten");
    var templateInsertLocation = document.getElementById("inject");
    one.addEventListener("click", function () {
        fillStars(filled, 1);
        txtRating = document.getElementById("ratingstars");
    });
    two.addEventListener("click", function () {
        fillStars(filled, 2);
        txtRating = document.getElementById("ratingstars");
    });
    three.addEventListener("click", function () {
        fillStars(filled, 3);
        txtRating = document.getElementById("ratingstars");
    });
    four.addEventListener("click", function () {
        fillStars(filled, 4);
        txtRating = document.getElementById("ratingstars");
    });
    five.addEventListener("click", function () {
        fillStars(filled, 5);
        txtRating = document.getElementById("ratingstars");
    });
    btnSubmit.addEventListener("click", function () {
        if (submitHelp()) {
            var templateClone = getTemplateClone("responseTemplate");
            templateClone.id = templateClone.id + listCount;
            listCount++;
            templateClone.content.getElementById("responseName").innerText =
                txtName.value;
            templateClone.content.getElementById("responseReview").innerText =
                txtReview.value;
            templateClone.content.getElementById("responseDate").innerText = getDate();
            templateClone.content.getElementById("responseRating").innerHTML =
                txtRating.innerHTML;
            templateInsertLocation.appendChild(templateClone.content);
            txtName.value = "";
            txtReview.value = "";
            total = total + filled;
            num++;
            avg = Math.round(total / num);
            console.log(avg);
            filled = 0;
            for (var i = 1; i <= 5; i++) {
                starHelper(i, 0);
                filled = 0;
            }
            six.classList.remove("fas", "far", "fa-star", "fa-3x");
            seven.classList.remove("fas", "far", "fa-star", "fa-3x");
            eight.classList.remove("fas", "far", "fa-star", "fa-3x");
            nine.classList.remove("fas", "far", "fa-star", "fa-3x");
            ten.classList.remove("fas", "far", "fa-star", "fa-3x");
            var leftover = 0;
            for (var i = 1; i <= avg; i++) {
                if (i === avg) {
                    leftover = i + 1;
                }
                if (i === 1) {
                    six.classList.add("fas", "fa-star", "fa-3x");
                }
                if (i === 2) {
                    seven.classList.add("fas", "fa-star", "fa-3x");
                }
                if (i === 3) {
                    eight.classList.add("fas", "fa-star", "fa-3x");
                }
                if (i === 4) {
                    nine.classList.add("fas", "fa-star", "fa-3x");
                }
                if (i === 5) {
                    ten.classList.add("fas", "fa-star", "fa-3x");
                }
            }
            for (; leftover <= 5; leftover++) {
                if (leftover === 1) {
                    six.classList.add("far", "fa-star", "fa-3x");
                }
                if (leftover === 2) {
                    seven.classList.add("far", "fa-star", "fa-3x");
                }
                if (leftover === 3) {
                    eight.classList.add("far", "fa-star", "fa-3x");
                }
                if (leftover === 4) {
                    nine.classList.add("far", "fa-star", "fa-3x");
                }
                if (leftover === 5) {
                    ten.classList.add("far", "fa-star", "fa-3x");
                }
            }
        }
    });
    function submitHelp() {
        if (!txtName.value) {
            alert("Please Enter a Name!");
            return false;
        }
        return true;
    }
    function getTemplateClone(templateID) {
        var _a;
        return (_a = document
            .getElementById(templateID)) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
    }
    function getDate() {
        return new Date().toString().substr(3, 12);
    }
    function fillStars(numFilled, onePassed) {
        if (onePassed === numFilled) {
            for (var i = 1; i <= onePassed; i++) {
                starHelper(i, 0);
                filled = 0;
            }
        }
        else {
            if (numFilled > onePassed) {
                for (; numFilled > onePassed; numFilled--) {
                    starHelper(numFilled, 0);
                }
            }
            else {
                for (var i = 1; i <= onePassed; i++) {
                    starHelper(i, 1);
                }
            }
        }
    }
    function starHelper(passed, type) {
        if (passed === 5) {
            if (type === 1) {
                five.classList.remove("far", "fa-star", "fa-2x");
                five.classList.add("fas", "fa-star", "fa-2x");
                filled = 5;
            }
            else {
                five.classList.remove("fas", "fa-star", "fa-2x");
                five.classList.add("far", "fa-star", "fa-2x");
                filled = 4;
            }
        }
        if (passed === 4) {
            if (type === 1) {
                four.classList.remove("far", "fa-star", "fa-2x");
                four.classList.add("fas", "fa-star", "fa-2x");
                filled = 4;
            }
            else {
                four.classList.remove("fas", "fa-star", "fa-2x");
                four.classList.add("far", "fa-star", "fa-2x");
                filled = 3;
            }
        }
        if (passed === 3) {
            if (type === 1) {
                three.classList.remove("far", "fa-star", "fa-2x");
                three.classList.add("fas", "fa-star", "fa-2x");
                filled = 3;
            }
            else {
                three.classList.remove("fas", "fa-star", "fa-2x");
                three.classList.add("far", "fa-star", "fa-2x");
                filled = 2;
            }
        }
        if (passed === 2) {
            if (type === 1) {
                two.classList.remove("far", "fa-star", "fa-2x");
                two.classList.add("fas", "fa-star", "fa-2x");
                filled = 2;
            }
            else {
                two.classList.remove("fas", "fa-star", "fa-2x");
                two.classList.add("far", "fa-star", "fa-2x");
                filled = 1;
            }
        }
        if (passed === 1) {
            if (type === 1) {
                one.classList.remove("far", "fa-star", "fa-2x");
                one.classList.add("fas", "fa-star", "fa-2x");
                filled = 1;
            }
            else {
                one.classList.remove("fas", "fa-star", "fa-2x");
                one.classList.add("far", "fa-star", "fa-2x");
                filled = 0;
            }
        }
    }
};
//# sourceMappingURL=app.js.map