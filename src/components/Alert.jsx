import { useEffect } from "react";


export default function Alert(props) {
    const { name = '', closeAlert = Function.prototype } = props;

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