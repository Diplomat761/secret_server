"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const roles_auth_decorator_1 = require("../auth/utils/roles-auth.decorator");
const roles_guard_1 = require("../auth/utils/guards/roles.guard");
const create_post_dto_1 = require("./dto/create-post.dto");
const posts_model_1 = require("./posts.model");
const posts_service_1 = require("./posts.service");
let PostsController = class PostsController {
    constructor(postService) {
        this.postService = postService;
    }
    createPost(dto) {
        return this.postService.create(dto);
    }
    getAll() {
        return this.postService.getAllPosts();
    }
    getOnePost(id) {
        return this.postService.getPostById(id);
    }
    updatePost(id, dto) {
        return this.postService.updatePost(id, dto);
    }
    deletePost(id) {
        return this.postService.deletePost(id);
    }
    getUnique({ name }) {
        return this.postService.getUnique(name);
    }
    fiendByGroup({ groupId }) {
        return this.postService.fiendByGroup(groupId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Создание поста" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: posts_model_1.Posts }),
    (0, roles_auth_decorator_1.Roles)("ADMIN", "USER"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image")),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Получить все посты" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [posts_model_1.Posts] }),
    (0, roles_auth_decorator_1.Roles)("ADMIN", "USER"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Получить один пост" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: posts_model_1.Posts }),
    (0, roles_auth_decorator_1.Roles)("ADMIN", "USER"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)("/id/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getOnePost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Редактировать пост" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: posts_model_1.Posts }),
    (0, roles_auth_decorator_1.Roles)("ADMIN", "USER"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "updatePost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Удалить один пост" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: posts_model_1.Posts }),
    (0, roles_auth_decorator_1.Roles)("ADMIN", "USER"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "deletePost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Найти уникальное имя поста" }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)("ADMIN", "USER"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)("unique"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getUnique", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Найти группу поста" }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)("ADMIN", "USER"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)("groups"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "fiendByGroup", null);
PostsController = __decorate([
    (0, swagger_1.ApiTags)("Посты"),
    (0, common_1.Controller)("posts"),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map