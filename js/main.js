window.addEventListener('load', startGame);

const inputKata = document.querySelector('#input-kata');
const kataSekarang = document.querySelector('#kata-sekarang');
const tampilNilai = document.querySelector('#nilai');
const tampilWaktuSisa = document.querySelector('#waktu-sisa');
const hasil = document.querySelector('#hasil');
const detik = document.querySelector('#detik');

const kata = [
  "topi",
  "sungai",
  "ikan",
  "patung",
  "domba",
  "nakal",
  "anggur",
  "kabur",
  "bercanda",
  "kambing",
  "bangun",
  "pahlawan",
  "menang",
  "nutrisi",
  "pistol",
  "jahat",
  "saudara",
  "investigasi",
  "perian",
  "musim",
  "lucu",
  "sihir",
  "guru",
  "angkasa",
  "definisi",
  "ayo",
  "kotor",
  "bersih",
  "gitar",
  "piano",
  "menunggu",
  "keluar",
  "masuk",
  "lapangan",
  "bambu",
  "pedang",
  "mangga",
  "laptop",
  "komputer",
  "printer"
];


const level = {
  mudah: 5,
  sedang: 3,
  susah: 1
};


const levelSekarang = level.susah;

let waktu = levelSekarang;
let nilai = 0;
let mulai;
let sekali = 0;




function startGame() {

  detik.innerHTML = levelSekarang;

  tampilKata(kata);

  inputKata.addEventListener('input', cocokkan);

  setInterval(hitungMundur, 1000);

  setInterval(cekStatus, 50);
}

function tampilKata(kata) {

  const acak = Math.floor(Math.random() * kata.length);

  kataSekarang.innerHTML = kata[acak];
}

function cocokkan() {
  if (cocok()) {
    mulai = true;
    waktu = levelSekarang + 1;
    tampilKata(kata);
    inputKata.value = '';
    nilai++;
    sekali = 0;
  }


  if (nilai === -1) {
    tampilNilai.innerHTML = 0;
  } else {
    tampilNilai.innerHTML = nilai;
  }
}


function cocok() {
  if (inputKata.value === kataSekarang.innerHTML) {
    document.getElementById("benar").play();
    hasil.innerHTML = 'Benar!!!';
    hasil.style.color = "#4DB6AC";
    return true;
  } else {
    hasil.innerHTML = '';
    return false;
  }
}


function hitungMundur() {

  if (waktu > 0) {
    waktu--;
  } else if (waktu === 0) {

    mulai = false;
  }

  tampilWaktuSisa.innerHTML = waktu;
}


function cekStatus() {

  if (!mulai && waktu === 0) {
    hasil.innerHTML = 'Waktu Habis!!!';
    hasil.style.color = "red";
    soundHabis();
    nilai = -1;
  }
}

function soundHabis() {
  if (sekali === 0) {
    document.getElementById("habis").play();
  }
  sekali++;
}