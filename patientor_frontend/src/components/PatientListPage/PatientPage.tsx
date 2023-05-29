import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import patientService from '../../services/patients'
import { Patient } from '../../types'
import MaleIcon from '@mui/icons-material/Male'
import FemaleIcon from '@mui/icons-material/Female'

const PatientPage = () => {
  const [patient, setPatient] = useState<Patient>()

  const id = useParams().id as string

  useEffect(() => {
    const fetchPatient = async () => {
      const patient = await patientService.getPatient(id)
      setPatient(patient)
    }
    fetchPatient()
  }, [id])

  return (
    <div>
      <h1>
        {patient?.name}
        {patient?.gender === 'male' && <MaleIcon />}
        {patient?.gender === 'female' && <FemaleIcon />}
      </h1>
      ssn: {patient?.ssn}
      <br />
      occupation: {patient?.occupation}
    </div>
  )
}

export default PatientPage
