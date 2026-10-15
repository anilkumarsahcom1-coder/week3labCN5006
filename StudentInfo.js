//Arrrow function with no name, this function does not take any argument vrbname = () => {}
// Code starts from here:

const dateofBirth= "12/12/1980"
const getStudentName = () =>
{
    return "write your name here"
}
const getCampousName = () =>
{return (" UEL Campus ")
}
//exporting functions & variable outside the modulw
exports.getName=getStudentName
exports.Location=getCampousName
exports.dob=dateofBirth
//How to export function with parameters
exports.Studentgrade=(marks) =>
{
    if (marks>50 && marks <70) return ("B grade")
        else
    return("A grade)")
}