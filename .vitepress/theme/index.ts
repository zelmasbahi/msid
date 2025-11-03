import './styles/index.css'
import { h, App } from 'vue'
import { VPTheme } from '@vue/theme'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
import EnrollmentForm from './components/EnrollmentForm.vue'
import CustomNavTitle from './components/CustomNavTitle.vue'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      'navbar-title': () => h(CustomNavTitle)
      // No custom slots needed - language switcher is now in nav
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    app.component('EnrollmentForm', EnrollmentForm)
  }
})
