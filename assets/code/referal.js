import { getReferalData } from "./airtable-records.js";
const afi_nombre = document.querySelector(".nameG");
const afi_apellido = document.querySelector(".lastnameG");
const afi_codeNumber = document.querySelector(".aphoneG");
const afi_numero = document.querySelector(".phoneG");
const afi_correo = document.querySelector("#email_afiliado");
const afi_zelle = document.querySelector("#zelle_afiliado");
const local = localStorage.getItem("afiliado");
const ref_correo = document.querySelector(".emailG");
const button = document.querySelector(".actionB");
const checkData = document.querySelectorAll(".checkData");
const checkDataAlert = document.querySelector(".checkDataAlert");
const title = document.querySelector(".mainInfo--title");
const hide = document.querySelector(".mainInfo--B_form");
const data = [];
let check;

// disclaimer subscription
if (!local) {
    title.innerHTML = `
    Usted no posee
    ninguna suscripci&oacute;n activa.
    </br></br>
    Ingrese a
    </br>
    <a class="mainInfo--title" href="../../afiliados">Afiliados</a>
    </br> y suscribase`;
    title.style.margin = "auto auto 40px";
    hide.style.display = "none";
}
// to save the data in an array
function setData() {
    data.push(afi_nombre.value);
    data.push(afi_apellido.value);
    data.push(`${afi_codeNumber.value} ${afi_numero.value}`);
    data.push(afi_correo.value);
    data.push(afi_zelle.value);
    data.push(ref_correo.value);
}
// display the check data
checkData.forEach((e) => {
    e.addEventListener("input", () => {
        if (
            afi_nombre.value.length > 3 &&
            afi_apellido.value.length > 3 &&
            afi_codeNumber.value.length > 0 &&
            afi_numero.value.length >= 9 &&
            afi_correo.value.length >= 9 &&
            afi_correo.value.includes("@") &&
            afi_correo.value.includes(".") &&
            ref_correo.value.length >= 9 &&
            ref_correo.value.includes("@") &&
            ref_correo.value.includes(".")
        ) {
            check = true;
            checkDataAlert.style.display = "none";
        }
    });
});
// set the button to get the data with validations
button.addEventListener("click", (e) => {
    e.preventDefault();
    if (check) {
        setData();
        getReferalData(...data);
    } else {
        checkDataAlert.style.display = "block";
    }
});
