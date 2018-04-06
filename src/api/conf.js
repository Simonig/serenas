const settings = {
  local: {
    port: 10010,
    host: 'localhost',
    auxmoneyUrl: 'https://acc.auxmoney.com:5555/distributionline/api/rest/partnerendpoints',
    auxmoneyKey: '827d64ddf9d5463b395fb258f5141b99a4ba76b5',
    dbUrl: 'mongodb://127.0.0.1:27017',
    versaApiKey: '71c0867439e47033a52982f6c22385f960229c05',
    versaUrl: 'http://empty-wildflower-56.versacommerce.de/api/',

  },

  production: {
    versaApiKey: '71c0867439e47033a52982f6c22385f960229c05',
  },
};

export default settings;
