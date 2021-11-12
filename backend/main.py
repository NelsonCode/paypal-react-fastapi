from fastapi import FastAPI
from routes.payment import payment_routes
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
app = FastAPI()
app.include_router(payment_routes)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()