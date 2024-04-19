import Card from 'react-bootstrap/Card'
import Navbar from '../Navbar/Navbar'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState, useEffect } from 'react';
import './Dashboard.scss'

async function getAllRecords(){
    try {
        const response = await fetch('http://localhost:3000/getAllData')

        if(response.status === 404){
            return null
        }

        return await response.json()
    } catch (e) {
        console.error(e)
    }
}

async function validateData(){
    const data = await getAllRecords();

    const countOccurrences = Object.values(data).reduce((acc, sectionObj) => {
        const sectionName = Object.keys(sectionObj)[0]; // Extract the section name
        acc[sectionName] = (acc[sectionName] || 0) + 1;
        return acc;
      }, {});
      
    
    return countOccurrences
}

async function getSectionViolations(){
    const data = await validateData()
      
      // Sort section names based on the number of violations in descending order
      const sortedSections = Object.keys(data).sort((a, b) => data[b] - data[a]);
      
      // Extract violation numbers and section names
      const violationNumbers = sortedSections.map(sectionName => data[sectionName]);
      const sections = sortedSections;
      

      return { violationNumbers, sections };
}


getSectionViolations()
function Dashboard() {
    const [violationNumbers, setViolationNumbers] = useState([0]);
    const [sections, setSections] = useState(['null']);
    const maxSectionsToShow = 8; 

    useEffect(() => {
        async function fetchData() {
            const { violationNumbers, sections } = await getSectionViolations();
            setViolationNumbers(violationNumbers);
            setSections(sections.slice(0, maxSectionsToShow));
        }

        fetchData();
    }, []);

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 px-0">
                        <Navbar />
                    </div>
                    <div className="col-11 px-0">

                        <BarChart
                            width={650}
                            height={300}
                            series={[
                                { data: violationNumbers, label: 'Section With The Most Violations', id: 'pvId' },
                            ]}
                            xAxis={[{ data: sections, scaleType: 'band' }]}
                        />
                        <BarChart
                        width={650}
                        height={300}
                        series={[
                            { data: violationNumbers, label: 'sections', id: 'pvId' },
                        ]}
                        xAxis={[{ data: sections, scaleType: 'band' }]}
                    />
                    </div>
                </div>
            </div>
            
    </>
    )
}

export default Dashboard