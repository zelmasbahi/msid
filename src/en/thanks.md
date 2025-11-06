---
title: Thank You
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

# ✅ Your Request Has Been Received Successfully!

<div class="success-icon">🎉</div>

## Thank you for choosing **Msid Online**!

Your enrollment request has been successfully received. Our team will contact you within **24 hours** to arrange your free trial class.

---

## 📧 What Happens Next?

<div class="steps-container">

### 1️⃣ Application Review
Our team is currently reviewing your request and matching you with the best teacher for your needs.

### 2️⃣ We'll Contact You
We'll reach out via email or phone within 24 hours.

### 3️⃣ Schedule Trial Class
We'll arrange a convenient time for your free 30-minute trial class.

### 4️⃣ Start Learning
Begin your educational journey with our expert teachers!

</div>

---

## 📞 Have an Urgent Question?

If you need to reach us immediately, you can use:

<div class="contact-options">

- 📧 **Email**: [onlinemsid@gmail.com](mailto:onlinemsid@gmail.com)
- 📱 **WhatsApp**: [+212 779-164257](https://wa.me/212779164257)
- 📖 **FAQ**: [Click here](/en/about/faq)

</div>

---

## 🎯 Preparing for Your Trial Class

To get the most out of your trial class, we recommend:

- ✅ Prepare your computer or tablet
- ✅ Ensure stable internet connection
- ✅ Set up a quiet learning environment
- ✅ Prepare any questions you'd like to ask the teacher

---

<div class="cta-section">

## 📚 Explore Our Programs

While you wait, learn more about our educational programs:

<div class="cta-buttons">

[📖 Quran Program](/en/offers#quran)
[✍️ Arabic Language](/en/offers#arabic)
[🕌 Islamic Studies](/en/offers#islamic)

</div>

</div>

---

<div class="back-home">

[← Back to Home](/en/)

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

