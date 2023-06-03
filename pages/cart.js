import SEO from '@/src/components/layout/SEO'
import {Input} from '@/src/components/shared/styled/Form'
import {PlaneBtn, PrimaryBtn} from '@/src/components/shared/styled/component'
import BreakDivider from '@/src/components/shared/ui/Divider'
import IncrementDecrementBtn from '@/src/components/shared/ui/IncrementDecrementBtn'
import {
    Box,
    Card,
    Container,
    Divider,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import {red} from '@mui/material/colors'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const cart = () => {
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
                <Grid
                    container
                    spacing={5}
                    style={{
                    justifyContent: 'center'
                }}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Card
                            style={{
                            padding: '20px'
                        }}>
                            <Typography
                                variant='h1'
                                style={{
                                fontSize: "24px"
                            }}>My Shopping Bag</Typography>

                            <TableContainer >
                                <Table
                                    sx={{
                                    minWidth: 650
                                }}
                                    aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product</TableCell>
                                            <TableCell>Details</TableCell>
                                            <TableCell>Qnty</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Total</TableCell>
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
                                                <Image src={'/book.png'} width={50} height={50} alt=''></Image>
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
                                                    color: red[800]
                                                }}>Remove</PlaneBtn>
                                            </TableCell>
                                            <TableCell>
                                                <IncrementDecrementBtn></IncrementDecrementBtn>
                                            </TableCell>
                                            <TableCell>$129</TableCell>
                                            <TableCell>$782</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card
                            style={{
                            padding: '20px'
                        }}>
                            <Typography
                                variant='h1'
                                style={{
                                fontSize: "24px"
                            }}>Summery</Typography>
                            <BreakDivider></BreakDivider>
                            <form
                                className='justifyStartAlignCenter'
                                style={{
                                gap: 0
                            }}>
                                <Input type='text' placeholder='Apply Cuppon'></Input>
                                <PrimaryBtn>Apply</PrimaryBtn>
                            </form>
                            <BreakDivider></BreakDivider>
                            <ul>
                                <li>
                                    <Typography variant='body1' className="justifySpaceBetweenAlignCenter">
                                        <strong>Subtotal:</strong>
                                        <span>$1526</span>
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className="justifySpaceBetweenAlignCenter">
                                        <strong>Shipping:</strong>
                                        <span>
                                            + $100</span>
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className="justifySpaceBetweenAlignCenter">
                                        <strong>Discount:</strong>
                                        <span>
                                            - $200</span>
                                    </Typography>
                                </li>
                                <BreakDivider></BreakDivider>
                                <li>
                                    <Typography variant='body1' className="justifySpaceBetweenAlignCenter">
                                        <strong>Grand Total:</strong>
                                        <span>
                                            - $1426</span>
                                    </Typography>
                                </li>
                            </ul>
                            <BreakDivider></BreakDivider>
                            <PrimaryBtn
                                style={{
                                width: '100%'
                            }}>CheckOut</PrimaryBtn>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default cart