const domain = 'http://vue.studyit.io/api';

export default {

    // 获取轮播图的接口
    getLunbo: `${domain}/getlunbo`,

    // 新闻相关接口
    getNL: `${domain}/getnewslist`,
    getND: `${domain}/getnew/`,             // 该接口后面需要一个id

    // 图片相关接口
    photoC: `${domain}/getimgcategory/`,
    photoL: `${domain}/getimages/`,      // 该接口后面需要一个分类id: /getimages/:id
    photoD: `${domain}/getimageinfo/`,   // 该接口后面需要一个图片id: /getimageinfo/:id
    photoT: `${domain}/getthumimages/`,  // 该接口后面需要一个图片id: /getthumimages/:id

    // 商品相关接口
    goodsL: `${domain}/getgoods/`,          // 该接口后面需要一个页码: /getgoods/?pageindex=number
    goodsD: `${domain}/goods/getdesc/`,     // 该接口后面需要一个商品id: /getdesc/:id
    goodsT: `${domain}/getthumimages/`,     // 该接口后面需要一个商品id: /getthumimages/:id
    goodsP: `${domain}/getinfo/`,           // 该接口后面需要一个商品id: /getinfo/:id

    // 购物车相关接口
    shopcL: `${domain}/goods/getshopcarlist/`,  // 该接口后面需要一串id: /getshopcarlist/:ids

    // 评论相关接口
    commentL: `${domain}/getcomments/`,     // 该接口后面需要一个id: /getcomments/:id
    commentS: `${domain}/postcomment/`,     // 该接口后面需要一个id: /postcomment/:id, 该需要content内容
};
