import { Button as MuiButton, TextField } from '@mui/material';
import styled from '@emotion/styled';
import colors from '../../theme/colors';

export const Form = styled.form`
    display: grid;
    gap: 24px;
    grid-column: 1;
    grid-template-rows: auto;
`;

export const Button = styled(MuiButton)`
    background-color: ${colors.navy};
    color: ${colors.beige};
    margin-top: 16px;

    &:hover {
        background-color: ${colors.navy};
    }
`;

export const Input = styled(TextField)``;

export const SuccessMessage = styled.p`
    color: ${colors.navy};
`;
