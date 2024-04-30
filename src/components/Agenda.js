import React, { useEffect, useState } from 'react';
import '../components/Agenda.css';
import Modal from '../components/Modal';
import FlightTicket from './sub-components/FlightTicket';
import TravelTicket from './sub-components/TravelTicket';
import Accomodation from './sub-components/Accomodation';
import Activity from './sub-components/Activity';

const Agenda = () => {
    const days = ['May 5', 'May 6', 'May 7', 'May 8', 'May 9', 'May 10'];
    const times = ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 AM'];
    const IasiCharleroiFlightTickets = [
        { name: "Mihnea Ochesanu", link: "https://www.pexels.com/photo/white-and-red-plane-beside-clouds-low-angle-photography-46148/"}
      ];

    const ClujCharleroiFlightTickets = [
        { name: "Ivan David", link: "https://www.pexels.com/photo/white-and-red-plane-beside-clouds-low-angle-photography-46148/"},
        { name: "Matei Andrei", link: "https://www.pexels.com/photo/white-and-red-plane-beside-clouds-low-angle-photography-46148/"},
        { name: "Mateica Septimiu", link: "https://www.pexels.com/photo/white-and-red-plane-beside-clouds-low-angle-photography-46148/"},
        { name: "Pacurar Corneliu", link: "https://www.pexels.com/photo/white-and-red-plane-beside-clouds-low-angle-photography-46148/"}
      ];

    const CharleroiBruxellesTravelTickets = [
        { name: "Ivan David", link: "https://drive.google.com/file/d/1b-qzYUsxglfW4dueKxUSii6EGc65SYSE/view?usp=drive_link"},
        { name: "Matei Andrei", link: "https://drive.google.com/file/d/1gdb-Ba2rLdBkRkRBupBqSUffCD-82Mif/view?usp=drive_link"},
        { name: "Mateica Septimiu", link: "https://drive.google.com/file/d/1I79ysPWV4MuDbaAN_MHrql_Lpk5H6eEH/view?usp=drive_link"},
        { name: "Mihnea Ochesanu", link: "https://drive.google.com/file/d/1P2O5_6-8wMv4ulgTLotzNbik_-eM48KH/view?usp=drive_link"},
        { name: "Pacurar Corneliu", link: "https://drive.google.com/file/d/15-l9w7PVOuLnXDrtkBtPI0Dg4qij6EM9/view?usp=drive_link"}
    ];

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

    const [todayColumn, setTodayColumn] = useState(null);

    useEffect(() => {
        const today = new Date();
        const dateString = `May ${today.getDate()}`; // Adjust this format as necessary
        const todayIndex = days.findIndex(day => day === dateString);
        setTodayColumn(todayIndex + 1); // +1 because array is 0-indexed but table columns are 1-indexed
    }, []);

    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th><center>Time</center></th>
                    {days.map(day => <th key={day}><center>{day}</center></th>)}
                </tr>
                <tr>
                </tr>
            </thead>
            <tbody>

                {times.map((time, timeIndex) => (
                    <tr key={time}>
                        <td>{time}</td>
                        {days.map((day, dayIndex) => (
                            <td key={dayIndex} style={{ backgroundColor: dayIndex + 1 === todayColumn ? 'rgba(0, 204, 163, 0.5)' : 'none' }}>
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

                                {day === 'May 6' && time === '05:00 PM' ?  
                                <Modal 
                                    buttonText="Heineken Experience" 
                                    modalTitle="Amsterdam Heineken Experience" 
                                    modalIcon={'\uD83C\uDF7A'} 
                                    customContent={<Activity 
                                        address="Orlyplein 1-67"
                                        startsAt="05:15 PM"
                                        imageSource="https://cdn.getyourguide.com/img/tour/b10d5d4a331d1abc.jpeg/145.jpg"
                                        imageWidth="330px"
                                        imageHeight="330px"
                                        />}  /> 
                                : null}

                                {day === 'May 7' && time === '06:00 AM' ?  
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

                                {day === 'May 8' && time === '04:00 PM' ?  
                                <Modal 
                                    buttonText="TonTon Arcade Room" 
                                    modalTitle="TonTon Arcade Room Amsterdam" 
                                    modalIcon={'\u{1F3AE}'}
                                    customContent={<Activity 
                                        address=" Polonceaukade 27, 1014 DA"
                                        startsAt="16:00 PM"
                                        imageSource="https://storage.googleapis.com/thehundreds/media/2015/03/DSC_0446.jpeg"
                                        imageWidth="350px"
                                        imageHeight="280px"
                                        />}  /> 
                                : null}
                                
                            </td>
                        ))}
                    </tr>
                ))}

            </tbody>
        </table>
    );
};

export default Agenda;