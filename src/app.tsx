import { addUser } from './firebase/add';
import { getUsers } from './firebase/config';
import { useEffect } from 'preact/hooks';

export function App() {
    const handleAddRecord = () => addUser();

    useEffect(() => {
        getUsers().then((a) => console.log(a));
    }, []);

    return <button onClick={handleAddRecord}>Add</button>;
}
