
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery, useTheme } from '@mui/material';

const Image_carousel = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const carouselItems = [
       

        {
            image: 'https://neepco.co.in/sites/default/files/banner1n.jpg',
            text: 'NEEPCO operates the largest Hydro Power Station 600 MW Kameng HPS in N. E. Region',
            buttonText: 'View',
            buttonFunction: () => {
                // Function for Button 1
                console.log('Button 1 clicked');
            },
        },

        {
            image: 'https://neepco.co.in/sites/default/files/banner1.jpg',
            text: ' NEEPCO is the only CPSU having Hydro, Thermal, Solar Power Stations in the N.E.Region',
            buttonText: 'View',
            buttonFunction: () => {
                // Function for Button 2
                console.log('Button 2 clicked');
            },
        },
        

       
       
    {
            image: 'https://neepco.co.in/sites/default/files/banner4n.jpg',
            text: ' NEEPCO provides electricity to about 3 houses out of 10 in the North East Region',
            buttonText: 'View',
            buttonFunction: () => {
                // Function for Button 2
                console.log('Button 2 clicked');
            },
        },
        // Add more objects for additional images
    ];

    return (
        <Carousel
            showArrows={!isMobile}
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={3000}
            stopOnHover
            dynamicHeight={isMobile}
        >
            {carouselItems.map((item, index) => (
                <div key={index} style={{ position: 'relative' }}>
                    <img src={item.image} alt={`NEEPCO ${index + 1}`} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                        <h2>{item.text}</h2>
                        <p>Description or additional text goes here.</p>
                        <button onClick={item.buttonFunction}>{item.buttonText}</button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Image_carousel;
