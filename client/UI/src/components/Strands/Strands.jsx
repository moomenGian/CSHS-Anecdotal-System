import StrandCard from "../StrandCard/StrandCard"
import './Strands.css'
import { useState, useEffect } from "react";


async function getNumOfViolations(sectionName) {


    // return null
    try {
        const response = await fetch(`http://localhost:3000/api/sections/${sectionName}`)
        
        if(response.status === 404){
            console.error('Section not found or Section does not have records yet');
            return null
        }

        const dataFetched = await response.json()
        return dataFetched.length
    } catch (error) {
        console.error(error);
    }
}




function Strands() {

    const [sectionsData, setSectionsData] = useState([
        { name: '12 - CARMACK', violation: 0 },
        { name: '12 - BERNERS LEE', violation: 0 },
        { name: '11 - JAVA', violation: 0 },
        { name: '11 - RUBY', violation: 0 },
        { name: '12 - GATES', violation: 0 }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const dataPromises = sectionsData.map(async section => {
                const violationCount = await getNumOfViolations(section.name.replaceAll(' ',''));
                return { ...section, violation: violationCount ?? 0 };
            });

            Promise.all(dataPromises).then(sectionsData => setSectionsData(sectionsData));
        };

        fetchData();
    }, []);


    //////















    // const sectionsData = [
    //     { name: '12 - CARMACK', violation: getNumOfViolations('12-CARMACK') ?? 0 },
    //     { name: '12 - BERNERS LEE', violation: 0 },
    //     { name: '11 - JAVA', violation: 0 },
    //     { name: '11 - RUBY', violation: 0 },
    //     { name: '12 - GATES', violation: 0 }
    // ];

    const STEMsections = [
        { name: '11 - EUCLID', violation: 0 },
        { name: '11 - DESCARTES', violation: 0 },
        { name: '12 - GALILEI', violation: 0 },
        { name: '12 - EINSTEIN', violation: 0 },
    ];
    const ABMsections = [
        { name: '11 - MAXWELL', violation: 0 },
        { name: '11 - FIEDLER', violation: 0 },
        { name: '11 - MASLOW', violation: 0 },
        { name: '12 - PACIOLI', violation: 0 },
        { name: '12 - DRUCKER', violation: 0 }
    ];
    const HUMMSsections = [
        { name: '11 - LOVE', violation: 0 },
        { name: '11 - FAITH', violation: 0 },
        { name: '11 - HOPE', violation: 0 },
        { name: '12 - HONESTY', violation: 0 },
        { name: '12 - INTEGRITY', violation: 0 }
    ];
    const BAPsections = [
        { name: '11 - CROISSANT', violation: 0 },
        { name: '11 - MUFFIN', violation: 0 },
        { name: '12 - BATONNET', violation: 0 },
        { name: '12 - CHIFFONADE', violation: 0 },
        { name: '12 - JULLIENNE', violation: 0 }
    ];
    const AUTOsections = [
        { name: '11 - JAGUAR', violation: 0 },
        { name: '11 - AUDI', violation: 0 },
        { name: '12 - PORSCHE', violation: 0 },
        { name: '12 - BMW', violation: 0 },
    ];
    return(
        <>
            <div className="s">
                <StrandCard Strand={'STEM'} Sections={ STEMsections }/>
                <StrandCard Strand={'ABM'} Sections={ ABMsections }/>
                <StrandCard Strand={'HUMMS'} Sections={ HUMMSsections }/>
                <StrandCard Strand={'TVL - ICT'} Sections={ sectionsData }/>
                <StrandCard Strand={'TVL - BAP'} Sections={ BAPsections }/>
                <StrandCard Strand={'TVL - AUTOMOTIVE'} Sections={ AUTOsections }/>
            </div>
        </>
    )
}

export default Strands