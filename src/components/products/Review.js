import { Avatar, Box, Card, List, ListItem, ListItemAvatar, ListItemText, Modal, Rating, Typography } from '@mui/material'
import React from 'react'
import { PrimaryBtn, SecBtn } from '../shared/styled/component'
import useOpenClose from '@/src/hooks/useOpenClose'
import StarIcon from '@mui/icons-material/Star';
import { Input, Textarea } from '../shared/styled/Form';
import ImageIcon from '@mui/icons-material/Image';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };


  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

const Review = () => {
  const {open,handleClose,handleOpen} = useOpenClose(false)
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Card style={{ padding : '20px' }}>
        <PrimaryBtn onClick={handleOpen}>Place Your Review</PrimaryBtn>
        <Typography variant='body1' sx={{ fontWeight : 'bold' , py : 2 }}>Total Review : (120) </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
        </List>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Books Review
            </Typography>
            <br></br>
            <Box className="justifyStartAlignCenter" style={{ paddingBottom : '10px' }}>
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>
            <form>
                <Textarea placeholder='Write Your Review Here....'></Textarea>
                <Input type='file'></Input>
                <br></br>
                <br></br>
                <SecBtn type='submit'>Submit Review</SecBtn>
            </form>
        </Box>
        </Modal>
    </Card>
  )
}

export default Review