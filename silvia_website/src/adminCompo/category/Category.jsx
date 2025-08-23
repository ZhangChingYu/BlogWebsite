import React, { useEffect, useState } from "react";
import "./category.css";
import { AddDialog, EditDialog } from "./components";

const Category = () => {
    const [cateList, setCateList] = useState([]);
    const [addShow, setAddShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [curCateEdit, setCurCateEdit] = useState();

    useEffect(()=>{
        //console.log("e")
        fetch(`${process.env.REACT_APP_API_URL}/categories`, {method:"GET"})
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            setCateList(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const DeleteHandler = (id) => {
        if(id !== null){
            fetch(`${process.env.REACT_APP_API_URL}/categories/${id}`, 
            {
                method: 'DELETE'
            })
            .then((response) => {
                console.log(response.status);
            })
            .catch((err)=>{alert(err)})
        }
    }

    function EditHandler(category) {
        setCurCateEdit(category);
        setEditShow(true);
    }

    return (
        <div className="admin_category">
            { addShow?<AddDialog setAddShow={setAddShow}/>:<></> }
            { editShow? <EditDialog setEditShow={setEditShow} category={curCateEdit}/>:<></>}
            <div className="admin_category_addBtn" onClick={()=>{setAddShow(true)}}>
                <p>Add New Category</p>
            </div>
            <div className="admin_category_wrapper">
            {cateList.map((item) => {
                return (
                    <div className="admin_category_item" key={item.id}>
                        <div className="admin_category_item_wrapper" key={item.id+"_wrap"}>
                            <p>{item.name}</p>
                            <div className="admin_category_btn" key={item.name}>
                                <div className="admin_category_editBtn" key={item.name+"_edit"} onClick={()=>{EditHandler(item)}}>
                                    <p style={{color:"var(--color-blue)"}}>Edit</p>
                                </div>
                                <div className="admin_category_deleteBtn" key={item.name+"_delete"} onClick={()=>DeleteHandler(item.id)}>
                                    <p style={{color:"var(--color-cat-theme)"}}>Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Category;