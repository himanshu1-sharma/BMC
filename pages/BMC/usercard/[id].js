import React, { useState, useEffect } from 'react'
import Head from 'next/head'

export async function getServerSideProps({ params }) {
    // Fetch data from an API using the id parameter
    console.log(params.id)
    const res = await fetch(`https://bizsapp.co.in/api/business/card/${params.id}`);
    const data = await res.json();

    return { props: { data } };


}




export default function usercard({ data }) {

    const [bmcData, setBmcData] = useState()

    useEffect(() => {
        setBmcData(data.data)
    }, [])

    console.log("BMC Data", bmcData)
    return (
        <>

        </>
    )
};
