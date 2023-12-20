import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery, useTheme } from '@mui/material';

const ImageCarousel = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const carouselItems = [
        {
            image: 'https://neepco.co.in/sites/default/files/banner1n.jpg',
            text: 'NEEPCO operates the largest Hydro Power Station in N. E. Region',
        },
        {
            image: 'https://neepco.co.in/sites/default/files/banner1.jpg',
            text: 'NEEPCO is the only CPSU having Hydro in the N.E.Region',
        },
        {
            image: 'https://neepco.co.in/sites/default/files/banner4n.jpg',
            text: 'NEEPCO provides electricity to about 3 houses out of 10',
        },
    ];

    function modifyText(text, screenWidth) {
        const words = text.split(' ');
    
        if (screenWidth <= 100) {
            return '';
        }
    
        if (words.length > 10) {
            return '...' + words.slice(0, 20).join(' ') + ' ...';
        }
    
        return text;
    }
    return (
        <Carousel
        showArrows={!isMobile}
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    stopOnHover
                    dynamicHeight={isMobile}
                    sx={{width: "100%"}}
        >
            {carouselItems.map((item, index) => (
                <div key={index} style={{ position: 'relative' }}>
                    <img src={item.image} alt={`NEEPCO ${index + 1}`} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'right', color: 'black', marginLeft: "20%",width:"100%" }}>
                        <h2>{modifyText(item.text, screenWidth)}</h2>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
