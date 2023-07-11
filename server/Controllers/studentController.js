import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'


export const getStudentController = async (req, res)=>{
    let students;
    try {
        students = await userModel.find()
    } catch (e) {

    }

    if (!students) {
        res.status(400).json({
            message: "No data found"
        })
    }
    res.status(200).json(students)
}

export const postStudentController = async (req, res)=>{
    const { name, email, password, batch } = req.body
    let existingStudent;

    try {
        existingStudent = await userModel.findOne({ "email": email })
    } catch (err) {
        console.log(err)
    }

    if (existingStudent) {
        return res.status(400).json({
            error: "Email already exists!"
        })
    }

    const hashedPassword = bcrypt.hashSync(password);

    // try{
    //     const newStudent = await userModel.create({
    //         name: name,
    //         email: email,
    //         password:hashedPassword,
    //         batch:batch
    //     })

    //     res.status(200).json({
    //         newStudent
    //     })
    // } catch(err){
    //     console.log(err.message)
    //     res.json({err})
    // }
    
    

    const newStudent = new userModel({
        name:name,
        email:email,
        password:hashedPassword,
        batch:batch
    })
    res.status(200).json({
        newStudent
    })

    try{
        await newStudent.save()
    }catch(err){

    }
} 
   
export const deleteStudentController = async (req, res)=>{
    const email = req.params.email
    
    let studentID;
    try{
         studentID = await userModel.findOne({email})
    }catch(e){
     
    }

    if(!studentID){
        res.status(400).json({
            Message:"No Email found"
        })
    }

    try{
       await userModel.deleteOne({email})
    }catch(e){

    }
    res.status(200).json({
        message:`${email}'s account is deleted`
    })
}

export const updateStudentController = async (req, res)=>{
    const {name, email} = req.body
    const id = req.params.id
    
    let student;
    try{
         student = await userModel.findByIdAndUpdate(id,{
            name, email
        })
    }catch(e){
     
    }

    if(!student){
        res.status(400).json({
            Message:"No user found"
        })
    }

    res.status(200).json({student})
}





