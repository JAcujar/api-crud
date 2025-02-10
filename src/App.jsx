import { useEffect, useState } from 'react'
import AddEditForm from './components/AddEditForm'
import useFetchApi from './hooks/useCrudApi'
import CarList from './components/CarList'

const baseUrl = 'https://cars-crud.academlo.tech'
function App () {
  const { data: cars, request, pending } = useFetchApi()
  const [edit, setEdit] = useState(null)

  useEffect(() => {
    // READ
    request({ url: baseUrl + '/cars/' })
  }, [])

  // CREATE
  const add = (car) => {
    request({
      url: baseUrl + '/cars/',
      method: 'POST',
      body: car
    })
  }

  // UPDATE
  const update = (id, dataEdit) => {
    console.log(dataEdit)
    request({
      url: baseUrl + `/cars/${id}`,
      method: 'PATCH',
      body: dataEdit,
    })
  }

  // DELETE
  const remove = (id) => {
    request({
      url: baseUrl + `/cars/${id}`,
      method: 'DELETE',
      id,
    })
  }

  const handleEdit = (car) => {
    setEdit(car)
  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col'>
          <AddEditForm
            add={add}
            update={update}
            setEdit={setEdit}
            edit={edit}
          />
        </div>
        <div className='col'>
          <h2>Cars</h2>
          {/* READ */}
          {pending ? <p>Loading...</p> : (
            cars && <CarList
              cars={cars}
              remove={remove}
              handleEdit={handleEdit}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App