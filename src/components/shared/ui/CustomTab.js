import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
          <Tab label="Mission" {...a11yProps(0)} />
          <Tab label="Vision" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa consequuntur nisi nemo ducimus quo eius vel, laboriosam minima atque nobis, numquam nam! Eligendi, tenetur illum rem esse veniam nam vel voluptates dignissimos saepe, tempore dolorum deserunt recusandae animi repellendus delectus quis. Recusandae dolor voluptatum minus iusto blanditiis qui iste dicta fugit eligendi ipsa quas, vero molestias rerum quam! Error a ullam eaque obcaecati iure, alias maxime? Dicta autem, nisi nam culpa vel reiciendis officia! Quidem iste tenetur a illum provident nisi ipsa eos, atque consequuntur, ratione sed voluptatum rem eaque vel. Alias exercitationem error ad minus sunt, quis nesciunt.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, temporibus! Excepturi pariatur iusto dolor ducimus id eveniet rem doloribus amet, placeat quis quos tenetur sit praesentium atque vero iste! Atque.
      </TabPanel>
    </Box>
  );
}