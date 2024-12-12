import styles from "../styles/EmployeeList.module.css";

export default function EmployeeList({ items }) {
  return (
    <div className={styles.list}>
      {items.map(i => (
        <div key={i.id} className={styles.item}>
          <h2>{i.name}</h2>
          <p>Email: {i.email}</p>
          <p>Address: {i.address}</p>
        </div>
      ))}
    </div>
  );
}
