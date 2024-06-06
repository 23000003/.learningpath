import './App.css'

function Person(prop){

    const DeleteInfo = (e) => {
        const container = e.target.closest('.person-container');
        if (container && container.classList.contains('person-container')) {
            container.style.display = "none";
        }
    }
    
    return(
        <div className="person-container">
            <div className="Names">
                <div className='image'>
                    <img src={`../src/assets/${prop.picture}`}></img>
                </div>
                <div className='Data'>
                    <p><b>id:</b> <input value={prop.id} disabled></input></p>
                    <p><b>First Name:</b> {prop.Fname}</p>
                    <p><b>Last Name: </b>{prop.Lname}</p>
                    <p><b>Course:</b> {prop.Course}</p>
                    <p><b>Year:</b> {prop.Year}</p>
                    <p><b>University:</b> {prop.University}</p>
                    <p><b>Address:</b> {prop.Address}</p>
                    <p><b>Contact Number:</b> {prop.ContactNumber}</p>
                    <p><b>Department: </b>{prop.Department}</p>
                </div>
                <div className='Delete'>
                    <button onClick={(e) => DeleteInfo(e)}>Delete</button>
                </div>
            </div>
        </div>
    );

}

export default Person