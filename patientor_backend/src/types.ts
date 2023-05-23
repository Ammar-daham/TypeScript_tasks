export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export interface Diagnose {
    code: string;
    name: string;
    latin?: string;
}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}

export type NonSensitivePatientData = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

export const parseSSN = (ssn: unknown): string => {
    if (!ssn || !isString(ssn)) {
      throw new Error('Incorrect or missing comment');
    }
  
    return ssn;
};


const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };
  
export const parseBirthday = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};


export const parseName = (name: unknown): string => {
    if (!name || !isString(name) || !isString(name)) {
        throw new Error('Incorrect or missing weather: ' + name);
    }
    return name;
};

export const parseOccupation = (occupation: unknown): string => {
    if (!occupation || !isString(occupation) || !isString(occupation)) {
        throw new Error('Incorrect or missing weather: ' + occupation);
    }
    return occupation;
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
  };

export const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing weather: ' + gender);
    }
    return gender;
  };
