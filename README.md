# 🖥️ Website Simulation React App

## 🎯 Objective
This project is a **React-based website simulation** that dynamically loads widgets from a **Flask API** and supports **A/B testing** to display different widgets based on predefined probabilities.

---

## 📌 Features
### 🔹 **Dynamic Widget Loading**
- Fetches **widgets from a Flask API** based on the current page.
- Supports multiple pages: **Homepage, Cards, and Wedding**.

### 🔹 **A/B Testing Logic**
- Each widget has a `showToPercentage` value.
- A **random number (0-100)** determines which widget is displayed.
- Example logic:
  - Widget A (70%) → Shows if the number is **30-100**.
  - Widget B (30%) → Shows if the number is **0-29**.

### 🔹 **Forced Experience (URL Parameter)**
- Supports **overriding A/B logic** using a URL parameter.
- Example: https://example.com/homepage?experience=widget2

### 🔹 **Navigation**
- Smooth transitions between pages.
- Loads the correct widgets dynamically.

### 🔹 **Mobile-Friendly Design**
- Works on **mobile, tablet, and desktop**.
- Uses **responsive CSS** for adaptive layouts.

