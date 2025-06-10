<h1 align="center">
  🧠 Gemini Chat — Интерактивный чат с ИИ
</h1>

<p align="center">
  Интерактивное веб-приложение с Google Gemini API для получения стриминговых ответов ИИ.
</p>


---

## 🚀 Описание

**Gemini Chat** — это минималистичное веб-приложение на React, позволяющее пользователям задавать вопросы модели Google Gemini и получать **ответы в реальном времени**.

🔹 Поддерживает историю запросов (сохраняется в `localStorage`)  
🔹 Интуитивно понятный интерфейс для всех устройств  
🔹 Использует стриминговую генерацию текста (ввод текста по частям)

---

## 🔧 Технологии

- ⚛️ **React**
- 🔌 **@google/genai** (Google Generative AI SDK)
- 💾 **localStorage** — хранение истории локально
- 📱 **Mobile-first** адаптивная вёрстка
- 🔁 **Streaming API** — потоковая генерация текста

---

## 📷 Скриншоты

<details>
  <summary>Нажмите, чтобы развернуть</summary>

  ![image](https://github.com/user-attachments/assets/7fb041ee-9ff9-452d-9155-7c91221a98a6)


</details>

---

## 📦 Установка

```bash
git clone https://github.com/your-username/gemini-chat.git
cd gemini-chat
npm install
npm run dev

---

## 🔑 Настройка `.env`

Создайте файл `.env` в корне проекта и добавьте в него ваш API-ключ:

```ini
VITE_GEMINI_API_KEY=your_api_key_here
```
## 📱 Адаптивный дизайн

Интерфейс корректно отображается на:


- ✅ **Смартфонах (iPhone / Android)**
- ✅ **Планшетах**
- ✅ **Десктопах**

## 💬 Обратная связь

Если у тебя есть идеи, предложения или ты нашёл баг —
открой issue или напиши в Discussions.
