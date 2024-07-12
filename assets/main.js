function docs() {
    window.location.assign("assets/others/docs.html")
}

function music() {
    window.location.assign("assets/others/music.html")
}

function books() {
    window.location.assign("assets/others/books.html")
}

function others() {
    window.location.assign("assets/others/others.html")
}

function movies() {
    window.location.assign("assets/others/movies.html")
}

function shorts() {
    window.location.assign("assets/others/shorts.html")
}

const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() => {
        alert("Failed to download file!");
        downloadBtn.innerText = "Download File";
    });
}