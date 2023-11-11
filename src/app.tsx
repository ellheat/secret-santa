import { useEffect } from 'preact/hooks';
import { getParticipants } from './firebase/getParticipants';
import { LetterForm } from './components';

export const App = () => {
    useEffect(() => {
        getParticipants().then((participants) => console.log({ participants }));
    }, []);

    return (
        <>
            <LetterForm />
        </>
    );
};
