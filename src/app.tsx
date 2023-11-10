import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'preact/hooks';
import { addParticipant } from './firebase/addParticipant';
import { getParticipants } from './firebase/getParticipants';

type FormValues = {
    email: string;
    description: string;
};

export function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (values) => addParticipant(values);

    useEffect(() => {
        getParticipants().then((participants) => console.log({ participants }));
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email', { required: true })} />
            {errors.email && <span>This field is required</span>}
            <input {...register('description', { required: true })} />
            {errors.description && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}
