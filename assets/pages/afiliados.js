const main = document.querySelector(".main");
const local = localStorage.getItem("afiliado");
import help5 from "../components/help5.js";
import nav from "../components/nav.js";
import footer from "../components/footer.js";
import button from "../components/buttonTop.js";

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
        <h1 class="mainInfo--title">Programa de afiliados.</h1>
        <h3 class="mainInfo--war">Gana 10% por cada servicio contratado.</h3>
        </br>
        <h3 class="mainInfo--war">Bienvenido.</h3>
        <p class="afiDes">
            Somos una empresa de asistentes migratorios que se encarga de ayudar con procesos y tr&aacute;mites migratorios a la hora de emigrar a EE.UU.
            </br></br>
            Ofrecemos un servicio de manera rápida y efectiva con asistentes migratorios especialmente preparados para estos trámites por un precio reducido.
            </br></br>
            En estos momentos nos enfocamos en dos servicios que son el parole humanitario y el permiso de trabajo, ambos con entrega en 12 horas o menos.
            </br></br>
            Por cada persona referida que contrate nuestros servicios te pagaremos el 10% del precio sobre el servicio contratado, si es un grupo familiar tamb&eacute;n te pagaremos por cada persona del grupo.
            </br></br></br></br>
            <span class="mainInfo--war">¿C&oacute;mo participo?</span>
            </br></br>
            Solo debes registrar a la persona que referiste y tus datos de cobro, esto por cada persona que refieras y sepas que va a contratar alguno de nuestros servicios.
            </br></br>
            En el caso de ser un grupo familiar, solo registras a la persona que realiza el pago.
            </br></br>
            En todo caso siempre puedes comunicarte con nosotros en <a class="afiDeLink" target="_blank" href="mailto:ayuda@themis.la">ayuda@themis.la</a> o a trav&eacute;s de nuestro <a href="https://walink.co/6e39bb" target="_blank" class="afiDeLink">whatsapp</a>.
            </br></br>
            Puedes ver c&oacute;mo funciona nuestro servicio ingresando a <a class="afiDeLink" href="/howItWorks">C&oacute;mo funciona</a>
            </br></br>
            Actualmente solo contamos con el servicio de pago de afiliados v&iacute;a <b>Zelle</b>.
            </br>
            Pagamos por cada nuevo referido en el momento que este pague el servicio, no guardamos tu dinero. <b>Pagamos al instante</b>.
            </br></br>
            Una vez que tu referido compre e ingrese el correo electr&oacute;nico que nos suministraste, automaticamente te llegar&aacute; un correo de confirmaci&oacute;n de tu venta al referido.
            </br></br>
            Una vez que oprimes, <b>afiliarme ahora</b>, podr&aacute;s conectar a tus clientes con nuestro servicio, y as&iacute; formar parte de Themis.
            </br></br>
            As&iacute; mismo, podras registrar a tus referidos en la secci&oacute;n de <b>referidos</b> en nuestro men&uacute; o ingresando a <a class="afiDeLink" href="/referir">themis.la/referir</a>
            <div class="afiBox">
            <a href="/referir" class="afiLink linkAFI"><h3 class="afiLink linkAfi">Afiliarme ahora</h3></a>
            <a href="/info/afiliados.pdf" id="pdf" class="afiLink" download><h3 class="afiLink linkDown">Descargar Info</h3></a>
            </div>
        </p>
    </div>
</header>
${help5}
${footer}
${button}
`;

// to show the button of afilitation or not in every situation case
const buttonAfi = document.querySelector(".linkAFI");
if (local) {
    buttonAfi.style.display = "none";
} else {
    buttonAfi.addEventListener("click", () => {
        localStorage.setItem("afiliado", true);
    });
}
