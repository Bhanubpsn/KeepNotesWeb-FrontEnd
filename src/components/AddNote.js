import React,{useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {

    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setnote] = useState({title: "", description: "", tag: ""})

    const handleClick=(e)=>{
        // console.log(note);
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        props.showAlert("Added Successfully", "success");
        setnote({title: "", description: "", tag: ""});
        // setnote({title: "", description: "", tag: ""})
    }

    const onChange=(e)=>{
        setnote({...note,[e.target.name]: e.target.value})
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote