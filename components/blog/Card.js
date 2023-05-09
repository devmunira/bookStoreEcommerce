import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {PrimaryBtn, SecBtn} from '../shared/styled/component';
import {useTheme} from '@mui/material/styles';

export default function ImgMediaCard({
    img,
    text,
    heading,
    link,
    linkDisplay = true
}) {
    const theme = useTheme()
    return (
        <Card
            sx={{
            maxWidth: '100%',
            boxShadow: 'none',
            height: '450px',
            padding: 2
        }}>
            <CardMedia component="img" alt="green iguana" height="200" image={img}/>
            <CardContent
                sx={{
                paddingY: 2,
                paddingX: 0
            }}>
                <Typography
                    variant='body2'
                    style={{
                    color: theme.palette.grey[600],
                    fontSize: '12px'
                }}>By Admin, 12/04/2022</Typography>
                <Typography
                    variant="h1"
                    title={heading}
                    sx={{
                    fontSize: '15px',
                    fontWeight: 'bold'
                }}>
                    {heading}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                    fontSize: '14px'
                }}>
                    {text}
                </Typography>
            </CardContent>
            {linkDisplay && <CardActions sx={{
                paddingX: 0
            }}>
                <Link legacyBehavior href={link} passHref>
                    <PrimaryBtn>Read More</PrimaryBtn>
                </Link>
                <SecBtn size="small">Share</SecBtn>
            </CardActions>
}
        </Card>
    );
}