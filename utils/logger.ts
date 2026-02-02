export const log = {
  info: (msg: string) => console.log(`ℹ️  ${msg}`),
  success: (msg: string) => console.log(`✅ ${msg}`),
  error: (msg: string) => console.error(`❌ ${msg}`)
};

/**
 * USAGE:
 * 
 *  log.info('Opening product page');
    log.success('Add to cart successful');
 */