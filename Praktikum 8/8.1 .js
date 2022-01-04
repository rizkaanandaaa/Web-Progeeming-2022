function hitung(){
    const PHI = 3.14// konstanta
    let jari = document.getElementById("bil1").value;
    console.log("jari-jari " + jari);
    let luas = PHI * jari * jari;
    let kill = 2.0 * PHI * jari;
    console.log("luas : " + luas);
    console.log("kill : " + kill);
    let area_hasil = document.getElementById("hasil");
    area_hasil.innerHTML = "luas : " + luas + "\nkeliling : " + kill;

}