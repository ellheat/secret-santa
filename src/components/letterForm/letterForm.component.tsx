import { SubmitHandler, useForm } from 'react-hook-form';
import { addParticipant } from '../../firebase/addParticipant';
import { Form, Input, Button, SuccessMessage } from './letterForm.styles';

type FormValues = {
    email: string;
    address: string;
    description: string;
};

const LetterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitted },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (values) => addParticipant(values);

    const renderSentState = <SuccessMessage>The letter has been sent to Santa!</SuccessMessage>;

    const renderForm = (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Email"
                variant="outlined"
                {...register('email', { required: 'Email field is required' })}
                error={!!errors.email}
                helperText={errors.email?.message}
                autoComplete="off"
            />
            <Input
                label="Locker address"
                variant="outlined"
                {...register('address', { required: 'Locker address field is required' })}
                error={!!errors.address}
                helperText={errors.address?.message}
                autoComplete="off"
            />
            <Input
                label="About you"
                variant="outlined"
                {...register('description', { required: 'About you field is required' })}
                error={!!errors.description}
                helperText={errors.description?.message}
                multiline
                minRows={5}
                maxRows={5}
                autoComplete="off"
            />
            <Button type="submit" variant="contained" disabled={isSubmitting}>
                Submit
            </Button>
        </Form>
    );

    return isSubmitted ? renderSentState : renderForm;
};

export default LetterForm;
