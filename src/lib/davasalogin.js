const url = 'https://b2b-backend.davasaautomocion.com/public/api/v1/auth/login'

const payload = {
	usr: 'DIMARAUTO',
	pss: 'DIMARAUTO',
	force: true, //it logs out current users on other devices.
	ck: '1',
	userType: 'standard',
	language: 'en'
}

const headers = {
	authority: 'b2b-backend.davasaautomocion.com',
	accept: 'application/json, text/plain, */*',
	'accept-language': 'en-US,en;q=0.6',
	'app-token': '',
	'content-type': 'application/json',
	dnt: '1',
	origin: 'https://b2b.davasaautomocion.com',
	referer: 'https://b2b.davasaautomocion.com/',
	'sec-ch-ua': '"Brave";v="119","Chromium";v="119","Not?A_Brand";v="24"',
	'sec-ch-ua-mobile': '0',
	'sec-ch-ua-platform': '"Windows"',
	'sec-fetch-dest': 'empty',
	'sec-fetch-mode': 'cors',
	'sec-fetch-site': 'same-site',
	'sec-gpc': '1',
	'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
	'version-fe': '9.18.3'
}

fetch(url, {
	method: 'POST',
	headers: headers,
	body: JSON.stringify(payload)
})
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		return response.json()
	})
	.then(data => {
		// Handle the response data here
		console.log('Response:', data)
	})
	.catch(error => {
		// Handle errors here
		console.error('Error:', error)
	})
