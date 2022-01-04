function hitung_dolar(){
    if(kurs.value == "dollar"){
        let nilai = Number(document.getElementById("nilai").value);
        let dolar = 14650
        let jumlah = nilai * dolar
        document.getElementById("jumlah").value=jumlah
    }
}