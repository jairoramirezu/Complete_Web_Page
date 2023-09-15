import { getParolData } from "./airtable-records.js";
import { getEvidenceData } from "./dropbox.js";
import convertion from "../components/convertion.js";
const title = document.querySelector(".Vtitle");
const display = document.querySelectorAll(".VSub");
const ifConv = document.querySelector(".ifConv");
const form = document.querySelector(".insideInfo");
const fragment = document.createDocumentFragment();
const fragment1 = document.createDocumentFragment();
const local = localStorage.getItem("parolNumber");
let i = 0;
const checkbox = document.querySelector(".checkbox");
const checkboxDiv = document.querySelector(".checkboxDiv");
const terms = document.querySelector(".terms");
const checkboxL = document.querySelector(".checkboxL");
const plus = document.querySelectorAll(".buttonPlusForm");
const minus = document.querySelectorAll(".buttonMinusForm");
const mainButton = document.querySelector(".mainButton");
const dependArr = [];
const dependArrI = [];
const parolFormData = [];
const getDataArray = [];

// comments are inside
if (local <= 0) {
    // to prevent open page without a buy
    title.innerHTML = `
    Usted posee
    </br><span class="VBLUE">0</span>
    </br>
    servicios activos, debe suscribirse a alguno primero`;
    ifConv.innerHTML = convertion;
    title.style.margin = "auto auto 40px";
    checkbox.style.display = "none";
    checkboxL.style.display = "none";
    display.forEach((element) => {
        element.style.display = "none";
    });
} else if (local > 0) {
    // to display or not the main button
    checkbox.addEventListener("change", () => {
        if (checkbox.checked == false) {
            mainButton.style.display = "none";
        } else {
            mainButton.style.display = "flex";
        }
    });
}
if (i == local - 1) {
    checkboxDiv.style.display = "flex";
    terms.style.display = "flex";
}
// to print all the forms
for (let i = 0; i < local; i++) {
    let print = document.createElement("div");
    print.classList.add("getForm");
    print.innerHTML = `
    <form class="mainInfo--B_form VSub" id="mainForm" action="mainInfo--B_form">
    <h3 class="B_number Vtitle VSub">Datos del beneficiario ${i + 1}</h3>
    <h6 class="info space-top">Datos personales</h6>
    <div class="center">
            <input class="nameG nameG getInfo" id="B_name" type="text" placeholder="Primer nombre">
            <input class="snameG snameG getInfo" id="B_name" type="text" placeholder="Segundo nombre">
    </div>
    <div class="center">
            <input class="lastnameG lastnameG getInfo" id="B_name" type="text" placeholder="Primer Apellido">
            <input class="slastnameG slastnameG getInfo" id="B_name" type="text" placeholder="Segundo Apellido">
    </div>
    <h6 class="info space-topBottom">Datos de contacto</h6>
    <div class="center">
        <div class="flxC">
            <label class="label" for="B_cellphone_code">C&oacute;digo de pa&iacute;s</label>
            <input class="aphoneG getInfo" id="B_cellphone_code" type="number" placeholder="00">
        </div>
        <div class="flxC">
            <label class="label" for="B_cellphone">N&uacute;mero de t&eacute;lefono</label>
            <input class="phoneG getInfo" id="B_cellphone" type="number" placeholder="412XXXXXXX">
        </div>
    </div>
    <div class="center">
        <input class="emailG getInfo emailEvidence" id="B_email" type="email" placeholder="Correo electr&oacute;nico">
    </div>
    <h6 class="info space-top">Direcciones</h6>
    <div class="center">
        <input class="B_postAddress getInfo" id="B_postAddress" type="text" placeholder="Direcci&oacute;n de correspondencia">
        <input class="B_postAddress--Zip getInfo" id="B_postAddress--Zip" type="number" placeholder="Zip code">
    </div>
    <div class="center">
        <input class="B_personalAddress getInfo" id="B_personalAddresss" type="text" placeholder="Direcci&oacute;n f&iacute;sica">
        <input class="B_personalAddress--Zip getInfo" id="B_personalAddress--Zip" type="number" placeholder="Zip code">
    </div>
    <h6 class="info .space-top Bottom">Datos de nacimiento</h6>
    <div class="center flxC">
        <div class="center">
        <label class="label">Fecha de nacimiento</label>
        <input class="B_birthDate place getInfo" id="B_birthDate" type="date">
        </div>
        <input class="B_birthCity place getInfo" id="B_birthCity" type="text" placeholder="Ciudad">
    </div>
    <div class="center">
        <input class="B_birthState place getInfo" id="B_birthState" type="text" placeholder="Estado">
        <input class="B_birthCountry place getInfo" id="B_birthCountry" type="text" placeholder="Pa&iacute;s">
    </div>
    <h6 class="info space-top">G&eacute;nero</h6>
    <div class="flxC center">
        <select class="place getInfo" name="B_gender" id="B_gender">
            <option value="0">--</option>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
        </select>
    </div>
    <h6 class="info space-top">Estado civil</h6>
    <div class="flxC center">
        <select class="place getInfo" name="B_status" id="B_status">
            <option value="0">--</option>
            <option value="1">Soltero/a</option>
            <option value="2">Casado/a</option>
            <option value="4">Divorciado/a</option>
            <option value="3">Viudo/a</option>
        </select>
    </div>
    <h6 class="info space-top">Nacionalidad</h6>
    <div class="flxC center">
        <select class="place getInfo" name="B_nationality" id="B_nationality">
            <option value="0">--</option>
            <option value="4">Cubano/a</option>
            <option value="3">Haitiano/a</option>
            <option value="2">Nicaragüense</option>
            <option value="1">Venezolano/a</option>
            <option value="5">Ucraniano/a</option>
        </select>
    </div>
    <h6 class="info .space-top Bottom">Datos de pasaporte</h6>
    <div class="flxC">
    <div class="center">
        <label class="label">Fecha de vencimiento</label>
        <input class="B_passportDate place getInfo" id="B_passportDate" type="date">
    </div>
    <div class="flxC center">
        <input class="B_passportNumber place getInfo" id="B_passportNumber" type="text" placeholder="N&uacute;mero de pasaporte">
    </div>
    <h6 class="info space-top">N&uacute;mero de alien</h6>
    <div class="center">
        <input class="B_alien place getInfo" id="B_alien" type="text" placeholder="Opcional">
    </div>
    ${
        i > 0
            ? `<h6 class="info space-top">¿Es el mismo patrocinante del anterior?</h6>
        <div class="flxC center">
            <select class="place patroRES getInfo" name="B_gender" id="B_gender">
                <option value="0">--</option>
                <option value="1">Si</option>
                <option value="2">No</option>
            </select>
        </div>`
            : `<h6 class="info space-top" style="display:none">¿Es el mismo patrocinante del anterior?</h6>
            <div class="flxC center" style="display:none">
                <select class="place patroRES getInfo" name="B_gender" id="B_gender">
                    <option value="0">--</option>
                    <option value="1">Si</option>
                    <option value="2">No</option>
                </select>
            </div>`
    }
    <div class="${i > 0 ? "patroRESresp" : ""}">
    <h4 class="P_title">Datos del patrocinante</h4>
    <h6 class="dataCW">De ser el mismo patrocinante en todas las solicitudes, solo debe llenar los datos una vez.</h6>
    <h6 class="info space-top">Datos personales</h6>
    <div class="center">
            <input class="nameG getInfo" id="B_name" type="text" placeholder="Primer nombre">
            <input class="snameG getInfo" id="B_name" type="text" placeholder="Segundo nombre">
    </div>
    <div class="center">
        <input class="lastnameG getInfo" id="B_name" type="text" placeholder="Primer Apellido">
        <input class="slastnameG getInfo" id="B_name" type="text" placeholder="Segundo Apellido">
    </div>
    <h6 class="info space-topBottom">Datos de contacto</h6>
    <h6 class="dataC">T&eacute;lefono de vivienda</h6>
    <div class="center">
        <div class="flxC">
            <label class="label" for="B_cellphone_code">C&oacute;digo de pa&iacute;s</label>
            <input class="aphoneG getInfo" id="B_cellphone_code" type="number" placeholder="58">
        </div>
        <div class="flxC">
            <label class="label" for="B_cellphone">N&uacute;mero de t&eacute;lefono</label>
            <input class="phoneG getInfo" id="B_cellphone" type="number" placeholder="412XXXXXXX">
        </div>
    </div>
    <h6 class="dataC">Tel&eacute;fono celular</h6>
    <div class="center">
        <div class="flxC">
            <label class="label" for="B_cellphone_code">C&oacute;digo de pa&iacute;s</label>
            <input class="aphoneG getInfo" id="B_cellphone_code" type="number" placeholder="58">
        </div>
        <div class="flxC">
            <label class="label" for="B_cellphone">N&uacute;mero de t&eacute;lefono</label>
            <input class="phoneG getInfo" id="B_cellphone" type="number" placeholder="412XXXXXXX">
        </div>
    </div>
    <div class="center">
        <input class="emailG getInfo" id="B_email" type="email" placeholder="Correo electr&oacute;nico">
    </div>
    <h6 class="info space-top">Direcciones</h6>
    <div class="center">
        <input class="B_postAddress getInfo" id="B_postAddress" type="text" placeholder="Direcci&oacute;n de correspondencia">
        <input class="B_postAddress--Zip getInfo" id="B_postAddress--Zip" type="number" placeholder="Zip code">
    </div>
    <div class="center">
        <input class="B_personalAddress getInfo" id="B_personalAddresss" type="text" placeholder="Direcci&oacute;n f&iacute;sica">
        <input class="B_personalAddress--Zip getInfo" id="B_personalAddress--Zip" type="number" placeholder="Zip code">
    </div>
    <h6 class="info space-top Bottom">Datos de nacimiento</h6>
    <div class="center flxC">
        <div class="center">
        <label class="label">Fecha de nacimiento</label>
        <input class="B_birthDate place getInfo" id="B_birthDate" type="date">
        </div>
        <input class="B_birthCity place getInfo" id="B_birthCity" type="text" placeholder="Ciudad">
    </div>
    <div class="center">
        <input class="B_birthState place getInfo" id="B_birthState" type="text" placeholder="Estado">
        <input class="B_birthCountry place getInfo" id="B_birthCountry" type="text" placeholder="Pa&iacute;s">
    </div>
    <h6 class="info space-top">G&eacute;nero</h6>
    <div class="flxC center">
        <select class="place getInfo" name="B_gender" id="B_gender">
            <option value="0">--</option>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
        </select>
    </div>
    <h6 class="info space-top">Estado civil</h6>
    <div class="flxC center">
        <select class="place getInfo" name="B_status" id="B_status">
            <option value="0">--</option>
            <option value="1">Soltero/a</option>
            <option value="2">Casado/a</option>
            <option value="4">Divorciado/a</option>
            <option value="3">Viudo/a</option>
        </select>
    </div>
    <div class="flxC center">
    <h6 class="info space-top">Estado migratorio actual</h6>
        <select class="place getInfo" name="B_status" id="B_status">
            <option value="0">--</option>
            <option value="1">Ciudadano/a</option>
            <option value="2">Nacionalizado/a</option>
            <option value="3">Residente permanente</option>
            <option value="4">Visa</option>
            <option value="5">Otro</option>
        </select>
    </div>
    <h6 class="info space-top">N&uacute;mero de alien</h6>
    <div class="center">
        <input class="B_alien place getInfo" id="B_alien" type="text" placeholder="Opcional">
    </div>
    <h6 class="info space-top">N&uacute;mero de seguro social</h6>
    <div class="center">
        <input class="B_alien place getInfo" id="B_alien" type="text" placeholder="SSN">
    </div>
    <h6 class="info space-top">Filaci&oacute;n o v&iacute;nculo con el beneficiario</h6>
    <div class="center">
        <input class="B_alien place getInfo" id="B_alien" type="text" placeholder="V&iacute;nculo con patrocinado">
    </div>
    <div class="flxC center">
        <h6 class="info space-top">¿Posee trabajo actualmente?</h6>
            <select class="place getInfo haveJob" name="B_status" id="B_status">
                <option value="0">--</option>
                <option value="1">Si</option>
                <option value="2">No</option>
            </select>
    </div>
    <div class="haveJobRes">
    <h6 class="info space-top">¿Qu&eacute; cargo posee?</h6>
    <div class="center">
        <input class="B_alien place getInfo" id="B_alien" type="text" placeholder="Cargo">
    </div>
    <h6 class="info space-top">Direcci&oacute;n de trabajo</h6>
    <div class="center">
        <input class="B_postAddress getInfo" id="B_postAddress" type="text" placeholder="Direcci&oacute;n de trabajo">
        <input class="B_postAddress--Zip getInfo" id="B_postAddress--Zip" type="number" placeholder="Zip code">
    </div>
    </div>
    <h6 class="info space-top">Cantidad de dependientes del patrocinante</h6>
    <h6 class="dataCW">Personas que actualmente mantiene econ&oacute;micamente en EE.UU</h6>
    <div class="center">
        <input class="P_dependencies place getInfo P_dependenciesD" id="P_dependencies" type="number" placeholder="N&uacute;mero">
    </div>
    <div class="printDependen">
    </div>
    <h6 class="info space-top">¿Por cuanto tiempo desea tener al beneficiario en los EE.UU?</h6>
    <h6 class="dataCW">M&aacute;ximo dos años</h6>
    <div class="center">
        <input class="B_postAddress getInfo" id="B_postAddress" type="text" placeholder="Años">
    </div>
    <h6 class="info space-top">D&oacute;nde alojar&aacute; el beneficiacio?</h6>
    <div class="center">
        <input class="B_postAddress getInfo" id="B_postAddress" type="text" placeholder="Direcci&oacute;n de correspondencia">
        <input class="B_postAddress--Zip getInfo" id="B_postAddress--Zip" type="number" placeholder="Zip code">
    </div>
    <h6 class="info space-top">Igresos financieros anuales</h6>
    <div class="center ">
        <input class="B_postAddress getInfo" id="B_postAddress" type="number" placeholder="Ingresos">
    </div>
    <h6 class="info space-top">Activos</h6>
    <div class="center ">
        <input class="B_postAddress getInfo" id="B_postAddress" type="number" placeholder="Valor en d&oacute;lares">
    </div>
    </div>
    <div class="flxC center">
        <h6 class="info space-top">¿Posee alg&uacute;n Co-Patrocinante?</h6>
        <h6 class="dataCW">De ser el mismo copatrocinante en todas las solicitudes, solo debe llenar los datos una vez.</h6>
            <select class="place copatrocinante getInfo" name="B_status" id="B_status">
                <option value="0">--</option>
                <option value="1">Si</option>
                <option value="2">No</option>
                ${
                    i > 0
                        ? `<option value="3">Copatrocinante del beneficiario anterior</option>`
                        : ""
                }
            </select>
    </div>
    <div class="copatroData">
    <h4 class="P_title">Datos del Co-Patrocinante</h4>
    <h6 class="info space-top">Datos personales</h6>
    <div class="center">
            <input class="nameG getInfo" id="B_name" type="text" placeholder="Primer nombre">
            <input class="snameG getInfo" id="B_name" type="text" placeholder="Segundo nombre">
    </div>
    <div class="center">
        <input class="lastnameG getInfo" id="B_name" type="text" placeholder="Primer Apellido">
        <input class="slastnameG getInfo" id="B_name" type="text" placeholder="Segundo Apellido">
    </div>
    <h6 class="info space-top">Igresos financieros anuales</h6>
    <div class="center">
        <input class="B_postAddress getInfo" id="B_postAddress" type="number" placeholder="Ingresos">
    </div>
    <h6 class="info space-top">Activos</h6>
    <div class="center">
        <input class="B_postAddress getInfo" id="B_postAddress" type="number" placeholder="Valor en d&oacute;lares">
    </div>
    </div>
    <h6 class="info space-top">Evidencias</h6>
    <h6 class="dataCW blue">De ser el mismo patrocinante o copatrocinante en todas las solicitudes, solo debe cargar la evidencia una vez. </br></br> <span class="dataCW gray">Cargar de patrocinante y copatrocinante</br> (este &uacute;ltimo de tenerlo):  </br></br><span class="dataCWI">- Estados de cuenta, </br>- Impuestos (taxes),</br>- Documentos de estatus migratorio, </br>- Carta de trabajo o estado de pagos de la empresa, </br>- Assets (bonos, t&iacute;tulos de valor, t&iacute;tulos de propiedad, cuentas de ahorro)</span></span></h6>
    <label for="incomeFile" class="incomeFiles center">Cargar evidencia</label>
    <input class="incomeFile" id="incomeFile" type="file" accept="image/*,application/pdf" multiple>
    <img class="uploadEviSpinner" src="../../media/tadpole.svg">
    <h6 class="dataCW evidenciaRes">Evidencia Cargada.</h6>
    </form>
        `;
    fragment.appendChild(print);
}
form.appendChild(fragment);
// Dependientes
const depend = document.querySelectorAll(".P_dependenciesD");
const printD = document.querySelectorAll(".printDependen");
const dependF = (e) => {
    if (e.target.value > 0) {
        for (let p = 0; p < e.target.value; p++) {
            let print = document.createElement("div");
            print.innerHTML = `
            <div class="dependentStyle">
            <h6 class="info space-top">Datos personales de dependiente ${
                p + 1
            }</h6>
            <div class="center">
                <input class="nameG getDependientesInfo" id="B_name" type="text" placeholder="Primer nombre">
                <input class="snameG getDependientesInfo" id="B_name" type="text" placeholder="Segundo nombre">
            </div>
            <div class="center">
                <input class="lastnameG getDependientesInfo" id="B_name" type="text" placeholder="Primer Apellido">
                <input class="slastnameG getDependientesInfo" id="B_name" type="text" placeholder="Segundo Apellido">
            </div>
            <h6 class="info space-top">Fecha de nacimiento de dependiente ${
                p + 1
            }</h6>
            <div class="center">
                <input class="B_birthDate place getDependientesInfo" id="B_birthDate" type="date">
            </div>
            <h6 class="info space-top">Direcci&oacute;n de dependiente ${
                p + 1
            }</h6>
            ${
                p > 0
                    ? `<h6 class="dataCW">¿Es la misma que la anterior?</h6>
                <div class="flxC center">
                    <select class="place patroRES addressDependentRES" name="B_gender" id="B_gender">
                        <option value="0">--</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                    </select>
                </div>`
                    : ""
            }
            ${
                p > 0
                    ? `<div class="center depend addressDependent" style="display:none">
                    <input class="B_postAddress getDependientesInfo" id="B_postAddress" type="text" placeholder="Direcci&oacute;n">
                    <input class="B_postAddress--Zip getDependientesInfo" id="B_postAddress--Zip" type="number" placeholder="Zip code">
                </div>
                </div>`
                    : `<div class="center depend">
                    <input class="B_postAddress getDependientesInfo" id="B_postAddress" type="text" placeholder="Direcci&oacute;n">
                    <input class="B_postAddress--Zip getDependientesInfo" id="B_postAddress--Zip" type="number" placeholder="Zip code">
                </div>
                </div>`
            }
            `;
            fragment1.appendChild(print);
        }
        printD[i].appendChild(fragment1);
    } else {
        printD[i].innerHTML = ``;
    }
};
depend.forEach((e) => {
    e.addEventListener("input", (e) => {
        printD[i].innerHTML = ``;
        dependF(e);
        const dependientes = document.querySelectorAll(".getDependientesInfo");
        const addressDependentRES = document.querySelectorAll(
            ".addressDependentRES"
        );
        const addressDependent = document.querySelectorAll(".addressDependent");
        addressDependentRES.forEach((e) => {
            e.addEventListener("change", (e) => {
                e.target.value === "2"
                    ? (e.target.parentElement.nextElementSibling.style.display =
                          "flex")
                    : (e.target.parentElement.nextElementSibling.style.display =
                          "none");
            });
        });
        mainButton.addEventListener("click", (e) => {
            e.preventDefault();
            dependArr.length = 0;
            dependientes.forEach((e) => {
                dependArr.push(e.value);
            });
        });
    });
});
// get dependents by user
function dependent() {
    depend.forEach((e) => {
        let i = 0;
        const chunk = dependArr.slice(i, i + 7 * e.value);
        dependArrI.push(chunk);
        dependArr.splice(i, i + 7 * e.value);
    });
}
// if the patro is the same on the form
const haveJob = document.querySelectorAll(".haveJob");
const haveJobRes = document.querySelectorAll(".haveJobRes");
haveJob.forEach((e) => {
    e.addEventListener("change", (e) => {
        if (e.target.value == 1) {
            haveJobRes[i].style.display = "block";
        } else {
            haveJobRes[i].style.display = "none";
        }
    });
});
// if the patro is the same on the form
const patroRES = document.querySelectorAll(".patroRES");
const patrores = document.querySelectorAll(".patroRESresp");
patroRES.forEach((e) => {
    e.addEventListener("change", (e) => {
        if (e.target.value == 2) {
            patrores[i - 1].style.display = "block";
        } else {
            patrores[i - 1].style.display = "none";
        }
    });
});
// to show or not the buttons of form in case of a lot of them
const getForm = document.querySelectorAll(".getForm");
if (local > 1) {
    plus.forEach((e) => {
        e.style.display = "flex";
    });
    for (let j = 1; j < getForm.length; j++) {
        getForm[j].style.display = "none";
    }
}
// to get all the data from the form
const getDataForm = document.querySelectorAll(".getInfo");
// button previous and after
function hello() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    checkboxDiv.style.display = "none";
    terms.style.display = "none";
    if (i > 0) {
        for (let j = 0; j < getForm.length; j++) {
            getForm[j].style.display = "none";
        }
        getForm[i].style.display = "flex";
        minus.forEach((e) => {
            e.style.display = "flex";
        });
        if (i == local - 1) {
            for (let j = 0; j < getForm.length; j++) {
                getForm[j].style.display = "none";
            }
            getForm[i].style.display = "flex";
            plus.forEach((e) => {
                e.style.display = "none";
            });
            checkboxDiv.style.display = "flex";
            terms.style.display = "flex";
        }
    } else {
        for (let j = 0; j < getForm.length; j++) {
            getForm[j].style.display = "none";
        }
        getForm[i].style.display = "flex";
        plus.forEach((e) => {
            e.style.display = "flex";
        });
        minus.forEach((e) => {
            e.style.display = "none";
        });
    }
}
function bye() {
    checkboxDiv.style.display = "none";
    terms.style.display = "none";
    if (i > 0) {
        for (let j = 0; j < getForm.length; j++) {
            getForm[j].style.display = "none";
        }
        getForm[i].style.display = "flex";
        minus.forEach((e) => {
            e.style.display = "flex";
        });
        if (i == local - 1) {
            for (let j = 0; j < getForm.length; j++) {
                getForm[j].style.display = "none";
            }
            getForm[i].style.display = "flex";
            plus.forEach((e) => {
                e.style.display = "none";
            });
            checkboxDiv.style.display = "flex";
            terms.style.display = "flex";
        }
    } else {
        for (let j = 0; j < getForm.length; j++) {
            getForm[j].style.display = "none";
        }
        getForm[i].style.display = "flex";
        plus.forEach((e) => {
            e.style.display = "flex";
        });
        minus.forEach((e) => {
            e.style.display = "none";
        });
    }
}
// button functions
minus.forEach((e) => {
    e.addEventListener("click", () => {
        i--;
        if (e.getAttribute("class") == "buttonMinusForm minusBar") {
            bye();
        } else {
            hello();
        }
        plus.forEach((e) => {
            e.style.display = "flex";
        });
    });
});
plus.forEach((e) => {
    e.addEventListener("click", () => {
        i++;
        if (e.getAttribute("class") == "buttonPlusForm plusBar") {
            bye();
        } else {
            hello();
        }
    });
});
// validations on form
// copatrocinante
const copatrocinante = document.querySelectorAll(".copatrocinante");
const copatroData = document.querySelectorAll(".copatroData");
copatrocinante.forEach((e) => {
    e.addEventListener("change", () => {
        if (e.value == 1) {
            copatroData[i].style.display = "block";
        } else {
            copatroData[i].style.display = "none";
        }
    });
});
// get the files to dropbox
const inputs = document.querySelectorAll("#incomeFile");
const emailForEvidence = document.querySelectorAll(".emailEvidence");
const evidenciaRes = document.querySelectorAll(".evidenciaRes");
const uploadEviSpinner = document.querySelectorAll(".uploadEviSpinner");
inputs.forEach((e) => {
    e.addEventListener("change", (input) => {
        getEvidenceData(
            input.target.files,
            emailForEvidence[i].value,
            evidenciaRes[i],
            uploadEviSpinner[i],
            "/parole/"
        );
    });
});
// get data into array
function getData() {
    getDataForm.forEach((e) => {
        parolFormData.push(e.value);
    });
    for (let i = 0; i < parolFormData.length; i += 62) {
        const chunk = parolFormData.slice(i, i + 62);
        getDataArray.push(chunk);
    }
}
// send button
mainButton.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        dependent();
        getData();
        for (let g = 0; g < getDataArray.length; g++) {
            getParolData(`${dependArrI[g]}`, ...getDataArray[g]);
        }
        console.log(getDataArray);
    }, 100);
});
