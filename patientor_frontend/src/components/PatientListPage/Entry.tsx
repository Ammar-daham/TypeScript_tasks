import { Card, CardContent } from '@mui/material'
import { Entry, Diagnose } from '../../types'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WorkIcon from '@mui/icons-material/Work';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';





interface Props {
  entry: Entry,
  diagnoses: Diagnose[]
}

const EntryDetails = ({ entry, diagnoses }: Props) => {
 

  const type = () => {
    switch(entry.type) {
        case "Hospital":
            return <LocalHospitalIcon />;
        case "OccupationalHealthcare":
            return <WorkIcon />;
        case "HealthCheck":
            return <MedicalInformationIcon />
    }
  }
  console.log(entry)

  return (
    <Card variant="outlined">
        <CardContent>{entry.date}{type()}<br/><i>{entry.description}</i><br/>
        <ul>
            {entry.diagnosisCodes?.map((code, index) => {
              const diagnose = diagnoses.find((c) => c.code === code)
              return (
                <li key={index}>
                  {code}
                  {' ' + diagnose?.name}
                </li>
              )
            })}
          </ul>
          Diagnose by {entry.specialist}
          </CardContent>
    </Card>
  )
}

export default EntryDetails
