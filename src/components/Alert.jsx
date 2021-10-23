import { useEffect, useContext } from "react";
import { ShopContext } from "../context";


export default function Alert(props) {
    const {alertName:name = '', closeAlert = Function.prototype } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        }
    },[closeAlert])

    return (
        <div id="toast-container">
            <div className="toast alert-block">{name} добавлен в корзину.</div>
        </div>
    )
}