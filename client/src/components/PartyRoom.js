import logo from '../VoxParty-logos.jpeg'


function PartyRoom(){

    return(
        <>
        <h3 id='info-box'>Pass the aux back and forth between users! You may also return <a href="/">Home</a>!</h3>
        <div className="home">
            <img src={logo} alt="VoxParty logo" className='home-logo' style={{height: "30vh"}}/>
        </div>
        <div className='music-player'>
            
        </div>
        </>
    )
}

export default PartyRoom;