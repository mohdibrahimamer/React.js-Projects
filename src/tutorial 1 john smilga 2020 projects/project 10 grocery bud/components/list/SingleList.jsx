import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SingleList = ({ id, name, removeItem, editItem }) => {
    // yaha per handleCLick ki funtinality likhre
    const handleClick = () => {
        removeItem(id);

    }

    const EditHandleClick = () => {
        editItem(id);
    }

    return (
        <>
            <div className="" key={id}>
                <p>name = {name}</p>
                <div className="icons">
                    <div className="edit-icon">
                        <button type="button" onClick={EditHandleClick} >
                            <FaEdit />
                        </button>
                    </div>

                    <div className="delete-icon">
                        <button type="button" onClick={handleClick}>
                            <MdDelete />
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SingleList