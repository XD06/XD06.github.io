/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/08/24/hello-world/index.html","87d2b9647bf9e843c674ef443f767a44"],["/2022/08/24/开端/index.html","10d24e2383dd1ff35f6577fb14b52358"],["/2022/08/25/分享几张好看的图片/index.html","40899c6580e3ea3dafff3e3a8c8592b0"],["/APlayer/README.html","4eb316e5e812e6513ff5c9017a40ae2f"],["/APlayer/demo/demo.js","2645fd6ec60e7f7bae68849a7a4ae2da"],["/APlayer/demo/index.html","49a5e59561e4c9434b8d9c06c1e7fc97"],["/APlayer/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/APlayer/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/APlayer/docs/README.html","2de7ffaf4664f7f7035467bc06e95045"],["/APlayer/docs/config.js","0abf5641dd7d45080335075a94dee6fa"],["/APlayer/docs/ecosystem.html","65fdc70370e3d2b5d8fd7a5cad0c4a1e"],["/APlayer/docs/index.html","381c5cff39d2f596fb9478624ecbd05e"],["/APlayer/docs/landing.html","916a390fd0ff98576bfa23f13f9c6d51"],["/APlayer/docs/support.html","098f17a5c05977254731d60d7a2b430e"],["/APlayer/docs/zh-Hans/README.html","900aaf39dac5458f7619f9ba69671027"],["/APlayer/docs/zh-Hans/ecosystem.html","692b079de3e02d6b38cc02b7e2d1939c"],["/APlayer/docs/zh-Hans/support.html","8b9979135c616467771039b796a5859c"],["/APlayer/src/assets/loading.svg","00b49be9696564adabcfbf56b47adf37"],["/APlayer/src/assets/loop-all.svg","4c2f57b4bdf30576d8f1459faa2d1b86"],["/APlayer/src/assets/loop-none.svg","5d256b811354a3496146bd66ee396507"],["/APlayer/src/assets/loop-one.svg","0497af0811f7ed8d9942b3c0661da31e"],["/APlayer/src/assets/lrc.svg","34959915602620f1487045787dcd07af"],["/APlayer/src/assets/menu.svg","f0c4c0760fe294c81f0ef3d50733bd09"],["/APlayer/src/assets/order-list.svg","76fc3618f1c795f71f30881fd4511bf1"],["/APlayer/src/assets/order-random.svg","044f27e66ef1358309563bce9e620b1a"],["/APlayer/src/assets/pause.svg","f9284404b03c28fa4d82afa5fa3e01d1"],["/APlayer/src/assets/play.svg","b67ed7c1a38ba75a3318e64be375910e"],["/APlayer/src/assets/right.svg","7e4ed454ee81d36988a8e60eb911ffe3"],["/APlayer/src/assets/skip.svg","9dd79492f5708fbccb3f1e8f6d94b38e"],["/APlayer/src/assets/volume-down.svg","26b7f500da1a106d644a2c0fae06eac3"],["/APlayer/src/assets/volume-off.svg","fb4a583b2d471877375b360337e4c9fe"],["/APlayer/src/assets/volume-up.svg","64b34d9a52e90779b480770c8deb9458"],["/APlayer/src/js/bar.js","591b24ab12bb43da399688f32a611119"],["/APlayer/src/js/controller.js","833a694adb0470f77d48d8d0efa03338"],["/APlayer/src/js/events.js","afb3077727783bc2b388bf24612d42df"],["/APlayer/src/js/icons.js","aadf1c9a0a93e3f05c626893f35ab555"],["/APlayer/src/js/index.js","9b9acbae443a9879c2ad2470ad596752"],["/APlayer/src/js/list.js","4773e81a33c6d67a3438b9f494bb9121"],["/APlayer/src/js/lrc.js","cc9bd7f151152dae4f257b3d181909d3"],["/APlayer/src/js/options.js","fcf7391b586dae62caf520e0df5b59c0"],["/APlayer/src/js/player.js","25cc5b919b6abd1551fc8b1258e3c7ad"],["/APlayer/src/js/storage.js","45e9920c29981ccf89b5aab92a9b8246"],["/APlayer/src/js/template.js","7c539146de2fdfb428f0992759c93348"],["/APlayer/src/js/timer.js","8ed264cb14630308ba3deef2a1f3b3b3"],["/APlayer/src/js/utils.js","912d6e8037e35be379406973f633c09e"],["/APlayer/webpack/dev.config.js","844ed8e5ed0742c649353d047507ebe0"],["/APlayer/webpack/prod.config.js","1f44cab1fbab46de7756c2ad5cb81868"],["/MetingJS/README.html","9efec212b9d009d1891637edd3e4f3a3"],["/MetingJS/source/Meting.js","301aac04a2e144ee4ae267a63387f06a"],["/about/index.html","7622d08d733e8916f24d495dda2ce33e"],["/archives/2022/08/index.html","0f0da3655452b66f2264e7c880ca0114"],["/archives/2022/index.html","7179b3ccc3b8c3a2c9aa060eea7df1fd"],["/archives/index.html","fcaa29b76db1fb73680322c4d6f9cceb"],["/categories/index.html","44b4700aae2d75320f87d08f09fece9d"],["/css/main.css","ee35169bdaa74d11ab88140d4ed4610a"],["/hexo-leancloud-counter-security/README.html","99fc6b0ef76e48d14d06003a19e1d41d"],["/hexo-leancloud-counter-security/index.js","e0fcecf44a2b99b71d49e664623e910b"],["/images/1.jpg","0a53047d1013252766cd4485628483a9"],["/images/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/images/3.jpg","f50648c341b6890be845a076e2c4773b"],["/images/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/images/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/images/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/s.jpg","6ab44b7f243561445ffa27fac8a2aa34"],["/images/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/images/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/images/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/images/wallhaven-o3z2q5_1570x867.png","20b0c74fd71ff5b2c95f776252727ce4"],["/images/wallhaven-pkgkkp_1920x1080.png","8e21141770621d28434fc44592edc766"],["/images/wallhaven-rdkyx1_2560x1440.png","601a76e9084d531a6d4daa1bfc12e977"],["/images/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/images/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/img/abc.jpg","1527d8a5aeff6a5e5cf3f960c6b14b54"],["/img/wallhaven-o3z2q5_1570x867.png","20b0c74fd71ff5b2c95f776252727ce4"],["/img/wallhaven-pkgkkp_1920x1080.png","8e21141770621d28434fc44592edc766"],["/img/wallhaven-rdkyx1_2560x1440.png","601a76e9084d531a6d4daa1bfc12e977"],["/index.html","85e0f5d4e54b6c874e345844daa0c471"],["/js/algolia-search.js","6f68f3b8f74659bae9281df21403a824"],["/js/bookmark.js","c9dd03bb3adf363da203b3dc3e6a510f"],["/js/local-search.js","a8891473a735eefa1ffd0ff8e20fefb2"],["/js/motion.js","50dc097a0562fe5e19f47ada9f46901d"],["/js/next-boot.js","ff2b4eaaf76910c79e8d3b3cb729c685"],["/js/schemes/muse.js","2649f171f909f94d4460c8987b2850b0"],["/js/schemes/pisces.js","9d7457ced173ef29afabf23d103997b8"],["/js/three/README.html","04974e4dc4867f5b11ff939e03fa9296"],["/js/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/js/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/js/three/gulpfile.js","62d3e33dfc50e595601edf1e9d1e88a6"],["/js/three/lib/CanvasRenderer.js","8396e905bb847f3bab29a7165d2ec85c"],["/js/three/lib/Projector.js","defc6673bb38b0a8cdf90a956a03237d"],["/js/three/src/canvas_lines.js","669afdf5b03f327dc40cbb6f6ebf7ec6"],["/js/three/src/canvas_sphere.js","e91ea826f2b118d2b012146ba646ae2a"],["/js/three/src/three-waves.js","f41dd701d2ad33946635c9a07b092da3"],["/js/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/js/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/js/utils.js","85c3b4f0b1ca9c35eba6c1320923e5c3"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","573b580d0ed6f66d7b5da890ffd9fbf6"],["/lib/fancybox/source/jquery.fancybox.css","6c717511d188a07285076f5fc97c3903"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","4cdc642670cb7046d378b149918b296f"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pjax/CHANGELOG.html","0f079f8e9b848fed2356d117676a0275"],["/lib/pjax/README.html","724fdff567c45aa1899680326e455a17"],["/lib/pjax/example/example.js","b40424e60c367951d11fc50ec4800c7e"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3e1ddd9ac2fa321e126ec3e832be5e45"],["/lib/pjax/lib/abort-request.js","4062e221a63934cfa5647f47fb305da3"],["/lib/pjax/lib/eval-script.js","32b6b7c44b00625334c6426e22e3cd1d"],["/lib/pjax/lib/events/off.js","aaf3dc427114b554f675ddeaae3524f0"],["/lib/pjax/lib/events/on.js","b7f955087f81035919ea5a52412528d0"],["/lib/pjax/lib/events/trigger.js","2c82d1574fb49ca8ce47465088ce17e8"],["/lib/pjax/lib/execute-scripts.js","be8fcdec0768337ccdbd93d4e6b0f95e"],["/lib/pjax/lib/foreach-els.js","b8124047bcd787e7c520944a8dc8cf03"],["/lib/pjax/lib/foreach-selectors.js","cc606c5cf7230dab336fd2881470fb59"],["/lib/pjax/lib/is-supported.js","a0a58ee888996e3f2606371dc970d1eb"],["/lib/pjax/lib/parse-options.js","b20e114cdfa789cf6aec3707fb8e5c23"],["/lib/pjax/lib/proto/attach-form.js","beedec09677871119986e60952038518"],["/lib/pjax/lib/proto/attach-link.js","b42558fa6b35502e1dff7c346bd1ecce"],["/lib/pjax/lib/proto/handle-response.js","218b4065241a4a7826cf73b9ce6854de"],["/lib/pjax/lib/proto/log.js","66d68cab792e53da210941755b56e38c"],["/lib/pjax/lib/proto/parse-element.js","eae7a7674e09bbf3a379b0c34aeba789"],["/lib/pjax/lib/send-request.js","3391b057432256ea84c518292de3446f"],["/lib/pjax/lib/switches-selectors.js","9eed22ff24a4ed72d9a54c260b401d4f"],["/lib/pjax/lib/switches.js","b5bec0cf9937f5c416c1251d49cfeb9a"],["/lib/pjax/lib/uniqueid.js","b0af2023453f9dc5400883ca0f7a8952"],["/lib/pjax/lib/util/clone.js","b0f69e40d849c64a943dfa9414a4dbe3"],["/lib/pjax/lib/util/contains.js","324951fb6179454f1d92bbef33c16467"],["/lib/pjax/lib/util/extend.js","9076b49c137f28c50ccbd2d0b5d369c4"],["/lib/pjax/lib/util/noop.js","16a46d43980ee65417ce7a7111e7c96e"],["/lib/pjax/lib/util/update-query-string.js","a53dec5eabb722f0213a6cd32318ebd1"],["/lib/pjax/pjax.js","917133f66e3489d23c7afef239cb0eae"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","7e3dcb6bc01a04cb68d6a1a7b114ac4e"],["/lib/pjax/tests/lib/eval-scripts.js","7028902ee9f4f9bf2d982bf72482f209"],["/lib/pjax/tests/lib/events.js","622b3f34a09445c843416be2bef5c4aa"],["/lib/pjax/tests/lib/execute-scripts.js","f0c97d2766486e03dec4c6178330f2ca"],["/lib/pjax/tests/lib/foreach-els.js","e080dd3b67b2b4fd5cf92b5bbf7690ba"],["/lib/pjax/tests/lib/foreach-selectors.js","09d5ba5018111ce071ba0df625a4f7c2"],["/lib/pjax/tests/lib/is-supported.js","13822d4242500fa6be450fdc849bfe01"],["/lib/pjax/tests/lib/parse-options.js","511b7e975c015f57c858469d05df9e0f"],["/lib/pjax/tests/lib/proto/attach-form.js","461f2982605e810c55a1fd87eda6d5b8"],["/lib/pjax/tests/lib/proto/attach-link.js","9aa50529036d1ecedc40dc2f31efed8f"],["/lib/pjax/tests/lib/proto/handle-response.js","ed6dbc859acdb33f34824d11c1143d96"],["/lib/pjax/tests/lib/proto/parse-element.js","6166e9045800957a9de1c16c3a0f25c5"],["/lib/pjax/tests/lib/send-request.js","aabba76a46251c601953b41d03868aae"],["/lib/pjax/tests/lib/switch-selectors.js","4ca8613dfd18402cfcd2550e23bc9441"],["/lib/pjax/tests/lib/switches.js","676f83bef79378494da566ee189f3777"],["/lib/pjax/tests/lib/uniqueid.js","03a38276a322dd995a1946349de4a901"],["/lib/pjax/tests/lib/util/clone.js","eb93bf8030a471bae03ede9ef6f6d10b"],["/lib/pjax/tests/lib/util/contains.js","0ee9a6d8613cfb35689919e0c2b74b68"],["/lib/pjax/tests/lib/util/extend.js","1ad3827d215ee04a06ea02b7b2264095"],["/lib/pjax/tests/lib/util/noop.js","97f4f537dfea87461337092c4fe3ef3e"],["/lib/pjax/tests/lib/util/update-query-string.js","e7b78ad2d2d1b7c0c3b1015132429209"],["/lib/pjax/tests/setup.js","d74b2845fdd0ed189cb0d7f57205a9a5"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/pace/README.html","571e05db1fe8af3d29f15cf1560564e0"],["/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/photos/index.html","79622c4f5f2c8f6020c2c3deebdfa4e4"],["/sw-register.js","9a07fbae94d8e5f77d1aac1090160736"],["/tags/index.html","92ef19f9a0cc9426c1199edb7275628d"],["/tags/第一篇/index.html","8b7e92cd5cc92e62b5aa644723f87c00"]];
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