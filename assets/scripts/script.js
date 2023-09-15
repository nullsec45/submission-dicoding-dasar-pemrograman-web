const daftar_kategori = document.querySelectorAll("main .daftar_kategori ul li");
const card_produk = document.querySelector("main .daftar_produk .card_produk");
const daftar_produk_container = document.querySelector("main .daftar_produk .row_card_produk");
const nav_menu = document.querySelectorAll("nav ul.list_navbar li");
const daftar_kategori_parent = document.querySelector(".content.daftar_kategori");
const daftar_produk_parent = document.querySelector(".content.daftar_produk");
const daftar_hasil_parent = document.querySelector(".content.hasil");
const daftar_blog_parent = document.querySelector(".content.blog");
const daftar_author_parent = document.querySelector(".content.author");


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

nav_menu.forEach((item) => {
    item.addEventListener("click", function () {
        const kategori_aktif = document.querySelector("header nav ul.list_navbar li a.active");
        console.log(kategori_aktif);
        kategori_aktif.className = kategori_aktif.classList.remove("active");
        this.firstElementChild.classList.add("active");
        let menu = this.firstElementChild.innerText;
        if (menu == "Menu") {
            daftar_kategori_parent.style.display = "block";
            daftar_produk_parent.style.display = "block";
            daftar_hasil_parent.style.display = "block";
            daftar_blog_parent.style.display = "none";
            daftar_author_parent.style.display = "none";
        } else {
            daftar_kategori_parent.style.display = "none";
            daftar_produk_parent.style.display = "none";
            daftar_hasil_parent.style.display = "none";
            daftar_blog_parent.style.display = "block";
            daftar_author_parent.style.display = "block";
        }
    })
})

daftar_kategori.forEach((item) => {
    item.addEventListener("click", () => {
        const kategori_aktif = document.querySelector("main  .daftar_kategori ul li.active");
        kategori_aktif.className = kategori_aktif.className.replace(" active", " ");
        item.className += " active";

        let nav_link = item.querySelector("a");
        let kategori = nav_link.getAttribute("href").split("#")[1];

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
