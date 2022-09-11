import cabecalho from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={cabecalho} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://github.com/joseafsantos">José A F Santos</a></p>
            </div>
        </header>
    )
}

export default Header
