import React from "react"
import "./Header.css"

export default ({black})=>{
    return <header className={black ? "black" : ""}>
        <div className="header--logo"> <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" alt="Netflix"></img></a>
        </div>
        <div className="header--user">
            <a href="/">
                <img src="https://occ-0-577-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVQP3mg6mW-rHZZC-vITevY2ILgks0js3MPS78GXvi7a-4WIftkXzZihbjq2NXcvmf6pejIUCsLGOnOGORhZbCjTSoiO.png?r=8d1" alt="Usuário" />
            </a>
        </div>

    </header>
}