import React from 'react'
import {useTheme} from '@mui/material/styles'
import {CustomSelect, Select} from '../styled/Form';
import {Box, Button} from '@mui/material';
import {TbColumns2, TbColumns3} from 'react-icons/tb';
import {useStoreActions} from 'easy-peasy';
import {GrColumns} from "react-icons/gr"
import { PlaneBtn } from '../styled/component';
import { RefreshRounded } from '@mui/icons-material';
import Link from 'next/link';

// Sorting, Column Group
const SortGroup = () => {
    const theme = useTheme();
    const iconStyles = {
        height: "20px",
        width: "20px",
        color: theme.palette.text.primary
    };
    const {setColumn} = useStoreActions((action) => action.column)
    return (
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 3
        }}>
            <Link href={'/'} className="justifyStartAlignCenter" legacyBehavior>
                <PlaneBtn>Clear All <RefreshRounded style={{ height : '14px' , paadingTop : "10px" }}></RefreshRounded></PlaneBtn> 
            </Link>

            <Box
                sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 2
            }}>
                <Button
                    onClick={() => setColumn(6)}
                    sx={{
                    minWidth: '0px',
                    padding: '0px'
                }}>
                    <TbColumns2
                        style={{
                        cursor: 'pointer',
                        ...iconStyles
                    }}></TbColumns2>
                </Button>
                <Button
                    onClick={() => setColumn(4)}
                    sx={{
                    minWidth: '0px',
                    padding: '0px'
                }}>
                    <TbColumns3
                        style={{
                        cursor: 'pointer',
                        ...iconStyles
                    }}></TbColumns3>
                </Button>
                <Button
                    onClick={() => setColumn(3)}
                    sx={{
                    minWidth: '0px',
                    padding: '0px'
                }}>
                    <GrColumns
                        style={{
                        cursor: 'pointer',
                        ...iconStyles
                    }}></GrColumns>
                </Button>
            </Box>

            <CustomSelect>
                <option>Latest Collections</option>
                <option>Best Rated</option>
                <option>Best Selling</option>
                <option>Hight to low</option>
                <option>Low to High</option>
                <option>ASC</option>
                <option>DESC</option>
            </CustomSelect>

        </Box>
    )
}

export default SortGroup