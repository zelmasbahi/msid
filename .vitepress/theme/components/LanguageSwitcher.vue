<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { computed, onMounted } from 'vue'

const { localeIndex } = useData()
const router = useRouter()

// Get current locale
const currentLocale = computed(() => localeIndex.value)

// Determine the target locale and path
const switchLocale = () => {
  const currentPath = router.route.path
  
  if (currentLocale.value === 'root') {
    // Currently on Arabic (root), switch to English
    // Convert path from / to /en/
    const newPath = '/en' + currentPath
    router.go(newPath)
  } else {
    // Currently on English, switch to Arabic
    // Convert path from /en/ to /
    const newPath = currentPath.replace(/^\/en/, '')
    router.go(newPath || '/')
  }
}

const targetLabel = computed(() => {
  return currentLocale.value === 'root' ? 'English' : 'العربية'
})
</script>

<template>
  <div class="language-switcher-wrapper">
    <button class="language-switcher" @click="switchLocale" :aria-label="`Switch to ${targetLabel}`">
      <svg class="globe-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
      <span class="label">{{ targetLabel }}</span>
    </button>
  </div>
</template>

<style>
.language-switcher-wrapper {
  position: fixed;
  top: 0;
  right: 320px;
  height: var(--vt-nav-height, 72px);
  display: flex;
  align-items: center;
  z-index: 1000;
  pointer-events: none;
}

.language-switcher {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: transparent;
  border: 1px solid var(--vt-c-divider);
  border-radius: 8px;
  color: var(--vt-c-text-1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s;
  pointer-events: auto;
}

.language-switcher:hover {
  background: var(--vt-c-bg-soft);
  border-color: var(--vt-c-brand);
  color: var(--vt-c-brand);
}

.globe-icon {
  width: 18px;
  height: 18px;
}

.label {
  line-height: 1;
  white-space: nowrap;
}

@media (max-width: 1279px) {
  .language-switcher-wrapper {
    right: 260px;
  }
}

@media (max-width: 960px) {
  .language-switcher-wrapper {
    right: 180px;
  }
  
  .language-switcher .label {
    display: none;
  }
  
  .language-switcher {
    padding: 8px;
  }
}

@media (max-width: 768px) {
  .language-switcher-wrapper {
    right: 140px;
  }
}
</style>

