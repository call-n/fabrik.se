const shared = {
name: 'Fabrik',
website: 'https://www.fabrik.se',
title: 'Fabrik.se - Mat, dryck & kärlek',
description: 'Mat, dryck och kärlek i hjärtat av Osby.',
image: 'https://calo.dev/static/images/banner.webp',
};

const siteConfig = {
name: shared.name,
image: shared.image,
type: 'website',
title: shared.title,
titleTemplate: '%s - Fabrik i Osby',
description: shared.description,
siteUrl: shared.website,
profiles: {
    email: 'mailto:example@gmail.com',
    instagram: 'lol',
    mobile: '0709545403',
},
openGraph: {
    type: 'website',
    locale: 'sv',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
    {
        url: 'https://fabrik.se/static/images/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Fabrik.se - Mat, dryck & kärlek',
    },
    ],
},
};

export default siteConfig;
