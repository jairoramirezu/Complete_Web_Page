const email_URL = "mailto:ayuda@themis.la";
const instagram_URL = "https://www.instagram.com/themis.la/";
const whatsapp_URL = "https://walink.co/6e39bb";
const fb_URL = "https://www.facebook.com/themis.laa";
const linkedin_URL = "https://www.linkedin.com/company/themisla";
const yt_URL = "https://www.youtube.com/@themisla";

const nav = `
<nav class="nav">
    <a href="/"><img class="logo" src="../../media/themisMainLogo.svg"  alt="Themis"></a>
    <img class="hamburgerMenu" src="../../media/hamburgerMenu.svg"  alt="Menu">
    <ul class="mainMenu">
        <div class="mainMenu--LX">
            <a class="mainMenu--logo__a" href="/"><img class="logo" src="../../media/themisMainLogo.svg"  alt="Themis"></a>
            <div class="closeMenu"><img class="closeMenu--img" src="../../media/closeMenu.svg" alt="close"></div>
        </div>
        ${
            localStorage.getItem("afiliado")
                ? `<li class="mainMenu--li"><a class="mainMenu--a" href="../../referir">Referir</a></li>`
                : ""
        }
        ${
            localStorage.getItem("parolNumber") > 0
                ? `<li class="mainMenu--li"><a class="mainMenu--a" href="../../paroleForm">Forma I-134: Parole</a></li>`
                : ""
        }
        ${
            localStorage.getItem("jobNumber") > 0
                ? `<li class="mainMenu--li"><a class="mainMenu--a" href="../../jobForm">Forma I-765: Trabajo</a></li>`
                : ""
        }
        <li class="mainMenu--li"><a class="mainMenu--a" href="/parole">Parole</a></li>
        <li class="mainMenu--li"><a class="mainMenu--a" href="/pricing">Precios</a></li>
        <li class="mainMenu--li"><a class="mainMenu--a" href="/howItWorks">C&oacute;mo funciona</a></li>
        <li class="mainMenu--li"><a class="mainMenu--a" href="/why_us">Por qu&eacute; nosotros</a></li>
        <li class="mainMenu--li"><a class="mainMenu--a" href="/faq">Preguntas frecuentes</a></li>
        <li class="mainMenu--li"><a class="mainMenu--a" href=${email_URL} target="_blank">Cont&aacute;ctanos</a></li>
        <span class="menuIcons">
            <div class="menuIcons--box">
                <a class="menuIcons--sm__a" href=${whatsapp_URL} target="_blank"><img class="menuIcons--sm" src="../../media/whatsappLogo.svg" alt="whatsapp"></a>
                <a class="menuIcons--sm__a" href=${instagram_URL} target="_blank"><img class="menuIcons--sm" src="../../media/instagramLogo.svg" alt="instagram"></a>
                <a class="menuIcons--sm__a" href=${fb_URL} target="_blank"><img class="menuIcons--sm" src="../../media/fbIcon.svg" alt="facebook"></a>
                <a class="menuIcons--sm__a" href=${linkedin_URL} target="_blank"><img class="menuIcons--sm" src="../../media/linkedinIcon.svg" alt="linkedin"></a>
                <a class="menuIcons--sm__a" href=${yt_URL} target="_blank"><img class="menuIcons--sm" src="../../media/ytIcon.svg" alt="youtube"></a>
            </div>
        </span>
    </ul>
</nav>
`;

export default nav;
