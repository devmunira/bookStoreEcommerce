import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SummeryTable from './Summery';
import Author from './Author';
import Review from './Review';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Summery" {...a11yProps(1)} />
          <Tab label="Author" {...a11yProps(2)} />
          <Tab label="Review" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant='body2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsa ipsum illo autem est iure laudantium libero fuga ullam in harum qui, eveniet doloremque dolorum, optio animi officia omnis facilis eligendi? Iusto debitis impedit perspiciatis molestiae deserunt voluptatum expedita, mollitia quae quia illum fuga laudantium culpa aliquam unde optio repudiandae recusandae ducimus amet inventore dolorem similique eius nisi! Est iure magni eius eos, suscipit error. Rem adipisci cum, ipsam molestias quae at est quisquam, qui cumque nisi tenetur temporibus iste quo quia non fuga? Quisquam eos iure beatae esse corrupti aspernatur aut, unde neque harum maiores? Exercitationem explicabo quisquam iusto?</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SummeryTable></SummeryTable>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Author></Author>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Review></Review>
      </TabPanel>
    </Box>
  );
}