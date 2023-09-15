const main = document.querySelector(".main");
import nav from "../components/nav.js";
import terms from "../components/termsofService.js";
import footer from "../components/footer.js";
import button from "../components/buttonTop.js";

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
        <h1 class="mainInfo--title Vtitle">Datos de beneficiarios</h1>
        <h1 class="mainInfo--title VSub">Forma I-134</h1>

        <div class="insideInfo"></div>

        <div class="insideOut">
            <img class="buttonMinusForm minusForm" src="../../media/minus-49.svg">
            <img class="buttonPlusForm plusForm" src="../../media/plus-49.svg">
        </div>
    </div>

    <div class="postDiv">
        ${terms}
        <div class="checkboxDiv">
            <input class="checkbox" id="checkbox" type="checkbox" value="first">
            <label for="checkbox" class="checkboxL">Acepto los t&eacute;rminos del servicio</label>
        </div>
        <div class="mainButton"><h3 class="mainButtonPlanTitle">Enviar</h3></div>
    </div>
</header>
<div class="ifConv"></div>
${footer}
${button}
<div class="insideOut insideBar">
    <img class="buttonMinusForm minusBar" src="../../media/minusContrast-49.svg">
    <img class="buttonPlusForm plusBar" src="../../media/plusContrast-49.svg">
</div>
`;