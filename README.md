# 🌍 Language Translator

A full-stack language translation web application built with **FastAPI** and **React + Vite**, powered by the **Google Cloud Translation API**.

Users can enter text, choose source and target languages, and instantly receive translations through a clean and responsive interface.

---

## 📌 Project Overview

Language barriers are common when communicating with people across regions. This project solves that by providing a simple web-based translation tool where users can quickly translate text between supported languages.

The frontend is built with **React** for a smooth user experience, while **FastAPI** handles backend requests and communicates with Google Cloud Translation.

This project demonstrates:

- REST API development with FastAPI
- React state management
- frontend ↔ backend integration
- external API integration
- responsive UI design
- handling API keys securely with `.env`

---

## 🚀 How to Use

1. Enter the text you want to translate.
2. Select the **source language**.
3. Select the **target language**.
4. Click **Translate**.
5. View the translated result instantly.
6. Use **Swap Languages** to switch source and target.
7. Use **Copy** to copy translated text.

Example:

```text
Input: Hello
Source: English
Target: Hindi

Output: नमस्ते
```

---

## ✨ Features

- 🌐 Translate text between multiple languages
- 🔄 Swap source and target languages
- 📋 Copy translated text
- ⚡ Fast translation response
- 🎨 Clean responsive UI
- 🔐 Secure API key handling using environment variables

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- FastAPI
- Uvicorn
- Requests
- Python Dotenv

### API

- Google Cloud Translation API

---

## ⚙️ Installation & Setup

### 1. Clone repository

```bash
git clone https://github.com/your-username/language-translator-fastapi-react.git
```

Move into project:

```bash
cd language-translator-fastapi-react
```

---

### 2. Backend setup

Move into backend:

```bash
cd backend
```

Create virtual environment

### Windows

```bash
python -m venv myenv
myenv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create `.env`

```env
GOOGLE_TRANSLATE_API_KEY=your_google_cloud_api_key
```

Run backend

```bash
uvicorn main:app --reload
```

Backend runs at:

```bash
http://127.0.0.1:8000
```

---

### 3. Frontend setup

Open a new terminal

Move into frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run React

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

## 🔑 Google Cloud Translation API Setup

### Create Google Cloud project

Open:

https://console.cloud.google.com/

Create a new project.

---

### Enable Cloud Translation API

Go to:

**APIs & Services → Library**

Search:

```bash
Cloud Translation API
```

Enable it.

---

### Create API key

Go to:

**APIs & Services → Credentials**

Create:

```bash
API Key
```

Copy the generated key.

---

### API restrictions

Under your API key:

Enable:

```bash
Cloud Translation API
```

Save.

Then place the key inside:

```bash
backend/.env
```

---

## 🌍 Supported Languages

Examples:

- English
- Hindi
- Malayalam
- French
- German

More languages can be added easily by updating dropdown options.

---

## 🎯 Future Improvements

Possible enhancements:

- text-to-speech
- language auto-detection
- translation history
- dark mode
- favorite translations
- deployment with Vercel + Render

---
