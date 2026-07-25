import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmRsUvbfRdbCPvETqIieRxLAWGQi8j4I4",
  authDomain: "hiya-beauty.firebaseapp.com",
  projectId: "hiya-beauty",
  storageBucket: "hiya-beauty.firebasestorage.app",
  messagingSenderId: "916766487544",
  appId: "1:916766487544:web:568fc24b307e4c00845c0d",
  measurementId: "G-B22DBJPL4C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productList = document.getElementById("product-list");

async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    const p = doc.data();

    productList.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <div class="card-body">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <p class="price">৳ ${p.price}</p>
        </div>
      </div>
    `;
  });
}

loadProducts();
