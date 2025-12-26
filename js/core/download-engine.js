// js/core/download-engine.js
function activateDownload(platform, type) {
    const url = downloadLinks[platform][type];

    /* 1. توليد QR */
    const qrBox = document.getElementById(`${platform}-qr`);
    qrBox.innerHTML = "";
    new QRCode(qrBox, {
        text: url,
        width: 160,
        height: 160
    });

    /* 2. تحديث زر التحميل */
    const finalBtn = document.getElementById("final-download-btn");
    finalBtn.href = url;
    finalBtn.style.display = "inline-flex";

    /* 3. إظهار QR */
    qrBox.classList.add("active");
}
