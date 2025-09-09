import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List


class Fruit(BaseModel):
    name: str


class Fruits(BaseModel):
    fruits: List[Fruit]


app = FastAPI(debug=True)

origins = [
    "http://localhost:5173", # http://localhost:3000
    # Add more origins here
]

app.add_middleware( # Cross-Origin Resource Sharing prohibits unauthorized websites, endpoints, or servers form accessing your API -- Basically only trusted -sources like our frontend should be able to access our backend
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {"fruits": []} # Non-persistent in-memory database which in this case is just a dictionary with a list of fruits

@app.get("/fruits", response_model=Fruits)
def get_fruits():
    return Fruits(fruits=memory_db["fruits"])


@app.post("/fruits", response_model=Fruit)
def add_fruit(fruit: Fruit):
    memory_db["fruits"].append(fruit)
    return fruit


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000) # Run the app with Uvicorn server on port 8000 -- default for FastAPI