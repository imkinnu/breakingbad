import React from 'react';

const Navlink = (props) => {
    const { name, className, id, href, aria_selected } = props;
    return (
        <a class={className} id={id} data-toggle="pill" href={href} role="tab" aria-selected={aria_selected}>{name}</a>
    )
}

export default Navlink;