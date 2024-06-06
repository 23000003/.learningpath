import data from './info.json';
import Person from './person.jsx';
import './App.css';
import { useState } from 'react';

                
function AddPost({ addPerson }) {

  const exit = () => {
    document.body.style.overflow = "auto";
    document.querySelector('.PostDetails').style.display = "none";
    document.querySelector('.opacity').style.display = "none";
  }

  const postDetails = () => {
    document.body.style.overflow = "auto";
    document.querySelector('.PostDetails').style.display = "none";
    document.querySelector('.opacity').style.display = "none";
    const fname = document.getElementById('FName').value;
    const lname = document.getElementById('LName').value;
    const course = document.getElementById('Course').value;
    const year = document.getElementById('Year').value;
    const univ = document.getElementById('University').value;
    const addr = document.getElementById('Address').value;
    const contact = document.getElementById('Contact').value;
    const depart = document.getElementById('Department').value;
    
    addPerson({
      id: id,
      Fname: fname,
      Lname: lname,
      Course: course,
      Year: year,
      University: univ,
      Address: addr,
      ContactNumber: contact,
      Department: depart,
      picture: 'Binayot.png'
    });
  };

  return (
    <>
      <button onClick={postDetails} className='buttonAdd'>Add Post</button>
      <button onClick={exit} className='buttonAdd'>Exit</button>
    </>
  );

}

function ButtonPost({ addPerson }) { 
  const Post = () => {
    document.body.style.overflow = "hidden";
    document.querySelector('.PostDetails').style.display = "block";
    document.querySelector('.opacity').style.display = "block";
  }
  
  return (
    <>
      <button onClick={Post} className='button'>Post</button>
      <div className='opacity'></div>
      <div className='PostDetails'>  
        <div className='Post-labels'>
          <label>First Name: <input id='FName'></input></label>
          <label>Last Name: <input id='LName'></input></label>
          <label>Course: <input id='Course'></input></label>
          <label>Year: <input id='Year'></input></label>
          <label>University: <input id='University'></input></label>
          <label>Address: <input id='Address'></input></label>
          <label>Contact: <input id='Contact'></input></label>
          <label>Department: <input id='Department'></input></label>
          
          <AddPost addPerson={addPerson} />
        </div>
      </div>
    </>
  );
}

let id = 0;

function Cvitae(){
  const [people, setPeople] = useState(data);

  id = parseInt(people[people.length - 1].id) + 1;

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  return(
    <div className='Container'>
      {
          people.map((data, i) => (
          <Person key={i} {...data} />  
        ))
      }
      <ButtonPost addPerson={addPerson} />
    </div>
  );
}

export default Cvitae;
