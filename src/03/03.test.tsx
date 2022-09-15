import {StudentType} from "../02/02";
import {addSkill} from "./03";
import {makeStudentActiv} from "./03";
import {doesStudentLiveIn} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Kate",
        age: 26,
        isActive: true,
        address: {
            streetTitle: "Motory",
            city: {
                title: "Minsk",
                countryTitle: "Russia"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})
test("student lives in city", () => {

    let result1 = doesStudentLiveIn(student, "Moscow");
    let result2 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})

