const puppeteer = require('puppeteer');
const path = require('path')

async function takeScreenshot() {
  // 填入你的chrome程序访问位置
  const browserPath = 'C:\\Users\\Saitama\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'
  const browser = await puppeteer.launch({
    executablePath: browserPath
  });
  const page = await browser.newPage();
  
  // 设置页面视口大小
  await page.setViewport({ width: 1280, height: 800 });
  
  // 导航到要截图的网页
  await page.goto('https://www.baidu.com');
  
  // 截图并保存
  await page.screenshot({ path:  `screenshots/screenshot-${Date.now()}.png` });
  
  // 关闭浏览器
  await browser.close();
}

// 调用takeScreenshot函数
takeScreenshot();

