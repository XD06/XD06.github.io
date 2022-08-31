/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/08/20/hello-world/index.html","64497bf6b0d515bbe45b7405de78bef3"],["/2022/08/24/开端/index.html","a64ed4a36ab46b5a076fd0f9bfdef629"],["/2022/08/25/壁纸1-1/abc.jpg","1527d8a5aeff6a5e5cf3f960c6b14b54"],["/2022/08/25/壁纸1-1/index.html","2113912e71cb70ea336b0a9d32adf369"],["/2022/08/26/计算机网络性能和体系结构（8.26）/index.html","1343a67d74b1e4f249fbf38e730c9c77"],["/2022/08/27/又是一个不眠之夜/index.html","4628fb191eff6cb6d791230679731efa"],["/2022/08/28/计算机网络体系分层思想(8-27)/1.png","aa191362a9ea9b8440c0549a2afbf57a"],["/2022/08/28/计算机网络体系分层思想(8-27)/2.png","da7bdd5427c7f79b16f565fb4cb2d34a"],["/2022/08/28/计算机网络体系分层思想(8-27)/3.png","cb4ac69a94de7d7cdaea90aa81908982"],["/2022/08/28/计算机网络体系分层思想(8-27)/4.png","c3d1d0d1e0df3a395e4d31487b12f546"],["/2022/08/28/计算机网络体系分层思想(8-27)/5.png","6b7a0849d482bc3337ab170d950eb510"],["/2022/08/28/计算机网络体系分层思想(8-27)/index.html","ba16ede067605395caa57b4ee2349d3a"],["/2022/08/29/计算机网络-物理层(一)8-28/1.png","78fcb241ee4abf584bd35bc9b351a92d"],["/2022/08/29/计算机网络-物理层(一)8-28/10.png","190d8ad639f0ab30ffb05c5c6f85642c"],["/2022/08/29/计算机网络-物理层(一)8-28/11.png","0869e000b148a8a0264822be837240e9"],["/2022/08/29/计算机网络-物理层(一)8-28/12.png","ddf4743a4ee1d0dbfe5811eb84b90284"],["/2022/08/29/计算机网络-物理层(一)8-28/13.png","df1f1a2af707a872659ded2ef64b7999"],["/2022/08/29/计算机网络-物理层(一)8-28/2.png","0385c9a6eac33d9808eb0be81e8d4d20"],["/2022/08/29/计算机网络-物理层(一)8-28/3.png","ed1a70458f4f6e58f56fb16199b96470"],["/2022/08/29/计算机网络-物理层(一)8-28/4.png","ebe0268e771479a11eaa63c48f2464ff"],["/2022/08/29/计算机网络-物理层(一)8-28/5.png","3798fa2a787bf45c01ce932d83f58c97"],["/2022/08/29/计算机网络-物理层(一)8-28/6.png","ed916f02572f8b994b80e424e0cc1c80"],["/2022/08/29/计算机网络-物理层(一)8-28/7.png","dbb1cec9aec7f547d1664d2a5e96250e"],["/2022/08/29/计算机网络-物理层(一)8-28/8.png","0847dba571cab87403efe899ba9b7203"],["/2022/08/29/计算机网络-物理层(一)8-28/9.png","9a95a7b574331b9ac67758dc028dd367"],["/2022/08/29/计算机网络-物理层(一)8-28/index.html","ffcd933d03dd17814c20bf4211554dd3"],["/2022/08/30/计算机网络-数据链路(一)8-30/1.png","3b987326b66fe47934a518c544361006"],["/2022/08/30/计算机网络-数据链路(一)8-30/12.png","628251b90f2222fcb69bf87054e9c98e"],["/2022/08/30/计算机网络-数据链路(一)8-30/13.png","622b4f5c4781f8e079c584bbed501239"],["/2022/08/30/计算机网络-数据链路(一)8-30/2.png","c6888e0d441a1116494b71b943a845df"],["/2022/08/30/计算机网络-数据链路(一)8-30/3.png","b2cca27b04434c4c715ede5e0c793bd6"],["/2022/08/30/计算机网络-数据链路(一)8-30/bite.png","cc6213340ef3dbc450cdbdc48d45205f"],["/2022/08/30/计算机网络-数据链路(一)8-30/byte.png","45c8e3c4e1f2a3fe294ad31737d6d54a"],["/2022/08/30/计算机网络-数据链路(一)8-30/fzcz.png","843f6a55b77764becba3a9f24ab7eb3b"],["/2022/08/30/计算机网络-数据链路(一)8-30/index.html","9e289e7ac1213ba44dbb078aa1844572"],["/2022/08/30/计算机网络-数据链路(一)8-30/jo.png","f7c0d19a7dc48da2ff6a610b1ed8c35e"],["/2022/08/30/计算机网络-数据链路(一)8-30/tm.png","87159b6ce1b1296d49abb864781271d4"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan.png","584bac7270055f1c16fb34bfe8b92476"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan2.png","d4ae08b5e79838166b9781c700437b13"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan3.png","1348f8d237a095a6b873f860f87b00a8"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan4.png","5296dbfda75cb66549593af5b4c132ad"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan5.png","484999971c810fd2bc7fd76093399d11"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan6.png","50a7ff3e03efb03f410109b6287d4525"],["/2022/08/30/计算机网络-物理层(二)8-29/1.png","e29095d342a3039f043d1a9d2ed24857"],["/2022/08/30/计算机网络-物理层(二)8-29/10.png","d54fffff6761c9ffc94df1274864bf2b"],["/2022/08/30/计算机网络-物理层(二)8-29/11.png","8dc15168d5c01c389f7dcc0fc9bf813a"],["/2022/08/30/计算机网络-物理层(二)8-29/12.png","af941226b52fb51701f957d5c05bf644"],["/2022/08/30/计算机网络-物理层(二)8-29/13.png","e837455b306621f02a833b0c9b99a085"],["/2022/08/30/计算机网络-物理层(二)8-29/14.png","901009f0544c380dda65c33997dfd419"],["/2022/08/30/计算机网络-物理层(二)8-29/15.png","cacd3c2a6a94a350f9ed72eab3c9ca4e"],["/2022/08/30/计算机网络-物理层(二)8-29/16.png","ee7d535a54a26bd5835de16a4ed5f826"],["/2022/08/30/计算机网络-物理层(二)8-29/17.png","a998bb139044a515d2dd67cafa106239"],["/2022/08/30/计算机网络-物理层(二)8-29/18.png","9daa1fe7eb66d6fab4bddf997717a804"],["/2022/08/30/计算机网络-物理层(二)8-29/19.png","8412800c1e8ced73bdc4e4e7fe27925f"],["/2022/08/30/计算机网络-物理层(二)8-29/2.png","e0ba62ea7cf7fae5558d6ad56a555045"],["/2022/08/30/计算机网络-物理层(二)8-29/20.png","51efb86f29895f4157ccd8a4b97b99c0"],["/2022/08/30/计算机网络-物理层(二)8-29/21.png","368fdc1175806eaab58a42e9622d4a5f"],["/2022/08/30/计算机网络-物理层(二)8-29/22.png","82073f54bb63e86a27b277eac4bb470d"],["/2022/08/30/计算机网络-物理层(二)8-29/23.png","95348000fe507725776ea3fa542349a0"],["/2022/08/30/计算机网络-物理层(二)8-29/24.png","ca3bec270b455008df4934b977dc9fee"],["/2022/08/30/计算机网络-物理层(二)8-29/25.png","aaf93bb1e658878995d0d1a2d5117748"],["/2022/08/30/计算机网络-物理层(二)8-29/3.png","20980fe827dc41c9acfcd644a2e6df58"],["/2022/08/30/计算机网络-物理层(二)8-29/4.png","9f44a1fa083ffd7bdcbbb5fb48029050"],["/2022/08/30/计算机网络-物理层(二)8-29/5.png","033a3589f1d59a4a500a4ded5af78490"],["/2022/08/30/计算机网络-物理层(二)8-29/6.png","27f1a93750a61bf6c91ec349aa77d9eb"],["/2022/08/30/计算机网络-物理层(二)8-29/7.png","fb681c352a61da54666798ad7d388eb3"],["/2022/08/30/计算机网络-物理层(二)8-29/8.png","28c6e07d99a0d11990234089d11739c3"],["/2022/08/30/计算机网络-物理层(二)8-29/9.png","057a6f3c663dcdf97feacd902192e022"],["/2022/08/30/计算机网络-物理层(二)8-29/index.html","b2cbc50a9bca7a93802fc6738f79ca40"],["/about/index.html","71dd4dbb0191786825af6af6e3d7c3ff"],["/archives/2022/08/index.html","6109d13f44488dee6b73fe04f042efa0"],["/archives/2022/index.html","8d45da1832723f205b4742e383d7782b"],["/archives/index.html","e40583ec4dda82df84c6e667fc183611"],["/categories/index.html","d98b12cac18b4b9c933c37323d515a4f"],["/categories/机网/index.html","58832cd79e937099a15731c4ce338e28"],["/css/main.css","cad5ba8246f3229d786db26ee14a9483"],["/google47c145bfb7c98004.html","2d07a3853d978c4c34c79f77746ee935"],["/images/1.jpg","0a53047d1013252766cd4485628483a9"],["/images/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/images/3.jpg","f50648c341b6890be845a076e2c4773b"],["/images/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/images/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/images/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/s.jpg","6ab44b7f243561445ffa27fac8a2aa34"],["/images/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/images/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/images/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/images/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/images/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","b4e39a40a5f49a6ad6e131413de1c1c7"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/three/README.html","50a33f3253d5b324fba8c591ef6ca7f5"],["/js/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/js/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/js/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/js/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/js/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/js/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/js/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/js/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/js/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/js/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","319112f59d0017c051638fe3a44f64fd"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","c4d1d54a53b12247db4b8ed9d0ee7529"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/message/index.html","4c5519368bc84a1b5a2685f912d2f9b2"],["/photos/index.html","71263cd404b442f148ada1933368149d"],["/sw-register.js","e0925c70fd921c7703491d5ef333a8e8"],["/tags/index.html","5a0219956e2c8c781de5f9b2dca54601"],["/tags/日常/index.html","936bb54c354afbb74f9132b76da33384"],["/tags/第一篇/index.html","27ccd579f8c18fda4aae4e401a129cfe"],["/tags/网络/index.html","193c6a5cd9d240fcba61ccd363352270"]];
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
