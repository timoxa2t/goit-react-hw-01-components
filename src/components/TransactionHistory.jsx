import styles from "../css/TransactionHistory.module.css"

export default function TransactionHistory({items}){

    return (
        <table className={styles.transaction_history}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
            {items.map(({id, type, amount, currency}) => 
                 <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                 </tr>
            )}
            </tbody>
        </table>
    )
}