const gtagId = process.env.GTAG_ID

if (gtagId) {
    const scriptTag = document.createElement("script")

    scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
    scriptTag.async = true;
    document.head.appendChild(scriptTag);

    scriptTag.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', gtagId);
    };
}