import { collection, getDocs } from 'firebase/firestore';
import { db } from './config';

export const getParticipants = async () => {
    const participantsCol = collection(db, 'participants');
    const participantsSnapshot = await getDocs(participantsCol);
    const participantsList = participantsSnapshot.docs.map((doc) => doc.data());
    return participantsList;
};
