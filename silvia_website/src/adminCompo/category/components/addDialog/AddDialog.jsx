import React from "react";
import "./addDialog.css";
import { GiCancel } from "react-icons/gi";

const AddDialog = ({setAddShow}) => {
    var SCREEN_HEIGHT = window.screen.availHeight;
    var SCREEN_WIDTH = window.screen.availWidth;

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        // Check no blank on input
        const name = formData.get("name");
        const intro = formData.get("intro");
        const root = formData.get("root");
        if(name === "" || intro === "") {
            alert("You must fill in every blank!");
        }else{
            fetch(`${process.env.REACT_APP_API_URL}/categories`, { method:"POST", 
            body: JSON.stringify({
                "name":name, 
                "intro":intro, 
                "root":root
            })})
            .then((response) => response)
            .then((data) => {
                console.log(data.ok);
                setAddShow(false);
            })
            .catch((err) => {
                alert(err);
            });
        }
    }

    return (
        <div>
            <div className="admin_category_add" style={{height:SCREEN_HEIGHT}}></div>
            <form method="post" onSubmit={handleSubmit} className="admin_category_add_dialog" style={{top:SCREEN_HEIGHT/2-250, left:SCREEN_WIDTH/2-250}}>
                <div className="admin_categiry_add_cancel">
                    <GiCancel size={30} color="var(--color-cat-theme)" onClick={()=>{setAddShow(false)}} />
                </div>
                <label>
                    Name of new Category:<input name="name" type={"text"} placeholder={""}/>
                </label>
                <label>
                    Introduction:<textarea name="intro" rows={5} cols={40} maxLength={300}/>
                </label>
                <div className="admin_category_add_item">
                    <label>
                        Theme:
                    </label>
                    <select name="root">
                        <option value={1}>Life</option>
                        <option value={2}>Work</option>
                    </select>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AddDialog;