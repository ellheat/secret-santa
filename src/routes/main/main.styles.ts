import styled from '@emotion/styled';
import colors from '../../theme/colors';

export const FormWrapper = styled.section`
    background-color: ${colors.beige};
    padding: 32px;
    border-radius: 4px;
    width: 100%;

    @media (min-width: 481px) {
        max-width: 400px;
    }
`;
