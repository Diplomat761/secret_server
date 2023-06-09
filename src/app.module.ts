import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from "./auth/auth.module";
import { PostsModule } from "./posts/posts.module";
import { Posts } from "./posts/posts.model";
import { FilesModule } from "./files/files.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ProfilesModule } from "./profiles/profiles.module";
import * as path from "path";
import { Profile } from "./profiles/profiles.model";
import { GroupsModule } from "./groups/groups.module";
import { Group } from "./groups/groups.model";
import { PostGroups } from "./groups/post-groups.model";
import { ImagesModule } from "./images/images.module";
import { Image } from "./images/images.model";
import { Movie } from "./movies/movies.model";
import { MoviesModule } from "./movies/movies.module";
import { PersonModule } from "./person/person.module";
import { Person } from "./person/person.model";
import { MoviePerson } from "./person/movie-person.model";
import { GenreModule } from "./genre/genre.module";
import { CountryModule } from "./country/country.module";
import { Country } from "./country/country.model";
import { Genre } from "./genre/genre.model";
import { CommentModule } from "./comment/comment.module";
import { Comment } from "./comment/comment.model";
import { PassportModule } from "@nestjs/passport";

@Module({
  controllers: [],
  providers: [],
  imports: [
    PassportModule.register({ session: true }),
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Posts,
        Profile,
        Group,
        PostGroups,
        Image,
        Movie,
        Person,
        MoviePerson,
        Country,
        Genre,
        Comment,
      ],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
    ProfilesModule,
    GroupsModule,
    ImagesModule,
    MoviesModule,
    PersonModule,
    GenreModule,
    CountryModule,
    CommentModule,
  ],
})
export class AppModule {}
