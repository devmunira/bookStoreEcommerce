import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const MiniInput = styled('input')(({theme}) => ({
    outline : 'none',
    width : '100%',
    padding: '0px 16px',
    lineHeight: '25px',
    fontSize: '14px',
    fontWeight: 500,
    color: theme.palette.text.primary,
    background: theme.palette.background.light,
    transition: 'border .3s ease',
    boxShadow : 'none',
    border : '1px solid #ddd',
   "&::placeholder" :  {
        color: theme.palette.text.primary,
    },
    "&:focus" :  {
        outline: 'none',
        borderColor: '#275EFE',
    }

}))



export const Input = styled('input')(({theme}) => ({
    outline : 'none',
    width : '100%',
    padding: '5px 16px',
    lineHeight: '25px',
    fontSize: '13px',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    background: theme.palette.background.light,
    transition: 'border .3s ease',
    boxShadow : 'none',
    border : '1px solid #ddd',
   "&::placeholder" :  {
        color: theme.palette.text.secondary,
    },
    "&:focus" :  {
        outline: 'none',
        background: theme.palette.background.light,
    }

}))



export const Textarea = styled('textarea')(({theme}) => ({
    outline : 'none',
    width : '100%',
    padding: '5px 16px',
    lineHeight: '25px',
    fontSize: '13px',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    background: theme.palette.background.light,
    transition: 'border .3s ease',
    boxShadow : 'none',
    border : '1px solid #ddd',
   "&::placeholder" :  {
        color: theme.palette.text.secondary,
    },
    "&:focus" :  {
        outline: 'none',
        background: theme.palette.background.light,
    }

}))


export const Label = styled('label')(({theme})=>({
    color : theme.palette.grey[600],
    fontSize : '13px',
    textTransform : 'capitalize'

}))


export const ErrorText = styled('span')(({theme})=>({
    color : red[600],
    fontSize : '12px',
    textTransform : 'capitalize'

}))


export const FormGroup = styled('div')(({theme})=>({
    padding : '5px 0px',
    
}))


export const MiniBtn = styled('button')(({theme}) => ({
    background : theme.palette.background.light,
    color : theme.palette.text.primary,
    padding : '2px 8px',
    border : '1px solid',
    outline : 'none',
    borderColor : theme.palette.background.dark
}))

export const CustomSelect = styled('select')(({theme}) => ({
    outline : 'none',
    padding: '6px 16px',
    fontSize: '13px',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    background: theme.palette.background.light,
    transition: 'border .3s ease',
    boxShadow : 'none',
    border : '1px solid #ddd',
    borderRadius : 'none',
    fontWeight : 'bold',
   "&::placeholder" :  {
        color: theme.palette.text.secondary,
    },
    "&:focus" :  {
        outline: 'none',
        borderColor: theme.palette.primary.light,
    }

}))

export const  Option = styled('option')(({theme}) => ({
    borderRadius : 'none',
    background : theme.palette.background.light
}))