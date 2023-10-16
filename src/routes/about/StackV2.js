import React from 'react'
import { Nivel } from './Nivel'

const Stack_v2 = () => {
    return (
        <>
            <div className="education">
                <h3 className='h3-tag'>
                    Mis conocimientos y habilidades:
                </h3>
            </div>

            <div className='content-conocimientos' style={{width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Nivel bgColorNivel={'bg-nivel-avanzado'} hab={'HTML5'} desc={'Estructurar un sitio web'} nivel={'Avanzado'}/>
                <Nivel bgColorNivel={'bg-nivel-avanzado'} hab={'CSS3'} desc={'Dar estilo un sitio web'} nivel={'Avanzado'}/>
                <Nivel bgColorNivel={'bg-nivel-medio'} hab={'JavaScript'} desc={'Dar interactividad un sitio web'} nivel={'Intermedio'}/>
                <Nivel bgColorNivel={'bg-nivel-avanzado'} hab={'ReactJs'} desc={'Crear aplicaciones web'} nivel={'Avanzado'}/>
                <Nivel bgColorNivel={'bg-nivel-avanzado'} hab={'Redux'} desc={'Control global del estado de la aplicación'} nivel={'Avanzado'}/>
                <Nivel bgColorNivel={'bg-nivel-medio'} hab={'Firebase'} desc={'Desarrollo de aplicaciones'} nivel={'Intermedio'}/>
                <Nivel bgColorNivel={'bg-nivel-medio'} hab={'NodeJs'} desc={'Programar desde el servidor con JavaScript'} nivel={'Intermedio'}/>
                <Nivel bgColorNivel={'bg-nivel-avanzado'} hab={'ExpressJs'} desc={'Crear un backend con buena infraestructura'} nivel={'Avanzado'}/>
                <Nivel bgColorNivel={'bg-nivel-avanzado'} hab={'MongoDB'} desc={'Gestionar una base de datos NO relacional'} nivel={'Avanzado'}/>
                <Nivel bgColorNivel={'bg-nivel-medio'} hab={'MySQL'} desc={'Gestionar una base de datos relacional'} nivel={'Intermedio'}/>
                <Nivel bgColorNivel={'bg-nivel-avanzado'} hab={'Bootstrap'} desc={'Dar estilo a un sitio web rapidamente'} nivel={'Avanzado'}/>
                <Nivel bgColorNivel={'bg-nivel-avanzado'} hab={'TailwindCSS'} desc={'Dar estilo a un sitio web'} nivel={'Avanzado'}/>
                <Nivel bgColorNivel={'bg-nivel-medio'} hab={'PHP'} desc={'Programar desde el lado del servidor'} nivel={'Intermedio'}/>
                <Nivel bgColorNivel={'bg-nivel-medio'} hab={'Laravel'} desc={'Programar desde el servidor con PHP'} nivel={'Intermedio'}/>
            </div>
        </>
    )
}

export default Stack_v2