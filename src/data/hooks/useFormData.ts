import { useContext } from 'react'
import { FormDataContext } from '../context/FormDataContext'

export const useFormData = () => useContext(FormDataContext)
