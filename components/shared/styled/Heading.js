import { styled } from '@mui/material/styles';


export const Heading = styled('h2')(({theme}) => ({
    color : theme.palette.text.dark,
    fontWeight : 'normal',
    display : 'flex',
    alignItems : 'center',
    gap : 10,

}));