# Nest JWT
## Create App

```sh
npm i -g @nestjs/cli
nest new .

nest g mo users
nest g co users
nest g s users
```

## swagger

```sh
pnpm i -S @nestjs/swagger swagger-ui-express
```

## path 2
### Create todo CRUD

```sh
 nest g resource todos

? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? Yes
CREATE src/todos/todos.controller.spec.ts (566 bytes)
CREATE src/todos/todos.controller.ts (894 bytes)
CREATE src/todos/todos.module.ts (247 bytes)
CREATE src/todos/todos.service.spec.ts (453 bytes)
CREATE src/todos/todos.service.ts (609 bytes)
CREATE src/todos/dto/create-todo.dto.ts (30 bytes)
CREATE src/todos/dto/update-todo.dto.ts (164 bytes)
CREATE src/todos/entities/todo.entity.ts (21 bytes)
UPDATE src/app.module.ts (388 bytes)
```
