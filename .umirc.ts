import { defineConfig } from 'umi';
import router from '@/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    title:'123',
  } ,
  routes: router , 
  fastRefresh: {},
});
