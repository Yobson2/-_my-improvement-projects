const puppeteer=require('puppeteer')
const url='https://www.cdiscount.com/';

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
  
    await page.goto(url,{waitUntil:"networkidle2"});

    // body 
       //redimensionner sa page
    // await page.setViewport({
    //     width:'1200',
    //     height:'1000',
    //     deviceScaleFactor:1,
    // })

        //creer un pdf du site 
    // // await page.pdf({
    // //     path:"lucas.pdf",
    // //     format:"A4",
    // // })

     //create a picture
    // await page.screenshot({
    //     path:"image.png"
    // })
    await browser.close()
  })();
