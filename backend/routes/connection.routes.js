import express from "express"
const router=express.Router()

router.get("/test",(req,res)=>{
    res.json({message:"Connection routes working"})
})

export default router
