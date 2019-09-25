import Vue from 'vue'
import Router from 'vue-router'

import Apper from '@/components/Apper'
import BankID from '@/components/BankID'
import EngelskeOrd from '@/components/EngelskeOrd'
import Epost from '@/components/Epost'
import Epostsvindel from '@/components/Epostsvindel'
import Google from '@/components/Google'
import Hjem from '@/components/Hjem'
import IPAdresse from '@/components/IPAdresse'
import Nettbank from '@/components/Nettbank'
import Netthandel from '@/components/Netthandel'
import Nettsider from '@/components/Nettsider'
import Operativsystemer from '@/components/Operativsystemer'
import Passord from '@/components/Passord'
import Personnummer from '@/components/Personnummer'
import Sosialemedier from '@/components/Sosialemedier'
import Telefonsvindel from '@/components/Telefonsvindel'
import Virus from '@/components/Virus'
import VPN from '@/components/VPN'
import Reise from '@/components/Reise'
import Wifi from '@/components/Wifi'
import Kryptering from '@/components/Kryptering'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hva-er-apper',
      name: 'Apper',
      component: Apper,
      meta: { nextpagename: 'Reise'}
    },
    {
      path: '/hva-er-bankid',
      name: 'BankID',
      component: BankID,
      meta: { nextpagename: 'Nettbank'}
    },
    {
      path: '/engelsk',
      name: 'EngelskeOrd',
      component: EngelskeOrd,
      meta: { nextpagename: 'Epost'} 
    },
    {
      path: '/hva-er-epost',
      name: 'Epost',
      component: Epost,
      meta: { nextpagename: 'Google'}
    },
    {
      path: '/hva-er-epostsvindel',
      name: 'Epostsvindel',
      component: Epostsvindel,
      meta: { nextpagename: 'Operativsystemer'}
    },
    {
      path: '/om-google',
      name: 'Google',
      component: Google,
      meta: { nextpagename: 'BankID'}
    },
    {
      path: '/',
      name: 'Hjem',
      component: Hjem
    },
    {
      path: '/hva-er-en-ipadresse',
      name: 'IPAdresse',
      component: IPAdresse,
      meta: { nextpagename: 'VPN'}
    },
    {
      path: '/hva-er-en-nettbank',
      name: 'Nettbank',
      component: Nettbank,
      meta: { nextpagename: 'Netthandel'}
    },
    {
      path: '/hva-er-netthandel',
      name: 'Netthandel',
      component: Netthandel,
      meta: { nextpagename: 'Personnummer'}
    },
    {
      path: '/nettsider',
      name: 'Nettsider',
      component: Nettsider,
      meta: { nextpagename: 'Wifi'}
    },
    {
      path: '/hva-er-operativsystemer',
      name: 'Operativsystemer',
      component: Operativsystemer,
      meta: { nextpagename: 'Nettsider'}
    },
    {
      path: '/hva-er-et-passord',
      name: 'Passord',
      component: Passord,
      meta: { nextpagename: 'Apper' }
    },
    {
      path: '/personnummer',
      name: 'Personnummer',
      component: Personnummer,
      meta: { nextpagename: 'Sosialemedier'}
    },
    {
      path: '/sosiale-medier',
      name: 'Sosialemedier',
      component: Sosialemedier,
      meta: { nextpagename: 'Telefonsvindel'}
    },
    {
      path: '/hva-er-telefonsvindel',
      name: 'Telefonsvindel',
      component: Telefonsvindel,
      meta: { nextpagename: 'Virus'}
    },
    {
      path: '/hva-er-et-virus',
      name: 'Virus',
      component: Virus,
      meta: { nextpagename: 'Epostsvindel'}
    },
    {
      path: '/sikre-ip-adressen',
      name: 'VPN',
      component: VPN
    },
    {
      path: '/sikre-wifi-nettverket',
      name: 'Wifi',
      component: Wifi,
      meta: { nextpagename: 'Kryptering'}
    },
    {
      path: '/hvordan-betale-kollektivt',
      name: 'Reise',
      component: Reise,
      meta: { nextpagename: 'EngelskeOrd'}
    },
    {
      path: '/kryptering',
      name: 'Kryptering',
      component: Kryptering,
      meta: { nextpagename: 'IPAdresse'}
    }
  ]
})
