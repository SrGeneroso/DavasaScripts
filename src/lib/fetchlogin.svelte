<script>
	let usr = ''
	let pss = ''
	let force = false
	let response = null
	let errorResponse = null

	async function fetchData() {
		const url = 'https://b2b-backend.davasaautomocion.com/public/api/v1/auth/login'

		const payload = {
			usr: usr,
			pss: pss,
			force: force, //it logs out current users on other devices.
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
			'user-agent': 'Mozilla/5.0 '
		}

		try {
			const res = await fetch(url, {
				method: 'POST',
				headers: headers,
				body: JSON.stringify(payload)
			})

			if (!res.ok) {
				const errorData = await res.json() // Parse error response if available
				errorResponse = {
					CODE: errorData?.error?.CODE || 'Unknown',
					DESC: errorData?.error?.DESC || 'Unknown'
				}
				throw new Error(errorData.error.DESC || 'Network response was not ok')
			}
			console.log('no errors')
			response = await res.json()
			errorResponse = null // Reset error response if successful
		} catch (error) {
			console.error('Error:', error)
			response = null // Reset response on error
			errorResponse = { error: error.message } // Set error response
		}
	}
</script>

<input bind:value={usr} placeholder="Username" />
<input type="password" bind:value={pss} placeholder="Password" />
<input type="checkbox" bind:value={force} name="Force" />
<button on:click={fetchData}>Fetch Data</button>

{#if response}
	<div>
		<h2>Response:</h2>
		<pre>{JSON.stringify(response, null, 2)}</pre>
	</div>
{/if}
{#if errorResponse}
	<div>
		<h2 style="color: red;">Error:</h2>
		<p>Description: {errorResponse.error}</p>
	</div>
{/if}

<style>
	div {
		max-width: 90vw;
	}
	pre {
		white-space: pre-wrap;
		word-wrap: break-word;
		/* Optional: Add other styling */
		padding: 10px;
		border: 1px solid #ccc;
		/* background-color: #f7f7f7; */
	}
</style>
