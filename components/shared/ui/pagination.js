import * as React from 'react';
import {Link, MemoryRouter, Route, Routes, useLocation} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export default function PaginationLink({page, pageCount, handlePage}) {
    return (
        <Pagination

            count={pageCount}
            color='primary'
            page={page}
            onChange={(e, val) => handlePage(e, val)}
            sx={{ 
              "Button.MuiPaginationItem-circular.Mui-Selected" : {
                bgcolor : "primary.main",
                color : "#ff"
              },
              paddingTop : '50vh',
              textAlign : "right"
             }}            
            ></Pagination>
    );
}