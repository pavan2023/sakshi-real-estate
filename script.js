const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const replacements = [
    [/Ghodake Property Consultant/gi, '%VITE_BUSINESS_NAME%'],
    [/Mr\. Ghodake/g, '%VITE_BUSINESS_OWNER%'],
    [/\+91 98810 70062/g, '%VITE_BUSINESS_MOBILE%'],
    [/\+919881070062/g, '%VITE_BUSINESS_MOBILE%'],
    [/\+91 98765 43210/g, '%VITE_BUSINESS_MOBILE%'],
    [/contact@ghodakeproperty\.com/gi, 'contact@%VITE_BUSINESS_NAME%.com'],
    [/Varun A, DSK Vishwa Rd, Dhayari, Pune, Maharashtra 411041/gi, '%VITE_BUSINESS_ADDRESS%'],
    [/Suite 402, Deccan Vista Plaza,<br\/>Near Ferguson College Road,<br\/>Pune - 411004/gi, '%VITE_BUSINESS_ADDRESS%'],
    [/4\.9\/5 Star Excellence/gi, '%VITE_BUSINESS_REVIEWS%'],
    [/Buy, Sell, or Rent with Pune[\u2019']s Most Trusted Property Consultant\. We bridge the gap between architectural excellence and your dream home\./gi, '%VITE_BUSINESS_DESC%'],
    [/Buy, Sell, or Rent with Pune.s Most Trusted Property Consultant\. We bridge the gap between architectural excellence and your dream home\./gi, '%VITE_BUSINESS_DESC%'],
    [/Dhayari &amp; Sahakarnagar/gi, 'Premium Suburbs &amp; Downtown'],
    [/Dhayari and Sahakarnagar/gi, 'Premium Suburbs and Downtown'],
    [/Dhayari, Sahakarnagar, and greater Pune/gi, 'all premier neighborhoods'],
    [/Pune[\u2019']s/gi, "the region's"],
    [/Pune - 411004/g, ''],
    [/Pune/gi, 'our city'],
    [/Dhayari/gi, 'the Suburbs'],
    [/Sahakarnagar/gi, 'Downtown'],
    [/Deccan Gymkhana/gi, 'the downtown area'],
    [/Hinjewadi and Baner/gi, 'major commercial hubs'],
    [/Koregaon Park/gi, 'Premium Estates'],
    [/Magarpatta City/gi, 'Tech Park Listings'],
    [/Hinjewadi/gi, 'Commercial'],
];

for (const f of files) {
    let content = fs.readFileSync(f, 'utf-8');
    for (const [old, new_] of replacements) {
        content = content.replace(old, new_);
    }
    fs.writeFileSync(f, content, 'utf-8');
    console.log('Processed', f);
}
