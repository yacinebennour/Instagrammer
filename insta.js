const puppeteer = require('puppeteer');

// YES RONALDO IS BETTER THAN MESSI!
var usersToFollow = [ "Ronaldo", "twitter", "myspace", "instagram" ];

// WRITE HERE!!!!!
var username = "username";
var password = "password";
// ********
// ********
// ********

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        devtools: true
    });

    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/', {waitUntil: 'networkidle2'});

    await page.waitFor(3000);
    await page.click("#react-root > section > main > article > div.rgFsT > div:nth-child(2) > p > a");

    await page.waitFor(1000);

//   write in user and pass
    await page.type('input[name="username"]', username, {delay : 50});
    
    await page.type('input[name="password"]', password, { delay : 50 });


// click login button
    await page.waitFor(2000);
    // await page.click("#react-root > section > main > div > article > div > div:nth-child(1) > h1");
    await page.waitFor(1000)
    // await page.click(" form > div:nth-child(5) > button");
    await page.click('button[type="submit"]');

//  wait for all clear
    await page.waitFor(2000);
    await page.click("div > button");

    await page.waitFor(2000);

    await page.waitFor('a > span[aria-label="Profile"]');
    console.log("giood");


// // go to use
    

    doStuff();


    await page.waitFor(3000);
    // await page.close();
})();

async function doStuff() {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    // maybe here change the index to make it iterate through our list aboe ;)
    page.goto('https://www.instagram.com/' + usersToFollow[0]);


    await page.waitFor(3000);
    // click users to follow
    await page.click(("section > ul > li:nth-child(2) > a"));

    await page.waitFor(3000);

    var x = 1;
    var yu;
    for ( yu = 0; yu < 100; yu++ ) {
        await page.waitFor(3000);
        await page.click("body > div > div > div > ul > div > li:nth-child("+ x +") > div > div > button");
        console.log("followed " + x);
        x++
        if (x % 10 == 0) {
            console.log("is mutiple of 10")
            await page.waitFor(10000);
        }
    }
}