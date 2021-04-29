export default function loadScript(url, callback) {

    if (typeof url === 'string' || Array.isArray(url)) {

        if (Array.isArray(url)) {

            url.forEach(item => {
                loadScript(item);
            });

        } else {

            if (document.querySelector('script').src != url) {
                const el = document.createElement('script');
                el.src = url;
                el.type = 'text/javascript';
                document.body.appendChild(el); 
                el.addEventListener('load', callback);

            }
        }
    } else {

        if (typeof url === 'function') {
            console.log('Callback function');
        }

    }

} 