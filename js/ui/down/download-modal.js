function openDownloadModal() {
    document.getElementById("download-modal").classList.add("active");
}

function closeDownloadModal() {
    document.getElementById("download-modal").classList.remove("active");

    // إعادة تعيين زر التحميل
    const finalBtn = document.getElementById("final-download-btn");
    finalBtn.style.display = "none";
    finalBtn.href = "#";

    // إخفاء QR Codes
    document.getElementById("android-qr").classList.remove("active");
    document.getElementById("ios-qr").classList.remove("active");
}
