// import { useMemo } from "react";
import { useEffect, useState } from "react";
import CarItem from "./car-item/CarItem";
import { cars as carsData } from "./cars.data";
// где cars as carsData равно непонятно чему и зачем и непонятно какие функции выполняет
import CreateCarForm from "./create-car-form/CreateCarForm";

function Home() {
  // const filteredCars = useMemo(() => cars.filter((car) => car.price > 20000), []);
  const [cars, setCars] = useState(carsData);

  return (
    <div>
      <h1>Cars catalog</h1>

      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          // где car={car} пример пропса
          <p>No cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;

// Декомпозиция
// Кеширование useMemo
