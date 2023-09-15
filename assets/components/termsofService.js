const href = document.location.href.split("/", [4]);
function link() {
    if (href[3] === "paroleForm") {
        return "https://themis.la/paroleForm";
    } else if (href[3] === "jobForm") {
        return "https://themis.la/jobForm";
    }
}

const termsofService = `
<details class="post-content terms">
    <summary class="post-summary">Leer t&eacute;rminos</summary>
        <div class="disclaimer">
            <h6 class="info blue VSub CSUB">Solo si llena todos los datos correctamente es posible entregar su servicio en menos de 12 horas.</h6>
            <h6 class="info VSub CSUB">Siempre puede llenar sus datos luego ingresando a <span class="blueLink">${link()}</span> del mismo dispositivo que realiz&oacute; la compra o comunicandose con nosotros.
            En la barra del men&uacute; tambi&eacute;n podr&aacute; conseguirlo.
            </br></br>
            Solo debe oprimir el botón enviar cuando esten llenas todas las solicitudes, en caso de enviar la informaci&oacute;n incompleta o err&oacute;nea deber&aacute; comunicarse con nosotros.
            </br></br>
            Cualquier duda no dude en contactarnos.
            </h6>
        </div>
</details>
`;

export default termsofService;
