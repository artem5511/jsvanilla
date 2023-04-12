import {StudentType} from '../02/02';
import exp from 'constants';
import {CityType, GovernmentBuildingType, HouseType} from '../02/02_02';


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

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType ) => {
    houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}
export function toHireStaff (building: GovernmentBuildingType, staffCountToFire: number) {
    building.staffCount += staffCountToFire;
}

export function createMessage (props: CityType) {
    return "Hello " + props.title + " citizens. I want you be happy. All " + props.citizensNumber + " men"
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`
}