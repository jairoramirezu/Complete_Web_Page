import Airtable from "../keys/airtable-keys.js";
import { parolePay, jobPay } from "./paymentData.js";
const href = document.location.href.split("/", [4]);

// airtable tables IDs
const baseId = "baseId__URL";
const jobTable = "jobTable__URL";
const paroleTable = "paroleTable__URL";
const paymentTable = "paymentTable__URL";
const referalTable = "referalTable__URL";
const headers = {
    Authorization: `Bearer ${Airtable.token}`,
    "Content-Type": "application/json",
};

// get payment data from the client
export function getPaymentData(
    servicio,
    nombre,
    apellido,
    correo,
    numero,
    cantidad_servicios,
    metodo_de_pago,
    monto_total,
    confirmacion,
    fecha
) {
    fetch(`https://api.airtable.com/v0/${baseId}/${paymentTable}`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            records: [
                {
                    fields: {
                        servicio,
                        nombre,
                        apellido,
                        correo,
                        numero,
                        cantidad_servicios,
                        metodo_de_pago,
                        monto_total,
                        confirmacion,
                        fecha,
                    },
                },
            ],
        }),
    }).then((res) => {
        if (res.ok && href[3] === "paymentDataParole") {
            parolePay();
        } else if (res.ok && href[3] === "paymentDataJob") {
            jobPay();
        } else {
            window.location.assign("../../404");
        }
    });
}
// get referal data from the afiliated
export function getReferalData(
    afi_nombre,
    afi_apellido,
    afi_numero,
    afi_correo,
    afi_zelle,
    ref_correo
) {
    fetch(`https://api.airtable.com/v0/${baseId}/${referalTable}`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            records: [
                {
                    fields: {
                        afi_nombre,
                        afi_apellido,
                        afi_numero,
                        afi_correo,
                        afi_zelle,
                        ref_correo,
                    },
                },
            ],
        }),
    }).then((res) =>
        res.ok
            ? window.location.assign("../../success")
            : window.location.assign("../../404")
    );
}
// get parole data from the client
export async function getParolData(
    pat_dependientesInfo,
    ben_nombre,
    ben_sNombre,
    ben_apellido,
    ben_sApellido,
    ben_codigoTelefono,
    ben_telefonoCelular,
    ben_correoElectronico,
    ben_direccionCorreo,
    ben_zipDireccionCorreo,
    ben_direccionDomicilio,
    ben_zipDireccionDomicilio,
    ben_fechaNacimiento,
    ben_ciudadNacimiento,
    ben_estadoNacimiento,
    ben_paisNacimiento,
    ben_genero,
    ben_estadoCivil,
    ben_nacionalidad,
    ben_fechaPasaporte,
    ben_numeroPasaporte,
    ben_alien,
    pat_mismo,
    pat_nombre,
    pat_sNombre,
    pat_apellido,
    pat_sApellido,
    pat_codigoTelefonoVivienda,
    pat_telefonoVivienda,
    pat_codigoTelefonoCelular,
    pat_telefonoCelular,
    pat_correoElectronico,
    pat_direccionCorreo,
    pat_zipDireccionCorreo,
    pat_direccionDomicilio,
    pat_zipDireccionDomicilio,
    pat_fechaNacimiento,
    pat_ciudadNacimiento,
    pat_estadoNacimiento,
    pat_paisNacimiento,
    pat_genero,
    pat_estadoCivil,
    pat_statusMigratorio,
    pat_alien,
    pat_ssn,
    pat_filiacion,
    pat_trabajo,
    pat_cargoTrabajo,
    pat_direccionTrabajo,
    pat_zipDireccionTrabajo,
    pat_cantDependientes,
    pat_tiempoBeneficiario,
    pat_alojaBeneficiario,
    pat_zipAlojaBeneficiario,
    pat_ingresosFinancieros,
    pat_activos,
    cop_tiene,
    cop_nombre,
    cop_sNombre,
    cop_apellido,
    cop_sApellido,
    cop_ingresosFinancieros,
    cop_activos,
) {
    await fetch(`https://api.airtable.com/v0/${baseId}/${paroleTable}`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            records: [
                {
                    fields: {
                        pat_dependientesInfo,
                        ben_nombre,
                        ben_sNombre,
                        ben_apellido,
                        ben_sApellido,
                        ben_codigoTelefono,
                        ben_telefonoCelular,
                        ben_correoElectronico,
                        ben_direccionCorreo,
                        ben_zipDireccionCorreo,
                        ben_direccionDomicilio,
                        ben_zipDireccionDomicilio,
                        ben_fechaNacimiento,
                        ben_ciudadNacimiento,
                        ben_estadoNacimiento,
                        ben_paisNacimiento,
                        ben_genero,
                        ben_estadoCivil,
                        ben_nacionalidad,
                        ben_fechaPasaporte,
                        ben_numeroPasaporte,
                        ben_alien,
                        pat_mismo,
                        pat_nombre,
                        pat_sNombre,
                        pat_apellido,
                        pat_sApellido,
                        pat_codigoTelefonoVivienda,
                        pat_telefonoVivienda,
                        pat_codigoTelefonoCelular,
                        pat_telefonoCelular,
                        pat_correoElectronico,
                        pat_direccionCorreo,
                        pat_zipDireccionCorreo,
                        pat_direccionDomicilio,
                        pat_zipDireccionDomicilio,
                        pat_fechaNacimiento,
                        pat_ciudadNacimiento,
                        pat_estadoNacimiento,
                        pat_paisNacimiento,
                        pat_genero,
                        pat_estadoCivil,
                        pat_statusMigratorio,
                        pat_alien,
                        pat_ssn,
                        pat_filiacion,
                        pat_trabajo,
                        pat_cargoTrabajo,
                        pat_direccionTrabajo,
                        pat_zipDireccionTrabajo,
                        pat_cantDependientes,
                        pat_tiempoBeneficiario,
                        pat_alojaBeneficiario,
                        pat_zipAlojaBeneficiario,
                        pat_ingresosFinancieros,
                        pat_activos,
                        cop_tiene,
                        cop_nombre,
                        cop_sNombre,
                        cop_apellido,
                        cop_sApellido,
                        cop_ingresosFinancieros,
                        cop_activos,
                    },
                },
            ],
        }),
    })
    .then(res => {
    if(res.ok) {
        localStorage.removeItem("parolNumber");
        window.location.assign("../../success");
    } else {
        window.location.assign("../../404");
    }
    })
}
// get job data from the client
export function getJobData(
    nombre,
    sNombre,
    apellido,
    sApellido,
    codeTelefonoCelular,
    telefonoCelular,
    codeTelefonoVivienda,
    telefonoVivienda,
    correoElectronico,
    direccionCorrespondencia,
    zipCorrespondencia,
    direccionDomicilio,
    zipDomicilio,
    fechaNacimiento,
    ciudadNacimiento,
    estadoNacimiento,
    paisNacimiento,
    genero,
    estadoCivil,
    estadoMigratorio,
    categoria,
    solicitud,
    i94,
    punto_ingreso,
    alien,
    ssnTiene,
    ssn,
    nombrePadre,
    sNombrePadre,
    apellidoPadre,
    sApellidoPadre,
    nombreMadre,
    sNombreMadre,
    apellidoMadre,
    sApellidoMadre
) {
    fetch(`https://api.airtable.com/v0/${baseId}/${jobTable}`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            records: [
                {
                    fields: {
                        nombre,
                        sNombre,
                        apellido,
                        sApellido,
                        codeTelefonoCelular,
                        telefonoCelular,
                        codeTelefonoVivienda,
                        telefonoVivienda,
                        correoElectronico,
                        direccionCorrespondencia,
                        zipCorrespondencia,
                        direccionDomicilio,
                        zipDomicilio,
                        fechaNacimiento,
                        ciudadNacimiento,
                        estadoNacimiento,
                        paisNacimiento,
                        genero,
                        estadoCivil,
                        estadoMigratorio,
                        categoria,
                        solicitud,
                        i94,
                        punto_ingreso,
                        alien,
                        ssnTiene,
                        ssn,
                        nombrePadre,
                        sNombrePadre,
                        apellidoPadre,
                        sApellidoPadre,
                        nombreMadre,
                        sNombreMadre,
                        apellidoMadre,
                        sApellidoMadre,
                    },
                },
            ],
        }),
    }).then((res) => {
        if (res.ok) {
            localStorage.removeItem("jobNumber");
            window.location.assign("../../success");
        } else {
            window.location.assign("../../404");
        }
    });
}
