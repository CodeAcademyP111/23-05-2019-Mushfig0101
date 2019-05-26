// let username_input = document.querySelector("#username");

// username_input.addEventListener("focus", function () {
//     // console.log("Focus Olundu");
// });


// username_input.addEventListener("blur", function () {
//     console.log(this.value);
//     if (this.value == "") {
//         var str = this.getAttribute("data-msg");
//         // console.log(this.getAttribute("data-msg"));
//         if (this.nextElementSibling == null) {
//             var small = alertText(str);
//             this.parentNode.appendChild(small);
//         }
//     }

//     else {
//         if (this.nextElementSibling != null) {
//             this.nextElementSibling.remove();
//         }

//     }

// });

// username_input.addEventListener("keyup", function () {
//     if (this.value != "") {

//         if (this.nextElementSibling != null) {
//             this.nextElementSibling.remove();
//         }

//     } else {
//         if (this.nextElementSibling == null) {
//             var str = this.getAttribute("data-msg");
//             var small = alertText(str);
//             this.parentNode.appendChild(small);
//         }
//     }
// })

/* <small id="emailHelp" class="text-danger">Text</small> */
let password_client = document.querySelector("#password");
let pass_confirm = document.querySelector("#password_confirm");
// console.log(pas_confirm);
// console.log(pass);

let city = document.querySelector("#city");
city.addEventListener("change", function () {
    // console.log(this.value);
    if (this.value == 1) {

        city.parentNode.nextElementSibling.classList.remove("d-none");
    }
    else {
        city.parentNode.nextElementSibling.classList.add("d-none");

    }
});
//----------------------------------------------------------------------------------
function alertText(str) {             //sdelaem element small
    let small = document.createElement("small")
    small.classList.add("text-danger");
    small.innerText = str;
    return small;
}
//---------------------------------------------------------------------
let requireds = document.querySelectorAll(".required");
// console.log(requireds);
for (let i = 0; i < requireds.length; i++) {
    requireds[i].addEventListener("blur", function () {
        console.log(this.value);
        if (this.value == "") {
            var str = this.getAttribute("data-msg");
            // console.log(this.getAttribute("data-msg"));
            if (this.nextElementSibling == null) {
                var small = alertText(str);
                this.parentNode.appendChild(small);
            }
        }

        else {
            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove();
            }
        }
    });
}
//--------------------------------------------------------------
for (let j = 0; j < requireds.length; j++) {
    requireds[j].addEventListener("keyup", function () {
        if (this.value != "") {

            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove();
            }

        } else {
            if (this.nextElementSibling == null) {
                var str = this.getAttribute("data-msg");
                var small = alertText(str);
                this.parentNode.appendChild(small);
            }
        }
    })

}

//-------------------------------------------------------------------------------------
let form = document.querySelector("#registr");
// console.log(form);
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    for (let i = 0; i < requireds.length; i++) {
        if (requireds[i].value == "") {
            var str = requireds[i].getAttribute("data-msg");
            if (requireds[i].nextElementSibling == null) {
                var small = alertText(str);
                requireds[i].parentNode.appendChild(small);
            }
        }


    }
})


password_client.addEventListener("blur", function () {
    if (this.value != "") {
        if (this.value.length < 6) {
            this.value = "";
            var str = this.getAttribute("data-error");
            var small = alertText(str);
            this.parentNode.appendChild(small);

        }
    }
})

pass_confirm.addEventListener("blur", function () {

    if (this.value != "") {
        if (password_client.value != this.value) {
            this.value = "";
            var str = this.getAttribute("data-error");
            var small = alertText(str);
            small.classList.replace("text-danger", "text-warning");
            this.parentNode.appendChild(small);
        }

       else if (this.nextElementSibling == null) {
            var str = this.getAttribute("data-succes");
            var small = alertText(str);
            small.classList.replace("text-danger", "text-success");
            this.parentNode.appendChild(small);
        }
    }
})
let email_password=document.querySelector("#email_password");
// console.log(email_password);

email_password.addEventListener("blur", function () {
    if (this.value != "") {
        if (this.value.length < 8) {
            this.value = "";
            var str = this.getAttribute("data-erroremail");   
            var small = alertText(str);
            small.classList.replace("text-danger", "text-warning");
            this.parentNode.appendChild(small);

        }
    }
})

//------------------------------Yoxlanilir tam hazir deyil/ join-e gore 
// let email = document.querySelector("#email");
// let email_password = document.querySelector("#email_password");
// console.log(email);
// console.log(email_password);

// let array = [".com", "@gmail.com", ".@gmail.ru"];
// let massiv = array.join();
// // console.log(massiv);

// email.addEventListener("blur", function () {
//     if (this.value != "") {
//         for (let i = 0; i < massiv.length; i++) {
//             if (massiv[i].includes(email.value)) {
//                 var str = this.getAttribute("data-succesEmail");
//                 var small = alertText(str);
//                 this.parentNode.appendChild(small);


//             }

//         }

//     }
// })
//-------------------------------------------------------------------------------