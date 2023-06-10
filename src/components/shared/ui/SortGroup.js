import React from 'react'
import {useTheme} from '@mui/material/styles'
import {CustomSelect, Select} from '../styled/Form';
import {Box, Button} from '@mui/material';
import {TbColumns2, TbColumns3} from 'react-icons/tb';
import {useStoreActions} from 'easy-peasy';
import {GrColumns} from "react-icons/gr"
import {PlaneBtn} from '../styled/component';
import {RefreshRounded} from '@mui/icons-material';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import {chnageColumn} from '@/src/redux/colunm/actions';

// Sorting, Column Group
const SortGroup = ({sortList, handleInput, router , page='blog'}) => {
    const theme = useTheme();
    const iconStyles = {
        height: "20px",
        width: "20px",
        color: theme.palette.text.primary
    };
    const dispatch = useDispatch()
    return (
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 3
        }}>

            {Object
                .keys(router.query)
                .length > 0 &&
                 <Link href={`/${page}`} className="justifyStartAlignCenter" legacyBehavior>
                    <PlaneBtn
                        >Clear All
                        <RefreshRounded
                            style={{
                            height: '14px',
                            paadingTop: "10px"
                        }}></RefreshRounded>
                    </PlaneBtn>
                </Link>
            }

            <Box
                sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 2
            }}>
                <Button
                    onClick={() => dispatch(chnageColumn(6))}
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
                    onClick={() => dispatch(chnageColumn(4))}
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
                    onClick={() => dispatch(chnageColumn(3))}
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

            <CustomSelect onChange={handleInput} name={'sort'}>
                {sortList.length > 0 && sortList.map((item, index) => <option value={item.value} key={index}>{item.name}</option>)
}
            </CustomSelect>

        </Box>
    )
}

export default SortGroup