const main = document.querySelector(".main");
import nav from "../components/nav.js";
import services from "../components/services.js";
import testimonial from "../components/testimonial.js";
import convertion from "../components/convertion.js";
import footer from "../components/footer.js";
import guarantee from "../components/guarantee.js";
import button from "../components/buttonTop.js";

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
        <h1 class="mainInfo--title">Disminuye costos, no est&aacute;ndares.</h1>
        <div class="mainInfo--description">
            <h2 class="mainInfo--description__title">Asegura tus procesos migratorios con nuestro equipo de asistentes.</h2>
            <h2 class="mainInfo--description__sub">No dejamos tramites abandonados.</h2>
        </div>
    </div>
    <div class="C768 center">
        <div class="planCard parolCard" id="parolCard">
            <div class="starPlan">
                <div class="starPlan--wrap">
                    <img class="starPlan--img" src="../../media/star.svg" alt="Most popular service">
                    <h3 class="starPlan--title">M&aacute;s popular</h3>
                </div>
            </div>
            <div class="mainPlan">
                <h1 class="planCard--title">Parole</h1>
                <h3 class="planCard--des">Forma I-134</h3>
            </div>
            <div class="centerCard">
                <div class="planCardPrice">
                    <h1 class="planCardPrice--title">$249</h1>
                    <h2 class="planCardPrice--des">por persona</h2>
                </div>
                <div class="buttonPlan parolButton">
                    <h1 class="buttonPlanTitle">Servicio parole</h1>
                </div>
                <h6 class="planChar--price"><a href="../../pricing/Parole.pdf" class="planChar--price_a" download>¿Qu&eacute; necesito?</a></h6>
                <h2 class="planCardAlt">Ideal para nacionalidad Venezolana, Cubana, Haitiana, Nicaragüense y Ucraniana.</h2>
                <div class="planCardChar">
                    <div class="planCardChar--wrap">
                        <img class="planCardChar--img" src="../../media/check.svg" alt="check">
                        <h2 class="planCardChar--des bold">Tr&aacute;mite entregado en menos de 12 horas</h2>
                    </div>
                    <div class="planCardChar--wrap">
                        <img class="planCardChar--img" src="../media/check.svg" alt="check">
                        <h3 class="planCardChar--des">Aceptamos tarjeta de cr&eacute;dito</h3>
                    </div>
                    <div class="planCardChar--wrap">
                        <img class="planCardChar--img" src="../../media/check.svg" alt="check">
                        <h3 class="planCardChar--des">Sin cargos extra por reaplicar o actualizar tu parole</h3>
                    </div>
                    <div class="planCardChar--wrap">
                        <img class="planCardChar--img" src="../../media/check.svg" alt="check">
                        <h3 class="planCardChar--des">Especialistas en parole</h3>
                    </div>
                    <div class="planCardChar--wrap">
                        <img class="planCardChar--img" src="../../media/check.svg" alt="check">
                        <h3 class="planCardChar--des">Especialistas en tr&aacute;mites migratorios</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="planCard expressCard" id="expressCard">
            <div class="mainPlan">
                <h1 class="planCard--title marginTop">Permiso de trabajo</h1>
                <h3 class="planCard--des">Forma I-765</h3>
            </div>
            <div class="centerCard">
                <div class="planCardPrice">
                    <h1 class="planCardPrice--title">$149</h1>
                    <h2 class="planCardPrice--des">por persona</h2>
                </div>
                <div class="buttonPlan expressButton">
                    <h1 class="buttonPlanTitle">Servicio trabajo</h1>
                </div>
                <h6 class="planChar--price"><a href="../../pricing/Job.pdf" class="planChar--price_a" download>¿Qu&eacute; necesito?</a></h6>
                <h2 class="planCardAlt">Ideal para nacionales y migrantes de todas las nacionalidades.</h2>
                <div class="planCardChar">
                    <div class="planCardChar--wrap">
                        <img class="planCardChar--img" src="../../media/check.svg" alt="check">
                        <h2 class="planCardChar--des bold">Tr&aacute;mite entregado en menos de 12 horas</h2>
                    </div>
                    <div class="planCardChar--wrap">
                        <img class="planCardChar--img" src="../media/check.svg" alt="check">
                        <h3 class="planCardChar--des">Aceptamos tarjeta de cr&eacute;dito</h3>
                    </div>
                    <div class="planCardChar--wrap">
                        <img class="planCardChar--img" src="../../media/check.svg" alt="check">
                        <h3 class="planCardChar--des">M&aacute;s de 400 permisos de trabajo tramitados de forma exitosa</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ${testimonial}
    ${services}
    ${guarantee}
    <div class="faq" id="faq">
        <div class="faqCard">
            <h1 class="faqCard--title">Preguntas frecuentes.</h1>
            <div class="displaysFaq"></div>
            <h6 class="planChar--price"><a href="../../faq" class="planChar--price_a">Ver m&aacute;s</a></h6>
        </div>
    </div>
    ${convertion}
</header>
${footer}
${button}
`;