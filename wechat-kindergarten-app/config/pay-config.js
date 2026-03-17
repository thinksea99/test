// 微信支付配置（敏感信息）
module.exports = {
  APPID: 'wx1234567890abcdef', // ← 替换为您的小程序AppID
  MCH_ID: '1612345678',        // ← 替换为微信支付商户号
  KEY: 'Your_APIv2_Key_Here',  // ← 替换为APIv2密钥（32位）
  NOTIFY_URL: 'https://yourdomain.com/pay/notify'
};