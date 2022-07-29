import logo from '../VoxParty-logos.jpeg'

function Home(){
    return(
        <div className="home">
            <img src={logo} alt="VoxParty logo" className='home-logo' style={{height: "30vh"}}/>
            <form className='login'>
                <label>
                    Username 
                </label>
                <input name="username" type='text' className='login-inputs'></input>
                <label>
                    Password
                </label>
                <input name='password' type='password'></input>
                <button type='submit' style={{marginTop: "10%"}}>Login</button>
            </form>
            <a href="/PartyRoom">PartyRoom</a>
        </div>
    )
}

export default Home;