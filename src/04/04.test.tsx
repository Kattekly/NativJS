import {CourseType} from "./04";

test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 21, 1, 100, 90, 14];


    const oldAge = ages.filter(age => age > 90)
    expect(oldAge.length).toBe(1)
    expect(oldAge[0]).toBe(100)
} )

test("should take chipper 160", () => {
    const curses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}]


    const cheapCourses = curses.filter(course => course.price < 160)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe("CSS");
    expect(cheapCourses[1].title).toBe("React");
})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Sold", isDone: false},
        {id: 4, title: "Sugar", isDone: true}
    ]
    const uncompletedTasks = tasks.filter(task => !task.isDone)
    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
})