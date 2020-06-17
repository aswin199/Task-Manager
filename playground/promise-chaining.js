require('../src/db/mongoose')
const user=require('../src/models/user')
// user.findByIdAndUpdate('5ed77f1b8d9c6721781bd2c4',{age:1}).then((User)=>{
// 	console.log(User)
// 	return user.countDocuments({age:1})
// }).then((result)=>
// {
// 	console.log(result)
// }).catch((e)=>{
//    console.log(e)
// })

const up=async(id,age)=>
{
	const user1 =await user.findByIdAndUpdate(id,{age})
	const count= await user.countDocuments({age})
	return count
}

up('5ed77f1b8d9c6721781bd2c4',2).then((count)=>
{
	console.log(count)
}).catch((e)=>
{
	console.log(e)
})