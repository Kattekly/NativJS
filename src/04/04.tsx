const ages = [18, 20, 22, 21, 1, 100, 99, 14];

const oldAge = [100]

export type CourseType = {
    title: string
    price: number
}

const curses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]
const cheapPredicate = (course: CourseType) => {
return course.price < 160;
}
const cheapCourses = [
    {title: "CSS", price: 110},
    {title: "React", price: 150}
]