import NotificationButton from '../NotificationButton'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './style.css'


function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2>Vendas</h2>
            <div>
                <div className="dsmeta-form-control-conteiner">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => {}}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy" />
                </div>
                <div className="dsmeta-form-control-conteiner">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => {}}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy" />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="response-992">ID</th>
                            <th className="response-576">Data</th>
                            <th>Vendedor</th>
                            <th className="response-992">Visitas</th>
                            <th className="response-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="response-992">#341</td>
                            <td className="response-576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="response-992">15</td>
                            <td className="response-992">11</td>
                            <td>R$ 55300.00
                            </td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr><td className="response-992">#341</td>
                            <td className="response-576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="response-992">15</td>
                            <td className="response-992">11</td>
                            <td>R$ 55300.00
                            </td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="response-992">#341</td>
                            <td className="response-576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="response-992">15</td>
                            <td className="response-992">11</td>
                            <td>R$ 55300.00
                            </td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default SalesCard