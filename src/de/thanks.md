---
title: Vielen Dank
layout: page
sidebar: false
---

<script setup>
import { onMounted } from 'vue'

// Auto-scroll to top on page load
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<div class="thank-you-container">

# ✅ Ihre Anfrage wurde erfolgreich empfangen!

<div class="success-icon">🎉</div>

## Vielen Dank, dass Sie sich für **MSID Online** entschieden haben!

Ihre Anmeldeanfrage wurde erfolgreich empfangen. Unser Team wird sich innerhalb von **24 Stunden** bei Ihnen melden, um Ihre kostenlose Probestunde zu vereinbaren.

---

## 📧 Was passiert als Nächstes?

<div class="steps-container">

### 1️⃣ Bewerbungsüberprüfung
Unser Team prüft derzeit Ihre Anfrage und vermittelt Ihnen den besten Lehrer für Ihre Bedürfnisse.

### 2️⃣ Wir kontaktieren Sie
Wir melden uns innerhalb von 24 Stunden per E-Mail oder Telefon bei Ihnen.

### 3️⃣ Probestunde vereinbaren
Wir vereinbaren einen passenden Termin für Ihre kostenlose 30-minütige Probestunde.

### 4️⃣ Mit dem Lernen beginnen
Beginnen Sie Ihre Bildungsreise mit unseren erfahrenen Lehrern!

</div>

---

## 📞 Haben Sie eine dringende Frage?

Wenn Sie uns sofort erreichen müssen, können Sie nutzen:

<div class="contact-options">

- 📧 **E-Mail**: [onlinemsid@gmail.com](mailto:onlinemsid@gmail.com)
- 📱 **WhatsApp**: [+212 779-164257](https://wa.me/212779164257)
- 📖 **FAQ**: [Klicken Sie hier](/de/about/faq)

</div>

---

## 🎯 Vorbereitung auf Ihre Probestunde

Um das Beste aus Ihrer Probestunde herauszuholen, empfehlen wir:

- ✅ Computer oder Tablet vorbereiten
- ✅ Stabile Internetverbindung sicherstellen
- ✅ Ruhige Lernumgebung einrichten
- ✅ Fragen vorbereiten, die Sie dem Lehrer stellen möchten

---

<div class="cta-section">

## 📚 Entdecken Sie unsere Programme

Während Sie warten, erfahren Sie mehr über unsere Bildungsprogramme:

<div class="cta-buttons">

[📖 Koran-Programm](/de/offers#quran)
[✍️ Arabische Sprache](/de/offers#arabic)
[🕌 Islamische Studien](/de/offers#islamic)

</div>

</div>

---

<div class="back-home">

[← Zurück zur Startseite](/de/)

</div>

</div>

<style scoped>
.thank-you-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
}

.success-icon {
  font-size: 5rem;
  margin: 2rem 0;
  animation: bounce 1s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.steps-container {
  text-align: left;
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  border: 2px solid var(--vp-c-brand);
}

.steps-container h3 {
  color: var(--vp-c-brand);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.steps-container h3:first-of-type {
  margin-top: 0;
}

.contact-options {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.contact-options ul {
  list-style: none;
  padding: 0;
}

.contact-options li {
  margin: 1rem 0;
  font-size: 1.1rem;
}

.cta-section {
  background: linear-gradient(135deg, #42b88330 0%, #35495e30 100%);
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.cta-buttons a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--vp-c-brand);
  color: white !important;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.cta-buttons a:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.back-home {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.back-home a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
}

.back-home a:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .thank-you-container {
    padding: 1rem;
  }
  
  .success-icon {
    font-size: 3rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-buttons a {
    width: 100%;
  }
}
</style>

