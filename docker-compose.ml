version: '3.7'

services:
  db:
    image: postgres:13-alpine
    container_name: simulacro
    restart: always
    environment:
      POSTGRES_DB: b9b7ia7hcr9fx33r1eqq
      POSTGRES_USER: uvmbe6coewetz58lyrhf
      POSTGRES_PASSWORD: La7PV7HnVR4YvP0o1A6Pa0IfT2G32F
    volumes:
      - /var/lib/postgresql/data
    ports:
      - 50013:5432
  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@nestjs.com
      PGADMIN_DEFAULT_PASSWORD: admin123
      PGADMIN_LISTEN_PORT: 80
    ports:
      - 8080:80
    volumes:
      - /var/lib/pgadmin
    depends_on:
      - db
