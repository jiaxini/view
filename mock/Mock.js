import { Random , mock } from 'mockjs';

// template
const banners = () => {
    let banners = []
    for(let i = 1; i < 4; ++i){
        banners.push({
            'id': i,
            'img': Random.image('1920x600'),
            'title': Random.cname(4)
        })
    }
    return banners;
} 

const recommends =  () => {
    let recommends = []
    for(let i = 1; i < 5; ++i){
        recommends.push({
            'id': i,
            'title': '松露水润雪肌面膜贴25g*28片',
            'img': Random.image('244x230'),
            'price': Random.float(10, 9999, 2, 2)
        })
    }
    return recommends;
} 

const ads = {
    'news': {
        'id': 1,
        'name': '新品推荐', 
        'products|4': [{
            'id|+1': 1,
            'title': '奇焕光感粉嫩透亮修颜霜 嫩粉色 30ml',
            'img': Random.image('120x150'),
            'price|1-9999.2': 1.00
        }],
        'cover': Random.image('300x400')
    },
    'favourite':{
        'id': 2,
        'name': '猜你喜欢', 
        'products|4': [{
            'id|+1': 1,
            'title': '奇焕光感粉嫩透亮修颜霜 嫩粉色 30ml',
            'img': Random.image('120x150'),
            'price|1-9999.2': 1.00
        }],
        'cover': Random.image('300x400')
    },
    'hot':{
        'id': 3,
        'name': '热卖推荐', 
        'products|4': [{
            'id|+1': 1,
            'title': '奇焕光感粉嫩透亮修颜霜 嫩粉色 30ml',
            'img': Random.image('120x150'),
            'price|1-9999.2': 1.00
        }],
        'cover': Random.image('300x400')
    },
    'sale':{
        'id': 4,
        'name': '限时特卖', 
        'products|4': [{
            'id|+1': 1,
            'title': '奇焕光感粉嫩透亮修颜霜 嫩粉色 30ml',
            'img': Random.image('120x150'),
            'price|1-9999.2': 1.00
        }],
        'cover': Random.image('300x400')
    }
}

const floors =  () => {
    let floors = []
    for(let i = 1; i < 6; ++i){
        let products = [];
        for(let j = 1; j < 7; ++j){
            products.push({
                'id': i * 10 + j,
                'title': '松露水润雪肌面膜贴25g*28片',
                'price': Random.float(1,9999,2,2),
                'img': Random.image('120x150') 
            })
        }
        floors.push({
            'num': i,
            'name': Random.cword(2, 4),
            'eName': Random.word(3.10),
            'cover': Random.image('280x450'),
            'product': products
        })
    }
    return floors;
} 

const user = {
    'name': Random.cname(3),
    'age': Random.natural(1,99)
}

// mock api
mock('v1/banner', 'get', banners);
mock('v1/recommend', 'get', recommends);
mock('v1/ad', 'get', ads);
mock('v1/floor', 'get', floors);
mock('v1/login', 'post', user);