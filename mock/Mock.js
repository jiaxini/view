import { Random , mock } from 'mockjs';

const banners = {
    'list|1-6': [{
        'id|+1': 1,
        'url': Random.dataImage('1920x600', '#222', '#fff' ,'png', 'hello mockjs!'),
    }]

}

mock('v1/banner', 'get', banners);