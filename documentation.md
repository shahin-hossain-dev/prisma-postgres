\***\*\*\*\*\*** Postgres + Prisma Project \***\*\*\*\*\*\***

---

Setup Environment

---

1. Create project setup

```
mkdir hello-prisma
cd hello-prisma
```

```
npm init -y
npm install prisma typescript tsx @types/node --save-dev

```

```
npx tsc --init
```

```
npx prisma
```

```
npx prisma init --db --output ../generated/prisma
```

### Connect database

```
.env

DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=ey..."
```

```
prisma/schema.prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### Creating the database schema model

- Migrate prisma Schema
- Install prisma client
- prisma query
