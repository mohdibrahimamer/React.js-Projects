import React, { useEffect, useState } from 'react'
import SingleList from './SingleList'
import Alert from '../alert/Alert'

// yaha per  local storage ka function likre
const getLocalStorage = () => {
    // yaha per ek variable create karey "list" k name se
    let list = localStorage.getItem('itemsList');

    if (list) {
        // agar list hai toh local storage k items k return kare
        return JSON.parse(localStorage.getItem('itemsList'))
    } else {
        // nai toh kuch nai  
        return []
    }

}

const List = () => {
    const [name, setName] = useState('')

    const [itemsList, setItemsList] = useState(getLocalStorage())
    // yaha per edit k alag state bana rey 
    const [edit, setEdit] = useState(false)

    // yaha per edit individual item ki id k alag state bana rey 
    const [editId, setEditId] = useState(null)

    // yaha per alert k alag state bana rey 
    const [alert, SetAlert] = useState({ show: false, msg: '', type: '' })

    // yaha per handle submit ki funtinality likhre
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            // if name false or empty hai then
            showAlert(true, 'please enter the value', 'danger')

        } else if (name && edit) {
            // if name aur edit true hai then 
            // deal with edit
            setItemsList(itemsList.map((item) => {
                if (item.id === editId) {
                    return { ...item, name }
                }
                return item
            }))
            setName('');
            setEditId(null);
            setEdit(false);
            showAlert(true, 'item edited rey', 'success')
        } else {
            // list mien new item dalre
            showAlert(true, 'item added to the list rey', 'success')

            const newItem = { id: new Date().getTime().toString(), name };
            setItemsList([...itemsList, newItem]);
            setName('');

        }


    }

    // yaha per show alert ka separate function likhre or usko 3 seconds k badd remove karey  
    const showAlert = (show = false, msg = '', type = '') => {
        SetAlert({ show, msg, type })
    }

    // yaha per clear list ki funtinality likhre 
    const clearList = () => {
        showAlert(true, 'list cleared rey', 'danger')
        setItemsList([])
    }

    // yaha per remove item ki functionality likhre 
    const removeItem = (id) => {
        showAlert(true, 'item removed rey', 'danger')

        setItemsList(itemsList.filter((item) => item.id !== id))
    }

    // yaha per edit item ki functionality likhre
    const editItem = (id) => {
        // yaha per variable create karey
        const specificItem = itemsList.find((item) =>
            // yaha per "item.id" id  itemsList ki hai aur sirf "id" function ki hai   
            item.id === id)

        setEdit(true)
        // yeh function ki "id" hai 
        setEditId(id)

        // joh item edit karna hai 
        setName(specificItem.name)


    }

    // yaha per local storage istemal karey
    useEffect(() => {
        // yaha per local storage mien data store karey ine khali string store karta 
        localStorage.setItem('itemsList', JSON.stringify(itemsList))

    }, [itemsList])

    return (
        <>
            <div className="alert">
                {alert.show && <Alert  {...alert}
                    //  yaha per showAlert function as prop pass karey 
                    removeAlert={showAlert}
                    // yaha per data pass karey item list ta ki clear items ki timing bada sakey 
                    itemsList={itemsList} />}
            </div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="grocery"></label>
                <input type="text" name="grocery" id="grocery" value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='enter the items '
                />
                <button type='submit'>{edit ? 'edit' : 'submit'}</button>
            </form>


            {itemsList.map((item) => {
                const { id, name } = item

                return <SingleList key={id} {...item} removeItem={removeItem} editItem={editItem} />
            })}

            <div className="clear">
                <button type="button" onClick={clearList}>
                    clear items
                </button>
            </div>
        </>
    )
}

export default List