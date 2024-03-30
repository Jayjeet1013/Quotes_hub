const url = 'https://quotes15.p.rapidapi.com/quotes/random/';

const contents = document.querySelector('#contents');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8e0578dd7dmshbea31f28db38379p135bd4jsn9d3dfa3265f7',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

const showdata= async () =>{
        try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
        contents.innerHTML=result.content;
} catch (error) {
	console.error(error);
}
}

showdata();
