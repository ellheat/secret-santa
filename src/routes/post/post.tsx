import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import { DocumentData } from 'firebase/firestore';
import { Participant, getParticipants } from '../../firebase/getParticipants';

export const Post = () => {
    const [participants, setParticipants] = useState<DocumentData>([]);

    useEffect(() => {
        getParticipants().then((participants) => setParticipants(participants));
    }, []);

    return (
        <List>
            {participants.map((participant: Participant) => (
                <ListItem key={participant.email}>{participant.email}</ListItem>
            ))}
        </List>
    );
};
