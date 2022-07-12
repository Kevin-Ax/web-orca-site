import { useContext } from 'react'
import { OrcContext } from '../context/OrcContext'

export const useOrc = () => useContext(OrcContext)
