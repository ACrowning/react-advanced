import styles from "../Home.module.css";

function CarItem({ car }) {
  return (
    <div key={car.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      />
      <div className={styles.info}>
        <h2>{car.name}</h2>
        {/* Внутри NumberFormat какие-то опшены, но поскольку у чела нулёвая дикция я не понял какие, но что-то с валютой связано */}
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default CarItem;
