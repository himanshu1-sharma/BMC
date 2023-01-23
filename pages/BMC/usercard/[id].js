import React, { useState, useEffect } from 'react'
import Head from 'next/head'
// import styles from '../../../styles/BMC.module.css'
import Accordion from 'react-bootstrap/Accordion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar } from "swiper";
import ReactPlayer from 'react-player'


export async function getServerSideProps({ params }) {
    // Fetch data from an API using the id parameter
    console.log(params.id)
    const res = await fetch(`https://bizsapp.co.in/api/business/card/${params.id}`);
    const data = await res.json();

    return { props: { data } };


}

export default function Usercard({ data }) {

    const [cardData, setCardData] = useState()
    const [active, setActive] = useState(false);
    const [isActive, setIsActive] = useState("false")
    const pageURL = `https://www.digrowfa.com/BMC/usercard/${cardData?._id}`
    const [productActive, setProductActive] = useState(false)
    const [selectProduct, setSelectProduct] = useState()
    const [serviceActive, setServiceActive] = useState(false)
    const [selectService, setSelectService] = useState()
    const handleModal = () => {
        setIsActive(!isActive)
    }
    const handleProduct = (e) => {
        setSelectProduct(e)
        setProductActive(true)
    }
    const closeProductSlide = () => {
        setProductActive(false)
    }

    const handleService = (e) => {
        setSelectService(e)
        setServiceActive(true)
    }
    const closeServiceSlide = () => {
        setServiceActive(false)
    }

    const [copied, setCopied] = useState(false);
    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }

    useEffect(() => {
        setCardData(data.data)
    }, [])

    console.log("BMC Data", cardData)
    return (
        <>
            <Head>
                <title>{`${cardData?.brandName} BMC | Business Management Card`}</title>
                <meta name="description" content={cardData?.about} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="msapplication-TileImage" content={cardData?.brandLogo} />
                <meta property="og:site_name" content={cardData?.brandName} />
                <meta property="og:BMC" content={cardData?.businessName} />
                <meta property="og:title Card" content="Business Managment Card" />
                <meta property="og:image" itemProp="image" content={cardData?.brandLogo} />
                <meta property="og:type" content="website" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
                <meta property="og:url" content="digrowfa.com" />
            </Head>
        </>
    )
};





