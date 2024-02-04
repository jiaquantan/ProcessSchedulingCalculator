import React, { Dispatch, SetStateAction } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

/*
  SJF - Shortest Job First
  RR - Round-Robin
  NPP - Non-preemptive Priority
  PP - Preemptive Priority
*/
export type AlgoType = 'SJF' | 'RR' | 'NPP' | 'PP';
export type OptionType = {
  value: AlgoType;
  label: string;
};

export const defaultOption: OptionType = {
  value: 'RR',
  label: 'Round-Robin, RR',
};

const options: OptionType[] = [
  defaultOption,
  {
    value: 'SJF',
    label: 'Non Preemptive SJF',
  },
  {
    value: 'NPP',
    label: 'Non Preemptive Priority',
  },
  {
    value: 'PP',
    label: 'Preemptive Priority',
  },
];

type AlgoSelectProps = {
  selectedAlgo: {};
  setSelectedAlgo: Dispatch<SetStateAction<{}>>;
};

export const StyledSelect = styled(Select)`
  .react-select__control {
    box-sizing: border-box;
    border: 2px solid #c5c7d0;                    // border color of the algorithm drop down menu.
    border-radius: 20px;                          // border radius of the algorithm drop down menu.
    height: 41px;

    &:hover {
      background-color: #fafafa;                  // set the background color of the algorithm drop down menu when hovered over.
    }
  }
  .react-select__control--is-focused {            // set the focus state of the algorithm drop down menu.
    background-color: #fff;
    box-shadow: 0 0 0px 1px #74b0ff;
    border: 1px solid #2684ff;
    &:hover {
      background-color: #fff;
    }
  }
  .react-select__control--menu-is-open {
    box-shadow: 0 0 5px 1px #74b0ff;
    border: 1px solid #2684ff;
  }
  .react-select__value-container {
    padding: 0 8px;
    font-size: 14px;
  }
  .react-select__option {
    font-size: 14px;
  }
`;

const AlgoSelect: React.FC<AlgoSelectProps> = ({
  selectedAlgo,
  setSelectedAlgo,
}) => {
  return (
    <StyledSelect
      defaultValue={selectedAlgo}
      onChange={setSelectedAlgo}
      options={options}
      instanceId="react-select-algo"
      inputId="react-select-algo"
      classNamePrefix="react-select"
      isSearchable={false}
    />
  );
};

export default AlgoSelect;