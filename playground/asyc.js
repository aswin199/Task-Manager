const add=(a,b)=>
{
	return new Promise((resolve,reject)=>
	{
		setTimeout(()=>{
			resolve(a+b)
		},2000)
	})

}

const work=async()=>
{
	const  sum= await add(1,5)
	const sum2=await add(sum,8)
	const sum3=await add(sum2,4)
	return sum3
}

work().then((result)=>
{
	console.log('result',result)}).catch((e)=>
	{
		console.log('e',e)
	})
