from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import requests

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv("GOOGLE_TRANSLATE_API_KEY")

class TranslationRequest(BaseModel):
    text: str
    source: str
    target: str
    
@app.get("/")
def home():
    return {"message": "Translator API running"}

@app.post("/translate")
def translate(data: TranslationRequest):

    url = (
        "https://translation.googleapis.com/"
        "language/translate/v2"
    )

    params = {
        "key": API_KEY
    }

    payload = {
        "q": data.text,
        "source": data.source,
        "target": data.target,
        "format": "text"
    }

    response = requests.post(
        url,
        params=params,
        json=payload
    )

    result = response.json()

    print(result)

    if "error" in result:
        return {
            "error":
            result["error"]["message"]
        }

    translated = result[
        "data"
    ]["translations"][0][
        "translatedText"
    ]

    return {
        "translated_text":
        translated
    }