import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from './config';

const citiesRef = collection(db, 'cities');

export const addUser = async () =>
    await setDoc(doc(citiesRef, 'LA'), {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA',
    });
