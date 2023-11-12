import { Button as MuiButton } from '@mui/material';
import styled from '@emotion/styled';
import colors from '../../theme/colors';

export const Button = styled(MuiButton)`
    background-color: ${colors.beige};
    color: ${colors.navy};

    &:hover {
        background-color: ${colors.beige};
    }
`;
