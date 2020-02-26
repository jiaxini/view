import { G, P } from '@/common/Http';

// 首页 banner
export const banner = G("v1/banner")
// 首页 今日推荐
export const recommend = G("v1/recommend")
// 首页 广告区
export const ad = G("v1/ad")
// 首页 楼层分类
export const floor = G("v1/floor")
// 用户 登录
export const login = params => P("v1/login", params)

