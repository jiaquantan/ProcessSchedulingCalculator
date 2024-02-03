import React from 'react';
import styled from 'styled-components';

import { media } from '../GlobalStyle.css';

// Layout Component of the table 
const TableWrapper = styled.div`
  overflow: auto;               // overflow specifies if the content is too big to fit in its container, scrollbars should be added to allow the user to scroll to see the content.
  max-width: 100%;              // set the maximum width of the div to 100% of its parent container.
  margin: px auto 20px auto;    // set the top&bottom margins to 0px and 20px respectively, and centers the div horizontally within its parent.
  ${media['600']`               // a media query that applies the styles inside it when the viewport width is 600px or less. In this case, it changes the bottom margin to 0px.
  margin: 0px auto 0px auto;    
  `}
  // background:
  //   linear-gradient(to right, white 30%, rgba(255,255,255,0)),
  //   linear-gradient(to right, rgba(255,255,255,0), white 70%) 0 100%,
  //   radial-gradient(farthest-side at 0% 50%, rgba(0,0,0,.2), rgba(0,0,0,0)),
  //   radial-gradient(farthest-side at 100% 50%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;
  // background-repeat: no-repeat;                                 // specifies that the background-image should not repeat.
  background-color: #FFE599;                                      // set the background color of the entire table.
  // background-size: 40px 100%, 40px 100%, 14px 100%, 14px 100%;  // set the size of the background images.
  // background-position: 0 0, 100%, 0 0, 100%;                    // set the position of the background images.              
  // background-attachment: local, local, scroll, scroll;          // set how the background images should scroll. The local value means the background will scroll along with the element's content, and the scroll value means the background will scroll along with the document.
`;

// Table's cells styling
const StyledTable = styled.table`
  width: 100%;                          // set the width of the table to 100% of its parent container.
  border-collapse: collapse;            // collapse the table borders into a separated border (can change "separate" to "collapse").
  border-spacing: 5px;                  // set the distance between the borders (use border-radius: _px, if using collapse).
  box-sizing: border-box;               // set the box-sizing property to border-box, which means the width and height of the element includes the padding and border, but not the margin.
  ${media['1275']`font-size: 14px;`}    // a media query that applies the styles inside it when the viewport width is 1275px or less. In this case, it changes the font size to 14px.

  // Styles and formatting for table's row elements
  tr {
    height: 40px;                       // set the height of the table rows to 40px.
    line-height: 0;                     // set the line height of the text within the table row to 0, used to control the vertical alignment of text within the row.
    ${media['600']`height: 35px`};      // a media query that applies the styles inside it when the viewport width is 600 pixels or less. In this case, it changes the height of the table rows to 35px.
  }

  th, // Styles and formatting for table's header
  th {
    text-align: center;              // set the text alignment of text within the table header to center.
    padding: 10px;                   // set the padding around the content within the table header to 10px.
    background-color: #051d40;       // set the background color of table headers
    color: #ffffff;                  // set the text color of table headers
    ${media['1275']`padding: 12px`}; // a media query that applies the styles inside it when the viewport width is 1275px or less. In this case, it changes the font size to 12px.
    ${media['600']`padding: 8px`};   // a media query that applies the styles inside it when the viewport width is 600 pixels or less. In this case, it changes the height of the table rows to 8px.
    border: 2.5px solid #ffffff;       // set headers' border width to 2px, with a color (e.g., #000000)
  }

  // Styles and formatting for table's cells 
  td {
    text-align: center;                 // set the text alignment of text within the table cells to center.
    padding: 10px;                      // set the padding around the content within the table cells to 10px.
    background-color: #182c61;          // set the background color of table cells
    color: #ffffff;                     // set the text color color of table cells
    ${media['1275']`padding: 12px`};    // a media query that applies the styles inside it when the viewport width is 1275px or less. In this case, it changes the font size to 12px.
    ${media['600']`padding: 8px`};      // a media query that applies the styles inside it when the viewport width is 600 pixels or less. In this case, it changes the height of the table rows to 8px.
    border: 2.5px solid #ffffff;        // set cells' border width to 2px, with a color (e.g., #000000)
    line-height: 16.1px;                // set the line height of the text within the table cells to 16.1px.
  }
`;

// Styles and formatting for table's header cells
const HeaderCell = styled.th`
  font-size: 16px;                      // set the font size of the table headers to 16px.
  ${media['1275']`font-size: 14px;`}    // a media query that applies the styles inside it when the viewport width is 1275 pixels or less. In this case, it changes the font size to 14 pixels.
  font-weight: 800;                     // set the font weight of the table headers to 800 (bold).
  height: 60px;                         // set the height of the table headers to 60px.
  ${media['600']`height: 35px`};        // a media query that applies the styles inside it when the viewport width is 600 pixels or less. In this case, it changes the height of the header cell to 35 pixels.
  white-space: nowrap;                  // prevent the text within the header cell from wrapping to the next line.
`;

// This function rounds a number to a specified number of decimal places (for calculation of Avg. Turnaround Time & Avg. Waiting Time).
/* 
1. It first calculates a factor by raising 10 to the power of precision. This effectively shifts the decimal point in number to the right by precision places.
2. It then multiplies number by factor, rounds the result to the nearest integer using Math.round, and then divides by factor to shift the decimal point back to the left by precision places.
*/
const precisionRound = (number: number, precision: number) => {
  const factor = Math.pow(10, precision);       
  return (Math.round(number * factor) / factor).toFixed(precision);
};

type TableProps = {
  solvedProcessesInfo: {
    job: string;
    at: number;
    bt: number;
    ft: number;
    tat: number;
    wat: number;
  }[];
};

const Table = ({ solvedProcessesInfo }: TableProps) => {                                    // Table component itself, it destructures solvedProcessesInfo from its props. 
  const total = (array: number[]) =>
    array.reduce((acc, currentValue) => acc + currentValue, 0);                             // A helper function that calculates the total of an array of numbers.

  const numberOfProcesses = solvedProcessesInfo.length;                                     // Calculate the number of processes.
  const turnaoundTime = solvedProcessesInfo.map((process) => process.tat);                  // Create an array of all turnaround times.  
  const waitingTime = solvedProcessesInfo.map((process) => process.wat);                    // Create an array of all waiting times.

  const totalTAT = total(turnaoundTime);                                                    // Calculate the total turnaround time.
  const averageTAT = totalTAT / numberOfProcesses;                                          // Calculate the average turnaround time.

  const totalWAT = total(waitingTime);                                                      // Calculate the total waiting time.
  const averageWAT = totalWAT / numberOfProcesses;                                          // Calculate the average waiting time.

  // This return statement renders a table with a row for each process and a final row that displays the total and average turnaround and waiting times. 
  // The averages are rounded to 3 d.p. using the precisionRound function.
  return (
    <TableWrapper>    
      <StyledTable>
        <thead>
          <tr>
            <HeaderCell>Process</HeaderCell>
            <HeaderCell>Arrival Time</HeaderCell>
            <HeaderCell>Burst Time</HeaderCell>
            <HeaderCell>Finish Time</HeaderCell>
            <HeaderCell>Turnaround Time</HeaderCell>
            <HeaderCell>Waiting Time</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {solvedProcessesInfo.map((item, index) => (
            <tr key={`process-row-${item.job}`}>
              <td>{item.job}</td>
              <td>{item.at}</td>
              <td>{item.bt}</td>
              <td>{item.ft}</td>
              <td>{item.tat}</td>
              <td>{item.wat}</td>
            </tr>
          ))}
          {
            <tr>
              <td colSpan={4} style={{ textAlign: 'center' }}>
                Average
              </td>
              <td>
                {totalTAT} / {numberOfProcesses} = {precisionRound(averageTAT, 2)}
              </td>
              <td>
                {totalWAT} / {numberOfProcesses} = {precisionRound(averageWAT, 2)}
              </td>
            </tr>
          }
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;