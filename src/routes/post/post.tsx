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
            {/* @ts-expect-error back here in the future */}
            <ParticipantsList participants={participants} />
            {/* @ts-expect-error back here in the future */}
            <MatchParticipants participants={participants} />
        </>
    );
};
