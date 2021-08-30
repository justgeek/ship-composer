# Ship Composer API

The project assumes by default you have [nodejs](https://nodejs.org/en/) & [npm](https://www.npmjs.com/) installed

### Setup

```bash
npm install
```

### Development with nodemon and tsc --watch

```bash
npm start
```


### Run without nodemon and tsc --watch

```bash
npm run serve
```

## Swagger

Visit `http://localhost:3000/swagger` to view the OPENAPI document in Swagger-UI

Due to limited time a lot of things could be added/imporved:
- Server app could be dockerized
- Unit tests for backend
- Using real DB and adding integration tests
- Showing some infrastructure skills using pulumi, or terrraform .. etc
- Better abstracted error/request/response handling
- Generate swagger docs dynamically
- Add lint/formatting rules to codebase