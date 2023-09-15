const main = document.querySelector(".main");
import nav from "../components/nav.js";
import footer from "../components/footer.js";
import helpOver from "../components/helpOver.js";
import guarantee from "../components/guarantee.js";
import button from "../components/buttonTop.js";

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
        <h1 class="mainInfo--title Vtitle">Registrar nuevo referido</h1>
        <form class="mainInfo--B_form" action="mainInfo--B_form">
            <div class="flxC">
                <label class="label" for="B_email"><b>Correo electr&oacute;nico del pagador</b></label>
                <input class="emailG checkData" id="B_email"  type="email" placeholder="referido@email.com" required="true">
            </div>
            <label class="label" for="B_name"><b>Tus datos</b></label>
            <div class="center">
                    <input class="nameG checkData" id="B_name" type="text" placeholder="Nombre de afiliado" required="true">
                    <input class="lastnameG checkData" id="B_name" type="text" placeholder="Apellido de afiliado" required="true">
            </div>
            <div class="center cell marginTop">
                <div class="flxC">
                    <label class="label" for="B_cellphone_code">C&oacute;digo de pa&iacute;s</label>
                    <input class="aphoneG checkData" id="B_cellphone_code" min="0" type="number" placeholder="00" required="true">
                </div>
                <div class="flxC">
                    <label class="label" for="B_cellphone">N&uacute;mero de t&eacute;lefono</label>
                    <input class="phoneG checkData" id="B_cellphone" min="0" type="number" placeholder="412XXXXXXX" required="true">
                </div>
            </div>
            <div class="flxC">
                <label class="label" for="email_afiliado">Tú correo electr&oacute;nico</label>
                <input class="aphoneG checkData" id="email_afiliado"  type="email" placeholder="afiliado@email.com" required="true">
            </div>
            <div class="flxC">
                <label class="label" for="zelle_afiliado">Datos <b>Zelle</b> para recibir tu pago</label>
                <input class="aphoneG checkData" id="zelle_afiliado"  type="email" placeholder="zelle@email.com o 786-888-8899" required="true">
            </div>
            <h3 class="checkDataAlert">Chequea que todos tus datos sean correctos</h3>
            <button for="mainInfo--B_form" class="actionB"><a class="buttonA">Enviar Datos</a></button>
        </form>
    </div>
</header>
${helpOver}
${guarantee}
${footer}
<div class="insideOut insideBar">
    <img class="buttonMinusForm minusBar" src="../../media/minusContrast-49.svg">
    <img class="buttonPlusForm plusBar" src="../../media/plusContrast-49.svg">
</div>
${button}
`;
