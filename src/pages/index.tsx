import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Output from '../components/Output';

import { media } from '../components/GlobalStyle.css';

const Main = styled.main`
  display: flex;                                      // set the display property to flex, enabling a flex context for all its direct children.
  ${media['1050']`flex-direction: column;`}
  margin: 100px auto 1rem !important;                 // set top margin to 100px, bottom margin to 1rem, and left & right margins to auto(centering the element horizontally), !important rule makes sure this rule has priority over other potentially conflicting rules.
  ${media['600']`margin: 20px auto 1rem !important`};
  gap: clamp(0.5rem, 2.5vw, 4rem);                    // set the gap between flex items. The clamp() function sets a flexible value that's based on the viewport width (vw), but doesn't go below 0.5rem or above 4rem.
  ${media['1050']`gap: 0.75rem`};
`;

const Footer = styled.footer`
  padding: 20px 0 40px 0;     // set top padding to 20px, bottom padding to 40px, and left & right padding to 0.
  display: flex;              // set the display property to flex, enabling a flex context for all its direct children.
  align-items: center;        // vertically center aligns the flex children.
  ${media['600']`
    font-size: 14px;
  `}

  a {
    display: inline-flex;
    align-items: center;
    transition: color 0.3s;

    svg {
      margin-right: 0.5rem;
      transition: fill 0.3s;
      width: 20px;
      height: 20px;
      ${media['600']`
        width: 18px;
        height: 18px;
      `}
    }
  }
`;

export default function Home() {
  const [selectedAlgo, setSelectedAlgo] = useState(null);
  const [arrivalTime, setArrivalTime] = useState<number[]>([]);
  const [burstTime, setBurstTime] = useState<number[]>([]);
  const [timeQuantum, setTimeQuantum] = useState<number>();
  const [priorities, setPriorities] = useState<number[]>([]);

  return (
    <div>
      {/* This is a <Head> component in a React application. It’s used to set the metadata of the webpage, which is information about the webpage that isn’t displayed on the page itself but is machine-readable.*/}
      <Head>
        <title>Process Scheduling Calculator</title> {/* Title of the webpage, which is displayed on the browser tab */}
        <meta
          name="description"
          content="Dynamically generates gantt chart and calculates TAT (turnaround time) and WAT (waiting time) based on various CPU scheduling algorithms."
        />
        <meta property="og:title" content="Process Scheduling Calculator" />
        <meta
          property="og:description"
          content="Dynamically generates gantt chart and calculates TAT (turnaround time) and WAT (waiting time) based on various CPU scheduling algorithms."
        />
      </Head>

      <Main className="container">
        <Input
          selectedAlgo={selectedAlgo}
          setSelectedAlgo={setSelectedAlgo}
          setArrivalTime={setArrivalTime}
          setBurstTime={setBurstTime}
          setTimeQuantum={setTimeQuantum}
          setPriorities={setPriorities}
        />
        <Output
          selectedAlgo={selectedAlgo}
          arrivalTime={arrivalTime}
          burstTime={burstTime}
          timeQuantum={timeQuantum}
          priorities={priorities}
        />
      </Main>

      <Footer className="container">
  
      </Footer>
    </div>
  );
}
