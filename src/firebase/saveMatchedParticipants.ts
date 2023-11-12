import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './config';
import { Participant } from './getParticipants';

export type MatchedParticipants = Record<string, Participant>;

const participantsRef = collection(db, 'matchedParticipants');

export const saveMatchedParticipants = async (matchedParticipants: MatchedParticipants) =>
    setDoc(doc(participantsRef, '2023'), matchedParticipants);
