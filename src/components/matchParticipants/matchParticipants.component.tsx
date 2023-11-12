import { MatchedParticipants, saveMatchedParticipants } from '../../firebase/saveMatchedParticipants';
import type { Participant } from '../../firebase/getParticipants';
import { Button } from './matchParticipants.styles';

type MatchParticipantsProps = {
    participants: Participant[];
};

const MatchParticipants = ({ participants }: MatchParticipantsProps) => {
    const handleMatchParticipants = () => {
        const matchedParticipants: MatchedParticipants = {};

        participants.forEach((participant) => {
            const availableParticipants = participants.filter(
                (item) => item !== participant && !Object.values(matchedParticipants).includes(item),
            );
            const randomNumber = Math.floor(Math.random() * availableParticipants.length);
            const randomlyPickedParticipant = availableParticipants[randomNumber];

            matchedParticipants[participant.email] = randomlyPickedParticipant;
        });

        saveMatchedParticipants(matchedParticipants);
    };

    return <Button onClick={handleMatchParticipants}>Match participants</Button>;
};

export default MatchParticipants;
