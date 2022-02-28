import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";

import data from "../data/TourData";

const TourDetail = ({ match }) => {
    console.log(match);
    let id = parseInt(match.params.id);
    const [ Tour, setTour ] = useState({});
    useEffect(() => {
        const item = id ? data.find(o => o.id === id) : data[0];
        setTour(item ? item : data[0]);
        console.log(Tour.data);
    }, [id])

	return (
		<div>
			<Navbar />
            <div style={{"padding": "2rem"}}>
                <Row>
                    <Column span="6">
                        <div style={{"padding": "2rem"}}> 
                            <img src={Tour.image} alt="" style={{"width": "100%"}}/>
                        </div>
                    </Column>
                    <Column span="6">
                        <div style={{"padding": "2rem"}}> 
                            <h1 style={{"paddingBottom": "2rem"}}>{Tour.title}</h1>
                            <span>{Tour.data}</span>
                        </div>
                    </Column>
                </Row>
            </div>
			<Footer />
		</div>
	);
};

const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`;
const Column = styled.div`
    float: left;
    width: 100%;

    @media only screen and (min-width: 768px) {
        width: ${props => (props.span ? props.span / 12 * 100 : "8.33")}%;
    }
`

export default TourDetail;