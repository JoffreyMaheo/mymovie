
export const Api = {
	rootUrl: 'https://api.themoviedb.org/3',
	key: '92b418e837b833be308bbfb1fb2aca1e'
}

var cacheRequest = {};

export const FecthUrl = (url, callback, forceReload  = false) => {

	//check if request already launch
	if(!!cacheRequest[url] && !forceReload) {
		callback(cacheRequest[url]);

	}else{

		fetch(url)
		.then(response => {
			if (!response.ok) {
			  throw Error("Network request failed")
			}

			return response
		})
		.then(data => data.json())
		.then(data => {

			cacheRequest[url] = data;
			callback(data);
			
		});
	}
 

}


