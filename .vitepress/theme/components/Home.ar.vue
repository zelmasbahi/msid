<script setup lang="ts">
import { onMounted } from 'vue'
import SiteMap from './SiteMap.vue'
import { load, data, base } from './sponsors'
import SponsorsGroup from './SponsorsGroup.vue'
import VueMasteryModal from './VueMasteryModal.vue'

onMounted(load)
</script>

<template>
  <!-- Hero Section -->
  <section id="hero" dir="rtl">
    <div class="logo-container">
      <img src="/msid-logo.jpg" alt="MSID Online Logo" class="msid-logo" />
    </div>
    <h1 class="tagline">
      <span class="title-with-en accent">
        <span class="main-title">المسيد عن بعد</span>
        <span class="title-en-inline" dir="ltr">MSID online </span>
      </span>
      <br />
      <span class="accent">حصن الطفل المسلم</span>
    </h1>
    <p class="description">ملاذ أبناءك في الغربة لحفظ دينهم</p>
    <p class="actions">
      <a class="get-started" href="/enroll">
        ابدأ التعلّم الآن
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
          />
        </svg>
      </a>
      <a class="setup" href="/sponsor/">عرض الأسعار</a>
    </p>
  </section>

  <!-- Welcome Section -->
  <section id="welcome" class="content-section" dir="rtl">
    <div class="container">
      <h2 class="section-title">أهلاً وسهلاً بكم في مسيد عن بعد</h2>
      <div class="welcome-content">
        <p>
          في عالمٍ تتسارع فيه الحياة وتزداد فيه التحديات، يبقى العلم نورًا
          لا يبهت، وجسرًا يربط أبناءنا بجذورهم وهويتهم أينما كانوا.
        </p>
        <p>
          من هذا الإيمان وُلد <strong>مسيد أونلاين</strong> — منصة تعليمية
          تحمل رسالة سامية: أن نجعل من التعلم رحلة ممتعة، أصيلة، وملهمة.
        </p>
        <p>
          في مسيد أونلاين، نمزج بين جمال التعليم الأصيل وفاعلية الأساليب
          الحديثة، لنقدّم تجربة تعليمية متكاملة تُغذّي العقل، وتُهذّب
          الروح، وتزرع الثقة في النفس.
        </p>
        <p class="highlight">
          هنا، لا نُعلّم فقط — بل نرافق كل متعلّم في رحلته، نحتفي بتقدّمه،
          ونؤمن أن كل خطوة يتخذها في طريق العلم هي بناء لمستقبل أكثر
          إشراقًا وثقة.
        </p>
      </div>
    </div>
  </section>

  <!-- Our Motivation -->
  <section id="motivation" class="content-section alt-bg" dir="rtl">
    <div class="container">
      <h2 class="section-title">دوافعنا</h2>
      <div class="motivation-content">
        <p>
          انطلق مشروع <strong>مسيد أونلاين</strong> من إيماننا العميق
          بأهمية التعليم الأصيل والمتوازن، الذي يجمع بين القيم الإسلامية
          والمهارات العصرية.
        </p>
        <p>
          لاحظنا أن أبناء الجالية العربية والمسلمة في الخارج يواجهون صعوبات
          في تعلم اللغة العربية وحفظ القرآن الكريم وفهم الدين بلغتهم الأم،
          فكانت فكرتنا أن نمدّ إليهم جسراً تعليمياً يربطهم بجذورهم وثقافتهم
          أينما كانوا.
        </p>
        <p>
          جاء مسيد أونلاين ليقدّم بيئة تعليمية آمنة ومرنة عبر الإنترنت،
          تجمع بين حفظ وتفسير القرآن الكريم، تعليم اللغة العربية، ودروس
          التربية الإسلامية.
        </p>
        <p class="highlight">
          <strong>هدفنا</strong> هو تمكين أبنائنا من الحفاظ على هويتهم،
          وتنمية قدراتهم، وتعزيز ثقتهم بأنفسهم، من خلال تعليم هادف يعتمد
          على الجودة، البساطة، والاهتمام الفردي بكل متعلم، سواء كان طفلًا
          أو راشدًا.
        </p>
      </div>
    </div>
  </section>

  <!-- Our Offers -->
  <section id="offers" class="content-section" dir="rtl">
    <div class="container">
      <h2 class="section-title">عروضنا التعليمية</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🕐</div>
          <h3>تعلّم في أي وقت ومن أي مكان</h3>
          <p>
            نوفر لك تجربة تعليمية مرنة تناسب جدولك وحياتك، سواء كنت طالبًا،
            أو موظفًا، أو ولي أمر يبحث عن تعليم مميز لأبنائه.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📖</div>
          <h3>جودة تعليمية عالية في القرآن واللغة العربية</h3>
          <p>
            برامج متكاملة في حفظ القرآن الكريم وتجويده، تعليم اللغة
            العربية، والتربية الإسلامية، مصممة خصيصًا للأطفال، واليافعين،
            والراشدين.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👤</div>
          <h3>متابعة فردية لكل متعلّم</h3>
          <p>
            لكل طالب خطة تعليمية تناسب مستواه وسرعته، مع حصص فردية وتفاعل
            مباشر مع المعلّم لضمان أفضل النتائج.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>تعليم تفاعلي ممتع</h3>
          <p>
            دروس مدعومة بفيديوهات، بطاقات، اختبارات قصيرة، وأنشطة تفاعلية
            تجعل التعلّم رحلة شيّقة وسهلة الفهم.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💪</div>
          <h3>تعلّم بالتطبيق والتدريب المستمر</h3>
          <p>
            في مسيد أونلاين، لا نكتفي بالشرح النظري، بل نمنح المتعلّم فرصًا
            للتدرب العملي والممارسة المتكررة حتى يتقن المهارة بثقة.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌟</div>
          <h3>بيئة تعليمية آمنة وملهمة</h3>
          <p>
            نوفر فضاءً تربويًا راقيًا يُنمّي القيم والهوية، ويغرس في
            المتعلّمين حبّ العلم والانتماء بلغة تجمع بين الأصالة والمعاصرة.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Approach -->
  <section id="approach" class="content-section alt-bg" dir="rtl">
    <div class="container">
      <h2 class="section-title">منهجيتنا التعليمية</h2>
      <p class="section-intro">
        في مسيد أونلاين، نؤمن بأن التعليم الفعّال يحدث عندما تلتقي الحكمة
        التقليدية بالابتكار الحديث. منهجيتنا التعليمية مبنية على أربع ركائز
        أساسية:
      </p>
      <div class="approach-grid">
        <div class="approach-card">
          <div class="approach-icon">🎓</div>
          <h3>مسارات تعليمية مخصصة</h3>
          <p>
            كل طالب فريد من نوعه. نقيّم مستوى كل متعلم، وأسلوب تعلمه،
            وأهدافه لإنشاء منهج مخصص يضمن تقدمًا ثابتًا وتحفيزًا مستدامًا.
          </p>
        </div>
        <div class="approach-card">
          <div class="approach-icon">👨‍🏫</div>
          <h3>معلمون خبراء من أهل اللغة</h3>
          <p>
            معلمونا المختارون بعناية ليسوا فقط خبراء في مجالاتهم، بل هم
            أيضًا مربّون شغوفون يفهمون تحديات تعليم العربية والدراسات
            الإسلامية لأبناء الجاليات.
          </p>
        </div>
        <div class="approach-card">
          <div class="approach-icon">📱</div>
          <h3>تكنولوجيا حديثة، قيم أصيلة</h3>
          <p>
            نستفيد من أحدث التقنيات التعليمية — منصات تفاعلية، موارد متعددة
            الوسائط، وأنظمة ملاحظات فورية — مع الحفاظ على أساليب التدريس
            الأصيلة التي أثبتت فعاليتها عبر القرون.
          </p>
        </div>
        <div class="approach-card">
          <div class="approach-icon">🔄</div>
          <h3>تقييم مستمر وتحسين دائم</h3>
          <p>
            التقييمات المنتظمة، تقارير التقدم، والتواصل بين المعلم وولي
            الأمر تضمن أن كل طالب يسير على المسار الصحيح ويحسّن مهاراته
            باستمرار.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section id="pricing" class="content-section alt-bg" dir="rtl">
    <div class="container">
      <h2 class="section-title">خطط التعلم المرنة</h2>
      <p class="section-intro">
        اختر الخطة التي تناسب احتياجاتك وأسلوب حياتك:
      </p>
      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="plan-icon">💶</div>
          <h3>الخطة المرنة</h3>
          <p class="plan-subtitle">ادفع فقط مقابل الوقت الذي تدرس فيه</p>
          <ul class="plan-features">
            <li>مرونة كاملة في الجدولة</li>
            <li>لا التزامات شهرية</li>
            <li>مثالية للجداول غير المنتظمة</li>
          </ul>
          <p class="plan-price"><strong>7 يورو/الساعة</strong></p>
        </div>
        <div class="pricing-card">
          <div class="plan-icon">📅</div>
          <h3>الخطة الشهرية</h3>
          <p class="plan-subtitle">للتقدم الثابت والممارسة المستمرة</p>
          <ul class="plan-features">
            <li>8 ساعات شهريًا</li>
            <li>حصتان أسبوعيًا (ساعة لكل حصة)</li>
            <li>كل حصة = ساعة + 10 دقائق استراحة</li>
            <li>سعر مخفض مقارنة بالساعة الفردية</li>
          </ul>
          <p class="plan-price"><strong>60 يورو/شهريًا</strong></p>
        </div>
        <div class="pricing-card featured">
          <div class="plan-badge">الأكثر شعبية</div>
          <div class="plan-icon">🚀</div>
          <h3>الخطة المكثفة</h3>
          <p class="plan-subtitle">للمتعلمين السريعين والتحسن السريع!</p>
          <ul class="plan-features">
            <li>16 ساعة شهريًا</li>
            <li>4 حصص أسبوعيًا</li>
            <li>كل حصة = ساعة + 10 دقائق استراحة</li>
            <li>أفضل قيمة مقابل المال</li>
            <li>أولوية في اختيار المواعيد</li>
          </ul>
          <p class="plan-price"><strong>100 يورو/شهريًا</strong></p>
        </div>
      </div>
      <div class="pricing-note">
        <p>
          <strong>خصومات خاصة:</strong> خصم عائلي 10% للطفل الثاني • خصم 5%
          عند الدفع لـ 3 أشهر مقدمًا
        </p>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="content-section" dir="rtl">
    <div class="container">
      <h2 class="section-title">الأسئلة الشائعة</h2>
      <div class="faq-grid">
        <div class="faq-item">
          <h3>كيف تعمل الحصص عبر الإنترنت؟</h3>
          <p>
            نستخدم منصات مؤتمرات فيديو آمنة حيث يلتقي الطلاب بمعلميهم
            لجلسات حية وتفاعلية. كل ما تحتاجه هو جهاز (كمبيوتر، جهاز لوحي،
            أو هاتف ذكي) واتصال إنترنت مستقر.
          </p>
        </div>
        <div class="faq-item">
          <h3>ما هي الأعمار التي تدرّسونها؟</h3>
          <p>
            نقدم برامج لجميع الأعمار: الأطفال (5-12 سنة)، المراهقون (13-17
            سنة)، والبالغون (18+).
          </p>
        </div>
        <div class="faq-item">
          <h3>هل أحتاج معرفة مسبقة باللغة العربية؟</h3>
          <p>
            لا! نقبل المبتدئين تمامًا ونصمم خططًا مخصصة بناءً على مستواك
            الحالي.
          </p>
        </div>
        <div class="faq-item">
          <h3>هل يمكنني اختيار معلمي؟</h3>
          <p>
            نعم، سنطابقك مع معلم بناءً على تفضيلاتك، ويمكنك طلب التغيير إذا
            لزم الأمر.
          </p>
        </div>
        <div class="faq-item">
          <h3>ماذا لو احتجت إعادة جدولة حصة؟</h3>
          <p>
            نقدم إعادة جدولة مرنة بإشعار مدته 24 ساعة. فقط اتصل بمعلمك أو
            فريق الدعم لدينا.
          </p>
        </div>
        <div class="faq-item">
          <h3>هل تقدمون شهادات؟</h3>
          <p>
            نعم، يحصل الطلاب على شهادات عند إكمال كل مستوى من البرنامج.
          </p>
        </div>
      </div>
      <div class="faq-cta">
        <p>
          <strong>هل لديك المزيد من الأسئلة؟</strong>
          <a href="https://wa.me/212XXXXXXXXX">اتصل بنا ←</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base Section Styles */
section {
  padding: 80px 32px;
  text-align: center;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.content-section {
  background-color: var(--vt-c-bg);
}

.alt-bg {
  background-color: var(--vt-c-bg-soft);
}

/* Hero Section */
#hero {
  padding: 120px 32px 96px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

.title-with-en {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.main-title {
  display: inline-block;
  font-size: 76px;
}

.title-en-inline {
  font-size: 76px;
  font-weight: 900;
  font-family: 'Inter', sans-serif;
  letter-spacing: -1.5px;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 12px 24px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  background: linear-gradient(var(--vt-c-bg-mute), var(--vt-c-bg-mute))
      padding-box,
    linear-gradient(45deg, #42d392, #647eff) border-box;
  border: 2px solid transparent;
}

.actions .get-started,
.actions .setup {
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
  transform: rotateY(180deg);
}

.actions .get-started:hover .icon {
  transform: translateX(-2px) rotateY(180deg);
}

.actions .get-started,
.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .get-started:hover,
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover,
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

/* Section Title */
.section-title {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 1.2em;
  letter-spacing: -0.5px;
  color: var(--vt-c-text-1);
}

.section-intro {
  font-size: 20px;
  text-align: center;
  color: var(--vt-c-text-2);
  max-width: 800px;
  margin: 0 auto 3em;
  line-height: 1.7;
  font-weight: 500;
}

/* Welcome & Motivation Content */
.welcome-content,
.motivation-content {
  max-width: 850px;
  margin: 0 auto;
  font-size: 19px;
  line-height: 1.9;
  color: var(--vt-c-text-2);
  text-align: center;
}

.welcome-content p,
.motivation-content p {
  margin-bottom: 1.8em;
}

.highlight {
  font-size: 21px;
  font-weight: 700;
  color: var(--vt-c-text-1);
  margin-top: 2.5em;
  padding: 24px;
  background: var(--vt-c-bg-soft);
  border-radius: 12px;
  border: 2px solid var(--vt-c-brand-light);
}

/* Features Grid (Our Offers) */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-top: 60px;
}

.feature-card {
  background: var(--vt-c-bg);
  border: 2px solid var(--vt-c-divider);
  border-radius: 16px;
  padding: 40px 32px;
  transition: all 0.4s ease;
  text-align: center;
}

.feature-card:hover {
  border-color: var(--vt-c-brand);
  background: var(--vt-c-bg-soft);
  box-shadow: 0 16px 32px rgba(66, 211, 146, 0.15);
  transform: translateY(-8px);
}

.feature-icon {
  font-size: 64px;
  margin-bottom: 24px;
  display: inline-block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.feature-card h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--vt-c-text-1);
  letter-spacing: -0.5px;
}

.feature-card p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--vt-c-text-2);
}

/* Approach Grid */
.approach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.approach-card {
  text-align: center;
  padding: 40px 28px;
  background: var(--vt-c-bg);
  border-radius: 16px;
  transition: all 0.3s;
}

.approach-card:hover {
  transform: scale(1.05);
}

.approach-icon {
  font-size: 72px;
  margin-bottom: 24px;
  display: inline-block;
  filter: drop-shadow(0 4px 12px rgba(100, 126, 255, 0.2));
}

.approach-card h3 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 18px;
  color: var(--vt-c-text-1);
  letter-spacing: -0.5px;
}

.approach-card p {
  font-size: 17px;
  line-height: 1.8;
  color: var(--vt-c-text-2);
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.testimonial-card {
  background: var(--vt-c-bg-soft);
  border-radius: 12px;
  padding: 32px 28px;
  position: relative;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 80px;
  color: var(--vt-c-brand);
  opacity: 0.2;
  font-family: Georgia, serif;
}

.testimonial-text {
  font-size: 16px;
  line-height: 1.7;
  color: var(--vt-c-text-1);
  margin-bottom: 16px;
  font-style: italic;
}

.testimonial-author {
  font-size: 14px;
  color: var(--vt-c-text-2);
  font-weight: 500;
}

/* Pricing */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.pricing-card {
  background: var(--vt-c-bg);
  border: 2px solid var(--vt-c-divider);
  border-radius: 16px;
  padding: 36px 28px;
  text-align: center;
  transition: all 0.3s;
  position: relative;
}

.pricing-card:hover {
  border-color: var(--vt-c-brand);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-8px);
}

.pricing-card.featured {
  border-color: var(--vt-c-brand);
  border-width: 3px;
}

.plan-badge {
  position: absolute;
  top: -12px;
  right: 50%;
  transform: translateX(50%);
  background: var(--vt-c-brand);
  color: white;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.plan-icon {
  font-size: 56px;
  margin-bottom: 16px;
}

.pricing-card h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--vt-c-text-1);
}

.plan-subtitle {
  font-size: 14px;
  color: var(--vt-c-text-2);
  margin-bottom: 24px;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 24px 0;
  text-align: right;
}

.plan-features li {
  padding: 10px 0;
  font-size: 15px;
  color: var(--vt-c-text-2);
  border-bottom: 1px solid var(--vt-c-divider-light);
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-price {
  font-size: 32px;
  color: var(--vt-c-brand);
  margin-top: 24px;
}

.pricing-note {
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  background: var(--vt-c-brand-soft);
  border-radius: 12px;
}

.pricing-note code {
  background: var(--vt-c-bg);
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 700;
  color: var(--vt-c-brand);
}

/* FAQ */
.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.faq-item {
  padding: 24px;
  background: var(--vt-c-bg-soft);
  border-radius: 12px;
}

.faq-item h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vt-c-text-1);
}

.faq-item p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--vt-c-text-2);
}

.faq-cta {
  text-align: center;
  margin-top: 48px;
  font-size: 18px;
}

.faq-cta a {
  color: var(--vt-c-brand);
  font-weight: 600;
  text-decoration: none;
}

.faq-cta a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }

  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }

  .section-title {
    font-size: 32px;
  }

  .features-grid,
  .approach-grid,
  .testimonials-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 794px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 32px;
  }

  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }

  .section-title {
    font-size: 28px;
  }

  .actions a {
    margin: 18px 8px;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}

/* Logo */
/* Logo Styles */
.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.msid-logo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 4px solid var(--vt-c-bg);
  transition: all 0.3s ease;
}

.msid-logo:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .msid-logo {
    width: 120px;
    height: 120px;
  }

  .logo-container {
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .msid-logo {
    width: 100px;
    height: 100px;
  }
}
</style>
