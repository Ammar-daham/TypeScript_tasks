import { NewPatient, parseBirthday, parseGender, parseName, parseOccupation, parseSSN, parseEntry, Entry } from './types';

const toNewPatientEntry = (object: unknown): NewPatient => {

    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
      }

    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object && 'entries' in object)  {
      
      const entries = Array.isArray(object.entries)
      ? object.entries.map((entry) => parseEntry(entry as Entry))
      : [];
      
      const newPatient: NewPatient = {
        name: parseName(object.name),
        dateOfBirth: parseBirthday(object.dateOfBirth),
        ssn: parseSSN(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation),
        entries: entries.flat()
      };
    
      return newPatient;
    }
    throw new Error('Incorrect data: some fields are missing');
};

export default toNewPatientEntry;