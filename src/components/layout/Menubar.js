import {pages} from '@/src/constant/MenuItems';
import {Button} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {Box, Container} from '@mui/system';
import Link from 'next/link';

const MenuBar = () => {
    const theme = useTheme();

    return ( <> <Box
        className="section"
        style={{
        borderBottom: `1px solid ${theme.palette.background.light}`,
        borderTop: `1px solid ${theme.palette.background.light}`
    }}>
        <Container maxWidth="lg" style={{
            padding: '5px'
        }}>
            <Box
                sx={{
                flexGrow: 1,
                display: {
                    xs: 'none',
                    md: 'none',
                    lg: 'flex'
                },
                justifyContent: 'center',
                gap: 5
            }}>
                {pages.map((page, index) => (
                    <Link href={page.link} key={index}>
                        <Button
                            sx={{
                            color: theme.palette.text.dark,
                            display: 'block',
                            textTransform: 'capitalize'
                        }}>
                            {page.title}
                        </Button>
                    </Link>
                ))}
            </Box>
        </Container>
    </Box> </>
    )
}

export default MenuBar