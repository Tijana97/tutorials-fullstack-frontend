import { useNavigate } from 'react-router-dom'
import { AppBar, Container , Box, Button} from '@mui/material';
//import { useState } from 'react';

const pages = ['Categories', 'Subcategories', 'Items'];

const AppHeader = () => {

    const navigate = useNavigate()

    const routeToPage = (page) => {
        console.log('Route to page:', page)   
        navigate(page.toLowerCase())     
    };

    return (
        <AppBar position="static" style={{ background: '#2E3B55' }}>
            <Container sx={{ display: 'flex' , flexWrap: 'wrap'}}>
                <Box sx={{ flexGrow: 1, display: 'flex' , justifyContent: 'space-evenly' }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={() => routeToPage(page)}
                    sx={{ my: 2, color: 'white', display: 'block', border:  'solid white', borderRadius: '12px' }}
                >
                    {page}
                </Button>
                ))}
                </Box>
            </Container>
        </AppBar>
    );
}

export default AppHeader;