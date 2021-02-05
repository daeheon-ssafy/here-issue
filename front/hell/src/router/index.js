import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Opinion from '../views/Opinion/OpinionPage.vue';
import OpinionWrite from '../views/Opinion/OpinionWrite.vue';
import OpinionDetail from '../views/Opinion/OpinionDetail.vue';
import Club from '../views/Club/ClubPage.vue';
import ClubDetail from '../views/Club/ClubDetail.vue';
import Issue from '../views/Issue/IssuePage.vue';
import IssueDetail from '../views/Issue/IssueDetail.vue';
import Join from '../views/Member/Join.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  //opinion
  {
    path: '/opinion',
    name: 'Opinion',
    component: Opinion,
  },
  {
    path: '/opinionWrite',
    name: 'OpinionWrite',
    component: OpinionWrite,
  },
  {
    path: '/opinionDetail',
    name: 'OpinionDetail',
    component: OpinionDetail,
  },

  //club
  {
    path: '/club',
    name: 'Club',
    component: Club,
  },
  {
    path: '/clubDetail',
    name: 'ClubDetail',
    component: ClubDetail,
  },

  //issue
  {
    path: '/issue',
    name: 'Issue',
    component: Issue,
  },
  {
    path: '/issueDetail',
    name: 'IssueDetail',
    component: IssueDetail,
  },

  //member
  {
    path: '/join',
    name: 'Join',
    component: Join,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
