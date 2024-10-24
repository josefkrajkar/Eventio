import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Components
import Button from '../../../components/common/Button'
import FormInput from '../../../components/common/Input'

// Styles
import '../../../styles/pages/NewEvent/NewEventFrom.css'

// Validation schemas
import { eventValidationSchema } from '../../../utils/validationSchemas'

// Hooks
import { useEvents } from '../../../hooks/useEvents'
import { useErrorMsg } from '../../../hooks/useErrorMsg'

// Utils
import { combineDateAndTime } from '../../../utils/combineDateAndTime'

type FormInputs = {
  title: string
  description: string
  date: string
  time: string
  capacity: number
}

function NewEventForm () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(eventValidationSchema),
  })
  const { addEvent } = useEvents()
  const {newEventError, setNewEventError} = useErrorMsg()
 
  const clearGeneralErrors = useCallback(() => {
    if (newEventError) {
      setNewEventError('')
    }
  }, [newEventError, setNewEventError])

  const onSubmit = useCallback((formData: FormInputs) => {
    addEvent({
      title: formData.title,
      description: formData.description,
      startsAt: combineDateAndTime(formData.date, formData.time),
      capacity: formData.capacity,
    })
  }, [addEvent])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='new-event-form'>
      {/* Title Field */}
      <FormInput
        placeholder='Title'
        className='new-event-form-field'
        error={Boolean(errors.title)}
        errorMsg={errors.title?.message}
        {...register('title', {
          onChange: clearGeneralErrors
        })}
      />

      {/* Description Field */}
      <FormInput
        placeholder='Description'
        className='new-event-form-field'
        error={Boolean(errors.description)}
        errorMsg={errors.description?.message}
        {...register('description', {
          onChange: clearGeneralErrors
        })}
      />

      {/* Date Field */}
      <FormInput
        placeholder='Date'
        className='new-event-form-field'
        error={Boolean(errors.date)}
        errorMsg={errors.date?.message}
        {...register('date', {
          onChange: clearGeneralErrors
        })}
      />

      {/* Time Field */}
      <FormInput
        placeholder='Time'
        className='new-event-form-field'
        error={Boolean(errors.time)}
        errorMsg={errors.time?.message}
        {...register('time', {
          onChange: clearGeneralErrors
        })}
      />

      {/* Capacity Field */}
      <FormInput
        placeholder='Capacity'
        type='number'
        className='new-event-form-field'
        error={Boolean(errors.capacity)}
        errorMsg={errors.capacity?.message}
        {...register('capacity', {
          onChange: clearGeneralErrors
        })}
      />

      {/* Submit Button */}
      <Button
        className='button new-event-btn'
        value='Create new event'
        type='submit'
      />
    </form>
  )
}

export default NewEventForm
