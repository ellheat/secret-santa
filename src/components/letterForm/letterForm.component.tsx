import { SubmitHandler, useForm } from 'react-hook-form';
import { addParticipant } from '../../firebase/addParticipant';
import { Form, Button } from './letterForm.styles';
import { TextField } from '@mui/material';

type FormValues = {
    email: string;
    description: string;
};

const LetterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (values) => addParticipant(values);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField id="outlined-basic" label="Outlined" variant="standard" />
            <input {...register('email', { required: true })} />
            {errors.email && <span>This field is required</span>}
            {/* <TextField id="outlined-basic2" label="Outlined2" variant="outlined" /> */}
            <input {...register('description', { required: true })} />
            {errors.description && <span>This field is required</span>}

            <Button variant="contained">Submit</Button>
        </Form>
    );
};

export default LetterForm;
