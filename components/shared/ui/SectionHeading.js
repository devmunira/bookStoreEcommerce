import {useTheme} from "@mui/material/styles";
import Image from "next/image";
import {SecendaryBtn} from "../styled/component";
import {Heading} from "../styled/Heading";

const SectionHeading = ({text, icon}) => {
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
        <SecendaryBtn>See All</SecendaryBtn>
    </div> 
    </>
    )
    
}

export default SectionHeading;