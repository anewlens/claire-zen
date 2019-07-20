import React from 'react'
import '../Styles/Work.styles.scss'

import work from '../data/Work'
import Item from './Item.Work'

const Work = () => {
    return (
        <section id='Work' className="Work">
            <div className="Work-content">
                {work.map(item => <Item item={item}/>)}
            </div>
        </section>
    )
}

export default Work