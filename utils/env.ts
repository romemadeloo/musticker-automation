// utils/env.ts
export const ENV = {
  baseURL: process.env.BASE_URL || 'https://www.ozstickerprinting.com'
};


/**
 * USAGE:
 * await page.goto(ENV.baseURL);
 */