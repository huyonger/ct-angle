import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from "../components/main/Main";

import About from "../components/about/About";
import AboutCompanyProfile from "../components/about/content/AboutCompanyProfile";
import AboutCoreTechnology from "../components/about/content/AboutCoreTechnology";
import AboutCorporatePhilosophy from "../components/about/content/AboutCorporatePhilosophy";
import AboutTeamIntroduction from "../components/about/content/AboutTeamIntroduction";
import AboutWorkers from "../components/about/content/AboutWorkers";


import Solve from "../components/solve/Solve";
import SolveCtImage from "../components/solve/content/SolveCtImage";
import SolveQuestion from "../components/solve/content/SolveQuestion";
import SolveAnotherImage from "../components/solve/content/SolveAnotherImage";
import SolveSpeechRecognition from "../components/solve/content/SolveSpeechRecognition";
import SolveMedicalHistory from "../components/solve/content/SolveMedicalHistory";
import SolveLocalHospital from "../components/solve/content/SolveLocalHospital";


import News from "../components/news/News";
import NewsCompany from "../components/news/content/NewsCompany";
import NewsProfession from "../components/news/content/NewsProfession";
import NewsMedia from "../components/news/content/NewsMedia";
import NewsPeople from "../components/news/content/NewsPeople";

import Contact from "../components/connect/Contact";
import ContactOnLionMessage from "../components/connect/content/ContactOnLionMessage";
import ContactConnectUs from "../components/connect/content/ContactConnectUs";

import Product from "../components/product/Product";
import ProductLogicalConstruction from "../components/product/content/ProductLogicalConstruction";
import ProductPatentsSoftware from "../components/product/content/ProductPatentsSoftware";

import Article from "../components/article/Article";

import Plain from "../components/plain/Plain";

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      component: Main,
      meta:{
        title: '中地夺萃（中国）| 首页'
      }
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '/',
          redirect: 'company-profile',
        },
        {
          path: 'company-profile',
          component: AboutCompanyProfile,
          meta:{
            title: '中地夺萃（中国）| 公司简介'
          }
        },
        {
          path: 'core-technology',
          component: AboutCoreTechnology,
          meta:{
            title: '中地夺萃（中国）| 核心技术'
          }
        },
        {
          path: 'corporate-philosophy',
          component: AboutCorporatePhilosophy,
          meta:{
            title: '中地夺萃（中国）| 企业理念'
          }
        },
        {
          path: 'team-introduction',
          component: AboutTeamIntroduction,
          meta:{
            title: '中地夺萃（中国）| 团队介绍'
          }
        },
        {
          path: 'workers',
          component: AboutWorkers,
          meta:{
            title: '中地夺萃（中国）| 招贤纳士'
          }
        }
      ]
    },
    {
      path:'/solve',
      component: Solve,
      children: [
        {
          path: '/',
          redirect: 'ct-image'
        },
        {
          path: 'ct-image',
          component: SolveCtImage,
          meta:{
            title: '中地夺萃（中国）| CT 影像'
          }
        },
        {
          path: 'another-image',
          component: SolveAnotherImage,
          meta:{
            title: '中地夺萃（中国）| 其它 影像'
          }
        },
        {
          path: 'speech-recognition',
          component: SolveSpeechRecognition,
          meta:{
            title: '中地夺萃（中国）| 语音采集'
          }
        },
        {
          path:'medical-history',
          component: SolveMedicalHistory,
          meta:{
            title: '中地夺萃（中国）| 病历采集'
          }
        },
        {
          path:'question',
          component: SolveQuestion,
          meta:{
            title: '中地夺萃（中国）| 问卷采集'
          }
        },
        {
          path: 'local-hospital',
          component: SolveLocalHospital,
          meta:{
            title: '中地夺萃（中国）| 就近就医'
          }
        }
      ]
    },
    {
      path: '/news',
      component: News,
      children: [
        {
          path: '/',
          redirect: 'company',
        },
        {
          path: 'company',
          component: NewsCompany,
          meta:{
            title: '中地夺萃（中国）| 公司新闻'
          }
        },
        {
          path: 'profession',
          component: NewsProfession,
          meta:{
            title: '中地夺萃（中国）| 行业动态'
          }
        },
        {
          path: 'media',
          component: NewsMedia,
          meta:{
            title: '中地夺萃（中国）| 媒体报道'
          }
        },
        {
          path: 'people',
          component: NewsPeople,
          meta:{
            title: '中地夺萃（中国）| 人物采访'
          }
        },
      ]
    },
    {
      path: '/contact',
      component: Contact,
      children: [
        {
          path: '/',
          redirect: 'onLion-message',
        },
        {
          path: 'onlion-message',
          component: ContactOnLionMessage,
          meta:{
            title: '中地夺萃（中国）| 网上留言'
          }
        },
        {
          path: 'connect-us',
          component: ContactConnectUs,
          meta:{
            title: '中地夺萃（中国）| 联系我们'
          }
        }
      ]
    },
    {
      path:'/product',
      component: Product,
      children: [
        {
          path: '/',
          redirect: 'logical-construction'
        },
        {
          path: 'logical-construction',
          component: ProductLogicalConstruction,
          meta:{
            title: '中地夺萃（中国）| 逻辑结构'
          }
        },
        {
          path: 'patent-software',
          component: ProductPatentsSoftware,
          meta: {
            title: '中地夺萃（中国）| 软著专利'
          }
        }
      ]
    },
    {
      path:'/plain',
      component: Plain,
      name:'Plain'
    },
    {
      path: '/article',
      component: Article,
      name:'Article'
    }
  ]
})
