const main = document.querySelector(".main");
import nav from "../components/nav.js";
import footer from "../components/footer.js";
import button from "../components/buttonTop.js";

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
        <h1 class="mainInfo--title">Algo ha salido mal,
        </br>
        ser&aacute; redirigido a la p&aacute;gina principal.</h1>
        <div class="center">
            <img class="main--warning" src="../../media/warning.svg" alt="warning">
        </div>
    </div>
</header>
${footer}
${button}
`;

// to redirect to home
setTimeout(() => {
    window.location.replace("/");
}, "10000");
