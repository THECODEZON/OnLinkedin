import express from "express"
const router=express.Router()

router.get("/test",(req,res)=>{
    res.json({message:"Notification routes working"})
})

export default router
