import React, { useEffect, useState } from 'react';
import '../components/MobileAgenda.css';
import Modal from '../components/Modal';
import FlightTicket from './sub-components/FlightTicket';
import TravelTicket from './sub-components/TravelTicket';
import Accomodation from './sub-components/Accomodation';
import Activity from './sub-components/Activity';

const MobileAgenda = () => {
    const days = ['May 5', 'May 6', 'May 7', 'May 8', 'May 9', 'May 10'];
    const day5May = ['May 5'];
    const day6May = ['May 6'];
    const day7May = ['May 7'];
    const day8May = ['May 8'];
    const day9May = ['May 9'];
    const day10May = ['May 10'];
    const times = ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 AM'];
    const IasiCharleroiFlightTickets = [
        { name: "Mihnea Ochesanu", link: "https://drive.google.com/file/d/15rOmF5rrdDkreftLthCZ0NQyNKdbrEKn/view?usp=drive_link"}
      ];

    const ClujCharleroiFlightTickets = [
        { name: "Ivan David", link: "https://drive.google.com/file/d/1OdKTlMZAGpZSvADxuGZZUC1wGHNT43Mq/view?usp=drive_link"},
        { name: "Matei Andrei", link: "https://drive.google.com/file/d/1JzYp1gd1IkQIJbVURJioNL7WTVEFtT2r/view?usp=drive_link"},
        { name: "Mateica Septimiu", link: "https://drive.google.com/file/d/1tfszmtEbcqIql1MZVAKIVM0uA2hvribA/view?usp=drive_link"},
        { name: "Pacurar Corneliu", link: "https://drive.google.com/file/d/170unMVGP058EE41aPx1McTQooJLd92P5/view?usp=drive_link"}
      ];

    const CharleroiBruxellesTravelTickets = [
        { name: "Ivan David", link: "https://drive.google.com/file/d/1b-qzYUsxglfW4dueKxUSii6EGc65SYSE/view?usp=drive_link"},
        { name: "Matei Andrei", link: "https://drive.google.com/file/d/1gdb-Ba2rLdBkRkRBupBqSUffCD-82Mif/view?usp=drive_link"},
        { name: "Mateica Septimiu", link: "https://drive.google.com/file/d/1I79ysPWV4MuDbaAN_MHrql_Lpk5H6eEH/view?usp=drive_link"},
        { name: "Mihnea Ochesanu", link: "https://drive.google.com/file/d/1P2O5_6-8wMv4ulgTLotzNbik_-eM48KH/view?usp=drive_link"},
        { name: "Pacurar Corneliu", link: "https://drive.google.com/file/d/15-l9w7PVOuLnXDrtkBtPI0Dg4qij6EM9/view?usp=drive_link"}
    ];

    const HeinekenExperienceTickets = [
        { name: "Ivan David", link: "https://drive.google.com/file/d/1ABQjT63XtNjAaZuDFP4SFHx0JOqaBsmN/view?usp=drive_link"}
    ]

    const KeukenhofTickets = [
        { name: "Ivan David", link: "https://drive.google.com/file/d/1ABQjT63XtNjAaZuDFP4SFHx0JOqaBsmN/view?usp=drive_link"}
    ]

    const BruxellesAmsterdamTravelTickets = [
        { name: "Ivan David", link: "https://drive.google.com/file/d/1vE9ziLXp3UlACLnczFvlE0GVaxfZXu8n/view?usp=drive_link"},
        { name: "Matei Andrei", link: "https://drive.google.com/file/d/1Rcv2TknforUaUg-RqUkS8UGIeani9fPB/view?usp=drive_link"},
        { name: "Mateica Septimiu", link: "https://drive.google.com/file/d/1L3qH607MOLIy6FcUqCstugGRC68DbMlt/view?usp=drive_link"},
        { name: "Mihnea Ochesanu", link: "https://drive.google.com/file/d/1uHKxT1fmcRKYsyve3aqff_uahxXqv2qj/view?usp=drive_link"},
        { name: "Pacurar Corneliu", link: "https://drive.google.com/file/d/1drR2PnzaHpky8rQqHEz6yxYnJNwYYkVY/view?usp=drive_link"}
    ];

    const AmsterdamAccomodationBooking = [
        { link: "https://drive.google.com/file/d/1PtrXMHb9wI407xm1o7w5-kdMwDrqvaNT/view?usp=drive_link"},
    ];

    const CharleroiAccomodationBooking = [
        { link: "https://drive.google.com/file/d/12Rcd4zg_ffg6jh_a3qMZnJ09xQnD49yI/view?usp=drive_link"},
    ];

    const AmsterdamBruxellesTravelSingleTicket = [
        { name: "Mihnea Ochesanu", link: "https://drive.google.com/file/d/1m8tuIN1bUPM2ae9PAU4GO8_CLHSwkFx_/view?usp=drive_link"}
    ];

    const BruxellesCharleroiTravelSingleTicket = [
        { name: "Mihnea Ochesanu", link: "https://drive.google.com/file/d/1gngOKHDFmqyhzL4smg1so3IuRmfuaJuE/view?usp=drive_link"}
    ];

    const AmsterdamBruxellesTravelTickets = [
        { name: "Ghiran Bogdan", link: "https://drive.google.com/file/d/198X88EhjhPjSafmUM5szf-Moi_oPP4jT/view?usp=drive_link"},
        { name: "Ivan David", link: "https://drive.google.com/file/d/1BhSDRa9b4GIngwObNGPUKYHMNItkrXE8/view?usp=drive_link"},
        { name: "Matei Andrei", link: "https://drive.google.com/file/d/1hxBHwibiCuXq60J5BGAH3u20SNHY5sAQ/view?usp=drive_link"},
        { name: "Mateica Septimiu", link: "https://drive.google.com/file/d/1mWbK0a2GFqvvmw-BVRIniNEALm2oo7R_/view?usp=drive_link"},
        { name: "Pacurar Corneliu", link: "https://drive.google.com/file/d/1eujbCPiChNyvqGvOc-bi81qDJjdGcTSE/view?usp=drive_link"}
    ];

    const BruxellesCharleroiTravelTickets = [
        { name: "Ghiran Bogdan", link: "https://drive.google.com/file/d/1C5gtvfCaRD8jKDt78dZSXT92dH4cDuj4/view?usp=drive_link"},
        { name: "Ivan David", link: "https://drive.google.com/file/d/1Gq2jJW4Lt9G46Y8rJh_ttxXkRDyo4dEM/view?usp=drive_link"},
        { name: "Matei Andrei", link: "https://drive.google.com/file/d/1gTrCJgmKuQ-HszPMdCypAHEUhVRBKt4A/view?usp=drive_link"},
        { name: "Mateica Septimiu", link: "https://drive.google.com/file/d/1dv1nH_rFWS2MNencYGJa-arWGUQ7NCWi/view?usp=drive_link"},
        { name: "Pacurar Corneliu", link: "https://drive.google.com/file/d/18KwI7zq2BjuWXJZLKS89wCnECHH42tV8/view?usp=drive_link"}
    ];

    const [todayColumn, setTodayColumn] = useState(null);

    useEffect(() => {
        const today = new Date();
        const dateString = `May ${today.getDate()}`; // Adjust this format as necessary
        const todayIndex = days.findIndex(day => day === dateString);
        setTodayColumn(todayIndex + 1); // +1 because array is 0-indexed but table columns are 1-indexed
    }, []);

    return (
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th data-label="Header"><center>Time</center></th>
                        {day5May.map(day => <th key={day}><center>{day}</center></th>)}
                    </tr>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {times.map((time, timeIndex) => (
                        <tr key={time}>
                            <td>{time}</td>
                            {day5May.map((day, dayIndex) => (
                                <td key={dayIndex} style={{ backgroundColor: 'none' }}>
                                    {day === 'May 5' && time === '06:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Iasi - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43661'
                                            from="Iasi"
                                            to="Charleroi"
                                            departureTime="05:50 AM"
                                            arrivalTime="07:45 AM"
                                            tickets={IasiCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Cluj - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43351'
                                            from="Cluj"
                                            to="Charleroi"
                                            departureTime="07:10 AM"
                                            arrivalTime="08:45 AM"
                                            tickets={ClujCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Travel: Charleroi - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='24097774'
                                            from="Charleroi Airport"
                                            to="Bruxelles (Midi Station)"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={CharleroiBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '12:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Amsterdam" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='FETT8W'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Amsterdam City Center - Sloterdijk"
                                            departureTime="12:40"
                                            arrivalTime="16:01"
                                            tickets={BruxellesAmsterdamTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Meininger Hotel Amsterdam City West" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4073.806.681"
                                            venue="Meininger Hotel Amsterdam City West"
                                            address="Orlyplein 1-67"
                                            imageSource="https://groupcorner.com/uploads/HOTELS/hotel_12688/_-184x57334bc5ab57/1000x548_C_184x57334bc5ab57.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={AmsterdamAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Hard Rock Cafe Amsterdam" 
                                        modalTitle="Lunch at Hard Rock Cafe Amsterdam" 
                                        modalIcon={'\u{1F3B8}'}
                                        customContent={<Activity 
                                            address="Max Euweplein 57-61, 1017 MA"
                                            startsAt="01:00 PM"
                                            imageSource="https://www.iamsterdam.com/_next/image?url=https%3A%2F%2Fapp.thefeedfactory.nl%2Fapi%2Fassets%2F5ff88131de7e8633a4aa65eb%2Fe1f07ea8-bee1-447b-8bdf-6e72c9cc93f5.jpg&w=1080&q=75"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 6' && time === '05:00 PM' ?  
                                    <Modal 
                                        buttonText="Heineken Experience" 
                                        modalTitle="Amsterdam Heineken Experience" 
                                        modalIcon={'\uD83C\uDF7A'} 
                                        customContent={<Activity 
                                            ticketNumber="GYGBLKV5BRBH"
                                            address="Orlyplein 1-67"
                                            startsAt="05:15 PM"
                                            imageSource="https://cdn.getyourguide.com/img/tour/b10d5d4a331d1abc.jpeg/145.jpg"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            tickets={HeinekenExperienceTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 7' && time === '11:00 AM' ?  
                                    <Modal 
                                        buttonText="Keukenhof" 
                                        modalTitle="Keukenhof Botannical Garden" 
                                        modalIcon={'\u{1F337}'}
                                        customContent={<Activity 
                                            address="2161 AM Lisse"
                                            startsAt="Available all day"
                                            imageSource="https://cdn.getyourguide.com/img/tour/5df9ef9bde57d.jpeg/98.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '06:00 PM' ?  
                                    <Modal 
                                        buttonText="River Cruise & pancakes" 
                                        modalTitle="Amsterdam river cruise with pancakes " 
                                        modalIcon={'\u{1F95E}'}
                                        customContent={<Activity 
                                            address="Ms. van Riemsdijkweg 41, 1033 RC"
                                            startsAt="05:45"
                                            imageSource="https://cdn.getyourguide.com/img/tour/014aa9f1364b87e2.jpeg/145.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 8' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="TonTon Arcade Room" 
                                        modalTitle="TonTon Arcade Room Amsterdam" 
                                        modalIcon={'\u{1F3AE}'}
                                        customContent={<Activity 
                                            address="Polonceaukade 27, 1014 DA"
                                            startsAt="16:00 PM"
                                            imageSource="https://storage.googleapis.com/thehundreds/media/2015/03/DSC_0446.jpeg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Factory Girl Lunch" 
                                        modalTitle="Factory Girl Lunch & Brunch Amsterdam" 
                                        modalIcon={'\u{1F354}'}
                                        customContent={<Activity 
                                            address="Saenredamstraat 32, 1072 CH"
                                            startsAt="16:00 PM"
                                            imageSource="https://www.mr-amsterdam.de/blog/media/images/restaurants-essen-trinken/the-factory-girl-amsterdam/the-factory-girl-amsterdam-freuhstueck.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='L9W7BL'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Wauters 75" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4036468325"
                                            venue="Wauters 75 Bruxelles-charleroi-airport"
                                            address="Rue Joseph Wauters, 6043 Charleroi, Belgium"
                                            imageSource="https://lh3.googleusercontent.com/proxy/aDsvc3Ik7QocTvagT8vwpho25Kjp02AX67QupKji2XlLIojeoLbFkgESZ9_1q6BiMSkHJw8m8W4HUDK_6geP4e1CCUMQwP5QyQhi0TdgpnH-P-6-oHTaY3HWasE-Gh4pMVFaPeGX2UqApK0pTkxDmQCLR5FTKqw=w287-h192-n-k-rw-no-v1"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={CharleroiAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 9' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Iasi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43662'
                                            from="Charleroi"
                                            to="Iasi"
                                            departureTime="08:20 AM"
                                            arrivalTime="12:00 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='HD7HCQ'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 10' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Cluj" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43352'
                                            from="Charleroi"
                                            to="Cluj"
                                            departureTime="09:15 AM"
                                            arrivalTime="12:40 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}
                                    
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
            <br></br>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th data-label="Header"><center>Time</center></th>
                        {day6May.map(day => <th key={day}><center>{day}</center></th>)}
                    </tr>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {times.map((time, timeIndex) => (
                        <tr key={time}>
                            <td>{time}</td>
                            {day6May.map((day, dayIndex) => (
                                <td key={dayIndex} style={{ backgroundColor: 'none' }}>
                                    {day === 'May 5' && time === '06:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Iasi - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43661'
                                            from="Iasi"
                                            to="Charleroi"
                                            departureTime="05:50 AM"
                                            arrivalTime="07:45 AM"
                                            tickets={IasiCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Cluj - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43351'
                                            from="Cluj"
                                            to="Charleroi"
                                            departureTime="07:10 AM"
                                            arrivalTime="08:45 AM"
                                            tickets={ClujCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Travel: Charleroi - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='24097774'
                                            from="Charleroi Airport"
                                            to="Bruxelles (Midi Station)"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={CharleroiBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '12:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Amsterdam" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='FETT8W'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Amsterdam City Center - Sloterdijk"
                                            departureTime="12:40"
                                            arrivalTime="16:01"
                                            tickets={BruxellesAmsterdamTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Meininger Hotel Amsterdam City West" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4073.806.681"
                                            venue="Meininger Hotel Amsterdam City West"
                                            address="Orlyplein 1-67"
                                            imageSource="https://groupcorner.com/uploads/HOTELS/hotel_12688/_-184x57334bc5ab57/1000x548_C_184x57334bc5ab57.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={AmsterdamAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Hard Rock Cafe Amsterdam" 
                                        modalTitle="Lunch at Hard Rock Cafe Amsterdam" 
                                        modalIcon={'\u{1F3B8}'}
                                        customContent={<Activity 
                                            address="Max Euweplein 57-61, 1017 MA"
                                            startsAt="01:00 PM"
                                            imageSource="https://www.iamsterdam.com/_next/image?url=https%3A%2F%2Fapp.thefeedfactory.nl%2Fapi%2Fassets%2F5ff88131de7e8633a4aa65eb%2Fe1f07ea8-bee1-447b-8bdf-6e72c9cc93f5.jpg&w=1080&q=75"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 6' && time === '05:00 PM' ?  
                                    <Modal 
                                        buttonText="Heineken Experience" 
                                        modalTitle="Amsterdam Heineken Experience" 
                                        modalIcon={'\uD83C\uDF7A'} 
                                        customContent={<Activity 
                                            ticketNumber="GYGBLKV5BRBH"
                                            address="Orlyplein 1-67"
                                            startsAt="05:15 PM"
                                            imageSource="https://cdn.getyourguide.com/img/tour/b10d5d4a331d1abc.jpeg/145.jpg"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            tickets={HeinekenExperienceTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 7' && time === '11:00 AM' ?  
                                    <Modal 
                                        buttonText="Keukenhof" 
                                        modalTitle="Keukenhof Botannical Garden" 
                                        modalIcon={'\u{1F337}'}
                                        customContent={<Activity 
                                            address="2161 AM Lisse"
                                            startsAt="Available all day"
                                            imageSource="https://cdn.getyourguide.com/img/tour/5df9ef9bde57d.jpeg/98.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '06:00 PM' ?  
                                    <Modal 
                                        buttonText="River Cruise & pancakes" 
                                        modalTitle="Amsterdam river cruise with pancakes " 
                                        modalIcon={'\u{1F95E}'}
                                        customContent={<Activity 
                                            address="Ms. van Riemsdijkweg 41, 1033 RC"
                                            startsAt="05:45"
                                            imageSource="https://cdn.getyourguide.com/img/tour/014aa9f1364b87e2.jpeg/145.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 8' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="TonTon Arcade Room" 
                                        modalTitle="TonTon Arcade Room Amsterdam" 
                                        modalIcon={'\u{1F3AE}'}
                                        customContent={<Activity 
                                            address="Polonceaukade 27, 1014 DA"
                                            startsAt="16:00 PM"
                                            imageSource="https://storage.googleapis.com/thehundreds/media/2015/03/DSC_0446.jpeg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Factory Girl Lunch" 
                                        modalTitle="Factory Girl Lunch & Brunch Amsterdam" 
                                        modalIcon={'\u{1F354}'}
                                        customContent={<Activity 
                                            address="Saenredamstraat 32, 1072 CH"
                                            startsAt="16:00 PM"
                                            imageSource="https://www.mr-amsterdam.de/blog/media/images/restaurants-essen-trinken/the-factory-girl-amsterdam/the-factory-girl-amsterdam-freuhstueck.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='L9W7BL'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Wauters 75" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4036468325"
                                            venue="Wauters 75 Bruxelles-charleroi-airport"
                                            address="Rue Joseph Wauters, 6043 Charleroi, Belgium"
                                            imageSource="https://lh3.googleusercontent.com/proxy/aDsvc3Ik7QocTvagT8vwpho25Kjp02AX67QupKji2XlLIojeoLbFkgESZ9_1q6BiMSkHJw8m8W4HUDK_6geP4e1CCUMQwP5QyQhi0TdgpnH-P-6-oHTaY3HWasE-Gh4pMVFaPeGX2UqApK0pTkxDmQCLR5FTKqw=w287-h192-n-k-rw-no-v1"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={CharleroiAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 9' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Iasi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43662'
                                            from="Charleroi"
                                            to="Iasi"
                                            departureTime="08:20 AM"
                                            arrivalTime="12:00 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='HD7HCQ'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 10' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Cluj" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43352'
                                            from="Charleroi"
                                            to="Cluj"
                                            departureTime="09:15 AM"
                                            arrivalTime="12:40 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}
                                    
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
            <br></br>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th data-label="Header"><center>Time</center></th>
                        {day7May.map(day => <th key={day}><center>{day}</center></th>)}
                    </tr>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {times.map((time, timeIndex) => (
                        <tr key={time}>
                            <td>{time}</td>
                            {day7May.map((day, dayIndex) => (
                                <td key={dayIndex} style={{ backgroundColor: 'none' }}>
                                    {day === 'May 5' && time === '06:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Iasi - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43661'
                                            from="Iasi"
                                            to="Charleroi"
                                            departureTime="05:50 AM"
                                            arrivalTime="07:45 AM"
                                            tickets={IasiCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Cluj - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43351'
                                            from="Cluj"
                                            to="Charleroi"
                                            departureTime="07:10 AM"
                                            arrivalTime="08:45 AM"
                                            tickets={ClujCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Travel: Charleroi - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='24097774'
                                            from="Charleroi Airport"
                                            to="Bruxelles (Midi Station)"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={CharleroiBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '12:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Amsterdam" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='FETT8W'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Amsterdam City Center - Sloterdijk"
                                            departureTime="12:40"
                                            arrivalTime="16:01"
                                            tickets={BruxellesAmsterdamTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Meininger Hotel Amsterdam City West" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4073.806.681"
                                            venue="Meininger Hotel Amsterdam City West"
                                            address="Orlyplein 1-67"
                                            imageSource="https://groupcorner.com/uploads/HOTELS/hotel_12688/_-184x57334bc5ab57/1000x548_C_184x57334bc5ab57.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={AmsterdamAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Hard Rock Cafe Amsterdam" 
                                        modalTitle="Lunch at Hard Rock Cafe Amsterdam" 
                                        modalIcon={'\u{1F3B8}'}
                                        customContent={<Activity 
                                            address="Max Euweplein 57-61, 1017 MA"
                                            startsAt="01:00 PM"
                                            imageSource="https://www.iamsterdam.com/_next/image?url=https%3A%2F%2Fapp.thefeedfactory.nl%2Fapi%2Fassets%2F5ff88131de7e8633a4aa65eb%2Fe1f07ea8-bee1-447b-8bdf-6e72c9cc93f5.jpg&w=1080&q=75"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 6' && time === '05:00 PM' ?  
                                    <Modal 
                                        buttonText="Heineken Experience" 
                                        modalTitle="Amsterdam Heineken Experience" 
                                        modalIcon={'\uD83C\uDF7A'} 
                                        customContent={<Activity 
                                            ticketNumber="GYGBLKV5BRBH"
                                            address="Orlyplein 1-67"
                                            startsAt="05:15 PM"
                                            imageSource="https://cdn.getyourguide.com/img/tour/b10d5d4a331d1abc.jpeg/145.jpg"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            tickets={HeinekenExperienceTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 7' && time === '11:00 AM' ?  
                                    <Modal 
                                        buttonText="Keukenhof" 
                                        modalTitle="Keukenhof Botannical Garden" 
                                        modalIcon={'\u{1F337}'}
                                        customContent={<Activity 
                                            address="2161 AM Lisse"
                                            startsAt="Available all day"
                                            imageSource="https://cdn.getyourguide.com/img/tour/5df9ef9bde57d.jpeg/98.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '06:00 PM' ?  
                                    <Modal 
                                        buttonText="River Cruise & pancakes" 
                                        modalTitle="Amsterdam river cruise with pancakes " 
                                        modalIcon={'\u{1F95E}'}
                                        customContent={<Activity 
                                            address="Ms. van Riemsdijkweg 41, 1033 RC"
                                            startsAt="05:45"
                                            imageSource="https://cdn.getyourguide.com/img/tour/014aa9f1364b87e2.jpeg/145.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 8' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="TonTon Arcade Room" 
                                        modalTitle="TonTon Arcade Room Amsterdam" 
                                        modalIcon={'\u{1F3AE}'}
                                        customContent={<Activity 
                                            address="Polonceaukade 27, 1014 DA"
                                            startsAt="16:00 PM"
                                            imageSource="https://storage.googleapis.com/thehundreds/media/2015/03/DSC_0446.jpeg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Factory Girl Lunch" 
                                        modalTitle="Factory Girl Lunch & Brunch Amsterdam" 
                                        modalIcon={'\u{1F354}'}
                                        customContent={<Activity 
                                            address="Saenredamstraat 32, 1072 CH"
                                            startsAt="16:00 PM"
                                            imageSource="https://www.mr-amsterdam.de/blog/media/images/restaurants-essen-trinken/the-factory-girl-amsterdam/the-factory-girl-amsterdam-freuhstueck.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='L9W7BL'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Wauters 75" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4036468325"
                                            venue="Wauters 75 Bruxelles-charleroi-airport"
                                            address="Rue Joseph Wauters, 6043 Charleroi, Belgium"
                                            imageSource="https://lh3.googleusercontent.com/proxy/aDsvc3Ik7QocTvagT8vwpho25Kjp02AX67QupKji2XlLIojeoLbFkgESZ9_1q6BiMSkHJw8m8W4HUDK_6geP4e1CCUMQwP5QyQhi0TdgpnH-P-6-oHTaY3HWasE-Gh4pMVFaPeGX2UqApK0pTkxDmQCLR5FTKqw=w287-h192-n-k-rw-no-v1"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={CharleroiAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 9' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Iasi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43662'
                                            from="Charleroi"
                                            to="Iasi"
                                            departureTime="08:20 AM"
                                            arrivalTime="12:00 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='HD7HCQ'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 10' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Cluj" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43352'
                                            from="Charleroi"
                                            to="Cluj"
                                            departureTime="09:15 AM"
                                            arrivalTime="12:40 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}
                                    
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
            <br></br>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th data-label="Header"><center>Time</center></th>
                        {day8May.map(day => <th key={day}><center>{day}</center></th>)}
                    </tr>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {times.map((time, timeIndex) => (
                        <tr key={time}>
                            <td>{time}</td>
                            {day8May.map((day, dayIndex) => (
                                <td key={dayIndex} style={{ backgroundColor: 'none' }}>
                                    {day === 'May 5' && time === '06:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Iasi - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43661'
                                            from="Iasi"
                                            to="Charleroi"
                                            departureTime="05:50 AM"
                                            arrivalTime="07:45 AM"
                                            tickets={IasiCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Cluj - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43351'
                                            from="Cluj"
                                            to="Charleroi"
                                            departureTime="07:10 AM"
                                            arrivalTime="08:45 AM"
                                            tickets={ClujCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Travel: Charleroi - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='24097774'
                                            from="Charleroi Airport"
                                            to="Bruxelles (Midi Station)"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={CharleroiBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '12:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Amsterdam" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='FETT8W'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Amsterdam City Center - Sloterdijk"
                                            departureTime="12:40"
                                            arrivalTime="16:01"
                                            tickets={BruxellesAmsterdamTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Meininger Hotel Amsterdam City West" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4073.806.681"
                                            venue="Meininger Hotel Amsterdam City West"
                                            address="Orlyplein 1-67"
                                            imageSource="https://groupcorner.com/uploads/HOTELS/hotel_12688/_-184x57334bc5ab57/1000x548_C_184x57334bc5ab57.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={AmsterdamAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Hard Rock Cafe Amsterdam" 
                                        modalTitle="Lunch at Hard Rock Cafe Amsterdam" 
                                        modalIcon={'\u{1F3B8}'}
                                        customContent={<Activity 
                                            address="Max Euweplein 57-61, 1017 MA"
                                            startsAt="01:00 PM"
                                            imageSource="https://www.iamsterdam.com/_next/image?url=https%3A%2F%2Fapp.thefeedfactory.nl%2Fapi%2Fassets%2F5ff88131de7e8633a4aa65eb%2Fe1f07ea8-bee1-447b-8bdf-6e72c9cc93f5.jpg&w=1080&q=75"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 6' && time === '05:00 PM' ?  
                                    <Modal 
                                        buttonText="Heineken Experience" 
                                        modalTitle="Amsterdam Heineken Experience" 
                                        modalIcon={'\uD83C\uDF7A'} 
                                        customContent={<Activity 
                                            ticketNumber="GYGBLKV5BRBH"
                                            address="Orlyplein 1-67"
                                            startsAt="05:15 PM"
                                            imageSource="https://cdn.getyourguide.com/img/tour/b10d5d4a331d1abc.jpeg/145.jpg"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            tickets={HeinekenExperienceTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 7' && time === '11:00 AM' ?  
                                    <Modal 
                                        buttonText="Keukenhof" 
                                        modalTitle="Keukenhof Botannical Garden" 
                                        modalIcon={'\u{1F337}'}
                                        customContent={<Activity 
                                            address="2161 AM Lisse"
                                            startsAt="Available all day"
                                            imageSource="https://cdn.getyourguide.com/img/tour/5df9ef9bde57d.jpeg/98.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '06:00 PM' ?  
                                    <Modal 
                                        buttonText="River Cruise & pancakes" 
                                        modalTitle="Amsterdam river cruise with pancakes " 
                                        modalIcon={'\u{1F95E}'}
                                        customContent={<Activity 
                                            address="Ms. van Riemsdijkweg 41, 1033 RC"
                                            startsAt="05:45"
                                            imageSource="https://cdn.getyourguide.com/img/tour/014aa9f1364b87e2.jpeg/145.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 8' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="TonTon Arcade Room" 
                                        modalTitle="TonTon Arcade Room Amsterdam" 
                                        modalIcon={'\u{1F3AE}'}
                                        customContent={<Activity 
                                            address="Polonceaukade 27, 1014 DA"
                                            startsAt="16:00 PM"
                                            imageSource="https://storage.googleapis.com/thehundreds/media/2015/03/DSC_0446.jpeg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Factory Girl Lunch" 
                                        modalTitle="Factory Girl Lunch & Brunch Amsterdam" 
                                        modalIcon={'\u{1F354}'}
                                        customContent={<Activity 
                                            address="Saenredamstraat 32, 1072 CH"
                                            startsAt="16:00 PM"
                                            imageSource="https://www.mr-amsterdam.de/blog/media/images/restaurants-essen-trinken/the-factory-girl-amsterdam/the-factory-girl-amsterdam-freuhstueck.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='L9W7BL'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Wauters 75" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4036468325"
                                            venue="Wauters 75 Bruxelles-charleroi-airport"
                                            address="Rue Joseph Wauters, 6043 Charleroi, Belgium"
                                            imageSource="https://lh3.googleusercontent.com/proxy/aDsvc3Ik7QocTvagT8vwpho25Kjp02AX67QupKji2XlLIojeoLbFkgESZ9_1q6BiMSkHJw8m8W4HUDK_6geP4e1CCUMQwP5QyQhi0TdgpnH-P-6-oHTaY3HWasE-Gh4pMVFaPeGX2UqApK0pTkxDmQCLR5FTKqw=w287-h192-n-k-rw-no-v1"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={CharleroiAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 9' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Iasi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43662'
                                            from="Charleroi"
                                            to="Iasi"
                                            departureTime="08:20 AM"
                                            arrivalTime="12:00 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='HD7HCQ'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 10' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Cluj" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43352'
                                            from="Charleroi"
                                            to="Cluj"
                                            departureTime="09:15 AM"
                                            arrivalTime="12:40 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}
                                    
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
            <br></br>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th data-label="Header"><center>Time</center></th>
                        {day9May.map(day => <th key={day}><center>{day}</center></th>)}
                    </tr>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {times.map((time, timeIndex) => (
                        <tr key={time}>
                            <td>{time}</td>
                            {day9May.map((day, dayIndex) => (
                                <td key={dayIndex} style={{ backgroundColor: 'none' }}>
                                    {day === 'May 5' && time === '06:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Iasi - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43661'
                                            from="Iasi"
                                            to="Charleroi"
                                            departureTime="05:50 AM"
                                            arrivalTime="07:45 AM"
                                            tickets={IasiCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Cluj - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43351'
                                            from="Cluj"
                                            to="Charleroi"
                                            departureTime="07:10 AM"
                                            arrivalTime="08:45 AM"
                                            tickets={ClujCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Travel: Charleroi - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='24097774'
                                            from="Charleroi Airport"
                                            to="Bruxelles (Midi Station)"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={CharleroiBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '12:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Amsterdam" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='FETT8W'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Amsterdam City Center - Sloterdijk"
                                            departureTime="12:40"
                                            arrivalTime="16:01"
                                            tickets={BruxellesAmsterdamTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Meininger Hotel Amsterdam City West" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4073.806.681"
                                            venue="Meininger Hotel Amsterdam City West"
                                            address="Orlyplein 1-67"
                                            imageSource="https://groupcorner.com/uploads/HOTELS/hotel_12688/_-184x57334bc5ab57/1000x548_C_184x57334bc5ab57.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={AmsterdamAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Hard Rock Cafe Amsterdam" 
                                        modalTitle="Lunch at Hard Rock Cafe Amsterdam" 
                                        modalIcon={'\u{1F3B8}'}
                                        customContent={<Activity 
                                            address="Max Euweplein 57-61, 1017 MA"
                                            startsAt="01:00 PM"
                                            imageSource="https://www.iamsterdam.com/_next/image?url=https%3A%2F%2Fapp.thefeedfactory.nl%2Fapi%2Fassets%2F5ff88131de7e8633a4aa65eb%2Fe1f07ea8-bee1-447b-8bdf-6e72c9cc93f5.jpg&w=1080&q=75"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 6' && time === '05:00 PM' ?  
                                    <Modal 
                                        buttonText="Heineken Experience" 
                                        modalTitle="Amsterdam Heineken Experience" 
                                        modalIcon={'\uD83C\uDF7A'} 
                                        customContent={<Activity 
                                            ticketNumber="GYGBLKV5BRBH"
                                            address="Orlyplein 1-67"
                                            startsAt="05:15 PM"
                                            imageSource="https://cdn.getyourguide.com/img/tour/b10d5d4a331d1abc.jpeg/145.jpg"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            tickets={HeinekenExperienceTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 7' && time === '11:00 AM' ?  
                                    <Modal 
                                        buttonText="Keukenhof" 
                                        modalTitle="Keukenhof Botannical Garden" 
                                        modalIcon={'\u{1F337}'}
                                        customContent={<Activity 
                                            address="2161 AM Lisse"
                                            startsAt="Available all day"
                                            imageSource="https://cdn.getyourguide.com/img/tour/5df9ef9bde57d.jpeg/98.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '06:00 PM' ?  
                                    <Modal 
                                        buttonText="River Cruise & pancakes" 
                                        modalTitle="Amsterdam river cruise with pancakes " 
                                        modalIcon={'\u{1F95E}'}
                                        customContent={<Activity 
                                            address="Ms. van Riemsdijkweg 41, 1033 RC"
                                            startsAt="05:45"
                                            imageSource="https://cdn.getyourguide.com/img/tour/014aa9f1364b87e2.jpeg/145.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 8' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="TonTon Arcade Room" 
                                        modalTitle="TonTon Arcade Room Amsterdam" 
                                        modalIcon={'\u{1F3AE}'}
                                        customContent={<Activity 
                                            address="Polonceaukade 27, 1014 DA"
                                            startsAt="16:00 PM"
                                            imageSource="https://storage.googleapis.com/thehundreds/media/2015/03/DSC_0446.jpeg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Factory Girl Lunch" 
                                        modalTitle="Factory Girl Lunch & Brunch Amsterdam" 
                                        modalIcon={'\u{1F354}'}
                                        customContent={<Activity 
                                            address="Saenredamstraat 32, 1072 CH"
                                            startsAt="16:00 PM"
                                            imageSource="https://www.mr-amsterdam.de/blog/media/images/restaurants-essen-trinken/the-factory-girl-amsterdam/the-factory-girl-amsterdam-freuhstueck.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='L9W7BL'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Wauters 75" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4036468325"
                                            venue="Wauters 75 Bruxelles-charleroi-airport"
                                            address="Rue Joseph Wauters, 6043 Charleroi, Belgium"
                                            imageSource="https://lh3.googleusercontent.com/proxy/aDsvc3Ik7QocTvagT8vwpho25Kjp02AX67QupKji2XlLIojeoLbFkgESZ9_1q6BiMSkHJw8m8W4HUDK_6geP4e1CCUMQwP5QyQhi0TdgpnH-P-6-oHTaY3HWasE-Gh4pMVFaPeGX2UqApK0pTkxDmQCLR5FTKqw=w287-h192-n-k-rw-no-v1"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={CharleroiAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 9' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Iasi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43662'
                                            from="Charleroi"
                                            to="Iasi"
                                            departureTime="08:20 AM"
                                            arrivalTime="12:00 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='HD7HCQ'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 10' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Cluj" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43352'
                                            from="Charleroi"
                                            to="Cluj"
                                            departureTime="09:15 AM"
                                            arrivalTime="12:40 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}
                                    
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
            <br></br>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th data-label="Header"><center>Time</center></th>
                        {day10May.map(day => <th key={day}><center>{day}</center></th>)}
                    </tr>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {times.map((time, timeIndex) => (
                        <tr key={time}>
                            <td>{time}</td>
                            {day10May.map((day, dayIndex) => (
                                <td key={dayIndex} style={{ backgroundColor: 'none' }}>
                                    {day === 'May 5' && time === '06:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Iasi - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43661'
                                            from="Iasi"
                                            to="Charleroi"
                                            departureTime="05:50 AM"
                                            arrivalTime="07:45 AM"
                                            tickets={IasiCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Cluj - Charleroi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43351'
                                            from="Cluj"
                                            to="Charleroi"
                                            departureTime="07:10 AM"
                                            arrivalTime="08:45 AM"
                                            tickets={ClujCharleroiFlightTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Travel: Charleroi - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='24097774'
                                            from="Charleroi Airport"
                                            to="Bruxelles (Midi Station)"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={CharleroiBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '12:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Amsterdam" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='FETT8W'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Amsterdam City Center - Sloterdijk"
                                            departureTime="12:40"
                                            arrivalTime="16:01"
                                            tickets={BruxellesAmsterdamTravelTickets} 
                                            />}  /> 
                                    : null}
                                    {day === 'May 5' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Meininger Hotel Amsterdam City West" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4073.806.681"
                                            venue="Meininger Hotel Amsterdam City West"
                                            address="Orlyplein 1-67"
                                            imageSource="https://groupcorner.com/uploads/HOTELS/hotel_12688/_-184x57334bc5ab57/1000x548_C_184x57334bc5ab57.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={AmsterdamAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Hard Rock Cafe Amsterdam" 
                                        modalTitle="Lunch at Hard Rock Cafe Amsterdam" 
                                        modalIcon={'\u{1F3B8}'}
                                        customContent={<Activity 
                                            address="Max Euweplein 57-61, 1017 MA"
                                            startsAt="01:00 PM"
                                            imageSource="https://www.iamsterdam.com/_next/image?url=https%3A%2F%2Fapp.thefeedfactory.nl%2Fapi%2Fassets%2F5ff88131de7e8633a4aa65eb%2Fe1f07ea8-bee1-447b-8bdf-6e72c9cc93f5.jpg&w=1080&q=75"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 6' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 6' && time === '05:00 PM' ?  
                                    <Modal 
                                        buttonText="Heineken Experience" 
                                        modalTitle="Amsterdam Heineken Experience" 
                                        modalIcon={'\uD83C\uDF7A'} 
                                        customContent={<Activity 
                                            ticketNumber="GYGBLKV5BRBH"
                                            address="Orlyplein 1-67"
                                            startsAt="05:15 PM"
                                            imageSource="https://cdn.getyourguide.com/img/tour/b10d5d4a331d1abc.jpeg/145.jpg"
                                            imageWidth="330px"
                                            imageHeight="330px"
                                            tickets={HeinekenExperienceTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 7' && time === '11:00 AM' ?  
                                    <Modal 
                                        buttonText="Keukenhof" 
                                        modalTitle="Keukenhof Botannical Garden" 
                                        modalIcon={'\u{1F337}'}
                                        customContent={<Activity 
                                            address="2161 AM Lisse"
                                            startsAt="Available all day"
                                            imageSource="https://cdn.getyourguide.com/img/tour/5df9ef9bde57d.jpeg/98.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 7' && time === '06:00 PM' ?  
                                    <Modal 
                                        buttonText="River Cruise & pancakes" 
                                        modalTitle="Amsterdam river cruise with pancakes " 
                                        modalIcon={'\u{1F95E}'}
                                        customContent={<Activity 
                                            address="Ms. van Riemsdijkweg 41, 1033 RC"
                                            startsAt="05:45"
                                            imageSource="https://cdn.getyourguide.com/img/tour/014aa9f1364b87e2.jpeg/145.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 8' && time === '04:00 PM' ?  
                                    <Modal 
                                        buttonText="TonTon Arcade Room" 
                                        modalTitle="TonTon Arcade Room Amsterdam" 
                                        modalIcon={'\u{1F3AE}'}
                                        customContent={<Activity 
                                            address="Polonceaukade 27, 1014 DA"
                                            startsAt="16:00 PM"
                                            imageSource="https://storage.googleapis.com/thehundreds/media/2015/03/DSC_0446.jpeg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '01:00 PM' ?  
                                    <Modal 
                                        buttonText="Factory Girl Lunch" 
                                        modalTitle="Factory Girl Lunch & Brunch Amsterdam" 
                                        modalIcon={'\u{1F354}'}
                                        customContent={<Activity 
                                            address="Saenredamstraat 32, 1072 CH"
                                            startsAt="16:00 PM"
                                            imageSource="https://www.mr-amsterdam.de/blog/media/images/restaurants-essen-trinken/the-factory-girl-amsterdam/the-factory-girl-amsterdam-freuhstueck.jpg"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='L9W7BL'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelSingleTicket} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 8' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Check-in: Wauters 75" 
                                        modalTitle="Accomodation booking" 
                                        modalIcon={'\uD83C\uDFE8'} 
                                        customContent={<Accomodation 
                                            ticketNumber="4036468325"
                                            venue="Wauters 75 Bruxelles-charleroi-airport"
                                            address="Rue Joseph Wauters, 6043 Charleroi, Belgium"
                                            imageSource="https://lh3.googleusercontent.com/proxy/aDsvc3Ik7QocTvagT8vwpho25Kjp02AX67QupKji2XlLIojeoLbFkgESZ9_1q6BiMSkHJw8m8W4HUDK_6geP4e1CCUMQwP5QyQhi0TdgpnH-P-6-oHTaY3HWasE-Gh4pMVFaPeGX2UqApK0pTkxDmQCLR5FTKqw=w287-h192-n-k-rw-no-v1"
                                            imageWidth="350px"
                                            imageHeight="280px"
                                            tickets={CharleroiAccomodationBooking} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Breakfast" 
                                        modalTitle="Breakfast at Meininger Hotel Amsterdam City West" 
                                        modalIcon={'\u{1F373}'}
                                        customContent={<Activity 
                                            address="Orlyplein 1-67"
                                            startsAt="07:00 PM"
                                            imageSource="https://www.meininger-hotels.com/fileadmin/_processed_/9/b/csm_Service_Banner_1900x850px-min_60f76e69c7.jpg"
                                            imageWidth="330px"
                                            imageHeight="250px"
                                            />}  /> 
                                    : null}  

                                    {day === 'May 9' && time === '08:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Iasi" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43662'
                                            from="Charleroi"
                                            to="Iasi"
                                            departureTime="08:20 AM"
                                            arrivalTime="12:00 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '08:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Amsterdam - Bruxelles" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='HD7HCQ'
                                            from="Amsterdam City Center - Sloterdijk"
                                            to="Bruxelles City Center - Midi Train Station"
                                            departureTime="20:10"
                                            arrivalTime="23:20"
                                            tickets={AmsterdamBruxellesTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 9' && time === '11:00 PM' ?  
                                    <Modal 
                                        buttonText="Travel: Bruxelles - Charleroi" 
                                        modalTitle="Travel tickets" 
                                        modalIcon={'\uD83D\uDE97'} 
                                        customContent={<TravelTicket 
                                            ticketNumber='N/A'
                                            from="Bruxelles City Center - Midi Train Station"
                                            to="Charleroi"
                                            departureTime="Available all day"
                                            arrivalTime="Available all day"
                                            tickets={BruxellesCharleroiTravelTickets} 
                                            />}  /> 
                                    : null}

                                    {day === 'May 10' && time === '07:00 AM' ?  
                                    <Modal 
                                        buttonText="Flight: Charleroi - Cluj" 
                                        modalTitle="Flight tickets" 
                                        modalIcon={'\u2708\uFE0F'} 
                                        customContent={<FlightTicket 
                                            flightNumber='W43352'
                                            from="Charleroi"
                                            to="Cluj"
                                            departureTime="09:15 AM"
                                            arrivalTime="12:40 AM"
                                            tickets={[]} 
                                            />}  /> 
                                    : null}
                                    
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default MobileAgenda;