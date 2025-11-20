# Tech FX CRM Backend Server

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the `server` directory based on `.env.example`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tech_fx_crm
DB_USER=postgres
DB_PASSWORD=your_password_here

JWT_SECRET=your_jwt_secret_key_here_change_in_production

PORT=5000
NODE_ENV=development
```

### 3. Set Up PostgreSQL Database
1. Make sure PostgreSQL is installed and running
2. Create a database:
```sql
CREATE DATABASE tech_fx_crm;
```
3. The users table will be created automatically when you start the server

### 4. Start the Server
```bash
npm start
# or for development with auto-reload
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Health Check
- `GET /api/health` - Check server status

## Request/Response Examples

### Register
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890"
}

Response:
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "john@example.com",
    "name": "John Doe",
    "phone": "+1234567890"
  },
  "token": "jwt_token_here"
}
```

### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "email": "john@example.com",
    "name": "John Doe",
    "phone": "+1234567890"
  },
  "token": "jwt_token_here"
}
```


