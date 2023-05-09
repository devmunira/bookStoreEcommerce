import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CustomSelect, Label } from '../styled/Form';
import { red } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

export default function BasicSelect({handleChange,label,id,items,name}) {
  const [age, setAge] = React.useState('');
  const theme = useTheme();


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Label id={id}>{label}</Label>
        <Select
          labelId={id}
          id="demo-simple-select"
          value={age}
          label={label}
          onChange={handleChange}
          name={name}
          sx={{ background : theme.palette.background.light , borderRadius : '0px' , padding : '0px' , height : '40px'}}
        >
          {
            items.map((item,i) => <MenuItem value={item.val} key={i}>{item.name}</MenuItem>)
          }
          
        </Select>
      </FormControl>
    </Box>
  );
}