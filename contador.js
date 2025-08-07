import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { app } from './firebase-init.js';

const db = getFirestore(app);
const visitDocRef = doc(db, "visitantes", "contador");

// Incrementa o contador
async function incrementVisitantes() {
    try {
        const docSnap = await getDoc(visitDocRef);
        if (docSnap.exists()) {
            await updateDoc(visitDocRef, { count: increment(1) });
        } else {
            await setDoc(visitDocRef, { count: 1 });
        }
    } catch (error) {
        console.error("Erro ao incrementar contador: ", error);
    }
}

// Exibe o contador
async function displayVisitantes() {
    try {
        const docSnap = await getDoc(visitDocRef);
        const count = docSnap.exists() ? docSnap.data().count : 0;
        const el = document.getElementById('visit-count');
        if (el) el.textContent = count;
    } catch (error) {
        console.error("Erro ao carregar contador: ", error);
    }
}

// Sequência correta: incrementa, depois exibe
incrementVisitantes().then(displayVisitantes);
