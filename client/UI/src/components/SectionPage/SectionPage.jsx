import Navbar from "../Navbar/Navbar"
import './SectionPage.css'

import { useParams } from "react-router-dom"

function Content({Strand, sectionName}) {
    console.log(Strand);
    return (
        <>
            <h1 className="header">STUDENT VIOLATION RECORDS</h1>

            <div className="sectionInfo">
                <h2>{Strand} {sectionName} - Niche T. Lazona</h2>
                <p>Total Violations: 0</p>
            </div>
            <table>
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
                        <Content sectionName={sectionName} Strand={Strand}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionPage