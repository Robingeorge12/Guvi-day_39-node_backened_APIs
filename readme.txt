
...........................STUDENT ROUTE ..............................

studentRouter.get("/", getStudent_list);
"/" ===> "/student" <====>   get ||   gives all list of students with their details only


studentRouter.get("/student/:id", getStudents_of_Particular_Mentor);
 "/student/student/:id" ===>  get ||   if we pass "mentor_id" we will get that particular mentor's all students


studentRouter.get("/unassigned", getStudents_unAssigned);
 "/student/unassigned" ===>  get ||   if we use this route, we will get all students who hasn't any mentor


studentRouter.get("/former/:id", getFormer_Mentor);
 "/student/former/:id" ===>  get ||   if we pass any student's "_id"(mongoDB _id), we will get that student's former mentor


studentRouter.post("/add_students", postStudent_data);
"/student/add_students" ===>  post ||   if we want to add new student's details we can use route



studentRouter.patch("/:edit_id", patchtStudent_data);
"/student/:edit_id" ===>  patch ||   if we want to assign a new mentor for this student or change the mentor, we have to pass student's "_id"(mongoDB _id),
                                     it will set new mentor for that  student and if we change the existing mentor , it will add former mentor for that student also.


studentRouter.delete("/:id", deleteStudent_data)
"/student/:id" ===>  delete ||   if we want delete any student's details we can use route, pass "_id" (mongoDB _id) 


studentRouter.patch("/multiple_students", add__multipleStudent_One_Mentor);
"/student/multiple_students" ===>  patch ||   if we want to add new mentor for students whose current_mentor is empty  ,we have to pass only the mentor's "mentor_id" ,
                                             so that all the mentor unassigned students will have that particular mentor


..................................MENTOR ROUTE...................................

mentorRouter.get("/",getMentor_list)
"/" ===> "/mentor" <====>   get ||   gives all list of mentors with their details only





mentorRouter.post("/add_mentor",postMentor_data)
"/student/add_students" ===>  post ||   if we want add new any mentor, we can use route.



mentorRouter.delete("/:id",deleteMentor_data)
"/mentor/:id" ===>  delete ||   if we want delete any mentor's details we can use route, pass "_id" (mongoDB _id) 
