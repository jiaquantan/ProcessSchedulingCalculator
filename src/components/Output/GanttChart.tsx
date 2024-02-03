import { useLayoutEffect, useRef, useState } from 'react';
import { ganttChartInfoType } from '../../algorithms';
import styled from 'styled-components';

import { media } from '../GlobalStyle.css';

const Container = styled.div`
  display: flex;           // set the display type of the Container to flex, enabling the use of Flexbox, a CSS layout module that makes it easier to design flexible responsive layout structures.
  flex-direction: column;  // sets the direction of the main axis to be vertical
  justify-content: center; // aligns the flex items along the vertical axis
  align-items: center;     // aligns the flex items along the horizontal axis
  margin-top: 5rem;        // sets the top margin of the Container
  margin-bottom: 5rem;     // sets the bottom margin of the Container
`;

const Title = styled.h2`
  font-weight: 800;                  // set the font weight of the title
  font-size: 18px;                   // set the font size of the title
  ${media['600']`font-size: 16px;`}
  margin: 0 1 0 0;                   // set the margins of the title
  color: #000000;                    // set the color of the title
`;

const JobContainer = styled.div`
  display: flex;
`;

const Job = styled.div`
  width: 50px;                // set the width of the Job component.
  height: 40px;               // set the height of the Job component.
  border: 3px solid #ff0800;  // set the border's weight & colour of the Job component.
  background-color: #051d40;  // set the background colour of the Job component.
  color: #ffffff;             // set the text colour of the Job component.
  ${media['600']`
    width: 32px;
    height: 27px;
    font-size: 14px;
  `}

  &:not(:last-child) {
    margin-right: -1px;    // set the gap between the Job component to -1px(overlap).
  }
`;

const TimeContainer = styled.div`
  display: flex;
`;

const Time = styled.div`
  width: 50px;            // set the width of the Time component.
  height: 20px;           // set the height of the Time component.
  ${media['600']`
    width: 32px;
    height: 21px;
    font-size: 14px;
  `}
  border: none;
  color: #000000;         // set the text colour of the Time component.

  &:not(:last-child) {
    margin-right: -1px;
  }
`;

const MultilineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

type GanttChartProps = {
  ganttChartInfo: ganttChartInfoType;
};

const GanttChart = ({ ganttChartInfo }: GanttChartProps) => {
  const containerEl = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);

  const job: string[] = [];
  const time: number[] = [];
  ganttChartInfo.forEach((item, index) => {
    if (index === 0) {
      job.push(item.job);
      time.push(item.start, item.stop);
    } else if (time.slice(-1)[0] === item.start) {
      job.push(item.job);
      time.push(item.stop);
    } else if (time.slice(-1)[0] !== item.start) {
      job.push('_', item.job);
      time.push(item.start, item.stop);
    }
  });

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
      setContainerWidth(containerEl.current.offsetWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  let itemWidth = 0;
  if (windowWidth <= 600) {
    itemWidth = 32;
  } else {
    itemWidth = 40;
  }

  const timeContainerWidth = time.length * itemWidth - (time.length - 1);

  let maxTimeItemCount = ~~(containerWidth / itemWidth);

  let numberOfLines = 0;
  let acc = 0;
  while (true) {
    if (containerWidth === null) {
      break;
    }
    acc += maxTimeItemCount - 1;
    numberOfLines++;
    if (acc >= time.length) {
      acc -= maxTimeItemCount - 1;
      break;
    }
  }

  // If index of last time item equal to acc
  let lastLineItemCount: number;
  if (time.length - 1 === acc) {
    lastLineItemCount = 0;
    numberOfLines--;
  } else {
    lastLineItemCount = time.length - acc;
  }

  let timeCounter = 0;
  let jobCounter = 0;

  return (
    <Container ref={containerEl}>
      <Title>Gantt Chart</Title>
      {containerWidth !== null && containerWidth <= timeContainerWidth && (
        <>
          {Array.from({ length: numberOfLines }).map((_, ind) => {
            if (ind === numberOfLines - 1 && lastLineItemCount !== 0) {
              return (
                <MultilineContainer key={`multiline-container-${ind}`}>
                  <JobContainer>
                    {Array.from({
                      length: lastLineItemCount - 1,
                    }).map((_, i) => (
                      <Job key={`gc-job-lastline${i}`} className="flex-center">
                        {job[jobCounter + 1 + i]}
                      </Job>
                    ))}
                  </JobContainer>
                  <TimeContainer>
                    {Array.from({
                      length: lastLineItemCount,
                    }).map((_, i) => (
                      <Time
                        key={`gc-time-lastline${i}`}
                        className="flex-center"
                      >
                        {time[timeCounter + i]}
                      </Time>
                    ))}
                  </TimeContainer>
                </MultilineContainer>
              );
            } else if (ind == 0) {
              timeCounter += maxTimeItemCount - 1;
              jobCounter += timeCounter - 1;
              return (
                <MultilineContainer key={`multiline-container-${ind}`}>
                  <JobContainer>
                    {Array.from({ length: jobCounter + 1 }).map((_, i) => (
                      <Job key={`gc-job-firstline${i}`} className="flex-center">
                        {job[i]}
                      </Job>
                    ))}
                  </JobContainer>
                  <TimeContainer>
                    {Array.from({ length: timeCounter + ind + 1 }).map(
                      (_, i) => (
                        <Time
                          key={`gc-time-firstline${i}`}
                          className="flex-center"
                        >
                          {time[i]}
                        </Time>
                      )
                    )}
                  </TimeContainer>
                </MultilineContainer>
              );
            } else {
              let prevCounter = timeCounter;
              timeCounter += maxTimeItemCount - 1;
              let prevJobCounter = jobCounter;
              jobCounter += maxTimeItemCount - 1;
              return (
                <MultilineContainer key={`multiline-container-${ind}`}>
                  <JobContainer>
                    {Array.from({ length: maxTimeItemCount - 1 }).map(
                      (_, i) => (
                        <Job key={`gc-job-${i}-${ind}`} className="flex-center">
                          {job[prevJobCounter + i + 1]}
                        </Job>
                      )
                    )}
                  </JobContainer>
                  <TimeContainer>
                    {Array.from({ length: maxTimeItemCount }).map((_, i) => (
                      <Time key={`gc-time-${i}-${ind}`} className="flex-center">
                        {time[prevCounter + i]}
                      </Time>
                    ))}
                  </TimeContainer>
                </MultilineContainer>
              );
            }
          })}
        </>
      )}
      {containerWidth !== null && containerWidth > timeContainerWidth && (
        <>
          <JobContainer>
            {job.map((job, index) => (
              <Job key={`gc-job-${index}`} className="flex-center">
                {job}
              </Job>
            ))}
          </JobContainer>
          <TimeContainer>
            {time.map((time, index) => (
              <Time key={`gc-time-${index}`} className="flex-center">
                {time}
              </Time>
            ))}
          </TimeContainer>
        </>
      )}
    </Container>
  );
};

export default GanttChart;
