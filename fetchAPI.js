export async function getTime(city){
    const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00ba803fcamsh5399c242ae2756ap109ea9jsncd1f07edcde4',
		'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    return result;
} catch (error) {
	console.error(error);
}
}




export async function getUser(){
    const url = "https://randomuser.me/api/";
const options = {
	method: 'GET'
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
} catch (error) {
	console.error(error);
}
}