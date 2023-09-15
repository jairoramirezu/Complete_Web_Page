const main = document.querySelector(".main");
import nav from "../components/nav.js";
import footer from "../components/footer.js";
import convertion from "../components/convertion.js";
import button from "../components/buttonTop.js";
import history from "../components/history.js";

main.innerHTML = `
${nav}
<header>
    <div class="C768">
        <div>
            <h1 class="mainInfo--title">Existimos para brindarte el <span class="blue">mejor servicio de asistencia migratoria</span>.</h1>
            <h2 class="mainInfo--description__title">Ahorra tiempo, dinero y frustraciones con nuestro equipo de asistentes.</h2>
        </div>
        <img class="mainImg" src="../../media/whyUs-Main.webp">
    </div>
    <h2 class="mainInfo--description__sec">En promedio, cada uno de nuestros clientes logra...</h2>
    <div class="C768 center">
        <div class="divHelpOver">
            <h1 class="helpOver"><span>$15,000</span></h1>
            <h3>en ahorro anual</h3>
        </div>
        <div class="divHelpOver">
            <h1 class="helpOver"><span>240+</span></h1>
            <h3>horas ahorradas por año</h3>
        </div>
        <div class="divHelpOver">
            <h1 class="helpOver"><span>5+</span></h1>
            <h3>tr&aacute;mites resueltos por año</h3>
        </div>
    </div>
    <div class="faq">
        <h1 class="experience--title">Nuestros valores.</h1>
        <div class="C768">
            <div class="experience--wrap">
                <img class="services--wrap__img" src="../media/quality.svg" alt="Calidad">
                <h3 class="experience--sub">Calidad</h3>
                <h6 class="experience--des">Brindamos soporte y tr&aacute;mites en tiempo record, creando una experiencia premiun para nuestros clientes.</h6>
            </div>
            <div class="experience--wrap">
                <img class="services--wrap__img" src="../media/account.svg" alt="Responsabilidad">
                <h3 class="experience--sub">Responsabilidad</h3>
                <h6 class="experience--des">Somos personalmente responsables de cumplir con nuestros compromisos.</h6>
            </div>
            <div class="experience--wrap">
                <img class="services--wrap__img" src="../media/punctuality.svg" alt="Puntualidad">
                <h3 class="experience--sub">Puntualidad</h3>
                <h6 class="experience--des">Solicita tu tr&aacute;mite en 5 minutos y tenlo en tus manos en menos de 12 horas.</h6>
            </div>
        </div>
        <div class="C768 center">
            <div class="experience--wrap">
                <img class="services--wrap__img" src="../media/team.svg" alt="Trabajo en equipo">
                <h3 class="experience--sub">Trabajo en equipo</h3>
                <h6 class="experience--des">Trabajamos en conjunto con nuestros clientes para satisfacer sus necesidades y ayudarlos a lograr sus objetivos.</h6>
            </div>
            <div class="experience--wrap">
                <img class="services--wrap__img" src="../media/customer.svg" alt="Cliente primero">
                <h3 class="experience--sub">Primero el cliente</h3>
                <h6 class="experience--des">Desarrollamos relaciones que marcan una diferencia positiva y valiosa en la vida de nuestros clientes.</h6>
            </div>
        </div>
    </div>
    <div class="mainInfo other">
        <h1 class="mainInfo--title second">¿Qu&eacute; nos hace especiales?</h1>
        <h2 class="mainInfo--description__title">
            <span class="anBlue">Siempre entregamos tus tramites a tiempo y sin errores.</span>
            </br></br>
            ¿Alguna vez perdió tanto tiempo con un tr&aacute;mite que quería arrancarse el pelo?
            </br></br>
            ¿Estabas estancando en un tr&aacute;mite que parec&iacute;a sencillo?
            </br></br>
            Hemos estado en tu lugar, es dificil encontrar un asistente migratorio adecuado para el trabajo.
            </br></br>
            All&iacute; es donde entramos nosotros, los asistentes migratorios se equivocan a menudo, mucho m&aacute; de lo que piensas.
            </br></br>
            Es por ese motivo que nosotros asignamos un equipo para cada uno de los tr&aacute;mites migratorios a procesar, nos gusta reducir a 0 los errores que pueden ser cometidos, ya que estos atrasan tus procesos migratorios.
            </br></br>
            <span class="anBlue">¿El resultado?</span>
            </br></br>
            Con nuestro servicio, pasará menos tiempo pendiente de sus trámites y más tiempo cosechando las recompensas de tenerlos tramitados a tiempo y sin errores.
        </h2>
    </div>
    ${history}
    ${convertion}
</header>
${footer}
${button}
`;
