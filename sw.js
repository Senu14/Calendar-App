const staticCacheName = 'site-static- v1'
const dynamicCacheName = 'site-dynamic- v2'

const assets= [
	'./',
	'./index.html',
	'./pages/fallback.html',
	'./js/App.js',
	'./js/script.js',
	'./js/firestore.config.js',
	'./css/styles.css',
	'./img.png'
]



// Install Service Worker
self.addEventListener('install', event => {
	console.log('Service Worker has been installed');

	event.waitUntil( 
		caches.open(staticCacheName)
		.then(cache =>{
			cache.addAll(assets)
		})
	)
})

// Activate Service Worker
self.addEventListener('activate', event => {
	console.log('Service Worker has been activated');

	event.waitUntil(
		caches.keys()
		.then(keys =>{
			return Promise.all(keys
				.filter(key => key !== staticCacheName)
				.map(key => cache.delete(key)))
			})
		
	)
	return;
})

// Fetch event
self.addEventListener('fetch', event => {
 if(!(event.request.url.indexOf('http') === 0))return;
    event.respondWith(
	caches.match(event.request)
	.then(cacheRes => {
		return cacheRes || fetch(event.request)

		.then(fetchRes => {
			return caches.open(dynamicCacheName)
			.then(cache => {
				cache.put(event.request.url, fetchRes.clone())

				return fetchRes
			})
		})
	}).cache(() =>{
		if(event.request.url.indexOf('.html') > -1){
			return cache.match('/pages/fallback.html')
		}
	})

 )

})