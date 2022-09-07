/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/08/20/hello-world/index.html","8b9db2f7923a6a3d94f35ec235845bed"],["/2022/08/24/开端/index.html","b8f2e6b8e09a75185b8837f6c8cfcfe4"],["/2022/08/25/分享壁纸(一)/abc.jpg","1527d8a5aeff6a5e5cf3f960c6b14b54"],["/2022/08/25/分享壁纸(一)/index.html","afbe642b19145c0159955257ae373c1f"],["/2022/08/26/计算机网络性能和体系结构（8.26）/index.html","ff54f27b2a811ec8476a755ab1a03ec6"],["/2022/08/27/又是一个不眠之夜/index.html","179d6587adc4a83320a01ad42f510643"],["/2022/08/28/计算机网络体系分层思想(8-27)/1.png","d3ff9e5a0ed98b151fffcad48e90a098"],["/2022/08/28/计算机网络体系分层思想(8-27)/2.png","96dd1e479914db2a2ba963ea88484b39"],["/2022/08/28/计算机网络体系分层思想(8-27)/3.png","b8fe4a29f46a93c1de3627c02768a767"],["/2022/08/28/计算机网络体系分层思想(8-27)/4.png","0da9c224cbeef9285808b35da836d8ea"],["/2022/08/28/计算机网络体系分层思想(8-27)/5.png","4df7a89f4d7fb14fe876121a4e8206d8"],["/2022/08/28/计算机网络体系分层思想(8-27)/6.png","1fa99ab1d4f703dab72b4c6ec8072d36"],["/2022/08/28/计算机网络体系分层思想(8-27)/index.html","d7f39df89c49320cedf3efdcde20cd47"],["/2022/08/29/计算机网络-物理层(一)8-28/1.png","ba3d85b8aaf8bc900d3da03fc6898b02"],["/2022/08/29/计算机网络-物理层(一)8-28/10.png","234e6533c9f29d06475b3090b9303e32"],["/2022/08/29/计算机网络-物理层(一)8-28/11.png","4e2684421f74a52ca09237f94084154b"],["/2022/08/29/计算机网络-物理层(一)8-28/12.png","463556886291363ee35edf52632e48d6"],["/2022/08/29/计算机网络-物理层(一)8-28/13.png","e6c0b70f0321c70b44abdac52ce9bd9d"],["/2022/08/29/计算机网络-物理层(一)8-28/2.png","83ee1d35bc77d33823df70167655e438"],["/2022/08/29/计算机网络-物理层(一)8-28/3.png","09ba5f0f6958e7c7aa06217c5c509ce2"],["/2022/08/29/计算机网络-物理层(一)8-28/4.png","256042c0015ca110e4f7f98e97f425fd"],["/2022/08/29/计算机网络-物理层(一)8-28/5.png","f1de7892acd7f6c9fe85da0d5895b31d"],["/2022/08/29/计算机网络-物理层(一)8-28/6.png","84e163c285fdcd10d9d3cbffce1c44e0"],["/2022/08/29/计算机网络-物理层(一)8-28/7.png","11bb115b61ffef80f6e2116d44a57513"],["/2022/08/29/计算机网络-物理层(一)8-28/8.png","2ef8f08923208b29ed38d58738b2a513"],["/2022/08/29/计算机网络-物理层(一)8-28/9.png","9f687c469a912e3af822eaf901b22189"],["/2022/08/29/计算机网络-物理层(一)8-28/index.html","bf74f8249561692a8b33cda49ae0416d"],["/2022/08/30/计算机网络-数据链路(一)8-30/1.png","2395ff850d7926a509eb14f4c53d25d7"],["/2022/08/30/计算机网络-数据链路(一)8-30/12.png","a3b57d794e32b6542b8f398075e1ef63"],["/2022/08/30/计算机网络-数据链路(一)8-30/13.png","809f97ecb5a94bec4b38c1bf523f4eb3"],["/2022/08/30/计算机网络-数据链路(一)8-30/2.png","9957cc9c674d145b95bcc7f76e14f9c4"],["/2022/08/30/计算机网络-数据链路(一)8-30/3.png","9342b8be93e9c204890c0265c9677103"],["/2022/08/30/计算机网络-数据链路(一)8-30/bite.png","b2128fc0d6725003b939c54c9c103d0f"],["/2022/08/30/计算机网络-数据链路(一)8-30/byte.png","1349bc0a897b32e066de612393954b40"],["/2022/08/30/计算机网络-数据链路(一)8-30/fzcz.png","543696bc7afdcd4ed2a224229e0d3a7b"],["/2022/08/30/计算机网络-数据链路(一)8-30/index.html","555b9feee986c0ded89f0d08acab26e8"],["/2022/08/30/计算机网络-数据链路(一)8-30/jo.png","2810f0d5995c1bf59a046e9ecfd4ed08"],["/2022/08/30/计算机网络-数据链路(一)8-30/tm.png","ba773056664a0776ed95ea6a1ad3bf39"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan.png","316a818b3763b18fe4b9a88b36602c91"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan2.png","eddadf74cdcebdf8dc3c6d92f14ac3bb"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan3.png","1d52719c060330869b7ddb523e0302c0"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan4.png","0b712e0b33cc54376bae07008727aab5"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan5.png","64b59cc7463f4d0233f690c2a86f1def"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan6.png","978c58d29cd002ceb36b1c233e35fff6"],["/2022/08/30/计算机网络-物理层(二)8-29/1.png","ce52a08da7a732412ad3e26e46601c0a"],["/2022/08/30/计算机网络-物理层(二)8-29/10.png","f0b070572ed2e1c01cd0a8b3d7821c80"],["/2022/08/30/计算机网络-物理层(二)8-29/11.png","c54f1e5e633d582f56da337563558d66"],["/2022/08/30/计算机网络-物理层(二)8-29/12.png","7cf2330c3fec60e2736a7d6a61ed5ff9"],["/2022/08/30/计算机网络-物理层(二)8-29/13.png","c0206847a67d509dae5cc67cd0b38249"],["/2022/08/30/计算机网络-物理层(二)8-29/14.png","e420283146d47c257440f45e766ee774"],["/2022/08/30/计算机网络-物理层(二)8-29/15.png","e6f98f039f73a63ffe083a4fe3b31957"],["/2022/08/30/计算机网络-物理层(二)8-29/16.png","108d36289e4ccfba88ffd36ad5feb0c3"],["/2022/08/30/计算机网络-物理层(二)8-29/17.png","67995fda0ba6a5371155f989f0d7ca6b"],["/2022/08/30/计算机网络-物理层(二)8-29/18.png","7c20c90755f6a43fca8459fa233499b2"],["/2022/08/30/计算机网络-物理层(二)8-29/19.png","bbb0911ea80f84ec607e5f8a6e32b981"],["/2022/08/30/计算机网络-物理层(二)8-29/2.png","7ea1472b3435a23ae4f7d08d3b6e5cc2"],["/2022/08/30/计算机网络-物理层(二)8-29/20.png","ac9beb23ad1897fcf7ab68311870b516"],["/2022/08/30/计算机网络-物理层(二)8-29/21.png","0bd693ce029ce153b8aad342e71996db"],["/2022/08/30/计算机网络-物理层(二)8-29/22.png","995a2de04c1512e7cc44d26debaa97b8"],["/2022/08/30/计算机网络-物理层(二)8-29/23.png","65d8c470e10e4cab1a462880ed06f11d"],["/2022/08/30/计算机网络-物理层(二)8-29/24.png","f44ad8cb896982b4e53408f196b14a4b"],["/2022/08/30/计算机网络-物理层(二)8-29/25.png","e17bef4e7d0e4a829ed63830b10da53a"],["/2022/08/30/计算机网络-物理层(二)8-29/3.png","9ce6520d12aa88460f09715da4fbfd9c"],["/2022/08/30/计算机网络-物理层(二)8-29/4.png","0455cb7c855baaac06c5e7e90bc01c12"],["/2022/08/30/计算机网络-物理层(二)8-29/5.png","0adefbd2095ffe0d1995fdce4d4b5f25"],["/2022/08/30/计算机网络-物理层(二)8-29/6.png","177ec9ca3cd191a5bed5ad957205debf"],["/2022/08/30/计算机网络-物理层(二)8-29/7.png","5083f2eed5d9bd57815a4ee8eefb74ec"],["/2022/08/30/计算机网络-物理层(二)8-29/8.png","9718f2af529e80afb466202b10c1ff92"],["/2022/08/30/计算机网络-物理层(二)8-29/9.png","6ae1316660be43b21de77957bbe19ab7"],["/2022/08/30/计算机网络-物理层(二)8-29/index.html","de64a2c20726bb4af16bd689e73e1178"],["/2022/08/31/分享壁纸(二)/index.html","6a835794dc7bcd442b95437adbf4387e"],["/2022/08/31/计算机网络-数据链路(二)8-31/1.png","3181265d5cfaf33cf7d100e804bede09"],["/2022/08/31/计算机网络-数据链路(二)8-31/10.png","bb57e10a0ffd0cb0fe4aaf953e422363"],["/2022/08/31/计算机网络-数据链路(二)8-31/11.png","069ca59636b3cbef9a19c7dcbb2a4557"],["/2022/08/31/计算机网络-数据链路(二)8-31/12.png","4b8b0c56b9d6b98ab2b4f2603c0e5e6a"],["/2022/08/31/计算机网络-数据链路(二)8-31/2.png","230358bad608ba831a114b0c44585eac"],["/2022/08/31/计算机网络-数据链路(二)8-31/3-1.png","d0c5dd069b4367a7fc101b32c253eb96"],["/2022/08/31/计算机网络-数据链路(二)8-31/3-2.png","550507c43100113be1cb107c64716485"],["/2022/08/31/计算机网络-数据链路(二)8-31/3.png","965eb5f28c08435c3b20b8c4cfc635c3"],["/2022/08/31/计算机网络-数据链路(二)8-31/4.png","e5a7fd04ac4afdc2a28a7481e54d7523"],["/2022/08/31/计算机网络-数据链路(二)8-31/5.png","4afd546265ec37ed879f04d3c6513c2d"],["/2022/08/31/计算机网络-数据链路(二)8-31/6.png","568be92492ef17aeff09511e94c2fcc1"],["/2022/08/31/计算机网络-数据链路(二)8-31/7.png","f12b6d9ba4e84ce2ab4a9336bce34d18"],["/2022/08/31/计算机网络-数据链路(二)8-31/8.png","fc1487e6d79516069a9603524f0f2dda"],["/2022/08/31/计算机网络-数据链路(二)8-31/9.png","d48d2267d67698bbde5d9ba0e177a4bf"],["/2022/08/31/计算机网络-数据链路(二)8-31/index.html","b14ec1cbe433725ed8791e3b511c70f0"],["/2022/09/01/计算机网络-数据链路(三)/1.png","5db1e45acecfe7e668921b7b30d334c2"],["/2022/09/01/计算机网络-数据链路(三)/10.png","e1271f8f2d361ae83b04eac901231cb2"],["/2022/09/01/计算机网络-数据链路(三)/11.png","80532a7aacc7f93670631315130f44d8"],["/2022/09/01/计算机网络-数据链路(三)/12.png","a9fdb42ac744b5f3c153ee8f86127ca8"],["/2022/09/01/计算机网络-数据链路(三)/13.png","63d8e173f6bfaf61a19d4ea037e489a1"],["/2022/09/01/计算机网络-数据链路(三)/2.png","9a2f3fb132fe5069ad5595a892ce341a"],["/2022/09/01/计算机网络-数据链路(三)/3.png","93962340d54a1a651bac54cc2d1dc7c2"],["/2022/09/01/计算机网络-数据链路(三)/4.png","69298d4cbb42b355ad9b013915189577"],["/2022/09/01/计算机网络-数据链路(三)/5.png","01a08164f113bd8dedc0de8216f1c822"],["/2022/09/01/计算机网络-数据链路(三)/6.png","d29f76759586435e7e90164da90c07af"],["/2022/09/01/计算机网络-数据链路(三)/7.png","0468aa62abcad9d5b05966dcef7b4c37"],["/2022/09/01/计算机网络-数据链路(三)/8.png","f685fab44f94ba48f55f8172c5f4d77e"],["/2022/09/01/计算机网络-数据链路(三)/9.png","9c1fdaaf2e738421a8f8b8e9d880ff48"],["/2022/09/01/计算机网络-数据链路(三)/index.html","0c4be508d6737305e828d9342d0fe207"],["/2022/09/02/计算机网络-数据链路(四)/1.png","0726c8fe42dfaa84864e06f868d54985"],["/2022/09/02/计算机网络-数据链路(四)/10.png","87e983d66692d189b71031863eb35f32"],["/2022/09/02/计算机网络-数据链路(四)/2.png","da6db1b1cfbc8e6aaa2af32260756838"],["/2022/09/02/计算机网络-数据链路(四)/3.png","83b6aee8e6fee74a0a6f129f6a1e39ad"],["/2022/09/02/计算机网络-数据链路(四)/4.png","54adc1c0c1c136e66f65abe9ef488050"],["/2022/09/02/计算机网络-数据链路(四)/5.png","91b1518da54d0b4cc0394291b7497991"],["/2022/09/02/计算机网络-数据链路(四)/6.png","eb7ddb03f1cb5dc04f95c9658678f310"],["/2022/09/02/计算机网络-数据链路(四)/7.png","8ba939b83bb1aacc79e9136ae370b864"],["/2022/09/02/计算机网络-数据链路(四)/8.png","ccc1ff0f21db91da616f4588ac97b897"],["/2022/09/02/计算机网络-数据链路(四)/9.png","2daeae165bc52a4be6a08e3858f323ac"],["/2022/09/02/计算机网络-数据链路(四)/index.html","35d2d971ff9a98b5c2f1bf7f7687c320"],["/2022/09/03/分享壁纸(三)/index.html","e3e68f55e640657689c94cb586901f8c"],["/2022/09/03/计算机网络-数据链路(五)/1.png","e123d3cb3357b1529f92a6c529be0b6e"],["/2022/09/03/计算机网络-数据链路(五)/2.png","ed9879b078a5b60b1760159d94b45882"],["/2022/09/03/计算机网络-数据链路(五)/3.png","c2ad0bd90ce93f3159573c7dae941647"],["/2022/09/03/计算机网络-数据链路(五)/4.png","0ea3c9c40837326b2071e117bb8cfcf8"],["/2022/09/03/计算机网络-数据链路(五)/5.png","b46939b7eaca37d82c51f6871d0568c5"],["/2022/09/03/计算机网络-数据链路(五)/6.png","d86acb9325dfab5b1e83c47fcdac5162"],["/2022/09/03/计算机网络-数据链路(五)/7.png","a61d3e35d411817aea7f2d5c91c32595"],["/2022/09/03/计算机网络-数据链路(五)/8.png","74ffeee34fcccb905c7b823aa2a26e15"],["/2022/09/03/计算机网络-数据链路(五)/index.html","dd05049b0415e70d2ade241099a1c2a0"],["/2022/09/04/计算机网络-数据链路(六)/1.png","ee784bec772e0ae019c6ed0ea42ab373"],["/2022/09/04/计算机网络-数据链路(六)/10.png","459fc8e6fc540f60b3f48d5997dce2f3"],["/2022/09/04/计算机网络-数据链路(六)/2.png","f2fef131e18d43cdec20c68fea336614"],["/2022/09/04/计算机网络-数据链路(六)/3.png","0522d25d0c934dbae0b5dec3bd18414f"],["/2022/09/04/计算机网络-数据链路(六)/4.png","af0ad5b6591dab5791cce1bb71eb7814"],["/2022/09/04/计算机网络-数据链路(六)/5.png","1af25810a7b35276181043f5a7c53a52"],["/2022/09/04/计算机网络-数据链路(六)/6.png","b40ccccde19a7eb07431a590edd0c8fa"],["/2022/09/04/计算机网络-数据链路(六)/7.png","73c5e12302aa35a31ecfc8965103b739"],["/2022/09/04/计算机网络-数据链路(六)/8.png","4332e7da56938e84aad95ca53729f27e"],["/2022/09/04/计算机网络-数据链路(六)/9.png","726c8631d8cc6a48bf7ca4698f655ed9"],["/2022/09/04/计算机网络-数据链路(六)/index.html","95213959b16b6933fa7fc6e8c7db4d39"],["/2022/09/05/计算机网络-数据链路层(七)9-5/1.png","d2dc77a45d32542abe214aa2715556c0"],["/2022/09/05/计算机网络-数据链路层(七)9-5/10.png","ec08f2f76fbd13ba4ea1aab6d46a7a01"],["/2022/09/05/计算机网络-数据链路层(七)9-5/11.png","1e12232fc83ce2ab697eb02879bec5a4"],["/2022/09/05/计算机网络-数据链路层(七)9-5/12.png","c5ff87912e0e51a69e07f3760fa23abe"],["/2022/09/05/计算机网络-数据链路层(七)9-5/13.png","1762e0ec12614feee9695a7a16cdb9ce"],["/2022/09/05/计算机网络-数据链路层(七)9-5/14.png","dbcc0d8e2b677e63fdaa906e22730782"],["/2022/09/05/计算机网络-数据链路层(七)9-5/15.png","a23200b08c7422b975adc6e1409c3a90"],["/2022/09/05/计算机网络-数据链路层(七)9-5/16.png","bd4ae03c2e3c3382fe2651e10cde3ee0"],["/2022/09/05/计算机网络-数据链路层(七)9-5/2.png","b1a7689ae843319a24d990215b23fbcf"],["/2022/09/05/计算机网络-数据链路层(七)9-5/3.png","38cdf75a39407893026c84f4bb7f24e2"],["/2022/09/05/计算机网络-数据链路层(七)9-5/4.png","8d6e9d5be231c379da73d55190d8758d"],["/2022/09/05/计算机网络-数据链路层(七)9-5/5.png","f6720fb141286b2621fa0811b0142b15"],["/2022/09/05/计算机网络-数据链路层(七)9-5/6.png","d8e548722c9cfa4716a28429c05132ce"],["/2022/09/05/计算机网络-数据链路层(七)9-5/7.png","8b4dbf94dcd051315c41e1ef732750ce"],["/2022/09/05/计算机网络-数据链路层(七)9-5/8.png","b6460abdf76bd14f5d890d48fc594a93"],["/2022/09/05/计算机网络-数据链路层(七)9-5/9.png","8d75e3ea5c45b60d1fc2430c3238e6d5"],["/2022/09/05/计算机网络-数据链路层(七)9-5/index.html","7d046cf7720fd2481357ed12387de724"],["/about/index.html","73b4f35ee039db94d18ad4ef21b5df3c"],["/archives/2022/08/index.html","cd4e3b0b5dabee60c7defd5fcd2c84ac"],["/archives/2022/08/page/2/index.html","4dc189187ae3bcd5daeab6d1ea99ead8"],["/archives/2022/09/index.html","f9b57c13bcd4fafaff4f08142c7678f5"],["/archives/2022/index.html","901481e9c23f5dd24c0ae897596337e3"],["/archives/2022/page/2/index.html","c9d7babb831f30330fed6086bab73da0"],["/archives/index.html","6170408ad7e31b32563ec93ea3bf374f"],["/archives/page/2/index.html","93bb6e3ad2d28d64bd61477042b42cd3"],["/categories/index.html","23bb48383fd5b72f13e1c6b43087bc05"],["/categories/壁纸/index.html","1883b14ee440532ccbde26a42e66f264"],["/categories/机网/index.html","dc3e368a63ad6f1d9e9f695bc5d784d9"],["/categories/机网/page/2/index.html","e2ca76a75d5061dfe75b15403ad5c09c"],["/css/main.css","cbc28214d89223744023041ef8807227"],["/images/1.jpg","0a53047d1013252766cd4485628483a9"],["/images/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/images/3.jpg","f50648c341b6890be845a076e2c4773b"],["/images/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/images/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/images/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/s.jpg","2daac5896292bac19bdd98123d3758e7"],["/images/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/images/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/images/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/images/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/images/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/images/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","0320daa00363bd475b0e17af657eb17a"],["/js/algolia-search.js","6b575aaf007620a9186294b4f48dfb34"],["/js/bookmark.js","8494d38f31225510bc5520a54736c45a"],["/js/local-search.js","4586c085c178825c7bbcc0a6b4cb5858"],["/js/motion.js","85d6c3644c684daf74f2e403f0b0ff31"],["/js/next-boot.js","58e7e0fee402b7d5f5e3b9e0c3494e21"],["/js/schemes/muse.js","c2ee9273a5d5543772c90ab314da249d"],["/js/schemes/pisces.js","03c674999736d7d9f9f1714c7fd93337"],["/js/three/README.html","75e14fc47cbd0ceda75467e9df781b9a"],["/js/three/canvas_lines.min.js","a3002b71084086a8248d2cfcd4b86c42"],["/js/three/canvas_sphere.min.js","8ec13eb6780dba55e22214c9aa97c6ec"],["/js/three/gulpfile.js","6dcc24d85cf33ed7e5fd2ab255960766"],["/js/three/lib/CanvasRenderer.js","42e582d93dc426f18023f59683c11fe7"],["/js/three/lib/Projector.js","da4188dbc390f1e9b01cbd4d20dceae8"],["/js/three/src/canvas_lines.js","0ecd0076492bed4451d11d3f12b95207"],["/js/three/src/canvas_sphere.js","d3bf1dc2d72e61479755aef4c7c29167"],["/js/three/src/three-waves.js","e6e4de5c739de327d0693762e1f1ae3b"],["/js/three/three-waves.min.js","9208d5d4a1f8e8f48dd19315224022ba"],["/js/three/three.min.js","ea85c81ea28f5a7371f62d090ccf23ed"],["/js/utils.js","2153e48bfe251148bb8d0647829b1f96"],["/lib/anime.min.js","b98279f9ae0f71716db10b573e00e913"],["/lib/fancybox/README.html","951af9efb11a2214ab8c22d7416ba25a"],["/lib/fancybox/source/jquery.fancybox.css","abb9915b11dff55da52b4d9989c9411b"],["/lib/fancybox/source/jquery.fancybox.min.css","3188a5a65cf07ed505db5b2adfadc1aa"],["/lib/fancybox/source/jquery.fancybox.min.js","d65d366e4d4360687360d3efe2c2809d"],["/lib/fancybox/source/jquery.fancybox.pack.js","22b949cf02d0ec99bdcda22e3ac86372"],["/lib/font-awesome/css/all.min.css","dfba6bc6f3d41287ff533085663d3fb5"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","184f548d0100bc5812d4f81cf2064e3b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","7fb4c32b0d595bc91b9f9ba02d0b7761"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","0b938a16b55d5287c2360132dc204a83"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","333bcf6732e989c85a642cf000c4e2a6"],["/lib/pjax/CHANGELOG.html","490190b0f7a48b4b48f8d13aff8a0d4f"],["/lib/pjax/README.html","7ef242e9a581af054816ad6bf2db74b9"],["/lib/pjax/example/example.js","40725d5f10a001b90569cccb12c7e89b"],["/lib/pjax/example/forms.html","4414780c937a2f7ff3baba8da57b7b20"],["/lib/pjax/example/index.html","fcb83ead286060db9d3a19f309beadbe"],["/lib/pjax/example/page2.html","30d0350207cf5cac66cc861452e755a6"],["/lib/pjax/example/page3.html","911a8d9b345136dbf7cbfa0cf48a0a94"],["/lib/pjax/index.js","cee7770afc5a228ba190fbbc856a3905"],["/lib/pjax/lib/abort-request.js","5840ce63eb68b206da5eb026ea43b96a"],["/lib/pjax/lib/eval-script.js","dee91ca5102363c46db3f18daea9b071"],["/lib/pjax/lib/events/off.js","1f63c120bd36f90cbbf0f3e04fa649cb"],["/lib/pjax/lib/events/on.js","b604505d2ebaa7acfc01a1bce51556c0"],["/lib/pjax/lib/events/trigger.js","05af1a22cbee180f5a8e86b2b489fd0f"],["/lib/pjax/lib/execute-scripts.js","04d57a89fca0d5d400b7a0a38ef7545b"],["/lib/pjax/lib/foreach-els.js","a9d5bace2d83d84233f8d9f3e2e6aba9"],["/lib/pjax/lib/foreach-selectors.js","ab9d57ae78323b6ea66489dee06ef698"],["/lib/pjax/lib/is-supported.js","a0a58ee888996e3f2606371dc970d1eb"],["/lib/pjax/lib/parse-options.js","dd8e19e78aec691270463060f14266d1"],["/lib/pjax/lib/proto/attach-form.js","427cef6ef6d60dad2dfcfd335a2fc687"],["/lib/pjax/lib/proto/attach-link.js","39d2a124199e9da5ebe3eaa1ebea02f8"],["/lib/pjax/lib/proto/handle-response.js","1757ca6367649ff8fb71f664ed8027df"],["/lib/pjax/lib/proto/log.js","83df980db4e2fb59606837ca0c05d0c8"],["/lib/pjax/lib/proto/parse-element.js","e164358eec067d1eb1471f5f0b664102"],["/lib/pjax/lib/send-request.js","c6fca746c15df68e522a1477007bb484"],["/lib/pjax/lib/switches-selectors.js","b71d7d024a5a3c7e07ba1e8faf363793"],["/lib/pjax/lib/switches.js","2a1f01af71dd0ba1e5913acd6dfd82b7"],["/lib/pjax/lib/uniqueid.js","5aa15bae824f6ac0a58914854e94ecde"],["/lib/pjax/lib/util/clone.js","b3cfc73c7d12c7af758e8a46ba5d7e71"],["/lib/pjax/lib/util/contains.js","534bd30f68d2b62908235e2b4d18d82a"],["/lib/pjax/lib/util/extend.js","a85b6444d8bd67034d746993e3d04c53"],["/lib/pjax/lib/util/noop.js","16a46d43980ee65417ce7a7111e7c96e"],["/lib/pjax/lib/util/update-query-string.js","a8c7a6d11e87d00f4ecdd79fef38a2f9"],["/lib/pjax/pjax.js","5fe8004e440871489c4c49c79c56d774"],["/lib/pjax/pjax.min.js","5fe8004e440871489c4c49c79c56d774"],["/lib/pjax/tests/lib/abort-request.js","a13c97a213911ea90b6d6dc822059e2c"],["/lib/pjax/tests/lib/eval-scripts.js","9c1518b2acccf1a99b4b39807228bd70"],["/lib/pjax/tests/lib/events.js","fff9ac05cfd7e9066758c32e58e56f66"],["/lib/pjax/tests/lib/execute-scripts.js","eaf04df112b7da8525e8a0f78c25b043"],["/lib/pjax/tests/lib/foreach-els.js","33fe424531754d92a2ebbbed5b1b1634"],["/lib/pjax/tests/lib/foreach-selectors.js","cd79ac55028d99db453e1d7f244de729"],["/lib/pjax/tests/lib/is-supported.js","147e51b9a50937d564dbdd426ffdb686"],["/lib/pjax/tests/lib/parse-options.js","30ba8523fbf8ba3876d394d28a109227"],["/lib/pjax/tests/lib/proto/attach-form.js","8a722f6545e50af19145759cebf3f628"],["/lib/pjax/tests/lib/proto/attach-link.js","36a39d0c327444b9d1176660001f0f3e"],["/lib/pjax/tests/lib/proto/handle-response.js","fa22aea389720b51593e3b18dde60b5e"],["/lib/pjax/tests/lib/proto/parse-element.js","52e3c73bd76e5b32a482ecf8db104e89"],["/lib/pjax/tests/lib/send-request.js","d0ccdd085af9c240bf9818ed3e65641f"],["/lib/pjax/tests/lib/switch-selectors.js","4737fecd7f74bde1147676f049f5d2bd"],["/lib/pjax/tests/lib/switches.js","3fadd7183fc629e998280515b01fd41c"],["/lib/pjax/tests/lib/uniqueid.js","ecd71f63417f7d0d59ad46bb303aa95c"],["/lib/pjax/tests/lib/util/clone.js","6b7ab429f68ab79d6fe19dda08eeafff"],["/lib/pjax/tests/lib/util/contains.js","d31250458b00148e36ab8a12c9687a7b"],["/lib/pjax/tests/lib/util/extend.js","7653fb59be608d93cfaa6a75f9e9df9e"],["/lib/pjax/tests/lib/util/noop.js","b55ef03977e4193cdbb4865780c494ff"],["/lib/pjax/tests/lib/util/update-query-string.js","890001057ad6b6ae47ed02d0f14fe206"],["/lib/pjax/tests/setup.js","d74b2845fdd0ed189cb0d7f57205a9a5"],["/lib/velocity/velocity.min.js","dfdc530133195a8ac979e695f9fbeef8"],["/lib/velocity/velocity.ui.min.js","4432d00f2e8151afe3b3a5a227860837"],["/links/index.html","721f7b76fa64a67ea88646e3cf16e068"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","d7d59251e697bffedff02cc075e2a894"],["/live2dw/lib/L2Dwidget.min.js","695ea2b958e4154f3a1003957d8b09e7"],["/message/index.html","9ff32c854b4bc1dac3a5c51037126d0b"],["/page/2/index.html","66fde70c71bcba5613833d64217b7c38"],["/photos/index.html","b3178337e9d06589fb7d1c7139bed677"],["/sw-register.js","49d3891436e54cbb5caa6185f5ff45aa"],["/tags/index.html","fc28cad3407a9694f03e0e4549917b4f"],["/tags/养眼/index.html","5bc3ae2dc830ac81701bafce98f16996"],["/tags/日常/index.html","3a72a6b8ac45e0c799d799fce97e953a"],["/tags/第一篇/index.html","a9e682925164e4a17ee196be4a6430bc"],["/tags/网络/index.html","8426941d5855899ee30f34f6863a715b"],["/tags/网络/page/2/index.html","5d1b9838959cf477035ece0de0218aac"]];
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
