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
