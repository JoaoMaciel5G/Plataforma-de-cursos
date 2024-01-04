import CheckCoursesCardSignature from "./CheckCoursesCardSignature";
import XCoursesCardSignature from "./XCoursesCardSignature";

function OneMonthPlain() {
    return (
            <>
                <CheckCoursesCardSignature>Acesso ao curso de JavaScript</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de HTML</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Css</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Node</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Next</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Tailwind</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Postgresql</CheckCoursesCardSignature>
                <CheckCoursesCardSignature>Acesso ao curso de Typescript</CheckCoursesCardSignature>
                <XCoursesCardSignature>Acesso ao módulo de Linkedin</XCoursesCardSignature>
                <XCoursesCardSignature>Acesso ao módulo de Soft-skills</XCoursesCardSignature>
                <XCoursesCardSignature>Acesso ao módulo do Expert Em Entrevistas</XCoursesCardSignature>
                <XCoursesCardSignature>Acesso ao módulo de Inglês</XCoursesCardSignature>
            </>
    );
}

export default OneMonthPlain;