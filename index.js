const whois = require('whois-json');
const digCb = require('node-dig-dns');

/**
 * @param {string} domain 
 * @returns {Promise<(string | null)>}
 */
async function checkDigRegistration(domain) {
    const result = await digCb([domain, 'SOA']);
    if (!result.answer) {
        return result
    }
    return null
}

/**
 * @param {string} domain 
 * @returns {Promise<(string | null)>}
 */
async function checkDomainRegistration(domain) {
    const results = await whois(domain, { follow: 3, verbose: true })
    if (results.creationDate) {
        return null
    }

    return domain
}

const domainlist = [
    'google.com',
    'facebook.com',
    'twitter.com',
    'noasdfjsadfojsad.com'
]

async function handler(domains) {

    const firstPassDomains = [];
    for (var domain of domainlist) {
        if (await checkDigRegistration(domain)) {
            firstPassDomains.push(domain);
        }
    }

    const secondPassDomains = [];
    for (var domain of firstPassDomains) {
        const result = await checkDomainRegistration(domain)
        if (result) {
            secondPassDomains.push(domain);
        }
    }


    return secondPassDomains;
}

handler(domainlist).then(console.log).catch(console.error)
