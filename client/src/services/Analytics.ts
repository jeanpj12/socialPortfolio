declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

export function analytics() {
    const gtagId = process.env.GTAG_ID

    if (gtagId) {
        const scriptTag = document.createElement("script")

        scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
        scriptTag.async = true;
        document.head.appendChild(scriptTag);

        scriptTag.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) { window.dataLayer.push(args); }
            gtag('js', new Date());
            gtag('config', gtagId);
        };
    }
}