import React, {useState} from 'react'
import ItemDropDown from './ItemDropDown.Work'

const Item = ({item}) => {
    const [open, setOpen] = useState(false)


    return (
        <div className="Work-item" >
            <h3 className="Work-item-name" onClick={() => setOpen(!open)}>
                {item.name.toUpperCase()}
            </h3>
            {open ? <ItemDropDown item={item} /> : null}
        </div>
    )
}

export default Item