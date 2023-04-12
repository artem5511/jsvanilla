import {StudentType} from '../02/02';
import exp from 'constants';


debugger
export const sum = (a: number, b: number) => {

         return a + b;
}

const res = sum(sum(1,2), sum(1,3))

export const addSkill = (student: StudentType,skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive (s: StudentType) {
    s.isActive = true;
}
export function doesStudentLiveIn (s: StudentType, cityName: string) {
    return s.address.city.title === cityName;
}