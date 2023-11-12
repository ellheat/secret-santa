import { useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore';
import { getParticipants } from '../../firebase/getParticipants';
import { ParticipantsList } from '../../components';
import { MatchParticipants } from '../../components/matchParticipants';

export const Post = () => {
    const [participants, setParticipants] = useState<DocumentData>([]);

    useEffect(() => {
        getParticipants().then((participants) => setParticipants(participants));
    }, []);

    return (
        <>
            <ParticipantsList participants={participants} />
            <MatchParticipants participants={participants} />
        </>
    );
};
