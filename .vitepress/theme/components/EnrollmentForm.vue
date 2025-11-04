<template>
  <div class="enrollment-form-container">
    <form 
      action="https://formsubmit.co/onlinemsid@gmail.com" 
      method="POST"
      @submit="handleSubmit"
      class="enrollment-form"
    >
        <!-- FormSubmit.co Configuration -->
        <input type="hidden" name="_subject" value="MSID School New Contact">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_next" :value="successUrl">
        <input type="hidden" name="_language" :value="isArabic ? 'العربية' : (isGerman ? 'Deutsch' : 'English')">
        
        <div class="form-section">
          <h3>{{ t('معلومات الطالب', 'Student Information', 'Schülerinformationen') }}</h3>
          
          <div class="form-group">
            <label :for="`studentName-${formId}`">
              {{ isArabic ? 'اسم الطالب الكامل' : 'Student Full Name' }}
              <span class="required">*</span>
            </label>
            <input 
              v-model="formData.studentName" 
              type="text" 
              name="student_name"
              :id="`studentName-${formId}`"
              required
              :placeholder="isArabic ? 'أدخل الاسم الكامل للطالب' : 'Enter student\'s full name'"
            />
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label :for="`age-${formId}`">
                {{ isArabic ? 'عمر الطالب' : 'Student Age' }}
              </label>
              <input 
                v-model="formData.age" 
                type="number"
                name="student_age"
                :id="`age-${formId}`"
                min="5"
                :placeholder="isArabic ? 'مثال: 10' : 'e.g., 10'"
              />
            </div>
            
            <div class="form-group">
              <label :for="`currentLevel-${formId}`">
                {{ isArabic ? 'المستوى الحالي' : 'Current Level' }}
              </label>
              <select v-model="formData.currentLevel" name="current_level" :id="`currentLevel-${formId}`">
                <option value="beginner">
                  {{ isArabic ? 'مبتدئ - لا يعرف القراءة والكتابة' : 'Beginner - Cannot read or write' }}
                </option>
                <option value="intermediate">
                  {{ isArabic ? 'متوسط - يقرأ ويكتب بشكل أساسي' : 'Intermediate - Basic reading and writing' }}
                </option>
                <option value="advanced">
                  {{ isArabic ? 'متقدم - يقرأ ويكتب بطلاقة' : 'Advanced - Fluent reading and writing' }}
                </option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="form-section">
          <h3>{{ isArabic ? 'معلومات ولي الأمر' : 'Parent/Guardian Information' }}</h3>
          
          <div class="form-group">
            <label :for="`parentName-${formId}`">
              {{ isArabic ? 'اسم ولي الأمر' : 'Parent/Guardian Name' }}
            </label>
            <input 
              v-model="formData.parentName" 
              type="text"
              name="parent_name"
              :id="`parentName-${formId}`"
              :placeholder="isArabic ? 'أدخل اسم ولي الأمر' : 'Enter parent/guardian name'"
            />
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label :for="`email-${formId}`">
                {{ isArabic ? 'البريد الإلكتروني' : 'Email Address' }}
                <span class="required">*</span>
              </label>
              <input 
                v-model="formData.email" 
                type="email"
                name="email"
                :id="`email-${formId}`"
                required
                placeholder="example@email.com"
                dir="ltr"
              />
            </div>
            
            <div class="form-group">
              <label :for="`phone-${formId}`">
                {{ isArabic ? 'رقم الهاتف (مع رمز الدولة)' : 'Phone Number (with country code)' }}
                <span class="required">*</span>
              </label>
              <input 
                v-model="formData.phone" 
                type="tel"
                name="phone"
                :id="`phone-${formId}`"
                required
                placeholder="+1234567890"
                dir="ltr"
              />
            </div>
          </div>
          
          <div class="form-group">
            <label :for="`country-${formId}`">
              {{ isArabic ? 'بلد الإقامة' : 'Country of Residence' }}
            </label>
            <input 
              v-model="formData.country" 
              type="text"
              name="country"
              :id="`country-${formId}`"
              :placeholder="isArabic ? 'مثال: ألمانيا، فرنسا، أمريكا' : 'e.g., Germany, France, USA'"
            />
          </div>
        </div>
        
        <div class="form-section">
          <h3>{{ isArabic ? 'تفضيلات الدراسة' : 'Study Preferences' }}</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label :for="`preferredLanguage-${formId}`">
                {{ isArabic ? 'لغة التدريس المفضلة' : 'Preferred Teaching Language' }}
              </label>
              <select v-model="formData.preferredLanguage" name="preferred_language" :id="`preferredLanguage-${formId}`">
                <option value="arabic">
                  {{ isArabic ? 'العربية فقط' : 'Arabic Only' }}
                </option>
                <option value="english">
                  {{ isArabic ? 'الإنجليزية فقط' : 'English Only' }}
                </option>
                <option value="both">
                  {{ isArabic ? 'العربية والإنجليزية' : 'Both Arabic and English' }}
                </option>
              </select>
            </div>
            
            <div class="form-group">
              <label :for="`classesPerWeek-${formId}`">
                {{ isArabic ? 'عدد الحصص في الأسبوع' : 'Classes per Week' }}
              </label>
              <select v-model="formData.classesPerWeek" name="classes_per_week" :id="`classesPerWeek-${formId}`">
                <option value="1">{{ isArabic ? 'حصة واحدة' : '1 class' }}</option>
                <option value="2">{{ isArabic ? 'حصتان' : '2 classes' }}</option>
                <option value="3">{{ isArabic ? '3 حصص' : '3 classes' }}</option>
                <option value="4">{{ isArabic ? '4 حصص' : '4 classes' }}</option>
                <option value="5">{{ isArabic ? '5 حصص' : '5 classes' }}</option>
                <option value="more">{{ isArabic ? 'أكثر من 5 حصص' : 'More than 5 classes' }}</option>
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <label :for="`preferredTime-${formId}`">
              {{ isArabic ? 'الأوقات المفضلة للحصص' : 'Preferred Class Times' }}
            </label>
            <input 
              v-model="formData.preferredTime" 
              type="text"
              name="preferred_time"
              :id="`preferredTime-${formId}`"
              :placeholder="isArabic ? 'مثال: بعد الظهر، المساء، عطلة نهاية الأسبوع' : 'e.g., Afternoons, Evenings, Weekends'"
            />
          </div>
          
          <div class="form-group">
            <label :for="`additionalInfo-${formId}`">
              {{ isArabic ? 'هل لديك أي ملاحظات أو متطلبات خاصة؟' : 'Do you have any special notes or requirements?' }}
            </label>
            <textarea 
              v-model="formData.additionalInfo"
              name="additional_info"
              :id="`additionalInfo-${formId}`"
              rows="4"
              :placeholder="isArabic ? 'أخبرنا عن أي احتياجات خاصة أو معلومات تود مشاركتها...' : 'Tell us about any special needs or information you\'d like to share...'"
            ></textarea>
          </div>
        </div>
        
        <div class="form-actions">
          <button type="submit" class="submit-button" :disabled="isSubmitting">
            {{ isSubmitting 
              ? (isArabic ? 'جاري الإرسال...' : 'Sending...') 
              : (isArabic ? 'إرسال طلب التسجيل' : 'Submit Enrollment Request') 
            }}
          </button>
        </div>
      </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { site, page } = useData()

// Generate unique form ID to avoid duplicate IDs
const formId = Math.random().toString(36).substr(2, 9)

// Language detection that works with SSR
const isArabic = ref(true)
const isGerman = ref(false)
const successUrl = ref('')

onMounted(() => {
  const path = page.value.relativePath
  isArabic.value = !path.startsWith('en/') && !path.startsWith('de/')
  isGerman.value = path.startsWith('de/')
  
  // Set thank you page URL based on current page language
  if (typeof window !== 'undefined') {
    const origin = window.location.origin
    
    // Determine the thank you page URL based on language
    if (isGerman.value) {
      successUrl.value = `${origin}/de/thanks`
    } else if (!isArabic.value) {
      // English
      successUrl.value = `${origin}/en/thanks`
    } else {
      // Arabic (default)
      successUrl.value = `${origin}/thanks`
    }
  }
})

// Translation helper
const t = (ar, en, de) => {
  return isArabic.value ? ar : (isGerman.value ? de : en)
}

const formData = ref({
  studentName: '',
  parentName: '',
  email: '',
  phone: '',
  country: '',
  preferredLanguage: 'arabic',
  classesPerWeek: '2',
  age: '',
  currentLevel: 'beginner',
  preferredTime: '',
  additionalInfo: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = (event) => {
  // Set loading state
  isSubmitting.value = true
  // Form will submit naturally to FormSubmit.co
  // FormSubmit will send the email and redirect back to _next URL
}
</script>

<style scoped>
.enrollment-form-container {
  max-width: 800px;
  margin: 2rem auto;
}

.enrollment-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-section {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.dark .form-section {
  box-shadow: none;
  border-color: var(--vp-c-divider);
}

.form-section h3 {
  margin-bottom: 1.5rem;
  color: var(--vp-c-brand);
  font-size: 1.25rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.625rem;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
  transition: color 0.25s;
}

.form-group:focus-within label {
  color: var(--vp-c-brand);
}

.required {
  color: #ef4444;
  font-weight: 700;
  margin-inline-start: 0.25rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1.125rem;
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.02);
  background-image: linear-gradient(0deg, transparent, transparent);
  color: var(--vp-c-text-1);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.06);
  position: relative;
}

.dark .form-group input,
.dark .form-group select,
.dark .form-group textarea {
  background-color: rgba(255, 255, 255, 0.02);
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.06);
}

.form-group input:hover,
.form-group select:hover,
.form-group textarea:hover {
  background-color: rgba(0, 0, 0, 0.03);
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.09);
  transform: translateY(-1px);
}

.dark .form-group input:hover,
.dark .form-group select:hover,
.dark .form-group textarea:hover {
  background-color: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.09);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  background-color: transparent;
  box-shadow: 0 0 0 4px rgba(66, 184, 131, 0.12), inset 0 0 0 2px var(--vp-c-brand);
  transform: translateY(0);
}

.dark .form-group input:focus,
.dark .form-group select:focus,
.dark .form-group textarea:focus {
  background-color: rgba(255, 255, 255, 0.01);
  box-shadow: 0 0 0 4px rgba(66, 184, 131, 0.15), inset 0 0 0 2px var(--vp-c-brand);
}

/* Invalid state */
.form-group input:invalid:not(:placeholder-shown),
.form-group select:invalid:not(:placeholder-shown),
.form-group textarea:invalid:not(:placeholder-shown) {
  box-shadow: inset 0 0 0 2px #f87171;
}

.form-group input:invalid:not(:placeholder-shown):focus,
.form-group select:invalid:not(:placeholder-shown):focus,
.form-group textarea:invalid:not(:placeholder-shown):focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12), inset 0 0 0 2px #ef4444;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #9ca3af;
  opacity: 1;
}

.dark .form-group input::placeholder,
.dark .form-group textarea::placeholder {
  color: var(--vp-c-text-3);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
}

.submit-button {
  background-color: var(--vp-c-brand);
  color: white;
  padding: 0.85rem 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.submit-button:hover:not(:disabled) {
  background-color: var(--vp-c-brand-dark);
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
}

.success-message {
  text-align: center;
  padding: 3rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 2px solid #10b981;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.dark .success-message {
  border-color: var(--vp-c-brand);
  box-shadow: none;
}

.success-message h2 {
  color: #27ae60;
  margin-bottom: 1rem;
}

.success-message p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.success-message ul {
  list-style: none;
  padding: 0;
}

.success-message li {
  margin: 0.5rem 0;
}

/* Select dropdown custom arrow */
.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

.dark .form-group select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
}

/* RTL Support */
:dir(rtl) .form-group select {
  background-position: left 0.75rem center;
  padding-right: 1.125rem;
  padding-left: 2.5rem;
}

:dir(rtl) .form-group input[dir="ltr"],
:dir(rtl) .form-group input[type="email"],
:dir(rtl) .form-group input[type="tel"] {
  text-align: left;
  direction: ltr;
}

/* Add smooth animation to all form elements */
@keyframes formFocus {
  0% {
    transform: scale(0.98);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  animation: formFocus 0.3s ease-out;
}
</style>
