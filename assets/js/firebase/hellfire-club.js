import app from './app.js';
import {
    getFirestore,
    collection,
    addDoc,
    getDocs
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-club')
    const docRef = await addDoc(hellfireClubCollection, subscription)

    return docRef.id
}

export async function getHellfireClubSubscriptions() {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-club')
    const hellfireClubSnapshot = await getDocs(hellfireClubCollection)
    const subscriptions = hellfireClubSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}