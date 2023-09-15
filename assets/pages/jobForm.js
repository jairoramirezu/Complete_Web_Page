const main = document.querySelector(".main");
import nav from "../components/nav.js";
import terms from "../components/termsofService.js";
import footer from "../components/footer.js";
import button from "../components/buttonTop.js";

main.innerHTML = `
${nav}
<header>
    <div class="mainInfo">
        <h1 class="mainInfo--title">Datos de beneficiarios</h1>
            <div class="notshow">
            <h1 class="mainInfo--title">Forma I-765</h1>
            <h3 class="B_number">Datos del beneficiario</h3>
                <form class="mainInfo--B_form" action="mainInfo--B_form">
                    <h6 class="info space-top">Datos personales</h6>
                    <div class="center">
                            <input class="nameG getInfoData" id="B_name" type="text" placeholder="Primer nombre">
                            <input class="snameG getInfoData" id="B_name" type="text" placeholder="Segundo nombre">
                    </div>
                    <div class="center">
                            <input class="lastnameG getInfoData" id="B_name" type="text" placeholder="Primer Apellido">
                            <input class="slastnameG getInfoData" id="B_name" type="text" placeholder="Segundo Apellido">
                    </div>
                    <h6 class="info space-topBottom">Datos de contacto</h6>
                    <div class="center">
                        <div class="flxC">
                            <label class="label" for="B_cellphone_code">C&oacute;digo de pa&iacute;s</label>
                            <input class="aphoneG getInfoData" id="B_cellphone_code" type="number" placeholder="58">
                        </div>
                        <div class="flxC">
                            <label class="label" for="B_cellphone">N&uacute;mero de t&eacute;lefono</label>
                            <input class="phoneG getInfoData" id="B_cellphone" type="number" placeholder="786XXXXXXX">
                        </div>
                    </div>
                    <div class="center">
                        <div class="flxC">
                            <label class="label" for="B_cellphone_code">C&oacute;digo de pa&iacute;s</label>
                            <input class="aphoneG getInfoData" id="B_cellphone_code" type="number" placeholder="58">
                        </div>
                        <div class="flxC">
                            <label class="label" for="B_cellphone">T&eacute;lefono de vivienda</label>
                            <input class="phoneG getInfoData" id="B_cellphone" type="number" placeholder="405XXXXXXX">
                        </div>
                    </div>
                    <div class="center">
                        <input class="emailG getInfoData emailEvidence" id="B_email" type="email" placeholder="Correo electr&oacute;nico">
                    </div>
                    <h6 class="info space-top">Direcciones</h6>
                    <div class="center">
                        <input class="B_postAddress getInfoData" id="B_postAddress" type="text" placeholder="Direcci&oacute;n de correspondencia">
                        <input class="B_postAddress--Zip getInfoData" id="B_postAddress--Zip" type="number" placeholder="Zip code">
                    </div>
                    <div class="center">
                        <input class="B_personalAddress getInfoData" id="B_personalAddresss" type="text" placeholder="Direcci&oacute;n f&iacute;sica">
                        <input class="B_personalAddress--Zip getInfoData" id="B_personalAddress--Zip" type="number" placeholder="Zip code">
                    </div>
                    <h6 class="info .space-top Bottom">Datos de nacimiento</h6>
                    <div class="center flxC">
                        <div class="center">
                        <label class="label">Fecha de nacimiento</label>
                        <input class="B_birthDate place getInfoData" id="B_birthDate" type="date">
                        </div>
                        <input class="B_birthCity place getInfoData" id="B_birthCity" type="text" placeholder="Ciudad">
                    </div>
                    <div class="center">
                        <input class="B_birthState place getInfoData" id="B_birthState" type="text" placeholder="Estado">
                        <input class="B_birthCountry place getInfoData" id="B_birthCountry" type="text" placeholder="Pa&iacute;s">
                    </div>
                    <h6 class="info space-top">G&eacute;nero</h6>
                    <div class="flxC center">
                        <select class="place getInfoData" name="B_gender" id="B_gender">
                            <option value="0">--</option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                        </select>
                    </div>
                    <h6 class="info space-top">Estado civil</h6>
                    <div class="flxC center">
                        <select class="place getInfoData" name="B_status" id="B_status">
                            <option value="0">--</option>
                            <option value="1">Soltero/a</option>
                            <option value="2">Casado/a</option>
                            <option value="4">Divorciado/a</option>
                            <option value="3">Viudo/a</option>
                        </select>
                    </div>
                    <div class="flxC center">
                    <h6 class="info space-top">Estado migratorio actual</h6>
                        <select class="place getInfoData" name="B_status" id="B_status">
                            <option value="0">--</option>
                            <option value="1">Ciudadano/a</option>
                            <option value="2">Nacionalizado/a</option>
                            <option value="3">Residente permanente</option>
                            <option value="4">Visa</option>
                            <option value="5">Otro</option>
                        </select>
                    </div>
                    <div class="flxC center">
                    <h6 class="info space-top">Categor&iacute;a</h6>
                        <select class="place getInfoData" name="B_status" id="B_status">
                            <option value="0">--</option>
                            <option value="1">TPS</option>
                            <option value="2">Asilo</option>
                            <option value="3">Parole</option>
                            <option value="4">Otro</option>
                        </select>
                    </div>
                    <div class="flxC center">
                    <h6 class="info space-top">Tipo de solicitud</h6>
                        <select class="place getInfoData" name="B_status" id="B_status">
                            <option value="0">--</option>
                            <option value="1">Inicial</option>
                            <option value="2">Reemplazo</option>
                            <option value="3">Renovaci&oacute;n</option>
                        </select>
                    </div>
                    <div class="flxC center">
                    <h6 class="info space-top">¿Posee I-94?</h6>
                        <select class="place getInfoData i94vali" name="B_status" id="B_status">
                            <option value="0">--</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </select>
                        <input class="B_alien place getInfoData i94Validation" id="B_alien" type="text" placeholder="Punto por donde ingreso a EE.UU.">
                    </div>
                    <h6 class="info space-top">N&uacute;mero de alien</h6>
                    <div class="center">
                        <input class="B_alien place getInfoData" id="B_alien" type="text" placeholder="Opcional">
                    </div>
                    <div class="flxC center">
                    <h6 class="info space-top">¿Posee N&uacute;mero de Seguridad Social (SSN)?</h6>
                        <select class="place getInfoData ssnValidation" name="B_status" id="B_status">
                            <option value="0">--</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                            <option value="3">Quiero tener</option>
                        </select>
                    </div>
                    <div class="ssnValidationDisplay">
                    <h6 class="info space-top">N&uacute;mero de Seguridad Social</h6>
                        <div class="center">
                            <input class="B_alien place getInfoData" id="B_alien" type="text" placeholder="Opcional">
                        </div>
                    </div>
                    <div class="parentsData">
                        <h6 class="info space-top">Datos del padre del solicitante</h6>
                        <div class="center">
                                <input class="nameG getInfoData" id="B_name" type="text" placeholder="Primer nombre">
                                <input class="snameG getInfoData" id="B_name" type="text" placeholder="Segundo nombre">
                        </div>
                        <div class="center">
                                <input class="lastnameG getInfoData" id="B_name" type="text" placeholder="Primer Apellido">
                                <input class="slastnameG getInfoData" id="B_name" type="text" placeholder="Segundo Apellido">
                        </div>
                        <h6 class="info space-top">Datos de la madre del solicitante</h6>
                        <div class="center">
                                <input class="nameG getInfoData" id="B_name" type="text" placeholder="Primer nombre">
                                <input class="snameG getInfoData" id="B_name" type="text" placeholder="Segundo nombre">
                        </div>
                        <div class="center">
                                <input class="lastnameG getInfoData" id="B_name" type="text" placeholder="Primer Apellido">
                                <input class="slastnameG getInfoData" id="B_name" type="text" placeholder="Segundo Apellido">
                        </div>
                    </div>
                    <h6 class="info space-top">Evidencias</h6>
                    <h6 class="dataCW blue">Documentos a cargar:</br></br><span class="dataCW gray"><span class="dataCWI">- Pasaporte, </br>- Documentos de estatus migratorio,</br>- I-94 (si aplica), </br>- Foto tipo carnet (fondo blanco)</span></span></h6>
                    <label for="incomeFile" class="incomeFiles center">Cargar evidencia</label>
                    <input class="incomeFile" id="incomeFile" type="file" accept="image/*,application/pdf" multiple>
                    <img class="uploadEviSpinner" src="../../media/tadpole.svg">
                    <h6 class="dataCW evidenciaRes">Evidencia Cargada.</h6>
                </form>
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
`;
