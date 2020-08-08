import React, { useState } from 'react'

const Search = ({ getQuery, className }) => {

    const [text, setText] = useState('')


    const onChange = (q) => {
        setText(q);
        getQuery(q)
    }

    return (
        <section className={className}>
            <form>
                <input type="text" className="form-control" placeholder="Search Characters" value={text} autoFocus onChange={(e) => onChange(e.target.value)} />
            </form>
        </section>
    )
}

export default Search
