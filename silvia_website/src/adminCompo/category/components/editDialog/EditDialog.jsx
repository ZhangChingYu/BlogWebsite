import React from "react";
import "./editDialog.css";
import { GiCancel } from "react-icons/gi";

const EditDialog = ({setEditShow, category}) => {
    var SCREEN_HEIGHT = window.screen.availHeight;
    var SCREEN_WIDTH = window.screen.availWidth;

    function handleSubmit(e){
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        // Check no blank on input
        const name = formData.get("name");
        const intro = formData.get("intro");
        if(name===category.name && intro===category.intro){
            alert("Nothing has changed.");
        }else{
            fetch("http://localhost:8080/categories", {
                method:"PUT",
                body: JSON.stringify({
                    "id":category.id,
                    "name":name,
                    "intro":intro,
                    "root":category.root
                })
            })
            .then((response)=>{
                if(response.status===200){
                    alert("Save changes complete.");
                    setEditShow(false);
                }
            })
            .catch((err)=>alert(err));
        }
    }

    return(
        <div>
            <div className="admin_category_add" style={{height:SCREEN_HEIGHT}}></div>
            <form className="admin_category_edit" style={{top:SCREEN_HEIGHT/2-250, left:SCREEN_WIDTH/2-250}} onSubmit={handleSubmit}>
                <div className="admin_categiry_edit_cancel">
                    <GiCancel size={30} color="var(--color-dragon-theme)" onClick={()=>{setEditShow(false)}} />
                </div>
                <label>
                    Name of Dialog: <input name="name" type={"text"} placeholder={""} defaultValue={category.name} />
                </label>
                <label>
                    Introduction: <textarea name="intro" placeholder="" defaultValue={category.intro} rows={5} cols={40} maxLength={300}/>
                </label>
                <label>
                    Theme: 
                    <select name="root" disabled={true} style={{marginTop:"8px"}} defaultValue={category.root}>
                        <option value={1} >Life</option>
                        <option value={2} >Work</option>
                    </select>
                </label>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
}

export default EditDialog;