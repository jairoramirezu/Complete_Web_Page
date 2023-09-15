const main = document.querySelector(".main");
import nav from "../components/nav.js";
import convertion from "../components/convertion.js";
import button from "../components/buttonTop.js";
import footer from "../components/footer.js";
import testimonial from "../components/testimonial.js";

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
        <h1 class="mainInfo--title">Somos la forma más fácil para hacer tus trámites migratorios y tenerlos listos en menos de 12 horas.</h1>
        <div class="mainInfo--description">
            <div class="testimonialVidBox">
                <video class="testimonialVid" poster="../../media/themis - main logo-45.png" src="../../media/howItWorksPC.mp4" preload="auto"  controls alt="Video de como funciona"></video>
            </div>
        </div>
    </div>
    <div class="services">
        <div class="C768">
            <div class="C768C centerDiv">
                <h1 class="services--title">Ten tus tr&aacute;mites migratorios en 3 pasos...</h1>
                <div class="services--wrap">
                    <h1 class="services--titleN">1</h1>
                    <h2 class="services--wrap__des">Crea tu solicitud</h2>
                </div>
                <div class="services--wrap">
                    <h1 class="services--titleN">2</h1>
                    <h2 class="services--wrap__des">Llena el formulario</h2>
                </div>
                <div class="services--wrap">
                    <h1 class="services--titleN">3</h1>
                    <h2 class="services--wrap__des">Recibe tu tr&aacute;mite</h2>
                </div>
            </div>
        </div>
    </div>
    ${testimonial}
    ${convertion}
<header>
${footer}
${button}
`;