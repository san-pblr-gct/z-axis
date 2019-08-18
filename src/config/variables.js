const links = require('../config/links');

const shortName = 'Z Axis';
const title = 'Z Axis';
const author = 'Sreeram Padmanabhan';
const themeColor = '#000000';
const description = 'Think out of the box.';
const shortDescription = 'Web Artist';
const domain = 'https://z-axis.web.app';
const timestamp = (new Date()).getTime();

const getPaths = () => {
  let paths = [];
  links.shift();
  links.forEach(link => {
    link.links.forEach(link => {
      // eslint-disable-next-line no-magic-numbers
      paths.push(link.route);
    });
  });
  return paths;
};

const getKeywords = () => {
  let keywords = [];
  links.forEach(link => {
    keywords.push(link.title);
    link.links.forEach(link => {
      keywords.push(link.title);
    });
  });
  return keywords.join(',');
}

module.exports = {
  title,
  description,
  shortDescription,
  url: domain,
  stageUrl: 'https://z-axis-test.web.app',
  author,
  manifest: {
    seed: {
      'short_name': shortName,
      'name': title,
      'start_url': '/',
      'background_color': '#000000',
      'display': 'standalone',
      'theme_color': themeColor,
      "icons": [
        {
          "src": "/img/logo-192.png",
          "type": "image/png",
          "sizes": "192x192",
        },
        {
          "src": "/img/logo-512.png",
          "type": "image/png",
          "sizes": "512x512",
        },
      ],
    },
  },
  themeColor,
  seo: {
    keywords: getKeywords(),
  },
  og: {
    ogImage: domain + '/img/og_image.jpg',
    ogImageAlt: title,
    ogType: 'website',
    ogFbAppId: '297023651089707',
  },
  getPaths,
  paymentEnv: 'prod',
  paytm: {
    test: {
      amount: 85,
      merchantId: 'lfBFyS02396274370168',
      website: "WEBSTAGING",
      orderId: timestamp,
      customerId: `Customer-${timestamp}`,
      email: '-',
      phone: '-',
      industryTypeId: "Retail",
      channelId: "WEB",
      callbackUrl: `http://localhost:9000/paymentprocess`,
      url: `https://securegw-stage.paytm.in/theia/processTransaction?ORDER_ID=${timestamp}`,
    },
    prod: {
      amount: 9,
      merchantId: 'lzSXOq48634307639622',
      website: "DEFAULT",
      orderId: timestamp,
      customerId: `Customer-${timestamp}`,
      email: '-',
      phone: '-',
      industryTypeId: "Retail",
      channelId: "WEB",
      callbackUrl: `${domain}/paymentprocess`,
      url: `https://securegw.paytm.in/theia/processTransaction?ORDER_ID=${timestamp}`,
    },
  },
};