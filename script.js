function runSc() {
const nama = prompt("Masukkan Nama Anda:");

const umur = prompt("Masukkan Umur Anda:");


if (umur >= 13) {
    const studio = prompt("Pilih studio (A, B, C):");

    if (studio === 'A' || studio === 'a') {
        alert(`Tiket untuk ${nama}\nStudio A\nUmur ${umur}`);
    } else if (studio === 'B' || studio === 'b') {
        alert(`Tiket untuk ${nama}\nStudio B\nUmur ${umur}`);
    } else if (studio === 'C' || studio === 'c') {
        alert(`Tiket untuk ${nama}\nStudio C\nUmur ${umur}`);
    } else {
        alert("Studio yang Anda pilih tidak valid");
    }
} else {
    alert("Maaf, Anda tidak memenuhi syarat umur untuk masuk.");
}
}
