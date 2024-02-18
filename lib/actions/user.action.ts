'use server'

import { revalidatePath } from "next/cache"
import { connectToDatabase } from "../Database/mongodb"
import User from "../models/user.model"

export async function createUser(user:CreateUserParams){
  try{
    await connectToDatabase()
    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  }
  catch(error){
    console.log(error)
  }
}
export async function getUserById(userId:string){
  try{
    await connectToDatabase()
    const user = await User.findOne({clerkId:userId})
    if(!user) throw new Error
    return JSON.parse(JSON.stringify(user))
  }
  catch(error){
    console.log(error)
  }
}
export async function updateUser(clerkId:string,user:UpdateUserParams){
  try{
    const updateUser = await User.findOneAndUpdate({clerkId},user,{new:true})
    if(!updateUser) throw new Error('User not found')
    return JSON.parse(JSON.stringify(updateUser))
  }
  catch(error){
    console.log(error)
  }
}
export async function deleteUser(clerkId:string){
  try{
    await connectToDatabase()
    const user = await User.findOne({clerkId})
    if(!user) throw new Error('User not found')
    const deleteUser = await User.findByIdAndDelete(user)
    revalidatePath('/')
    return JSON.parse(JSON.stringify(user))
  }
  catch(error){
    console.log(error)
  }
}