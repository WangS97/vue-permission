module.exports=[
    {
        id:2,
        pid:0,
        path:'/course',
        name:'Course',
        title:'课程管理'
    },
    {
        id:3,
        pid:2,
        path: 'courseInfo',
        name:'CourseInfo',
        link:'/course/courseInfo',
        title: '课程信息'
    },
    {
        id:4,
        pid:2,
        path:'courseOperate',
        name:'CourseOperate',
        link: '/course/courseOperate',
        title: '课程操作'
    },
    {
        id:5,
        pid:0,
        path:'/student',
        name:'Student',
        title:'学生管理'
    },
    {
        id:6,
        pid:5,
        path: 'studentInfo',
        name:'StudentInfo',
        link:'/student/studentInfo',
        title: '学生信息'
    },
    {
        id:7,
        pid:0,
        path:'/teacher',
        name:'Teacher',
        title:'教师信息'
    },
]
