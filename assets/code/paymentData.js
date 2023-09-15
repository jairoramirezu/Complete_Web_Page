import { getPaymentData } from "./airtable-records.js";
import StripeKeys from "../keys/stripe-keys.js";
const fetchOptions = {
    headers: {
        Authorization: `Bearer ${StripeKeys.secret}`,
    },
};
const nombre = document.querySelector(".nameG");
const apellido = document.querySelector(".lastnameG");
const correo = document.querySelector(".emailG");
const codenumber = document.querySelector(".aphoneG");
const numero = document.querySelector(".phoneG");
const mainButton = document.querySelector(".actionB");
const fecha = new Date();
const href = document.location.href.split("/", [4]);
const checkData = document.querySelectorAll(".checkData");
const checkDataAlert = document.querySelector(".checkDataAlert");
const data = [];
const caja_de_descripcion_pago = document.querySelector(".payNumber");
const descripcion_pago = document.querySelector(".payNumber--title");
const zelle_validation = document.querySelector(".zelleConf");
const boton_titulo = document.querySelector(".buttonA");
let metodo_de_pago = document.querySelector("#payment");
let numero_paroles = document.querySelector("#B_numberP");
let numero_conf_zelle = document.querySelector("#payNumber");
let monto;
let check;
let zelleCheck;

// to change the number of service in parole payment
let numero_servicios = 1;
if (href[3] === "paymentDataParole") {
    numero_paroles.addEventListener("change", () => {
        numero_servicios = numero_paroles.value;
    });
}
// to save the data in an array
function setData() {
    data.push(href[3] == "paymentDataParole" ? "parole" : "job");
    data.push(nombre.value);
    data.push(apellido.value);
    data.push(correo.value);
    data.push(`+${codenumber.value} ${numero.value}`);
    data.push(Number(numero_servicios));
    data.push(
        Number(metodo_de_pago.value) == 0 ? "tarjeta de credito" : "zelle"
    );
    data.push(
        href[3] == "paymentDataParole" ? 249 * Number(numero_servicios) : 149
    );
    data.push(
        Number(metodo_de_pago.value) == 1
            ? numero_conf_zelle.value
            : "credit card"
    );
    data.push(
        `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`
    );
}
// manage the payment options
function creditCard() {
    monto = href[3] === "paymentDataParole" ? 249 * numero_paroles.value : 149;
    caja_de_descripcion_pago.style.display = "flex";
    numero_conf_zelle.style.display = "none";
    zelle_validation.style.display = "none";
    descripcion_pago.innerHTML = `
    Su monto total es de
    <span class="bigN" id="bigN">$${monto.toLocaleString("es-MX")}.00</span>
    por el servicio de ${
        href[3] === "paymentDataParole" ? numero_paroles.value : 1
    } ${href[3] === "paymentDataParole" ? "parole" : "servicio"}
    `;
    boton_titulo.innerText =
        href[3] === "paymentDataParole" ? "Solicitar parole" : "Solicitar servicio";
}
function zelle() {
    monto = href[3] === "paymentDataParole" ? 249 * numero_paroles.value : 149;
    caja_de_descripcion_pago.style.display = "flex";
    numero_conf_zelle.style.display = "flex";
    zelle_validation.style.display = "flex";
    descripcion_pago.innerHTML = `
    Su monto total es de
    <span class="bigN" id="bigN">$${monto.toLocaleString("es-MX")}.00</span>
    por el servicio de ${
        href[3] === "paymentDataParole" ? numero_paroles.value : 1
    } ${href[3] === "paymentDataParole" ? "parole" : "servicio"}
    </br><span class="zelleData">Datos de transferencia</span>
    </br><span class="zelleMail">Correo: pagos@themis.la</span>
    </br><span class="zelleName">Nombre: Coffee Break 24 LLC</span>
    `;
    boton_titulo.innerText =
        href[3] === "paymentDataParole"
            ? "Confirmar parole"
            : "Confirmar servicio";
}
function hide() {
    caja_de_descripcion_pago.style.display = "none";
    boton_titulo.innerText =
        href[3] === "paymentDataParole" ? "Solicitar parole" : "Solicitar servicio";
}
// functions calls
if (href[3] === "paymentDataParole") {
    numero_paroles.addEventListener("input", () => {
        if (numero_paroles.value > 0 && metodo_de_pago.value == 0) {
            creditCard();
        } else if (numero_paroles.value > 0 && metodo_de_pago.value == 1) {
            zelle();
        } else {
            hide();
        }
    });
    metodo_de_pago.addEventListener("input", () => {
        if (numero_paroles.value > 0 && metodo_de_pago.value == 0) {
            creditCard();
        } else if (numero_paroles.value > 0 && metodo_de_pago.value == 1) {
            zelle();
        } else {
            hide();
        }
    });
}
if (href[3] === "paymentDataJob") {
    metodo_de_pago.addEventListener("input", () => {
        if (metodo_de_pago.value == 0) {
            creditCard();
        } else if (metodo_de_pago.value == 1) {
            zelle();
        } else {
            hide();
        }
    });
}
// validations
checkData.forEach((e) => {
    e.addEventListener("input", () => {
        if (
            nombre.value.length > 3 &&
            apellido.value.length > 3 &&
            codenumber.value.length > 0 &&
            numero.value.length >= 9 &&
            correo.value.length >= 9 &&
            correo.value.includes("@") &&
            correo.value.includes(".") &&
            numero_servicios > 0
        ) {
            check = true;
            checkDataAlert.style.display = "none";
        } else {
            check = false;
        }
    });
});
if (href[3] === "paymentDataParole" || href[3] === "paymentDataJob") {
    metodo_de_pago.addEventListener("input", () => {
        if (metodo_de_pago.value == "1") {
            zelle_validation.style.display = "none";
            numero_conf_zelle.addEventListener("input", () => {
                if (
                    numero_conf_zelle.value.length >= 7 &&
                    numero_conf_zelle.value.length <= 12
                ) {
                    zelleCheck = true;
                    zelle_validation.style.display = "none";
                } else {
                    zelleCheck = false;
                    zelle_validation.style.display = "flex";
                }
            });
        } else if (metodo_de_pago.value == "0") {
            zelleCheck = true;
        } else {
            zelleCheck = false;
        }
    });
}
// stripe conf
Promise.all([fetch("https://api.stripe.com/v1/prices", fetchOptions)])
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((json) => {
        let prices = json[0].data;
        console.log(prices)
        if (href[3] === "paymentDataParole") {
            mainButton.setAttribute("data-price", prices[0].id);
        } else if (href[3] === "paymentDataJob") {
            mainButton.setAttribute("data-price", prices[1].id);
        }
    })
    .catch((err) => {
        console.log(err);
        let message = err.statusText || "Un error a ocurrido con Stripe";
        mainButton.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    });
// pay functions
export function parolePay() {
    let priceID = mainButton.getAttribute("data-price");
    if (payment.value == 1) {
        localStorage.setItem("parolNumber", numero_servicios);
        window.location.assign("../../paroleForm");
    } else if (payment.value == 0) {
        localStorage.setItem("parolNumber", numero_servicios);
        Stripe(StripeKeys.public)
            .redirectToCheckout({
                lineItems: [
                    {
                        price: priceID,
                        quantity: Number(numero_servicios),
                    },
                ],
                mode: "payment",
                successUrl: "https://themis.la/paroleForm",
                cancelUrl: "https://themis.la/404",
            })
            .then((res) => {
                console.log(res);
                if (res.error) {
                    mainButton.insertAdjacentHTML(
                        "afterend",
                        res.error.message
                    );
                }
            });
    }
}
export function jobPay() {
    let priceID = mainButton.getAttribute("data-price");
    if (payment.value == 1) {
        localStorage.setItem("jobNumber", 1);
        window.location.assign("../../jobForm");
    } else if (payment.value == 0) {
        localStorage.setItem("jobNumber", 1);
        Stripe(StripeKeys.public)
            .redirectToCheckout({
                lineItems: [{ price: priceID, quantity: 1 }],
                mode: "payment",
                successUrl: "https://themis.la/jobForm",
                cancelUrl: "https://themis.la/404",
            })
            .then((res) => {
                console.log(res);
                if (res.error) {
                    mainButton.insertAdjacentHTML(
                        "afterend",
                        res.error.message
                    );
                }
            });
    }
}
// main button to call all the functions
if (href[3] === "paymentDataParole" || href[3] === "paymentDataJob") {
    mainButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (check && zelleCheck) {
            setData();
            getPaymentData(...data);
            data.splice(0, data.length);
        } else {
            checkDataAlert.style.display = "block";
        }
    });
}
