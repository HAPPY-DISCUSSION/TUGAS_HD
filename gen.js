// variabel global
var g_jeruk = 0;
var g_apel = 0;
var g_anggur = 0;
var g_jambu = 0;
var g_mangga = 0;
var g_melon = 0;
// variabel total keseluruhan
var g_total = 0;
// variabel totalQ
var totalQ = 0;
// Fungsi untuk konversi input string menjadi number
function Input(IdElemen) {
    var input;
    input = parseInt(document.getElementById(IdElemen).value);
    return input;
}

function Output() {
    Swal.fire({
        title: '<i class="fa fa-shopping-cart fa-2x"></i>',
        
        html: 
            '<p>Banyak buah = '+totalQ+' kg</p>' +
            '<p>Total Bayar = Rp. '+g_total+'</p>',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText:
            '<i class="fa fa-money-bill-wave"></i> Bayar',
        cancelButtonText:
            '<i class="fa fa-arrow-right"></i> Lanjut Belanja'
    }).then((result => {
        if (result.value){
            Swal.fire(
                'Pembayaran Berhasil!',
                'Terimakasih telah berbelanja di HD FruitShop :)',
                'success'
            )
            resetdong();
            }
        }
    ))
}
function Keranjang(idKeranjang) {
    var keranjangku;
    keranjangku = document.getElementById(idKeranjang).innerHTML = " Keranjang (" + totalQ + ")";
}

function tes(idHarga, idQ){
    var harga;
    var Q;
    harga = Input(idHarga);
    Q = Input(idQ);
    if (idHarga == "hrgjeruk") {
        g_jeruk += Q;
        g_total += harga;
        totalQ += Q;
        Keranjang("txtkeranjang");
    }
    else if (idHarga == "hrgapel") {
        g_apel += Q;
        g_total += harga;
        totalQ += Q;
        Keranjang("txtkeranjang");
    }
    else if (idHarga == "hrganggur") {
        g_anggur += Q;
        g_total += harga;
        totalQ += Q;
        Keranjang("txtkeranjang");
    }
    else if (idHarga == "hrgjambu") {
        g_jambu += Q;
        g_total += harga;
        totalQ += Q;
        Keranjang("txtkeranjang");
    }
    else if (idHarga == "hrgmangga") {
        g_mangga += Q;
        g_total += harga;
        totalQ += Q;
        Keranjang("txtkeranjang");
    }
    else if (idHarga == "hrgmelon") {
        g_melon += Q;
        g_total += harga;
        totalQ += Q;
        Keranjang("txtkeranjang");
    }
}

function resetdong(){
    g_total = 0;
    g_anggur = 0;
    g_apel = 0;
    g_jambu = 0;
    g_jeruk = 0;
    g_mangga = 0;
    g_melon = 0;
    totalQ = 0;
    document.getElementById("txtkeranjang").innerHTML = " Keranjang (0)";
}