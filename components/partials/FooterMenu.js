import { Grid, Typography } from "@mui/material"
import { FooterLink } from "../shared/styled/component"
import Link from "next/link"

const FooterMenu = ({item}) => {
    return (
        <Grid item xs={6} sm={4} md={3} lg={2} style={{ paddingLeft : "30px" , boxSizing : "border-box" }}>
    <Typography variant="h6" style={{ color : '#eee' , fontSize :'14px',  fontSize : '16px'}}>{item.title}</Typography>
    <ul>
        {
            item.menus.map((i,index) => (<li key={index}>
            <FooterLink>{i}</FooterLink>
        </li>))
        }
    </ul>
</Grid>
    )
}

export default FooterMenu