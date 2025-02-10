import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod' // yup

const initialValues = {
  brand: '',
  model: '',
  color: '',
  year: 1900,
  price: ''
}

const schema = z.object({
  brand: z.string().nonempty(),
  model: z.string().nonempty(),
  color: z.string().nonempty(),
  year: z.number().int().min(1900).max(2025),
  price: z.string().nonempty(),
})

function AddEditForm ({ add, update, setEdit, edit }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialValues
  })

  useEffect(() => {
    if (edit) {
      reset(edit)
    }
  }, [edit])

  const handleCancel = () => {
    setEdit(null)
    reset(initialValues)
  }

  const onSubmit = (dataForm) => {
    if (edit) {
      update(edit.id, dataForm)
      setEdit(null)
    } else {
      add(dataForm)
    }
    reset(initialValues)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label className='form-label'>
          Brand
          <input className='form-control' {...register('brand')} />
        </label>
        {errors.brand && <p className='invalid-error'>{errors.brand.message}</p>}
      </div>
      <div className='mb-3'>
        <label className='form-label'>
          Model
          <input className='form-control' {...register('model')} />
        </label>
        {errors.model && <p className='invalid-error'>{errors.model.message}</p>}
      </div>
      <div className='mb-3'>
        <label className='form-label'>
          Color
          <input className='form-control' {...register('color')} />
        </label>
        {errors.color && <p className='invalid-error'>{errors.color.message}</p>}
      </div>
      <div className='mb-3'>
        <label className='form-label'>
          Year
          <input className='form-control' {...register('year', { valueAsNumber: true })} type='number' min={1900} max={2025} />
        </label>
        {errors.year && <p className='invalid-error'>{errors.year.message}</p>}
      </div>
      <div className='mb-3'>
        <label className='form-label'>
          Price
          <input className='form-control' {...register('price')} />
        </label>
        {errors.price && <p className='invalid-error'>{errors.price.message}</p>}
      </div>
      <button className={edit ? 'btn btn-warning' : 'btn btn-primary'} type='submit'>
        {edit ? 'Update Car' : 'Add New Car'}
      </button>
      {edit && (
        <button className='btn btn-light ms-2' onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  )
}
export default AddEditForm