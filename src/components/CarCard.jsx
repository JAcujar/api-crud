function CarCard ({ car, remove, handleEdit }) {
  return (
    <div className="card mb-2" key={car.id}>
      <div className="card-body">
        <h5 className="card-title">{car.brand}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{car.model}</li>
        <li className="list-group-item">{car.color}</li>
        <li className="list-group-item">{car.year}</li>
        <li className="list-group-item">${car.price}</li>
      </ul>
      <div className="card-body">
        <button
          className='btn btn-warning me-2'
          onClick={() => handleEdit(car)}
        >
          Edit
        </button>
        <button
          className='btn btn-danger'
          onClick={() => remove(car.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
export default CarCard