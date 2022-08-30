import { useNavigate } from 'react-router-dom'
import { AppBar, Container , Box, Button} from '@mui/material';
import { useEffect, useState } from 'react';
import fetchData from '../fetch/index';

const pages = ['Categories', 'Subcategories', 'Items'];

const AppHeader = () => {

    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    const routeToPage = (page) => {
        console.log('Route to page:', page)   
        navigate(page.toLowerCase())     
    };

    const fetchAllCategories = async() =>{
        await fetchData('GET', "/category",{})

    }

    useEffect(() => {
        fetchAllCategories()

    })

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