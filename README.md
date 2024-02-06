# TSN2101 Operating System Assignment
* If you are viewing this markdown file in vscode, please read it in preview mode (Ctrl+Shift+V)

# TC4L | T14L

# Author
- Name: TAN JIA QUAN
- Student ID: 1211104578

# Process Scheduling Calculator
- A web based tool to generate gantt chart and calculate TAT (turnaround time) and WAT (waiting time) based on various scheduling algorithms.
- **[Prototype](https://process-scheduling-calculator-deploy.vercel.app/)**
- **Web Link: https://process-scheduling-calculator-deploy.vercel.app/**

## Supported algorithms
- Shortest Job First / ***SJF*** (non-preemptive)
- Round-Robin / ***RR***
- ***Priority*** (non-preemptive)
- ***Priority*** (preemptive)

## Built with
- Next.js
- TypeScript
- JavaScript
- styled-components
- React (GUI)

## Run/Compilation Instructions
### 1. Download Node.js
- **[Node.js](https://nodejs.org/en) (*LTS Version*)**
- After download, run the installer
- Open command prompt/powershell
- type `node`
- If u see a welcome message (e.g. Welcome to Node.js v20.11.0.), means the installation is completed

- ***Video Guide:*** **https://youtu.be/06X51c6WHsQ?si=wbjHXc7zNlGM81Yw**

### 2. Run/Compile
- Open the **process-scheduling-calculator** folder in **VSCode**
- Open terminal
- Type the following commands in the terminal:
1. `npm install`
2. `npm start`
3. `npm run dev`
4. Click the link ***(e.g. - Local: http://localhost:3000)***
5. ***Ctrl + C*** to terminate

- ***Video Guide:*** **https://youtu.be/WIBSPhffOHI?si=8K-aWrVBZmxrab0R**

## User Guide
### How to use this calculator?
        
1. Choose your desired ***Algorithm*** in the dropdown menu.

2. Input the ***Arrival Times*** for the processes.

    **IMPORTANT: Please follow this format when typing the input:**
    - Input the arrival time of the first process, follow by a **space**, then type the arrival time of the second process 
    - **E.g. 0 2 4 6 8 10**

3. Input the ***Burst Times*** for the processes.

    **IMPORTANT: Please follow this format when typing the input:**
    - Input the burst time of the first process, follow by a **space**, then type the burst time of the second process 
    - **E.g. 8 8 8 8 8 8**

4. Input the ***Priority*** for the processes (Only applicable for Non Preemptive Priority & Preemptive Priority).

    **IMPORTANT: Please follow this format when typing the input:**
    - Input the priority of the first process, follow by a **space**, then type the priority of the second process 
    - **E.g. 1 2 3 4 5 6**

5. Input the ***Time Quantum*** for the processes (Only applicable for Round Robin).

    **IMPORTANT: Please follow this format when typing the input:**
    - **E.g. 3**

6. After completing the all the inputs required, click the `Calculate` button to begin the calculation

7. **Output** will be shown on the output panel.




