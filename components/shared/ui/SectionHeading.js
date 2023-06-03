import {useTheme} from "@mui/material/styles";
import Image from "next/image";
import {SecendaryBtn} from "../styled/component";
import {Heading} from "../styled/Heading";
import { Input } from "../styled/Form";

const SectionHeading = ({text, icon,seeAll,handleCategoryFilter,filter,name}) => {
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
            seeAll ? <SecendaryBtn>See All</SecendaryBtn> : <Input name={'search'} value={filter} onChange={handleCategoryFilter} type="search" placeholder={`Search by ${name}`} style={{ width: '16vw' }}></Input>
        }
        
    </div> 
    </>
    )
    
}

export default SectionHeading;