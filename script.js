const database = {
    // FEBRUARI
    "11-1": { // 11 Feb
        msg: "Hari pertama ya Bebeee? 🥺 Aku tau rasanya nggak enak banget.Karena yang enak kan berduaan sama mas, semangat beeeee",
        type: "img",
        file: "11.jpeg"
    },
    "12-1": { // 12 Feb
        msg: "Masih kram perutnya? Coba liat video ini, lucu banget biar Bebeee ketawa dikit! 🥰",
        type: "vid",
        file: "12.mp4"
    },
    "13-1": { // 13 Feb
        msg: "Day 3! Biasanya hari ini lagi deras-derasnya. Sabar ya sayang, I'm always here for you. ❤️",
        type: "img",
        file: "13.jpg"
    },
    "14-1": { // 14 Feb (Valentine)
        msg: "Happy Valentine Bebeee! 🍫 Meskipun lagi mens, kamu tetap yang termanis di dunia!",
        type: "img",
        file: "14.jpg"
    },
    "15-1": { // 15 Feb
        msg: "Gombalan hari ini: Kamu tau gak kenapa aku gak butuh gula di kopiku? Soalnya senyum kamu udah manis banget. 😋",
        type: "vid",
        file: "15.mp4"
    }
    // Kamu bisa tambah sampai tanggal 28 dengan format "TGL-BULAN" (Bulan Feb = 1)
};

function updateContent() {
    const now = new Date();
    const tgl = now.getDate();
    const bln = now.getMonth(); // 1 = Feb, 2 = Mar
    const hari = ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];
    const bulan = ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"];

    // Update Tampilan Kalender
    document.getElementById("curr-date").innerText = tgl;
    document.getElementById("curr-month").innerText = bulan[bln];
    document.getElementById("curr-day").innerText = hari[now.getDay()];

    const key = `${tgl}-${bln}`;
    const data = database[key];

    const mediaCont = document.getElementById("media-content");
    const textCont = document.getElementById("daily-text");

    if (data) {
        textCont.innerText = data.msg;
        if (data.type === "img") {
            mediaCont.innerHTML = `<img src="assets/${data.file}">`;
        } else {
            mediaCont.innerHTML = `<video controls autoplay muted loop><source src="assets/${data.file}" type="video/mp4"></video>`;
        }
    } else {
        // Konten Default Jika Tanggal Belum Ada di Database
        textCont.innerText = "Semangat terus ya harinya, Bebeee sayang! Kamu yang terbaik! 💖";
        mediaCont.innerHTML = `<img src="assets/default.jpg">`;
    }
}

// Jalankan saat load
updateContent();