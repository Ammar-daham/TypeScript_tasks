import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import patientService from '../../services/patients'
import { Patient, Entry } from '../../types'
import MaleIcon from '@mui/icons-material/Male'
import FemaleIcon from '@mui/icons-material/Female'
import { Diagnose } from '../../types'
import EntryDetails from './Entry'

interface Props {
  diagnoses: Diagnose[]
}

const PatientPage = ({ diagnoses }: Props) => {
  const [patient, setPatient] = useState<Patient>()

  console.log('di: ', diagnoses)
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
      <br />
      <h3>entries</h3>
      {patient?.entries.map((entry: Entry) => (
        <div key={entry.id}>
          <EntryDetails entry={entry} diagnoses={diagnoses}/>
        </div>
      ))}
    </div>
  )
}

export default PatientPage
