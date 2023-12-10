import Card from 'react-bootstrap/Card'
import Navbar from '../Navbar/Navbar'

function Dashboard() {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 px-0">
                        <Navbar />
                    </div>
                    <div className="col-11 px-0">
                    <Card>
                        <Card.Body>
                        <Card.Text>
                            Page is under construction.
                            <br /> <br /> <br />
                            Projected output:
                        </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src={"/DashboardPic.png"} style={{width: 'min-content'}} />
                    </Card>
                    </div>
                </div>
            </div>
            
    </>
    )
}

export default Dashboard