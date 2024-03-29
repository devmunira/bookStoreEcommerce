import {useTheme} from "@mui/material/styles";
import Image from "next/image";
import {SecendaryBtn} from "../styled/component";
import {Heading} from "../styled/Heading";
import { Input } from "../styled/Form";
import Link from 'next/link';

const  SectionHeading = ({text, icon,seeAll,handleCategoryFilter,filter,name, url=null}) => {
    const theme = useTheme()
    return ( 
    <> <div
        style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <Heading>
            {text}
        </Heading>
        {
            seeAll ? <Link href={url}><SecendaryBtn>See All</SecendaryBtn></Link> : <Input name={'search'} value={filter} onChange={handleCategoryFilter} type="search" placeholder={`Search by Title`} style={{ width: '16vw' }}></Input>
        }
        
    </div> 
    </>
    )
    
}

export default SectionHeading;