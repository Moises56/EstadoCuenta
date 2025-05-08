-- Crear tablas para autenticación y logs
-- Ejecutar este script manualmente en la base de datos

-- Tabla de usuarios
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'USERS')
BEGIN
    CREATE TABLE USERS (
        UserId NVARCHAR(36) PRIMARY KEY,
        USERNAME VARCHAR(50) UNIQUE NOT NULL,
        PASSWORD VARCHAR(100) NOT NULL,
        EMAIL VARCHAR(100) UNIQUE NOT NULL,
        FULL_NAME VARCHAR(150) NOT NULL,
        ROLE VARCHAR(20) NOT NULL,
        IS_ACTIVE BIT DEFAULT 1 NOT NULL,
        CREATED_AT DATETIME2 DEFAULT GETDATE() NOT NULL,
        UPDATED_AT DATETIME2 DEFAULT GETDATE() NOT NULL
    );
END

-- Tabla de logs
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'LOGS')
BEGIN
    CREATE TABLE LOGS (
        LogId NVARCHAR(36) PRIMARY KEY,
        ACTION VARCHAR(200) NOT NULL,
        DETAIL NVARCHAR(1000) NULL,
        IP_ADDRESS VARCHAR(50) NULL,
        TIMESTAMP DATETIME2 DEFAULT GETDATE() NOT NULL,
        USER_ID NVARCHAR(36) NOT NULL,
        FOREIGN KEY (USER_ID) REFERENCES USERS(UserId)
    );
END

-- Crear usuario administrador por defecto
-- Username: admin, Password: Admin123 (hasheado)
IF NOT EXISTS (SELECT * FROM USERS WHERE USERNAME = 'admin')
BEGIN
    INSERT INTO USERS (UserId, USERNAME, PASSWORD, EMAIL, FULL_NAME, ROLE, IS_ACTIVE, CREATED_AT, UPDATED_AT)
    VALUES (
        NEWID(),
        'admin',
        '$2b$10$EYvRvZR8gJlbH96LmW4YjOtb3UnQoOK9KCOhGa/L1Z66.GfTOxNH6', -- Admin123
        'admin@municipalidad.hn',
        'Administrador del Sistema',
        'ADMIN',
        1,
        GETDATE(),
        GETDATE()
    );
END