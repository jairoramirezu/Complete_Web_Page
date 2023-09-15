const email_URL = "mailto:ayuda@themis.la";
const instagram_URL = "https://www.instagram.com/themis.la/";
const whatsapp_URL = "https://walink.co/6e39bb";
const fb_URL = "https://www.facebook.com/themis.laa";
const linkedin_URL = "https://www.linkedin.com/company/themisla";
const yt_URL = "https://www.youtube.com/@themisla";

const footer = `
<footer class="footer">
    <div class="fotterO800">
        <div>
            <div class="CSmall">
            <a class="footer--links" href="/"><img class="logo" src="../media/themisMainLogo.svg" alt="Themis"></a>
            <a class="footer--links" href=${email_URL} target="_blank">ayuda@themis.la</a>
            <a class="footer--links">+1 (786) 854-5809</a>
            </div>
            <div>
                <a href=${whatsapp_URL} target="_blank"><img class="footer--socialIcons" src="../media/whatsappLogo.svg" alt="whatsapp"></a>
                <a href=${instagram_URL} target="_blank"><img class="footer--socialIcons" src="../media/instagramLogo.svg" alt="instagram"></a>
                <a href=${fb_URL} target="_blank"><img class="footer--socialIcons" src="../media/fbIcon.svg" alt="facebook"></a>
                <a href=${linkedin_URL} target="_blank"><img class="footer--socialIcons" src="../media/linkedinIcon.svg" alt="linkedin"></a>
                <a href=${yt_URL} target="_blank"><img class="footer--socialIcons" src="../media/ytIcon.svg" alt="yoputube"></a>
            </div>
        </div>
        <ul class="menuFooter">
            <div class="C0px">
                <li class="mainMenu--li footerLi"><a class="footer--links-N" href="/parole">Parole</a></li>
                <li class="mainMenu--li footerLi"><a class="footer--links-N" href="/pricing">Precios</a></li>
                <li class="mainMenu--li footerLi"><a class="footer--links-N" href="/howItWorks">C&oacute;mo funciona</a></li>
                <li class="mainMenu--li footerLi"><a class="footer--links-N" href="/why_us">Por qu&eacute; nosotros</a></li>
                <li class="mainMenu--li footerLi"><a class="footer--links-N" href="/faq">Preguntas frecuentes</a></li>
                </div>
                <div class="C0px">
                <li class="mainMenu--li footerLi"><a class="footer--links-N" href="/afiliados">Programa de afiliados</a></li>
                <li class="mainMenu--li footerLi"><a class="footer--links-N" href=${email_URL} target="_blank">Cont&aacute;ctanos</a></li>
                <li class="mainMenu--li footerLi"><a class="footer--links-N" href="/card/themis.vcf">Agr&eacute;ganos a tus contactos</a></li>
                <li class="mainMenu--li footerLi"><a class="footer--links-N" href="/terms">T&eacute;rminos del servicio</a></li>
                <li class="mainMenu--li footerLi"><a class="footer--links-N" href="/privacy">Pol&iacute;tica de privacidad</a></li>
            </div>
        </ul>
    </div>
    <div class="CSmall">
        <a class="footer--shortcut" href="/"><img class="footer--socialIcons" src="../media/shortcutIcon.svg" alt="themis"></a>
        <h6 class="footer--rights">Copyright © ${
            /\d{4}/.exec(Date())[0]
        } Themis. Todos los derechos reservados.</h6>
    </div>
</footer>
`;

export default footer;
