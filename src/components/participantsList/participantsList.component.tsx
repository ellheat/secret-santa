import { List, ListItem } from '@mui/material';
import type { Participant } from '../../firebase/getParticipants';

type ParticipantsProps = {
    participants: Participant[];
};

const Participants = ({ participants }: ParticipantsProps) => {
    return (
        <List>
            {participants.map((participant: Participant) => (
                <ListItem key={participant.email}>{participant.email}</ListItem>
            ))}
        </List>
    );
};

export default Participants;
