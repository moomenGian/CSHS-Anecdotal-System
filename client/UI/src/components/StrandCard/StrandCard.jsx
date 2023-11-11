import './StrandCard.css'

function StrandCard({ Strand, Sections}) {
    return(
        <>
            <div className="Card">
                <div className='card-content'>
                    <h6>{Strand}</h6>

                    <div className="card-box">
                        {Sections.map(section => {
                            return <p className='sec'>{section}</p>
                        })}
                    </div>
                </div>
                <div>
                    <h6 className='text-center'>Violations</h6>

                    <div className='card-box'>
                        <p className='text-center'>0</p>
                        <p className='text-center'>0</p>
                        <p className='text-center'>0</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StrandCard