import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import './SectionPage.css'
import { Link } from 'react-router-dom'

import { useParams } from "react-router-dom"




async function fetchSectionDatas(sectionName, setData) {

    try {
        const response = await fetch(`http://localhost:3000/api/sections/${sectionName}`)
        
        if(response.status === 404){
            console.error('Section not found or Section does not have records yet');
            return
        }

        const dataFetched = await response.json()
        setData(dataFetched)
    } catch (error) {
        console.error(error);
    }
}


function Content({Strand, sectionName}) {
    //replace the % from the section name url
    const formattedSecName = sectionName.replaceAll(' ','')

    const [ data,setData ] = useState(null)

    useEffect(() => {
        fetchSectionDatas(formattedSecName, setData)
    }, [formattedSecName])
    

    const adviser = data && data[0] && data[0][formattedSecName].adviser


    let violations = [];

    const fetchViolations = async () => {
        if (data) {
            await Promise.all(data.map(async element => {
                let e = Object.values(element)[0].violations[0];
                violations.push(e);
            }));
        }
    };

    fetchViolations().then(data => {
        console.log(violations.length);
    })



    return (
        <>
            <h1 className="header">STUDENT VIOLATION RECORDS 
                <Link to={'/'} className="d-flex flex-row-reverse btn">Back</Link>  
            </h1>

            <div className="sectionInfo">
                <h2>{Strand} {sectionName} - {adviser ? adviser : '<Adviser not found>' }</h2>
                <p>Total Violations: 0</p>
            </div>
            <table>
                    <thead>
                        <tr>
                            <th>
                                NAME
                            </th>
                            <th>
                                VIOLATION
                            </th>
                            <th>
                                REPORTING OFFICER/ WITNESS
                            </th>
                            <th>
                                DATE
                            </th>
                            <th>
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {violations.length === 0 ? (
                            <tr>
                                <td colSpan={5}>No Records Found</td>
                            </tr>
                        ) : (
                            violations.map(record => {
                                const date = new Date(record.date).toLocaleDateString()

                                return (
                                    <tr key={`${record.violator}-${record.violation}`}>
                                        <td>{record.violator}</td>
                                        <td>{record.violation}</td>
                                        <td>{record.witness}</td>
                                        <td>{date}</td>
                                        <td>EDIT</td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                    
            </table>
        </>
    )
}

function SectionPage() {
    let { Strand,sectionName } = useParams()
    Strand = Strand.slice(1)

    return ( 
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 px-0">
                        <Navbar />
                    </div>
                    <div className="col-11 px-0">
                        <Content sectionName={sectionName} Strand={Strand} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionPage