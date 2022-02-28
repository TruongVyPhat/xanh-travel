import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";

import data from "../data/ServiceData";

const ServiceDetail = ({ match }) => {
    console.log(match);
    let id = parseInt(match.params.id);
    const [ Service, setService ] = useState(data[0]);
    useEffect(() => {
        const item = id ? data.find(o => o.id === id) : data[0];
        setService(item ? item : data[0]);
        console.log(Service.data);
    }, [id])

	return (
		<div>
			<Navbar />
            <div style={{"padding": "2rem"}}>
                <Row>
                    <Column span="6">
                        <div style={{"padding": "2rem"}}> 
                            <img src={Service.image} alt="" style={{"width": "100%"}}/>
                        </div>
                    </Column>
                    <Column span="6">
                        <div style={{"padding": "2rem"}}> 
                            <h1 style={{"paddingBottom": "2rem"}}>{Service.title}</h1>
                            {Service.data.map((body) => {
                                return(
                                    <span>{body}</span>
                                );
                            })}
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

export default ServiceDetail;