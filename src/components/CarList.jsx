import CarCard from './CarCard'

function CarList ({ cars, remove, handleEdit }) {
  return (
    <div>
      {cars.map(car => (
        <CarCard
          key={car.id}
          car={car}
          remove={remove}
          handleEdit={handleEdit}
        />
      ))}
      {cars.length === 0 && <p>Empty</p>}
    </div>
  )
}
export default CarList