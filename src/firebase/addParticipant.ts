import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './config';

type addParticipantParams = {
    email: string;
    description: string;
};

const participantsRef = collection(db, 'participants');

export const addParticipant = async ({ email, description }: addParticipantParams) =>
    setDoc(doc(participantsRef, email), {
        email,
        description,
    });
