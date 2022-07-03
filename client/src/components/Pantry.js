

function Pantry(){

    return(
        <div className="pantry">
            <h1>This is your pantry, add ingredients to your pantry to return some recipes!</h1>
            <form>
                <input type="text" placeholder="add your ingredients here"/>
                <button type="submit">Add</button>
            </form>
            <div className="ingredient-list"></div>
        </div>
    )
}

export default Pantry;