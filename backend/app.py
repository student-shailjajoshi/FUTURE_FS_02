from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import engine, Base
from routes import auth, leads, customers

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router,      prefix="/auth",      tags=["Auth"])
app.include_router(customers.router, prefix="/customers", tags=["Customers"])
app.include_router(leads.router,     prefix="/leads",     tags=["Leads"])