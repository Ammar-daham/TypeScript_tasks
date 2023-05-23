import { NewPatient, parseBirthday, parseGender, parseName, parseOccupation, parseSSN } from './types';

const toNewPatientEntry = (object: unknown): NewPatient => {

    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
      }

    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object)  {
    const newPatient: NewPatient = {
        name: parseName(object.name),
        dateOfBirth: parseBirthday(object.dateOfBirth),
        ssn: parseSSN(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation)
      };
    
      return newPatient;
    }
    throw new Error('Incorrect data: some fields are missing');
};

export default toNewPatientEntry;