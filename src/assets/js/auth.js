//专门用这个文件保存一些方法,所有的Tokrn操作都在这里
//授权相模块


//auth.getToken()
//auth.isLogin()
//auth.saveToken()

const tokenName="bxg-token"

export function getToken(){
	const parsedObj=JSON.parse(window.localStorage.getItem(tokenName))
	//如果没有直接返回空字符串
	if(!parsedObj){
		return ""
	}else{
		//有就直接返回对象中的token
		return parsedObj.token
	}
}
