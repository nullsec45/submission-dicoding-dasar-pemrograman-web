const daftar_kategori = document.querySelectorAll("main .daftar_kategori ul li");
const card_produk = document.querySelector("main .daftar_produk .card_produk");
const daftar_produk_container = document.querySelector("main .daftar_produk .row_card_produk");



let daftar_produk = {
    makanan: [
        {
            nama_produk: "Bakso",
            harga: 40000,
            img: "assets/images/makanan/bakso.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            kode: "PM-01"
        },
        {
            nama_produk: "Lontong Sayur",
            harga: 20000,
            img: "assets/images/makanan/lontong-opor-ayam.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            kode: "PM-02"
        },
        {
            nama_produk: "Nasi Ayam",
            harga: 25000,
            img: "assets/images/makanan/nasi-ayam-geprek.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            kode: "PM-02"
        },
    ],
    minuman: [
        {
            nama_produk: "Coffe Late",
            harga: 25000,
            img: "assets/images/minuman/coffe-late.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            kode: "PMN-01"
        },
        {
            nama_produk: "Es Jeruk",
            harga: 15000,
            img: "assets/images/minuman/es-jeruk.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            kode: "PMN-02"
        },
        {
            nama_produk: "Es Teh",
            harga: 20000,
            img: "assets/images/minuman/es-teh.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            kode: "PMN-03"
        },
        {
            nama_produk: "Teh Hangat",
            harga: 10000,
            img: "assets/images/minuman/teh-hangat.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            kode: "PMN-04"
        },
    ],
    cemilan: [
        {
            nama_produk: "Cheese Burger",
            harga: 20000,
            img: "assets/images/cemilan/cheese-burger.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            kode: "PC-01"
        },
        {
            nama_produk: "Kentang Goreng",
            harga: 15000,
            img: "assets/images/cemilan/kentang-goreng.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            kode: "PC-02"
        },
        {
            nama_produk: "Pangsit",
            harga: 15000,
            img: "assets/images/cemilan/pangsit.jpg",
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            kode: "PC-03"
        },
    ]
}

// let arrMakanan = Math.ceil(daftar_produk.makanan.length / 3);

// let makanan = [];
// for (let i = 0; i < daftar_produk.makanan.length; i += arrMakanan) {
//     makanan.push(daftar_produk.makanan.slice(i, i + arrMakanan));
// }
// console.log(makanan);

let arrMaksimal = 3;
let makanan = [];
let cemilan = [];
let minuman = [];
for (let i = 0; i < daftar_produk.makanan.length; i += arrMaksimal) {
    makanan.push(daftar_produk.makanan.slice(i, i + arrMaksimal));
}

for (let i = 0; i < daftar_produk.cemilan.length; i += arrMaksimal) {
    cemilan.push(daftar_produk.cemilan.slice(i, i + arrMaksimal));
}

for (let i = 0; i < daftar_produk.minuman.length; i += arrMaksimal) {
    minuman.push(daftar_produk.minuman.slice(i, i + arrMaksimal));
}

makanan.forEach((arr, i) => {
    const produk_container = document.createElement('div');
    produk_container.classList.add('card_produk');
    arr.forEach((produk, i) => {
        produk_container.insertAdjacentHTML("afterbegin", `
        <div class="card">
            <img src="${produk.img}" alt="">
            <div class="card_body">
                <h4>${produk.nama_produk}</h4>
                <h5 class="price">Rp.${produk.harga}</h5>
                <p>${produk.deskripsi}</p>
            </div>

            <div class="card_footer">
                <p>${produk.kode}</p>
            </div>
        </div>`);
        daftar_produk_container.appendChild(produk_container);
    });
});

daftar_kategori.forEach((item) => {
    item.addEventListener("click", () => {
        const kategori_aktif = document.querySelector("main  .daftar_kategori ul li.active");
        kategori_aktif.className = kategori_aktif.className.replace(" active", " ");
        item.className += " active";

        let nav_link = item.querySelector("a");
        let kategori = nav_link.getAttribute("href").split("#")[1];
        console.log(kategori);

        if (kategori == "makanan") {
            daftar_produk_container.innerHTML = "";
            makanan.forEach((arr, i) => {
                const produk_container = document.createElement('div');
                produk_container.classList.add('card_produk');
                arr.forEach((produk, i) => {
                    produk_container.insertAdjacentHTML("afterbegin", `
                    <div class="card">
                        <img src="${produk.img}" alt="">
                        <div class="card_body">
                            <h4>${produk.nama_produk}</h4>
                            <h5 class="price">Rp.${produk.harga}</h5>
                            <p>${produk.deskripsi}</p>
                        </div>
            
                        <div class="card_footer">
                            <p>${produk.kode}</p>
                        </div>
                    </div>`);
                    daftar_produk_container.appendChild(produk_container);
                });
            });
        } else if (kategori == "cemilan") {
            daftar_produk_container.innerHTML = "";
            cemilan.forEach((arr, i) => {
                const produk_container = document.createElement('div');
                produk_container.classList.add('card_produk');
                arr.forEach((produk, i) => {
                    produk_container.insertAdjacentHTML("afterbegin", `
                    <div class="card">
                        <img src="${produk.img}" alt="">
                        <div class="card_body">
                            <h4>${produk.nama_produk}</h4>
                            <h5 class="price">Rp.${produk.harga}</h5>
                            <p>${produk.deskripsi}</p>
                        </div>
            
                        <div class="card_footer">
                            <p>${produk.kode}</p>
                        </div>
                    </div>`);
                    daftar_produk_container.appendChild(produk_container);
                });
            });
        } else if (kategori == "minuman") {
            daftar_produk_container.innerHTML = "";
            minuman.forEach((arr, i) => {
                const produk_container = document.createElement('div');
                produk_container.classList.add('card_produk');
                arr.forEach((produk, i) => {
                    produk_container.insertAdjacentHTML("afterbegin", `
                    <div class="card">
                        <img src="${produk.img}" alt="">
                        <div class="card_body">
                            <h4>${produk.nama_produk}</h4>
                            <h5 class="price">Rp.${produk.harga}</h5>
                            <p>${produk.deskripsi}</p>
                        </div>
            
                        <div class="card_footer">
                            <p>${produk.kode}</p>
                        </div>
                    </div>`);
                    daftar_produk_container.appendChild(produk_container);
                });
            });
        }
    });
});
