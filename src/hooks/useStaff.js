import { useContext } from 'react'
import StaffContext from 'contexts/StaffContext'

const useStaff = () => useContext(StaffContext)

export default useStaff
