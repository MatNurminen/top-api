"use strict";
exports.__esModule = true;
var config_service_1 = require("src/config/config.service");
var fs = require("fs");
fs.writeFileSync('ormconfig.json', JSON.stringify(config_service_1.configService.getTypeOrmConfig(), null, 2));
