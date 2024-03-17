import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./Notes.css";
import profile from "../assets/profile.png";
import deleteIcon from "../assets/delete.png";
import edit from "../assets/edit.png";

function AllNotes() {
  const [allNotes, setAllNotes] = useState([])
  const [singleNote, setSingleNote] = useState({})

  const [refresh,setRefresh]=useState(null)
  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
     fetch("http://localhost:8080/api/v1/notes/All/" + userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authentication": sessionToken
      }
    })
      .then((res) => res.json())
      .then((res) => {
         setAllNotes(res.data)
        setRefresh(true)
      })
  },[refresh])

  const getDate = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${dayOfWeek} ${dayOfMonth}/${month}/${year}`;
    return formattedDate;
  }
  function deleteNote(_id){
    const sessionToken = sessionStorage.getItem("token");
      fetch("http://localhost:8080/api/v1/notes/delete/" + _id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authentication": sessionToken
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.success){
               setRefresh(true)
               toast.success('deleted successfully');
        }
      })
  }
  function editNote(_id){}
  function getNoteValue(e){
    setSingleNote({...singleNote,[e.target.name]:e.target.value})
  }
  function addNotes(_id){
    const sessionToken = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
      fetch("http://localhost:8080/api/v1/notes/" +userId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authentication": sessionToken
      },
      body: JSON.stringify(singleNote)
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.success){
               setRefresh(true)
               toast.success('note add successfully');
        }else{
          setRefresh(false)
          toast.success('something whats wrong');
        }
      })
  }
  return (
    <>
       <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
 />
      <div className="header bg bg-primary">
        <button
          type="button"
          className="btn btn-success btn-sm"
          style={{ widows: '40px', height: '40px', marginTop: '10px' }}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          + Add
        </button>
        <div className="logo-po">
          <img className="logo" src={profile} />
        </div>
        <div className="userName">
          <span>{sessionStorage.getItem("fullName")}</span>
        </div>
      </div>
      <div className="allCards ">
        {allNotes.map((item,index) => {
          return (
            <div className="singelCard " key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.content}
                  </p>

                  <img className="edit" onClick={()=>editNote(item._id)} src={edit} />
                  <img className="delete" onClick={()=>deleteNote(item._id)} src={deleteIcon} />
                  <span className="date text text-info">
                   {getDate(item.date)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <form id="addNotesId" >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  <input className="form-control" onChange={getNoteValue} name="title" style={{ width: "400px" }} type="text" placeholder="Title" />

                </h5>
                <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <textarea className="form-control" onChange={getNoteValue} rows='5' name="content" placeholder="notes content" id="floatingTextarea"></textarea>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" onClick={addNotes} className="btn btn-primary">+ Add</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AllNotes;
