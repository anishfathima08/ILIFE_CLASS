

exports.ProductControll=async(req,res)=>{
    const {id}=req.params
    // console.log(id)
    // res.send(`hi ${id}`)
    res.json({
        message:'products',
        product:[
            {
                productName:"mobile"
            },
            {
                productName:"Laptop"
            }
        ]
    })
}