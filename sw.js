/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/08/24/开端/index.html","4c9f843dc8ae57ef1d919aa5576fd1c8"],["/2022/08/25/hello-world/index.html","ed182533a49fad290bf10dfdef00576b"],["/2022/08/25/壁纸1-1/abc.jpg","e4ce3bb259010e59e0fc9a1bd281fe31"],["/2022/08/25/壁纸1-1/index.html","a7c7a767ff332b2de0e68328f31937a0"],["/2022/08/25/壁纸1-1/wallhaven-28mkg9_3840x1600.png","376df1a00213e050c6efffa4941c8051"],["/2022/08/25/壁纸1-1/wallhaven-o3z2q5_1570x867.png","f5ac9541d2034725638f897c5767a8d4"],["/2022/08/25/壁纸1-1/wallhaven-pkgkkp_1920x1080.png","af8b075d230478709bf809931a650671"],["/2022/08/25/壁纸1-1/wallhaven-q21lk5_3840x2160.png","1e17179a610ffb747eda0627c08667de"],["/2022/08/25/壁纸1-1/wallhaven-q2xwyd_3840x1443.png","19aaba1b5c149065d62bc218c6af4cbb"],["/2022/08/25/壁纸1-1/wallhaven-rdkyx1_2560x1440.png","fd0a9354fbd74ef062e437b29893c0fc"],["/about/index.html","49745d5c668da943b43bf51a89d21e08"],["/archives/2022/08/index.html","d7e053f09e44b1339635a65027e9edc3"],["/archives/2022/index.html","210a17751ea3900508d313baa5a49c50"],["/archives/index.html","45f9cddab375014258bbe4f5ca41aa9f"],["/categories/index.html","bb614447ab580f6df11893ab59533f45"],["/css/main.css","60dab75ed79eb5ddf04d93165f9ffec2"],["/hexo-leancloud-counter-security/README.html","df5e63fca15a139a39ec5d91913144e7"],["/hexo-leancloud-counter-security/index.js","b69427c58a735b51bfaec2520d72e972"],["/images/1.jpg","426dd155589b3f796ffbbc9a4445b9f4"],["/images/2.jpg","b039285e2d09f9da017fdaba9ce11ad9"],["/images/3.jpg","7b56f16a96ae3a044c0ced32263041ad"],["/images/4.jpg","ee6369250207ef1d10d0478d99d02330"],["/images/5.jpg","f2d20f8d8c245b1e12309d3f878ab7c2"],["/images/6.jpg","d31ac49dbddc886de70b73baba9861b9"],["/images/algolia_logo.svg","f60fbbe4a8afa312b3f6d12182558861"],["/images/apple-touch-icon-next.png","c0c857a9d84c0b073561f12a4145b7c9"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/cc-by-nc-nd.svg","e032474b07232fa375189b632f46ee7e"],["/images/cc-by-nc-sa.svg","df14e190842a356254f3f2f5caf816ba"],["/images/cc-by-nc.svg","ca4ff25d2b4064bee3d474935992d458"],["/images/cc-by-nd.svg","edc9241deb6d6ff3edd97d8ec573bcd1"],["/images/cc-by-sa.svg","d0f02e930965a11f3c88c565b61de661"],["/images/cc-by.svg","a5f24f9139a51cc2f1c0380ae6e0599d"],["/images/cc-zero.svg","0babd771f9b967fec665269570cb9c0e"],["/images/favicon-16x16-next.png","5f832a9ab20856d99f2c63dc817dc844"],["/images/favicon-32x32-next.png","0b65f18c8c519da74bc2c1694277ad8d"],["/images/logo.svg","4c71847f200e47e8667731d00f29e300"],["/images/s.jpg","e25aaace944d5f02090ba45ca0441d4a"],["/images/spy.jpg","9f47345bf71937beb74f088535f209c6"],["/images/time.jpg","c6e7fff66d0bbe248c9a6338278138d3"],["/images/time1.jpg","8ec9be410da4bf06627c4f03d6610efe"],["/images/wallhaven-28mkg9_3840x1600.png","376df1a00213e050c6efffa4941c8051"],["/images/wallhaven-o3z2q5_1570x867.png","f5ac9541d2034725638f897c5767a8d4"],["/images/wallhaven-pkgkkp_1920x1080.png","af8b075d230478709bf809931a650671"],["/images/wallhaven-q21lk5_3840x2160.png","1e17179a610ffb747eda0627c08667de"],["/images/wallhaven-q2xwyd_3840x1443.png","19aaba1b5c149065d62bc218c6af4cbb"],["/images/wallhaven-rdkyx1_2560x1440.png","fd0a9354fbd74ef062e437b29893c0fc"],["/images/wyu.jpg","f20b0028292faf221bfa25b2d755d091"],["/images/yanjiang.jpg","ab8ab6468e4b3dc962b4d243ae0c7659"],["/index.html","05fb79c5b176ab803ae899529536636b"],["/js/algolia-search.js","6f68f3b8f74659bae9281df21403a824"],["/js/bookmark.js","c9dd03bb3adf363da203b3dc3e6a510f"],["/js/local-search.js","a8891473a735eefa1ffd0ff8e20fefb2"],["/js/motion.js","50dc097a0562fe5e19f47ada9f46901d"],["/js/next-boot.js","ff2b4eaaf76910c79e8d3b3cb729c685"],["/js/schemes/muse.js","2649f171f909f94d4460c8987b2850b0"],["/js/schemes/pisces.js","9d7457ced173ef29afabf23d103997b8"],["/js/three/README.html","04974e4dc4867f5b11ff939e03fa9296"],["/js/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/js/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/js/three/gulpfile.js","62d3e33dfc50e595601edf1e9d1e88a6"],["/js/three/lib/CanvasRenderer.js","8396e905bb847f3bab29a7165d2ec85c"],["/js/three/lib/Projector.js","defc6673bb38b0a8cdf90a956a03237d"],["/js/three/src/canvas_lines.js","669afdf5b03f327dc40cbb6f6ebf7ec6"],["/js/three/src/canvas_sphere.js","e91ea826f2b118d2b012146ba646ae2a"],["/js/three/src/three-waves.js","f41dd701d2ad33946635c9a07b092da3"],["/js/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/js/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/js/utils.js","85c3b4f0b1ca9c35eba6c1320923e5c3"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","6c717511d188a07285076f5fc97c3903"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","4cdc642670cb7046d378b149918b296f"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","724fdff567c45aa1899680326e455a17"],["/lib/pjax/example/example.js","b40424e60c367951d11fc50ec4800c7e"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3e1ddd9ac2fa321e126ec3e832be5e45"],["/lib/pjax/lib/abort-request.js","4062e221a63934cfa5647f47fb305da3"],["/lib/pjax/lib/eval-script.js","32b6b7c44b00625334c6426e22e3cd1d"],["/lib/pjax/lib/events/off.js","aaf3dc427114b554f675ddeaae3524f0"],["/lib/pjax/lib/events/on.js","b7f955087f81035919ea5a52412528d0"],["/lib/pjax/lib/events/trigger.js","2c82d1574fb49ca8ce47465088ce17e8"],["/lib/pjax/lib/execute-scripts.js","be8fcdec0768337ccdbd93d4e6b0f95e"],["/lib/pjax/lib/foreach-els.js","b8124047bcd787e7c520944a8dc8cf03"],["/lib/pjax/lib/foreach-selectors.js","cc606c5cf7230dab336fd2881470fb59"],["/lib/pjax/lib/is-supported.js","a0a58ee888996e3f2606371dc970d1eb"],["/lib/pjax/lib/parse-options.js","b20e114cdfa789cf6aec3707fb8e5c23"],["/lib/pjax/lib/proto/attach-form.js","beedec09677871119986e60952038518"],["/lib/pjax/lib/proto/attach-link.js","b42558fa6b35502e1dff7c346bd1ecce"],["/lib/pjax/lib/proto/handle-response.js","218b4065241a4a7826cf73b9ce6854de"],["/lib/pjax/lib/proto/log.js","66d68cab792e53da210941755b56e38c"],["/lib/pjax/lib/proto/parse-element.js","eae7a7674e09bbf3a379b0c34aeba789"],["/lib/pjax/lib/send-request.js","3391b057432256ea84c518292de3446f"],["/lib/pjax/lib/switches-selectors.js","9eed22ff24a4ed72d9a54c260b401d4f"],["/lib/pjax/lib/switches.js","b5bec0cf9937f5c416c1251d49cfeb9a"],["/lib/pjax/lib/uniqueid.js","b0af2023453f9dc5400883ca0f7a8952"],["/lib/pjax/lib/util/clone.js","b0f69e40d849c64a943dfa9414a4dbe3"],["/lib/pjax/lib/util/contains.js","324951fb6179454f1d92bbef33c16467"],["/lib/pjax/lib/util/extend.js","9076b49c137f28c50ccbd2d0b5d369c4"],["/lib/pjax/lib/util/noop.js","16a46d43980ee65417ce7a7111e7c96e"],["/lib/pjax/lib/util/update-query-string.js","a53dec5eabb722f0213a6cd32318ebd1"],["/lib/pjax/pjax.js","917133f66e3489d23c7afef239cb0eae"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","7e3dcb6bc01a04cb68d6a1a7b114ac4e"],["/lib/pjax/tests/lib/eval-scripts.js","7028902ee9f4f9bf2d982bf72482f209"],["/lib/pjax/tests/lib/events.js","622b3f34a09445c843416be2bef5c4aa"],["/lib/pjax/tests/lib/execute-scripts.js","f0c97d2766486e03dec4c6178330f2ca"],["/lib/pjax/tests/lib/foreach-els.js","e080dd3b67b2b4fd5cf92b5bbf7690ba"],["/lib/pjax/tests/lib/foreach-selectors.js","09d5ba5018111ce071ba0df625a4f7c2"],["/lib/pjax/tests/lib/is-supported.js","13822d4242500fa6be450fdc849bfe01"],["/lib/pjax/tests/lib/parse-options.js","511b7e975c015f57c858469d05df9e0f"],["/lib/pjax/tests/lib/proto/attach-form.js","461f2982605e810c55a1fd87eda6d5b8"],["/lib/pjax/tests/lib/proto/attach-link.js","9aa50529036d1ecedc40dc2f31efed8f"],["/lib/pjax/tests/lib/proto/handle-response.js","ed6dbc859acdb33f34824d11c1143d96"],["/lib/pjax/tests/lib/proto/parse-element.js","6166e9045800957a9de1c16c3a0f25c5"],["/lib/pjax/tests/lib/send-request.js","aabba76a46251c601953b41d03868aae"],["/lib/pjax/tests/lib/switch-selectors.js","4ca8613dfd18402cfcd2550e23bc9441"],["/lib/pjax/tests/lib/switches.js","676f83bef79378494da566ee189f3777"],["/lib/pjax/tests/lib/uniqueid.js","03a38276a322dd995a1946349de4a901"],["/lib/pjax/tests/lib/util/clone.js","eb93bf8030a471bae03ede9ef6f6d10b"],["/lib/pjax/tests/lib/util/contains.js","0ee9a6d8613cfb35689919e0c2b74b68"],["/lib/pjax/tests/lib/util/extend.js","1ad3827d215ee04a06ea02b7b2264095"],["/lib/pjax/tests/lib/util/noop.js","97f4f537dfea87461337092c4fe3ef3e"],["/lib/pjax/tests/lib/util/update-query-string.js","e7b78ad2d2d1b7c0c3b1015132429209"],["/lib/pjax/tests/setup.js","d74b2845fdd0ed189cb0d7f57205a9a5"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/photos/index.html","2bb050630f85cbd33d4616f2fe9ab1f2"],["/sw-register.js","1445652ccaa2185a941c1968d0e98982"],["/tags/index.html","32b6da541b7a840bb736cc396cfec50e"],["/tags/第一篇/index.html","4b8865fe5edaa84d282f99de4fea0b05"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
