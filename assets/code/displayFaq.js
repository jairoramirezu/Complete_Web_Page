import faqParoleQ from "../data/faq-parole.js";
import faqG from "../data/faqG.js";
const faqCardInfo = document.querySelector(".displaysFaq");
const fragment = document.createDocumentFragment();
const href = document.location.href.split("/", [4]);

// to print the faqs by number and data you selected
const faqParole = (url, num) => {
    for (let i = 0; i < num; i++) {
        let element = url[i];
        let print = document.createElement("div");
        print.classList.add("faqCard--info");
        if (href[3] == "faq") {
            print.innerHTML = `
            <h3 class="faqCard--name">${element.question}</h3>
            <details>
            <summary class="faqCardSum">Ver respuesta</summary>
            <h4 class="faqCard--des marginButtonFAQ">${element.answer}</h4>
            </details>
            </br>
        `;
        } else {
            print.innerHTML = `
            <h3 class="faqCard--name">${element.question}</h3>
            <h4 class="faqCard--des">${element.answer}</h4>
        `;
        }
        fragment.appendChild(print);
    }
    faqCardInfo.appendChild(fragment);
};
// call the function to print the faqs by page selected
if (href[3] === "parole") {
    faqParole(faqParoleQ, faqParoleQ.length);
} else if (href[3] === "pricing") {
    faqParole(faqG, 3);
} else if (href[3] === "faq") {
    faqParole(faqG, faqG.length);
    faqParole(faqParoleQ, faqParoleQ.length);
}
// search bar
const searchBar = document.querySelector(".buscarBar");
const title = document.querySelectorAll(".faqCard--name");
const arr = [];
const noCoincidence = document.querySelector(".noCoincidence");
// to prevent accents
const accent_map = {
    á: "a",
    é: "e",
    è: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "a",
    É: "e",
    è: "e",
    Í: "i",
    Ó: "o",
    Ú: "u",
};
function accent_fold(s) {
    if (!s) {
        return "";
    }
    let ret = "";
    for (var i = 0; i < s.length; i++) {
        ret += accent_map[s.charAt(i)] || s.charAt(i);
    }
    return ret;
}
// fucntion to filter the search bar
function filterBySearch() {
    title.forEach((e) => {
        if (
            accent_fold(e.textContent)
                .toLowerCase()
                .includes(accent_fold(searchBar.value).toLowerCase())
        ) {
            e.parentElement.style.display = "block";
        } else {
            e.parentElement.style.display = "none";
            arr.push(
                accent_fold(e.textContent)
                    .toLowerCase()
                    .includes(accent_fold(searchBar.value).toLowerCase())
            );
        }
        if (arr.length == title.length) {
            noCoincidence.style.display = "block";
        } else {
            noCoincidence.style.display = "none";
        }
    });
}
searchBar.addEventListener("input", () => {
    filterBySearch();
    arr.splice(0, arr.length);
});
