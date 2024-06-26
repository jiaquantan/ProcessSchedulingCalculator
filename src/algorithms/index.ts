import { sjf } from './sjf';
import { rr } from './rr';
import { npp } from './npp';
import { pp } from './pp';
import { AlgoType } from '../components/Input/AlgoSelect';

export type ganttChartInfoType = {
  job: string;
  start: number;
  stop: number;
}[];

export type solvedProcessesInfoType = {
  job: string;
  at: number;
  bt: number;
  ft: number;
  tat: number;
  wat: number;
}[];

export const solve = (
  algo: AlgoType,
  arrivalTime: number[],
  burstTime: number[],
  timeQuantum: number,
  priorities: number[]
) => {
  switch (algo) {
    case 'SJF':
      return sjf(arrivalTime, burstTime);
    case 'RR':
      return rr(arrivalTime, burstTime, timeQuantum);
    case 'NPP':
      return npp(arrivalTime, burstTime, priorities);
    case 'PP':
      return pp(arrivalTime, burstTime, priorities);
    default:
      break;
  }
};
