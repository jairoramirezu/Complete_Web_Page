const main = document.querySelector(".main");
import nav from "../components/nav.js";
import footer from "../components/footer.js";
import help5 from "../components/help5.js";
import button from "../components/buttonTop.js";
import guarantee from "../components/guarantee.js";
const href = document.location.href.split("/", [4]);

// to show the parole number if you are in the parole payment page
const parolN = () => {
    let print;
    if (href[3] === "paymentDataParole") {
        print = `
        <div class="flxC center">
            <label class="label numberP--title" for="B_numberP">N&uacute;mero de paroles</label>
            <input class="numberPG checkData" autocomplete="off" min="0" id="B_numberP" type="number" placeholder="0" required="true">
        </div>
        `;
        return print;
    } else {
        print = `<div></div>`;
        return print;
    }
};
// to change the button name for every service
const parolButtonName = () => {
    let print;
    if (href[3] === "paymentDataParole") {
        print = `Solicitar parole`;
        return print;
    } else {
        print = `Solicitar servicio`;
        return print;
    }
};

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
        <h1 class="mainInfo--title">Verificaci&oacute;n del beneficiario principal</h1>
        <form class="mainInfo--B_form" action="mainInfo--B_form">
            <div class="center">
                    <input class="nameG checkData" id="B_name" type="text" placeholder="Primer nombre" required="true">
                    <input class="lastnameG checkData" id="B_name" type="text" placeholder="Primer Apellido" required="true">
            </div>
            <div class="center cell">
                <div class="flxC">
                    <label class="label" for="B_cellphone_code">C&oacute;digo de pa&iacute;s</label>
                    <input class="aphoneG checkData" id="B_cellphone_code" min="0" type="number" placeholder="00" required="true">
                </div>
                <div class="flxC">
                    <label class="label" for="B_cellphone">N&uacute;mero de t&eacute;lefono</label>
                    <input class="phoneG checkData" id="B_cellphone" min="0" type="number" placeholder="412XXXXXXX" required="true">
                </div>
            </div>
            <div class="center">
                <input class="emailG checkData" id="B_email" type="text" placeholder="Correo electr&oacute;nico" required="true">
            </div>
            <div class="center cell">
                ${parolN()}
                <div class="flxC payment">
                    <label class="label" for="payment">M&eacute;todo de pago</label>
                    <select name="payment" class="checkData" id="payment" autocomplete="off" required="true">
                        <option value="2">--</option>
                        <option value="0">Tarjeta de cr&eacute;dito</option>
                        <option value="1">Zelle</option>
                    </select>
                </div>
            </div>
            <div class="center flxC payNumber">
                <h2 class="payNumber--title center">vbnvb</h2>
                <input id="payNumber" class="checkData" type="text" autocomplete="off" placeholder="N&uacute;mero de confirmación Zelle">
                <h6 class="zelleConf">Debe introducir un n&uacute;mero de confirmaci&oacute;n v&aacute;lido</h6>
            </div>
            <div class="center buttonE flxC">
                <h3 class="checkDataAlert">Chequea que todos tus datos sean correctos</h3>
                <button for="mainInfo--B_form" class="actionB"><a class="buttonA">${parolButtonName()}</a></button>
            </div>
        </form>
    </div>
    ${help5}
    ${guarantee}
</header>
${footer}
${button}
`;
