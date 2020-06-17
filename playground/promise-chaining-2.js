require('../src/db/mongoose')
const task=require('../src/models/task')
// task.findByIdAndDelete('5eda368733df5e29008afcaa',{completed:false}).then((Task)=>{
// 	console.log(Task)
// 	return task.countDocuments({completed:false})
// }).then((result)=>
// {
// 	console.log(result)
// }).catch((e)=>{
//    console.log(e)
// })

const up=async(id)=>
{
	const user1 =await task.findByIdAndDelete(id)
	const count= await task.countDocuments({completed:false})
	return count
}

up('5eda368733df5e29008afcaa').then((count)=>
{
	console.log(count)
}).catch((e)=>
{
	console.log(e)
})