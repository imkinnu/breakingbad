import React, { useState } from 'react'

const Search = ({ getQuery }) => {

    const [text, setText] = useState('')


    const onChange = (q) => {
        setText(q);
        getQuery(q)
    }

    return (
        <section style={{ margin: "10px" }}>
            <form>
                <input type="text" className="form-control" placeholder="Search Characters" value={text} autoFocus onChange={(e) => onChange(e.target.value)} />
            </form>
        </section>
    )
}

export default Search
