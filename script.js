let sisiLuas = 5;
let hitungLuas = sisiLuas * sisiLuas;

console.log("Luas persegi : " + hitungLuas);

let sisiKeliling = parseInt(prompt("Masukkan sisi: "));
let hitungKeliling = sisiKeliling * 4;

console.log("Keliling persegi : " + hitungLuas);

function hitungLuas() {
    let sisiLuas = parseInt(document.getElementById("sisiLuas").value);
    let hitungLuas = sisiLuas * sisiLuas;

        hitungLuas = parseInt(document.getElementById(hitungLuas).value);
       console.log("Luas persegi : " + hitungLuas);
   }

   const HasilLuas = document.getElementsById("hasilLuas");
   const HasilKeliling = document.getElementById("hasilKeliling")
   
   function hitungLuas() {
       const sisi = parseInt(document.getElementById("luasSisi").value);
       if (isNaN(sisi) || sisi <= 0 || sisi == "") {
           alert("Jumlah sisi harus bilangan positif dan tidak boleh kosong atau 0.");
           return;
       }
       const luas = sisi * sisi;
       HasilLuas.innerHTML = `
           <p>Hasil :</p>
           <p> ${luas} cm2 </p></>
       `;
   }
