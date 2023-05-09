import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';


export const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.mode == 'light' ?  theme.palette.text.secondary : theme.palette.text.darksec,
}));



export const SecendaryBtn = styled('a')(({ theme }) => ({
  padding : '4px 0px',
  color :  theme.palette.text.primary,
  fontSize : '12px',
  transition : '.5s',
  cursor : 'pointer',
  position : 'relative',
  display: 'inline-block',
  verticalAlign: 'middle',
  webkitTransform: 'perspective(1px) translateZ(0)',
  transform: 'perspective(1px) translateZ(0)',
  boxShadow: '0 0 1px rgba(0, 0, 0, 0)',
  overflow: 'hidden',
  "&::after" : {
    content: "''",
    position: 'absolute',
    zIndex: '-1',
    left: '0',
    right: '100%',
    bottom: '0',
    background: theme.palette.primary.light,
    height: '1px',
    webkitTransitionProperty: 'right',
    transitionProperty: 'right',
    webkitTransitionDuration: '0.3s',
    transitionDuration: '0.3s',
    webkitTransitionTimingFunction: 'ease-out',
    transitionTimingFunction: 'ease-out',
  },
  "&:hover::after":{
    right : '0',
  },
  "&:focus::after":{
    right : '0',
  },
 
  "&:active::after":{
    right : '0',
  },
  "&:hover" : {
    color : theme.palette.primary.main
  }
 
}));


export const PrimaryBtn = styled('button')(({ theme }) => ({
 padding : '8px 10px',
 background : theme.palette.primary.main,
 color: '#fff',
 textAlign: 'center',
 border : 'none',
 fontSize : '12px',
 boxShadow : theme.shadows[1],
 transition : '.5s',
 cursor : 'pointer',
 "&:hover" : {
  background : theme.palette.primary.dark,
  boxShadow : theme.shadows[2],

 },

 "@media (max-width: 900px)"  : {
    padding : "4px 6px"
  }

}));


export const CartBtn = styled('button')(({ theme }) => ({
  padding : '5px 5px',
  background : theme.palette.primary.light,
  color: '#fff',
  textAlign: 'center',
  border : 'none',
  fontSize : '12px',
  boxShadow : theme.shadows[1],
  transition : '.5s',
  cursor : 'pointer',
  "&:hover" : {
   background : theme.palette.primary.drak,
   boxShadow : theme.shadows[2],
   content : '"12"',
   position : 'relative',
 
  }
 
 }));


export const FooterLink = styled('a')(({ theme }) => ({
  padding : '4px 0px',
  color :  '#eee',
  fontSize : '12px',
  transition : '.5s',
  cursor : 'pointer',
  position : 'relative',
  display: 'inline-block',
  verticalAlign: 'middle',
  webkitTransform: 'perspective(1px) translateZ(0)',
  transform: 'perspective(1px) translateZ(0)',
  boxShadow: '0 0 1px rgba(0, 0, 0, 0)',
  overflow: 'hidden',
  "&::after" : {
    content: "''",
    position: 'absolute',
    zIndex: '-1',
    left: '0',
    right: '100%',
    bottom: '0',
    background: theme.palette.primary.light,
    height: '1px',
    webkitTransitionProperty: 'right',
    transitionProperty: 'right',
    webkitTransitionDuration: '0.3s',
    transitionDuration: '0.3s',
    webkitTransitionTimingFunction: 'ease-out',
    transitionTimingFunction: 'ease-out',
  },
  "&:hover::after":{
    right : '0',
  },
  "&:focus::after":{
    right : '0',
  },
 
  "&:active::after":{
    right : '0',
  },
  "&:hover" : {
    color : theme.palette.primary.main
  }
 
 
 
 }));


export const SecBtn = styled(PrimaryBtn)(({ theme }) => ({
  background : theme.palette.secondary.main,
  transition : '.5s',
  cursor : 'pointer',
  boxShadow : theme.shadows[2],
  "&:hover" : {
    background : theme.palette.secondary.dark,
    boxShadow : theme.shadows[3],
  }

}));

export const IconBtn = styled('a')(({theme}) => ({
  color : theme.palette.text.primary,
  fontSize : '14px',
  transition : '.5s',
  cursor : 'pointer',
  "&:hover" : {
    color : theme.palette.text.secondary
  }
}));

export const PlaneBtn = styled('a')(({theme}) => ({
  color : theme.palette.text.primary, 
  fontSize : 14 , 
  lineHeight : 2,
  transition  : '.5s',
  cursor : 'pointer',
  "&:hover" : {
    color : theme.palette.text.secondary,
  }
}))


export const VariantBtn = styled('a')(({theme}) => ({
  color : theme.palette.text.primary, 
  fontSize : 14 , 
  lineHeight : 2,
  transition  : '.5s',
  cursor : 'pointer',
  border : '1px solid grey',
  padding : '3px',
  boxShadow : theme.shadows[1],
  "&:hover" : {
    color : theme.palette.text.secondary,
  },
  "&:active" : {
    color : theme.palette.text.secondary,
  }
}))


