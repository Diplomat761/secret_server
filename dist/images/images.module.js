"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesModule = void 0;
const common_1 = require("@nestjs/common");
const images_service_1 = require("./images.service");
const images_controller_1 = require("./images.controller");
const files_module_1 = require("../files/files.module");
const sequelize_1 = require("@nestjs/sequelize");
const images_model_1 = require("./images.model");
let ImagesModule = class ImagesModule {
};
ImagesModule = __decorate([
    (0, common_1.Module)({
        providers: [images_service_1.ImagesService],
        controllers: [images_controller_1.ImagesController],
        imports: [sequelize_1.SequelizeModule.forFeature([images_model_1.Image]), files_module_1.FilesModule],
    })
], ImagesModule);
exports.ImagesModule = ImagesModule;
//# sourceMappingURL=images.module.js.map