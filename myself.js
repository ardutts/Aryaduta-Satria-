// Ambil elemen ul utama
const myList = document.getElementById("my-list");

// Ubah background semua anak langsung dari #my-list
const listItems = myList.children;
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = "#fff7cc";
}

// Temukan elemen <li> yang berisi <ul>
const subList = myList.querySelector("li ul");
const parentLi = subList.parentNode;

// Tambahkan label sebelum sub-item tanpa menghapus isinya
const label = document.createElement("div");
label.textContent = "Profile";
label.className = "profile-label"; // pakai class dari CSS
parentLi.insertBefore(label, subList);
