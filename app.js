// const express=require('express');
// const puppeteer=require('puppeteer')
// const port=2021;

// //moteurs templates
// const app=express()


///my middlewares



//routers


async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://www.ryanair.com/fr/fr');
    await page.screenshot({path :'r.webp'})
  
    await browser.close();
    console.log('data')
  };


//port listen
// app.listen(port,()=>{
//     console.log(`listenning port ${port}`)
// })