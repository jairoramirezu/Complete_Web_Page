const main = document.querySelector(".main");
import nav from "../components/nav.js";
import footer from "../components/footer.js";
import button from "../components/buttonTop.js";
import convertion from "../components/convertion.js";

main.innerHTML = `
${nav}
<header>
    <h1 class="faqCard--title">Preguntas frecuentes.</h1>
    <input class="buscarBar" type="text" placeholder="Buscar...">
    <div class="faq topMin" id="faq">
        <div class="faqCard">
            <div class="displaysFaq"></div>
            <h3 class="noCoincidence">No se encontr&oacute; ninguna coincidencia.</h3>
        </div>
    </div>
</header>
${convertion}
${footer}
${button}
`;
