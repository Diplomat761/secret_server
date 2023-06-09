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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const groups_service_1 = require("../groups/groups.service");
const images_service_1 = require("../images/images.service");
const posts_model_1 = require("./posts.model");
let PostsService = class PostsService {
    constructor(postRepository, groupService, imageService) {
        this.postRepository = postRepository;
        this.groupService = groupService;
        this.imageService = imageService;
    }
    async create(dto) {
        const post = await this.postRepository.create(dto);
        const addImage = {
            tableName: "post",
            recordId: post.dataValues.id,
        };
        const addGroup = {
            postId: post.dataValues.id,
            groupId: dto.groupId,
        };
        await this.groupService.createPostGroup(addGroup);
        return post;
    }
    async getAllPosts() {
        const posts = await this.postRepository.findAll({ include: { all: true } });
        return posts;
    }
    async getPostById(id) {
        const post = await this.postRepository.findOne({
            where: { id },
            include: { all: true },
        });
        return post;
    }
    async updatePost(id, dto) {
        const updatedPost = await this.postRepository.update(dto, {
            returning: true,
            where: { id },
        });
        return updatedPost;
    }
    async deletePost(id) {
        const post = await this.postRepository.findOne({ where: { id } });
        await post.destroy();
        return post;
    }
    async getUnique(name) {
        const unique = await this.postRepository.findOne({
            where: { uniqueName: name },
            include: { all: true },
        });
        return unique;
    }
    async fiendByGroup(groupId) {
        return await this.groupService.getPostByGroup(groupId);
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(posts_model_1.Posts)),
    __metadata("design:paramtypes", [Object, groups_service_1.GroupsService,
        images_service_1.ImagesService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map