import React, { useRef, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Image } from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            Line.current.classList.add('lineon')
            text.current.classList.add('titleon');
        }, 5)


        return () => {

        }
    }, [])
    return (



        <>
            <Helmet>
                <title>About</title>
            </Helmet>


            <div className='headingA'>
                <div className='line' ref={Line}>
                </div>
                <h1 className='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className='text'>
                    <h1>
                        Why Us
                    </h1>
                    <p>
                        A professionally managed manufacturer & exporter of garments made out of woven as well as knitted fabrics. Lifestyle fashion  holds its expertise in  apparels which are made by master craftsmen in the supervision of highly experienced hierarchy who bring out the best end product enriched with quality. Established in the year 2015, Lifestyle fashion  is one of the leading apparel Manufacturer & Export house in United States, Lifestyle fashion Ltd  is located in F-301, Sector-63, Boston, Massuchusetts, United states  The head office of the Company is located on the above mentioned address which comprises of dedicated Showroom, Sampling unit, Production and Centralized Store for all fabrics & trim, with Cutting and Finishing of our valued end product.
                        <br /><br />
                        Lifestyle fashion  is a unique  contemporary clothing brand known for its trend-driven styles with affordable prices. Drawing inspiration from the latest trends, from street style to runway, Lifestyle fashion is brand that offers an array of styles that is fit for the fashion loving people. From workwear to street style, night out, Lifestyle fashion label can keep you going from day-to-night. Shop the latest collection from Lifestyle  fashion line, ranging in dresses to tops, sweater knits, rompers, pants and outerwear.
                    </p>
                </div>

                <div className='imagecontainer'>
                    <div className='Imageabt'>
                        <Image className='mImage' boxSize='350px' objectFit="cover" src='https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt="Segun Adebayo" />
                    </div>
                </div>
            </div>



            <div className='Content2'>
                <div className='text'>
                <h1>
                        Customer Centric
                    </h1>
                    <p>
                        Our Company believes that the customers must be able to see latest fashion trends through Catwalks, Silhouettes, Concepts , Swatches etc. To make this happen with ease we have dedicated expert designers with excellent style sense working with us every season. To enhance our designs and keep up with the latest fashion trends across the world we keep visiting all the fashion Capitals and Exhibitions across the nation and world.The head office of the Company is located on the above mentioned address which comprises of dedicated Showroom, Sampling unit, Production and Centralized Store for all fabrics & trim, with Cutting and Finishing of our valued end product.
                        <br /><br />
                        We at  Lifestyle fashion are committed to production and supply of world-class product made on specified time and at best in class price, we continuously strive forward to meet the fluctuating expectations of our customers and we are determined to provide the ideal mix of quality and style inched to perfection, which makes us stand out from our fellow competitors. From workwear to street style, night out, Lifestyle fashion label can keep you going from day-to-night. Shop the latest collection from Lifestyle fashion line, ranging in dresses to tops, sweater knits, rompers, pants and outerwear.
                    </p>
                </div>

                <div className='imagecontainer'>
                    <div className='Imageabt'>
                        <Image className='mImage' boxSize='350px' objectFit="cover" src='https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80' alt="Segun Adebayo" />
                    </div>
                </div>
            </div>

        </>

    )
}

export default About
