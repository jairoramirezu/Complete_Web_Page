const main = document.querySelector(".main");
import nav from "../components/nav.js";
import testimonial from "../components/testimonial.js";
import convertion from "../components/convertion.js";
import footer from "../components/footer.js";
import help5 from "../components/help5.js";
import button from "../components/buttonTop.js";

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
        <h1 class="mainInfo--title">Sobre el parole.</h1>
        <h2 class="mainInfo--description__title">
            El parole es un proceso donde pueden participar las nacionalidades cubanas, haitianas, nicaragüenses, venezolanas y ucranianas.
            </br></br>
            El gobierno de Estados Unidos puede otorgar las autorizaciones de viaje de hasta 30.000 no ciudadanos cada mes.
            </br></br>
            Este proceso busca beneficiar a posibles migrantes con un permiso de permanencia temporal.
            </br></br>
            Para muchos este programa de inmigración les permite ingresar a Estados Unidos legalmente por dos años, y esto ha representado una gran oportunidad para cada uno de ellos.
            </br></br>
            Debido al gran alcance del programa, la mitad de las revisiones se seleccionan de manera aleatoria de entre todos los casos pendientes de revisión. La otra mitad se revisa por orden de envío.
        </h2>
    </div>
    ${help5}
    <div class="faq" id="faq">
        <div class="faqCard">
            <h1 class="faqCard--title">Preguntas frecuentes sobre el parole.</h1>
            <div class="displaysFaq"></div>
        </div>
    </div>
    ${convertion}
    ${testimonial}
</header>
${footer}
${button}
`;
