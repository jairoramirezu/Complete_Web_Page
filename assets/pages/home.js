const main = document.querySelector(".main");
import nav from "../components/nav.js";
import services from "../components/services.js";
import testimonial from "../components/testimonial.js";
import convertion from "../components/convertion.js";
import footer from "../components/footer.js";
import help5 from "../components/help5.js";
import button from "../components/buttonTop.js";

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
    <h1 class="mainInfo--title">Asegura tus tr&aacute;mites migratorios con nosotros.</h1>
        <div class="planCardChar">
            <div class="planCardChar--wrap">
                <img class="planCardChar--img" src="../media/check.svg" alt="check">
                <h2 class="planCardChar--des bold">En menos de 12 horas tienes tu parole tramitado</h2>
            </div>
            <div class="planCardChar--wrap">
                <img class="planCardChar--img" src="../media/check.svg" alt="check">
                <h3 class="planCardChar--des">Sin cargos extra por reaplicar o actualizar tu parole</h3>
            </div>
            <div class="planCardChar--wrap">
                <img class="planCardChar--img" src="../media/check.svg" alt="check">
                <h3 class="planCardChar--des">Aceptamos tarjeta de cr&eacute;dito</h3>
            </div>
            <div class="planCardChar--wrap">
                <img class="planCardChar--img" src="../media/check.svg" alt="check">
                <h3 class="planCardChar--des">Respuesta las 24 horas del d&iacute;a</h3>
            </div>
            <div class="planCardChar--wrap">
                <img class="planCardChar--img" src="../media/check.svg" alt="check">
                <h3 class="planCardChar--des">Nunca dejamos tu tr&aacute;mite a un lado</h3>
            </div>
            <div class="planCardChar--wrap">
                <img class="planCardChar--img" src="../media/check.svg" alt="check">
                <h3 class="planCardChar--des">Especialistas en parole</h3>
            </div>
            <div class="planCardChar--wrap">
                <img class="planCardChar--img" src="../media/check.svg" alt="check">
                <h3 class="planCardChar--des">Especialistas en tr&aacute;mites migratorios</h3>
            </div>
            <h6 class="planChar--price"><a href="./pricing" class="planChar--price_a">Chequea nuestros precios</a></h6>
        </div>
    </div>
    ${help5}
    <div class="principalChar">
        <div class="principalChar--wrap">
            <img class="principalChar--wrap--img" src="./media/fastIcon.svg" alt="F&aacute;cil y r&aacute;pido">
            <h3 class="principalChar-des">F&aacute;cil y r&aacute;pido.</h3>
        </div>
        <div class="principalChar--wrap">
            <img class="principalChar--wrap--img" src="./media/infinityIcon.svg" alt="Siempre estamos trabajando para ti">
            <h3 class="principalChar-des">Siempre trabajando para ti.</h3>
        </div>
        <div class="principalChar--wrap">
            <img class="principalChar--wrap--img" src="./media/teamIcon.svg" alt="Nuestro equipo de abogados siempre esta al tanto de tu tr&aacute;mite">
            <h3 class="principalChar-des">No perdemos un tr&aacute;mite de vista.</h3>
        </div>
    </div>
    <div class="everyTime">
        <h1 class="everyTime--title">Tus tr&aacute;mites migratorios de manera efectiva.</h1>
        <p class="everyTime--des">Hemos estado en tu lugar es dif&iacute;cil conseguir un asistente migratorio para hacer el trabajo correctamente.
        </br></br>
        Hemos simplificado el proceso, transformando la contratación de asistentes migratorios de una tarea ardua a una experiencia simple y sin problemas, a un precio que puede pagar.
        </br></br>
        Con nuestro servicio, pasará menos tiempo pendiente de sus tr&aacute;mites y más tiempo cosechando las recompensas de tenerlos tramitados a tiempo y sin errores.</p>
    </div>
    <div class="experience">
        <h1 class="experience--title">Experimenta las ventajas de tener un equipo de asistentes migratorios a tu disposici&oacute;n.</h1>
        <div class="C768">
            <div class="experience--wrap">
                <img class="services--wrap__img" src="./media/timeIcon.svg" alt="Ahorra tiempo">
                <h3 class="experience--sub">Ahorra tiempo</h3>
                <h6 class="experience--des">Solicita cualquiera de nuestros tr&aacute;mites migratorios y tenlo procesado en menos de 12 horas.</h6>
            </div>
            <div class="experience--wrap">
                <img class="services--wrap__img" src="./media/moneyIcon.svg" alt="Ahorra dinero">
                <h3 class="experience--sub">Ahorra dinero</h3>
                <h6 class="experience--des">Trabajamos por una fracci&oacute;n del costo. No quiebres por tus tr&aacute;mites.</h6>
            </div>
            <div class="experience--wrap">
                <img class="services--wrap__img" src="./media/qualityIcon.svg" alt="Calidad de servicio">
                <h3 class="experience--sub">Calidad garantizada</h3>
                <h6 class="experience--des">Los tr&aacute;mites que necesites los tendremos listos.</h6>
            </div>
        </div>
        <div class="C768">
            <div class="experience--wrap">
                <img class="services--wrap__img" src="./media/riskIcon.svg" alt="Sin riesgo">
                <h3 class="experience--sub">Sin riesgo</h3>
                <h6 class="experience--des">Puedes estar con nosotros todo el proceso, cont&aacute;ctanos cuando gustes.</h6>
            </div>
            <div class="experience--wrap">
                <img class="services--wrap__img" src="./media/professionalsIcon.svg" alt="Trabaja con profesionales">
                <h3 class="experience--sub">Trabaja con profesionales</h3>
                <h6 class="experience--des">Deja de trabajar con asistentes migratorios independientes que dejan tu tr&aacute;mite abandonado.</h6>
            </div>
            <div class="experience--wrap">
                <img class="services--wrap__img" src="./media/balanceIcon.svg" alt="Expertos en la industria">
                <h3 class="experience--sub">Expertos en el &aacute;rea</h3>
                <h6 class="experience--des">Cualquiera que sea tu tr&aacute;mite migratorio, tenemos un asistente con la experiencia para tramitarlo.</h6>
            </div>
        </div>
    </div>
    ${convertion}
    <div class="wasteMoney">
        <h1 class="wasteMoney--title">No sigas desperdiciando dinero y tiempo en tus tr&aacute;mites migratorios.</h1>
        <div class="C768">
            <h3 class="wasteMoney--des">Creamos un equipo de asistentes que te brinda como cliente un tr&aacute;mite seguro, r&aacute;pido y confiable por una fracci&oacute;n del costo.</h3>
            <img class="wasteMoney--img" src="./media/hand-money.webp" alt="ahorra dinero">
        </div>
    </div>
    ${services}
    ${testimonial}
<header>
${footer}
${button}
`;
