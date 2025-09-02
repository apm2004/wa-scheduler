import puppeteer from "puppeteer";

async function main() {
  // Launch browser
  const browser = await puppeteer.launch({
    headless: false, // visible browser for now
    userDataDir: "./user_data", // saves session so you don’t scan QR every time
  });

  // Open new tab
  const page = await browser.newPage();

  // Go to WhatsApp Web
  await page.goto("https://web.whatsapp.com");

  console.log("✅ WhatsApp Web opened. Scan QR if first time.");
}

main();
