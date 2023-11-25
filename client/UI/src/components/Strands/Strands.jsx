import StrandCard from "../StrandCard/StrandCard"
import './Strands.css'

function Strands() {
    const sectionsData = [
        { name: '12 - CARMACK', violation: 0 },
        { name: '12 - BERNERS LEE', violation: 0 },
        { name: '11 - JAVA', violation: 0 },
        { name: '11 - RUBY', violation: 0 },
        { name: '12 - GATES', violation: 0 }
    ];

    const STEMsections = [
        { name: '12 - NIGGER', violation: 0 },
        { name: '12 - BERNERS LEE', violation: 0 },
        { name: '11 - JAVA', violation: 0 },
        { name: '11 - RUBY', violation: 0 },
        { name: '12 - GATES', violation: 0 }
    ];

    return(
        <>
            <div className="s">
                <StrandCard Strand={'ICT'} Sections={ sectionsData }/>
                <StrandCard Strand={'STEM'} Sections={ STEMsections }/>
                <StrandCard Strand={'ICT'} Sections={ sectionsData }/>
                <StrandCard Strand={'ICT'} Sections={ sectionsData }/>
                <StrandCard Strand={'ICT'} Sections={ sectionsData }/>
            </div>
            
        </>
    )
}

export default Strands