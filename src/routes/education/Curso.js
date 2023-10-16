import React from 'react';



export const Curso = ({children, title, desc}) => {
    return (
        <div className="content-curso">
            <div className="curso-items">
                <div className="curso-logo">
                    {children}
                </div>
                <div className="title">
                    <p className="title-name">{title}</p>
                    <p className="curso-desc">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}