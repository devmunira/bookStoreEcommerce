import {
    Avatar,
    Backdrop,
    Badge,
    Box,
    Card,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Typography
} from '@mui/material';
import React from 'react'
import {useTheme} from '@mui/material/styles';
import BreakDivider from '@/src/components/shared/ui/Divider';
import InputTextType from '@/src/components/shared/ui/Input';
import {Input, Label} from '@/src/components/shared/styled/Form';
import {PlaneBtn, PrimaryBtn, SecBtn} from '@/src/components/shared/styled/component';
import Image from 'next/image';
import IncrementDecrementBtn from '@/src/components/shared/ui/IncrementDecrementBtn';
import {blue, red} from '@mui/material/colors';
import Head from 'next/head';
import SEO from '@/src/components/layout/SEO';

function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{
                    p: 3
                }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {id: `vertical-tab-${index}`, 'aria-controls': `vertical-tabpanel-${index}`};
}

const Tabarray = [
    'My Account',
    'My Order',
    'My E-Book',
    'My WishList',
    'My Review',
    'Order Track',
    'Logout'
]

export default function Myaccount() {
    const theme = useTheme();
    const [value,
        setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="wrapper">
            <Head>
                <SEO
                    title={'Home'}
                    description={'Lorem ipsum'}
                    url={''}
                    twitterCard={''}
                    image={''}></SEO>
            </Head>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card
                            style={{
                            padding: "20px"
                        }}>
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{
                                borderColor: 'divider'
                            }}>
                                {Tabarray.map((item, index) => <Tab
                                    style={{
                                    alignSelf: 'flex-start'
                                }}
                                    key={index}
                                    label={item}
                                    {...a11yProps(index)}/>)
}
                            </Tabs>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Card
                            style={{
                            padding: "20px",
                            borderTop: "2px solid",
                            borderTopColor: theme.palette.primary.main
                        }}>
                            {Tabarray.map((item, i) => <TabPanel key={i} value={value} index={i}>
                                {i == 0 && <Box>
                                    <Typography variant='h6'>Personal Information</Typography>
                                    <BreakDivider></BreakDivider>

                                    <InputTextType name={'name'} placeholder={'Full Name'} label={'Full Name'}></InputTextType>

                                    <InputTextType
                                        type={'date'}
                                        name={'dob'}
                                        placeholder={'Date of Birth'}
                                        label={'Date of Birth'}></InputTextType>

                                    <InputTextType
                                        type={'text'}
                                        name={'phone'}
                                        placeholder={'Mobile Number'}
                                        label={'Mobile Number'}></InputTextType>

                                    <InputTextType
                                        type={'email'}
                                        name={'email'}
                                        placeholder={'Email Address'}
                                        label={'Email Address'}></InputTextType>

                                    <InputTextType
                                        type={'file'}
                                        name={'photo'}
                                        placeholder={'Profile Photo'}
                                        label={'Profile Photo'}></InputTextType>

                                    <Avatar
                                        alt="Remy Sharp"
                                        src={'/author.webp'}
                                        sx={{
                                        width: 56,
                                        height: 56
                                    }}/>

                                    <br></br>

                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group">
                                            <FormControlLabel value="female" control={< Radio />} label="Female"/>
                                            <FormControlLabel value="male" control={< Radio />} label="Male"/>
                                            <FormControlLabel value="other" control={< Radio />} label="Other"/>
                                        </RadioGroup>
                                    </FormControl>

                                    <br></br>
                                    <br></br>

                                    <SecBtn
                                        style={{
                                        width: "100px",
                                        fontSize: "16px"
                                    }}>Save</SecBtn>

                                    <br></br>

                                    <BreakDivider></BreakDivider>

                                    <Typography variant='h6'>Change Password</Typography>

                                    <InputTextType
                                        name={'oldpass'}
                                        placeholder={'Old Password'}
                                        label={'Old Password'}
                                        type='password'></InputTextType>

                                    <InputTextType
                                        name={'newpass'}
                                        placeholder={'New Password'}
                                        label={'New Password'}
                                        type='password'></InputTextType>

                                    <InputTextType
                                        name={'confirmpass'}
                                        placeholder={'Confirm Password'}
                                        label={'Confirm Password'}
                                        type='password'></InputTextType>

                                    <br></br>
                                    <br></br>

                                    <SecBtn
                                        style={{
                                        width: "100px",
                                        fontSize: "16px"
                                    }}>Update</SecBtn>

                                    <br></br>

                                </Box>}

                                {i == 1 && <Box>
                                    <Typography variant='h6'>Order History</Typography>

                                    <TableContainer >
                                        <Table
                                            sx={{
                                            minWidth: 650
                                        }}
                                            aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>OrderId</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Details</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Status</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Qnty</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Total</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow
                                                    sx={{
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                }}>
                                                    <TableCell component="th" scope="row">
                                                        <Typography>12/02/2021</Typography>
                                                        <Typography>SOP-1245678</Typography>
                                                    </TableCell>

                                                    <TableCell>
                                                        <Typography
                                                            sx={{
                                                            fontSize: '14px',
                                                            fontWeight: 'bold'
                                                        }}>Product Name</Typography>
                                                        <Typography
                                                            sx={{
                                                            fontSize: '12px',
                                                            margin: '0px',
                                                            padding: '0px'
                                                        }}>Variant</Typography>
                                                        <PlaneBtn
                                                            sx={{
                                                            fontSize: '12px',
                                                            margin: '0px',
                                                            padding: '0px',
                                                            color: blue[800]
                                                        }}>View All</PlaneBtn>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge badgeContent={'Pending'} color="secondary"></Badge>
                                                    </TableCell>
                                                    <TableCell>20</TableCell>
                                                    <TableCell>$782</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                </Box>}

                                {i == 2 && <Box>
                                    <Typography variant='h6'>E-Book Download</Typography>
                                    <BreakDivider></BreakDivider>

                                    <TableContainer >
                                        <Table
                                            sx={{
                                            minWidth: 650
                                        }}
                                            aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>OrderId</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Details</TableCell>

                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow
                                                    sx={{
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                }}>
                                                    <TableCell component="th" scope="row">
                                                        <Typography>12/02/2021</Typography>
                                                        <Typography>SOP-1245678</Typography>
                                                    </TableCell>

                                                    <TableCell>
                                                        <Typography
                                                            sx={{
                                                            fontSize: '14px',
                                                            fontWeight: 'bold'
                                                        }}>Product Name</Typography>
                                                        <Typography
                                                            sx={{
                                                            fontSize: '12px',
                                                            margin: '0px',
                                                            padding: '0px'
                                                        }}>Variant</Typography>

                                                    </TableCell>
                                                    <TableCell>
                                                        <PlaneBtn
                                                            sx={{
                                                            fontSize: '12px',
                                                            margin: '0px',
                                                            padding: '0px',
                                                            color: blue[800]
                                                        }}>Download</PlaneBtn>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                </Box>}
                                {i == 3 && <Box>
                                    <Typography variant='h6'>WishList Items</Typography>
                                    <BreakDivider></BreakDivider>
                                    <TableContainer >
                                        <Table
                                            sx={{
                                            minWidth: 650
                                        }}
                                            aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>OrderId</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Details</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Status</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Qnty</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Total</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow
                                                    sx={{
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                }}>
                                                    <TableCell component="th" scope="row">
                                                        <Typography>12/02/2021</Typography>
                                                        <Typography>SOP-1245678</Typography>
                                                    </TableCell>

                                                    <TableCell>
                                                        <Typography
                                                            sx={{
                                                            fontSize: '14px',
                                                            fontWeight: 'bold'
                                                        }}>Product Name</Typography>
                                                        <Typography
                                                            sx={{
                                                            fontSize: '12px',
                                                            margin: '0px',
                                                            padding: '0px'
                                                        }}>Variant</Typography>
                                                        <PlaneBtn
                                                            sx={{
                                                            fontSize: '12px',
                                                            margin: '0px',
                                                            padding: '0px',
                                                            color: blue[800]
                                                        }}>View All</PlaneBtn>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge badgeContent={'Pending'} color="secondary"></Badge>
                                                    </TableCell>
                                                    <TableCell>20</TableCell>
                                                    <TableCell>$782</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                </Box>}
                                {i == 4 && <Box>
                                    <Typography variant='h6'>Review List</Typography>
                                    <BreakDivider></BreakDivider>
                                    <TableContainer >
                                        <Table
                                            sx={{
                                            minWidth: 650
                                        }}
                                            aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>OrderId</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Details</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Status</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Qnty</TableCell>
                                                    <TableCell
                                                        style={{
                                                        padding: "5px"
                                                    }}>Total</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow
                                                    sx={{
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0
                                                    }
                                                }}>
                                                    <TableCell component="th" scope="row">
                                                        <Typography>12/02/2021</Typography>
                                                        <Typography>SOP-1245678</Typography>
                                                    </TableCell>

                                                    <TableCell>
                                                        <Typography
                                                            sx={{
                                                            fontSize: '14px',
                                                            fontWeight: 'bold'
                                                        }}>Product Name</Typography>
                                                        <Typography
                                                            sx={{
                                                            fontSize: '12px',
                                                            margin: '0px',
                                                            padding: '0px'
                                                        }}>Variant</Typography>
                                                        <PlaneBtn
                                                            sx={{
                                                            fontSize: '12px',
                                                            margin: '0px',
                                                            padding: '0px',
                                                            color: blue[800]
                                                        }}>View All</PlaneBtn>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge badgeContent={'Pending'} color="secondary"></Badge>
                                                    </TableCell>
                                                    <TableCell>20</TableCell>
                                                    <TableCell>$782</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                </Box>}
                                {i == 5 && <Box>
                                    <Typography variant='h6'>Order Tracking</Typography>
                                    <BreakDivider></BreakDivider>
                                    <InputTextType
                                        name={'orderId'}
                                        placeholder={'Order Id'}
                                        label={'Order Id'}
                                        type='text'></InputTextType>

                                    <br></br>

                                    <SecBtn
                                        style={{
                                        width: "100px",
                                        fontSize: "16px"
                                    }}>Track</SecBtn>

                                    <br></br>

                                </Box>}

                                {i == 6 && <Box>
                                    <Typography variant='h6'>Logout From Account</Typography>
                                    <BreakDivider></BreakDivider>

                                    <PrimaryBtn
                                        style={{
                                        width: '100%'
                                    }}>Logout</PrimaryBtn>

                                </Box>}
                            </TabPanel>)
}
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}