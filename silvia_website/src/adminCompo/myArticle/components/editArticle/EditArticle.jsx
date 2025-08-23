import React, { useState } from "react";
import "./editArticle.css";
import { RxCross2 } from "react-icons/rx";

const EditArticle = ({id, closeHandler}) => {
    const [article, setArticle] = useState(null);
    const [choose, setChoose] = useState(null);

    function editHandler(){
        setChoose("edit");
        fetch(`${process.env.REACT_APP_API_URL}/article/${id}`, {method:"GET"})
        .then((response)=>response.json())
        .then((data)=>{
            setArticle(data);
        })
        .catch((err)=>{console.log(err);})
    }

    function deleteHandler(){
        alert("This function is under development, please delete manually.");
        closeHandler(false);
    }

    function submitHandler(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const title = formData.get("title");
        const intro = formData.get("intro");
        // pack section list
        
        fetch(`${process.env.REACT_APP_API_URL}/article`, {
            method:"PUT",
            body: JSON.stringify({
                "id":article.id,
                "title":title,
                "intro":intro,
                "coverImgUrl":article.coverImgUrl,
                "headerType":article.headerType,
                "date":article.date,
                "categoryList":article.categoryList,
                "sectionList":article.sectionList
            }),
        })
        .then((response)=>{
            console.log(response.ok)
        })
        .catch((err)=>{console.log(err)})
    }

    return(
        <div className="admin_myArticle_edit">
            {choose===null&&<div className="admin_myArticle_edit_choose">
                <div className="admin_myArticle_edit_choose_cancel" onClick={()=>{closeHandler(false)}}><RxCross2 size={25} color="white"/></div>
                <h2>Do you want to make some changes?</h2>
                <div className="admin_myArticle_edit_choose_btns">
                    <div className="admin_myArticle_edit_choose_btn" onClick={()=>{deleteHandler()}}>DELETE</div>
                    <div className="admin_myArticle_edit_choose_btn" onClick={()=>{editHandler()}}>EDIT</div>
                </div>
            </div>}
            {(choose==="edit"&&article!==null)&&<form className="admin_myArticle_edit_form" onSubmit={submitHandler}>
                <div className="admin_myArticle_edit_form_header">
                    <label>
                        <input name="title" type={"text"} defaultValue={article.title} required/>
                    </label>
                    <label>
                        <textarea name="intro" type={"text"} defaultValue={JSON.parse(`"${article.intro}"`)} cols="30" rows="10" required/>
                    </label>
                </div>
                <div className="admin_myArticle_edit_form_sections">
                    {article.sectionList.map((section, index)=>(
                        <div key={"admin_myArticle_edit_form_section_"+index} className="admin_myArticle_edit_form_section">
                            <label>
                                <input key={"admin_myArticle_edit_form_section_title_"+index} name={"section_title_"+index} type={"text"} defaultValue={section.title}/>
                            </label>
                            <label>
                                <textarea key={"admin_myArticle_edit_form_section_intro_"+index} name={"section_intro_"+index} type={"text"} defaultValue={JSON.parse(`"${article.intro}"`)} cols="30" rows="10" required/>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="admin_myArticle_edit_form_btns">
                    <button type="button" onClick={()=>{closeHandler(false)}}>Cancel</button>
                    <button type="submit">Submit</button>  
                </div>
            </form>}
        </div>
    )
}

export default EditArticle;