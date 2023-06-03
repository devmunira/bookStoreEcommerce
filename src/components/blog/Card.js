import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {PrimaryBtn, SecBtn} from '../shared/styled/component';
import {useTheme} from '@mui/material/styles';
import Iframe from 'react-iframe'
import ReactAudioPlayer from 'react-audio-player';
import ReactMarkdown from 'react-markdown'
import {FacebookShareButton,FacebookIcon} from 'next-share'



export default function ImgMediaCard({
    img,
    text,
    heading,
    link,
    linkDisplay,
    author,
    category,
    createdAt,
    posttype,
    video ,
    audio= true,
    height='200px',
    headingSize='18px',
    id,
    slug
}) {
    const theme = useTheme()
    return (
        <Card
            sx={{
            maxWidth: '100%',
            boxShadow: 'none',
            height: 'auto',
            padding: 2
        }}>
            {posttype == 'video-post' && <Iframe
                url={video}
                width="100%"
                height={height}
                id=""
                className=""
                display="block"
                position="relative"/>}

            {posttype == 'single-image-post' && <CardMedia component="img" alt="green iguana" height={height} image={img}/>}

            {posttype == 'audio-post' && <ReactAudioPlayer
            style={{ width : '100%' , height: height , background : theme.palette.background.light }}
            className='justifyAlignCenter'
            src={audio}  controls/>}
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
                }}>By {author }, {new Date(createdAt).toLocaleDateString("en-US")}</Typography>

                <Link href={`/blog/${id}`} passHref>
                    <Typography
                        variant="h1"
                        title={heading}
                        sx={{
                        fontSize: headingSize,
                        fontWeight: 'bold',
                        lineHeight : headingSize == '18px' ? '30px' : '50px'
                    }}>
                        {heading}
                    </Typography>
                </Link>

                    

                <ReactMarkdown>{text}</ReactMarkdown>
                
            </CardContent>
            {linkDisplay && <CardActions sx={{
                paddingX: 0
            }}>
                <Link legacyBehavior href={link} passHref>
                    <PrimaryBtn>Read More</PrimaryBtn>
                </Link>
                <FacebookShareButton
                    url={`${process.env.NEXT_PUBLIC_URL}/blog/${id}`}
                    quote={heading}
                    hashtag={'#bookstore'}
                >
                    <SecBtn
                     style={{ boxShadow : theme.shadows[1]  }}
                     size={34}>
                        Share on fb
                     </SecBtn>
                </FacebookShareButton>
            </CardActions>
}
        </Card>
    );
}