import { getJobData } from "./airtable-records.js";
import convertion from "../components/convertion.js";
import { getEvidenceData } from "./dropbox.js";
const local = localStorage.getItem("jobNumber");
const getInfoData = document.querySelectorAll(".getInfoData");
const title = document.querySelector(".mainInfo--title");
const checkbox = document.querySelector(".checkbox");
const checkboxL = document.querySelector(".checkboxL");
const mainButton = document.querySelector(".mainButton");
const ifConv = document.querySelector(".ifConv");
const notshow = document.querySelector(".notshow");
const inputs = document.querySelector("#incomeFile");
const emailForEvidence = document.querySelector(".emailEvidence");
const evidenciaRes = document.querySelector(".evidenciaRes");
const ssnValidation = document.querySelector(".ssnValidation");
const ssnValidationDisplay = document.querySelector(".ssnValidationDisplay");
const parentsData = document.querySelector(".parentsData");
const i94vali = document.querySelector(".i94vali");
const i94Validation = document.querySelector(".i94Validation");
const uploadEviSpinner = document.querySelector(".uploadEviSpinner");
const dataArr = [];

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
    notshow.style.display = "none";
    checkbox.style.display = "none";
    checkboxL.style.display = "none";
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
// to get the data
function getData() {
    getInfoData.forEach((e) => {
        dataArr.push(e.value);
    });
}
// ssn validation
i94vali.addEventListener("change", (e) => {
    if (e.target.value == 1) {
        i94Validation.style.display = "block";
    } else {
        i94Validation.style.display = "none";
    }
});
// ssn validation
ssnValidation.addEventListener("change", (e) => {
    if (e.target.value == 1) {
        ssnValidationDisplay.style.display = "block";
    } else if (e.target.value == 3) {
        parentsData.style.display = "block";
    } else {
        ssnValidationDisplay.style.display = "none";
        parentsData.style.display = "none";
    }
});
// get the files to dropbox
inputs.addEventListener("change", (e) => {
    getEvidenceData(
        e.target.files,
        emailForEvidence.value,
        evidenciaRes,
        uploadEviSpinner,
        "/job/"
    );
    uploadEviSpinner.style.display = "block";
});
// main button
mainButton.addEventListener("click", (e) => {
    e.preventDefault();
    getData();
    getJobData(...dataArr);
});
