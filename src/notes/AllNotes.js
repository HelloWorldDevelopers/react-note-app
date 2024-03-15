import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastsingelCard, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Notes.css";
import profile from "../assets/profile.png";
import deleteIcon from "../assets/delete.png";
import edit from "../assets/edit.png";
 
function AllNotes() {
     
  const item = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
       <div className="header bg bg-primary">
        <button
          type="button"
          className="btn btn-success btn-sm"
          style={{widows:'40px',height:'40px',marginTop:'10px'}}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
         + Add
        </button>
        <div className="logo-po">
          <img className="logo" src={profile} />
        </div>
        <div className="userName">
          <span>Vishal Dabade</span>
        </div>
      </div>
      <div className="allCards ">
        {item.map((item) => {
          return (
            <div className="singelCard ">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>

                  <img className="edit" src={edit} />
                  <img className="delete" src={deleteIcon} />
                  <span className="date text text-info">
                    {" "}
                    Monday 19/12/2024
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
        <input class="form-control" style={{width:"400px"}} type="text" placeholder="Title" />

        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <textarea class="form-control" rows='5' placeholder="notes content" id="floatingTextarea"></textarea>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">+ Add</button>
      </div>
    </div>
  </div>
  </form>
</div>
    </>
  );
}

export default AllNotes;
