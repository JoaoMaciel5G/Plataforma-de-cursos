import CheckCoursesCardSignature from "./CheckCoursesCardSignature";

function OneYearPlain() {
    return (
        <div className="flex flex-col justify-center items-center border-[1px] border-purple p-3">
            <h2 className="text-5xl font-light my-5">1 ano</h2>
            <div className="flex">
                <p className="line-through text-xl mx-3">R$ 1.899,90</p>
                <p className="text-xl">Por apenas R$ 1.699,90</p> 
            </div>
            <div>
                <CheckCoursesCardSignature>Acesso ao curso de JavaScript</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de HTML</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Css</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Node</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Next</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Tailwind</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Postgresql</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Typescript</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao módulo de Linkedin</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao módulo de Soft-skills</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao módulo do Expert Em Entrevistas</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao módulo de Inglês</CheckCoursesCardSignature>
            </div>
            <button className="bg-purple text-white p-2 rounded-lg text-lg w-9/12 my-4 hover:bg-violet-650">Assinar</button>
        </div>
    );
}

export default OneYearPlain;