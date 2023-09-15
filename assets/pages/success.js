const main = document.querySelector(".main");
import nav from "../components/nav.js";
import footer from "../components/footer.js";
import button from "../components/buttonTop.js";

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
        <h1 class="mainInfo--title">¡Todo listo!</h1>
        <h3 class="mainInfo--war">Nos contactaremos v&iacute;a correo electr&oacute;nico.</h3>
        <h3 class="mainInfo--war second">Cualquier duda no dude en comunicarse con nosotros.</h3>
        <div class="center">
            <img class="main--warning" src="../../media/checkMark.svg" alt="warning">
        </div>
        <h3 class="mainInfo--sub">Gracias por confiar en Themis.</h3>
    </div>
</header>
${footer}
${button}
`;

// to redirect to home
setTimeout(() => {
    window.location.replace("/");
}, "10000");
