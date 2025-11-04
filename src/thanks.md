---
title: شكراً لك
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

# ✅ تم استلام طلبك بنجاح!

<div class="success-icon">🎉</div>

## شكراً لاختيارك **مسيد أونلاين**!

لقد تم استلام طلب التسجيل الخاص بك بنجاح. سيتواصل معك فريقنا خلال **24 ساعة** لترتيب حصتك التجريبية المجانية.

---

## 📧 ماذا يحدث الآن؟

<div class="steps-container">

### 1️⃣ مراجعة الطلب
فريقنا يقوم حالياً بمراجعة طلبك وتحديد أفضل معلم يناسب احتياجاتك.

### 2️⃣ التواصل معك
سنتصل بك عبر البريد الإلكتروني أو الهاتف خلال 24 ساعة.

### 3️⃣ جدولة الحصة التجريبية
سنحدد معك موعد الحصة التجريبية المجانية (30 دقيقة).

### 4️⃣ البدء بالتعلم
ابدأ رحلتك التعليمية مع أفضل المعلمين!

</div>

---

## 📞 هل لديك استفسار عاجل؟

إذا كنت بحاجة للتواصل معنا بشكل فوري، يمكنك استخدام:

<div class="contact-options">

- 📧 **البريد الإلكتروني**: [onlinemsid@gmail.com](mailto:onlinemsid@gmail.com)
- 📱 **واتساب**: [+212 779-164257](https://wa.me/212779164257)
- 📖 **الأسئلة الشائعة**: [اضغط هنا](/about/faq)

</div>

---

## 🎯 في انتظار الحصة التجريبية

لتحقيق أقصى استفادة من حصتك التجريبية، ننصح بما يلي:

- ✅ تجهيز جهاز الكمبيوتر أو الجهاز اللوحي
- ✅ التأكد من اتصال إنترنت مستقر
- ✅ تجهيز بيئة هادئة ومناسبة للتعلم
- ✅ تحضير أي أسئلة تود طرحها على المعلم

---

<div class="cta-section">

## 📚 تعرف على برامجنا

بينما تنتظر، يمكنك التعرف أكثر على برامجنا التعليمية:

<div class="cta-buttons">

[📖 برنامج القرآن الكريم](/offers#quran)
[✍️ برنامج اللغة العربية](/offers#arabic)
[🕌 الدراسات الإسلامية](/offers#islamic)

</div>

</div>

---

<div class="back-home">

[← العودة للصفحة الرئيسية](/)

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
  text-align: right;
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

