import { Curso } from './Curso';


export const Estudios = () => {
    return (
        <section id='estudios' style={{marginTop: 80, padding: '2rem'}}>

            <h2 className="title-font pink-text h2-tag" style={{fontSize: '4rem'}}>Conocimientos y cursos</h2>
            <p className="white-text p-tag" style={{fontSize: '1.5rem'}}>
                Durante mi preparación profesional la universidad me ayudo a formar y elegir el camino para prepararme 
                para el desafiante y emocionante mundo laboral del desarrollo de software. Durante el proceso de formación
                tome diferentes cursos para poder ser más competitivo y estar preparado para cualquier reto.
            </p>

            <div className="content-estudios" style={{marginTop: 80}}>
                <Curso
                    title={'Universidad Nacional Mayor de San Marcos - 2018/2023'}
                    desc={'Egresado de la carrera profesional de ingeniería de software.'}>
                    <i className="fa-solid fa-graduation-cap fa-lg"></i> 
                </Curso>
                <Curso
                    title={'Udemy: Curso de Diseño Web: HTML y CSS desde cero hasta avanzado - 2021'}
                    desc={'Curso de 27 horas en el cual aprendí a diseñar sitios web con las mejores prácticas.'}>
                    <i className='fa-brands fa-html5 fa-lg'></i>
                </Curso>
                <Curso
                    title={'Udemy: React: De cero a experto ( Hooks y MERN ) - 2020'}
                    desc={'Curso de más de 50 horas del reconocido instructor Fernando Herrera en donde aprendí a programar desde el lado del cliente. Además, de dominar Redux para el manejo global del estado de la aplicación.'}>
                    <i class="fa-brands fa-react fa-lg"></i>
                </Curso>
                <Curso
                    title={'Udemy: Node: De cero a experto - 2020'}
                    desc={'Curso de más de 28 horas del reconocido instructor Fernando Herrera en donde aprendí a programar desde el lado del servidor.'}>
                    <i class="fa-brands fa-node-js fa-lg"></i>
                </Curso>
                <Curso
                    title={'Laravel - Crea Aplicaciones y Sitios Web con PHP y MVC - 2020'}
                    desc={'Curso del reconocido instructor Juan P. de la Torre Valdez en donde aprendí a crear servicios web con el framework Laravel.'}>
                    <i class="fa-brands fa-laravel fa-lg"></i>
                </Curso>
            </div>
        </section>
    )
}