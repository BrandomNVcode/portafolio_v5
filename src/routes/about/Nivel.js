import React from 'react';

export const Nivel = ({hab, desc, bgColorNivel, nivel}) => {

    return (
        <div className='item-conocimientos'>
            <div className='item-text item-habilidad flex-center-center'>
                {hab}
            </div>
            <div className={`item-text item-desc ${bgColorNivel} flex-center-center`}>
                {desc}
            </div>
            <div className='item-text item-nivel flex-center-center'>
                {nivel}
            </div>
        </div>
    )
}