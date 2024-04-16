import { createRouter, createWebHistory } from 'vue-router'

import IntervenantView from '../views/IntervenantView.vue'
import ResponsableProjetsView from '@/views/ResponsableProjetsView.vue'
import ResponsableStagesView from '../views/ResponsableStagesView.vue'
import ResponsableApprentissagesView from '@/views/ResponsableApprentissagesView.vue'
import loginView from '@/views/loginView.vue'
import ResponsablesAnnee from '@/views/ResponsablesAnnee.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/intervenants',
      name:'intervenants',
      component: IntervenantView
    },
    {
      path: '/ResponsablesProjets',
      name: 'ResponsablesProjets',
      component: ResponsableProjetsView
    }
    ,
    {
      path: '/ResponsablesStages',
      name: 'ResponsablesStages',
      component: ResponsableStagesView
    }
    ,
    {
      path: '/ResponsablesApprentissages',
      name: 'ResponsablesApprentissages',
      component: ResponsableApprentissagesView
    }
    ,
    {
      path: '/',
      name: 'login',
      component: loginView
    }
    ,
    {
      path: '/ResponsablesAnnee',
      name: 'ResponsablesAnnee',
      component: ResponsablesAnnee
    }
    
    
 
  ]
})

export default router
