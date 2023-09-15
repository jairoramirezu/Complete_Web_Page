const dropbox_upload = "https://content.dropboxapi.com/2/files/upload";
const tokenURL = "https://api.dropbox.com/oauth2/token?refresh_token";
const clientID = "dropbox_key";
const clientSecret = "dropbox_secret_key";
const refreshToken =
    "refresh_token_gotBefore";
const tokenType = "refresh_token";
const urlencoded = new URLSearchParams();
const requestOptions = {
    method: "POST",
    body: urlencoded,
    redirect: "follow",
};

// to get the access token
const access_token = fetch(
    `${tokenURL}=${refreshToken}&grant_type=${tokenType}&client_id=${clientID}&client_secret=${clientSecret}`,
    requestOptions
)
    .then((res) => res.json())
    .then((res) => {
        return res.access_token;
    });

// to get the files to dropbox
export async function getEvidenceData(input, email, evidencia, spinner, folder) {
    const files = input;
    let i = 0;
    spinner.style.display = "block";
    evidencia.style.display = "none";
    for (const file in files) {
        i++;
        if (i <= files.length) {
            const res = await fetch(dropbox_upload, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${await access_token}`,
                    "Content-Type": "application/octet-stream",
                    "Dropbox-API-Arg": JSON.stringify({
                        path: folder + `${email + "__" + files[file].name}`,
                        mode: "add",
                        autorename: true,
                        mute: false,
                    }),
                },
                body: files[file],
            });
            if (res.ok) {
            } else {
                spinner.style.display = "none";
                evidencia.style.display = "block";
                evidencia.innerHTML = "Ocurri&oacute; un error al cargar la evidencia, comun&iacute;quese con nosotros."
            }
        } else {
            spinner.style.display = "none";
            evidencia.style.display = "block";
                setTimeout(() => {
                evidencia.style.display = "none";
                },10000)
        }
    }
}
