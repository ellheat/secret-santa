import { collection, doc, getDoc } from 'firebase/firestore';
import './app.css';
import { addUser } from './firebase/add';
import { db, getUsers } from './firebase/config';
import { useEffect } from 'preact/hooks';

export function App() {
    const handleAddRecord = () => addUser();

    useEffect(() => {
        getUsers().then((a) => console.log(a));
    }, []);

    // const [count, setCount] = useState(0);
    return <button onClick={handleAddRecord}>Add</button>;
}
