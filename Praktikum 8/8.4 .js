function tambah() {
    let bilanganGanjil = parseInt(document.getElementById("bilanganganjil").value);
    let bilanganGenap = parseInt(document.getElementById("bilangangenap").value);
    let tambah = bilanganGanjil + bilanganGenap
    let hasil = document.getElementById("hasil")
    hasil.innerHTML = tambah
}