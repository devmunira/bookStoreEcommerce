import { styled } from '@mui/material/styles';


const SeacrhBox = styled('input')(({theme}) => ({
    background : theme.palette.background.light,
    border : '1px solid rgb(224,227,231)',
    padding : '10px 10px',
    width : '80%',
    color : theme.palette.text.dark,
    transition : '.5s',
    "::placeholder" : {
        color : theme.palette.text.light,
    },
    "&:hover" : {
        background : theme.palette.background.light,
    }
}))

export const SearchBtn = styled('button')(({theme}) => ({
    position : 'absolute',
    right : '45px',
    border : 'none',
    background : theme.palette.primary.main,
    color : 'white',
    borderTopLeftRadius : '0px',
    display: 'flex',
    justifyContent : 'center',
    alignItems:'center',
    height : '41px',
    width : '40px'

}))

export default SeacrhBox;