/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/08/20/hello-world/index.html","0094e5f88dd208e7232c77a398881a51"],["/2022/08/24/开端/index.html","a97b8b57dff44e8547676360e91a674f"],["/2022/08/25/分享壁纸(一)/abc.jpg","1527d8a5aeff6a5e5cf3f960c6b14b54"],["/2022/08/25/分享壁纸(一)/index.html","0422697af7f02f9077ccfbf435d9765b"],["/2022/08/26/计算机网络性能和体系结构（8.26）/index.html","b20cfb3321827a38ea87a84ce0cd8544"],["/2022/08/27/又是一个不眠之夜/index.html","cb6ab9f8233302c8f6c95d847fd4ad2e"],["/2022/08/28/计算机网络体系分层思想(8-27)/1.png","d3ff9e5a0ed98b151fffcad48e90a098"],["/2022/08/28/计算机网络体系分层思想(8-27)/2.png","96dd1e479914db2a2ba963ea88484b39"],["/2022/08/28/计算机网络体系分层思想(8-27)/3.png","b8fe4a29f46a93c1de3627c02768a767"],["/2022/08/28/计算机网络体系分层思想(8-27)/4.png","0da9c224cbeef9285808b35da836d8ea"],["/2022/08/28/计算机网络体系分层思想(8-27)/5.png","4df7a89f4d7fb14fe876121a4e8206d8"],["/2022/08/28/计算机网络体系分层思想(8-27)/6.png","1fa99ab1d4f703dab72b4c6ec8072d36"],["/2022/08/28/计算机网络体系分层思想(8-27)/index.html","6daa4826533f34572a8b5f83949464bb"],["/2022/08/29/计算机网络-物理层(一)8-28/1.png","ba3d85b8aaf8bc900d3da03fc6898b02"],["/2022/08/29/计算机网络-物理层(一)8-28/10.png","234e6533c9f29d06475b3090b9303e32"],["/2022/08/29/计算机网络-物理层(一)8-28/11.png","4e2684421f74a52ca09237f94084154b"],["/2022/08/29/计算机网络-物理层(一)8-28/12.png","463556886291363ee35edf52632e48d6"],["/2022/08/29/计算机网络-物理层(一)8-28/13.png","e6c0b70f0321c70b44abdac52ce9bd9d"],["/2022/08/29/计算机网络-物理层(一)8-28/2.png","83ee1d35bc77d33823df70167655e438"],["/2022/08/29/计算机网络-物理层(一)8-28/3.png","09ba5f0f6958e7c7aa06217c5c509ce2"],["/2022/08/29/计算机网络-物理层(一)8-28/4.png","256042c0015ca110e4f7f98e97f425fd"],["/2022/08/29/计算机网络-物理层(一)8-28/5.png","f1de7892acd7f6c9fe85da0d5895b31d"],["/2022/08/29/计算机网络-物理层(一)8-28/6.png","84e163c285fdcd10d9d3cbffce1c44e0"],["/2022/08/29/计算机网络-物理层(一)8-28/7.png","11bb115b61ffef80f6e2116d44a57513"],["/2022/08/29/计算机网络-物理层(一)8-28/8.png","2ef8f08923208b29ed38d58738b2a513"],["/2022/08/29/计算机网络-物理层(一)8-28/9.png","9f687c469a912e3af822eaf901b22189"],["/2022/08/29/计算机网络-物理层(一)8-28/index.html","fd665b20c4ca1ea054dbf64babb3ac7e"],["/2022/08/30/计算机网络-数据链路(一)8-30/1.png","2395ff850d7926a509eb14f4c53d25d7"],["/2022/08/30/计算机网络-数据链路(一)8-30/12.png","a3b57d794e32b6542b8f398075e1ef63"],["/2022/08/30/计算机网络-数据链路(一)8-30/13.png","809f97ecb5a94bec4b38c1bf523f4eb3"],["/2022/08/30/计算机网络-数据链路(一)8-30/2.png","9957cc9c674d145b95bcc7f76e14f9c4"],["/2022/08/30/计算机网络-数据链路(一)8-30/3.png","9342b8be93e9c204890c0265c9677103"],["/2022/08/30/计算机网络-数据链路(一)8-30/bite.png","b2128fc0d6725003b939c54c9c103d0f"],["/2022/08/30/计算机网络-数据链路(一)8-30/byte.png","1349bc0a897b32e066de612393954b40"],["/2022/08/30/计算机网络-数据链路(一)8-30/fzcz.png","543696bc7afdcd4ed2a224229e0d3a7b"],["/2022/08/30/计算机网络-数据链路(一)8-30/index.html","1e4ce80589eb9dd1b316b438560eefb0"],["/2022/08/30/计算机网络-数据链路(一)8-30/jo.png","2810f0d5995c1bf59a046e9ecfd4ed08"],["/2022/08/30/计算机网络-数据链路(一)8-30/tm.png","ba773056664a0776ed95ea6a1ad3bf39"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan.png","316a818b3763b18fe4b9a88b36602c91"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan2.png","eddadf74cdcebdf8dc3c6d92f14ac3bb"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan3.png","1d52719c060330869b7ddb523e0302c0"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan4.png","0b712e0b33cc54376bae07008727aab5"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan5.png","64b59cc7463f4d0233f690c2a86f1def"],["/2022/08/30/计算机网络-数据链路(一)8-30/xunhuan6.png","978c58d29cd002ceb36b1c233e35fff6"],["/2022/08/30/计算机网络-物理层(二)8-29/1.png","ce52a08da7a732412ad3e26e46601c0a"],["/2022/08/30/计算机网络-物理层(二)8-29/10.png","f0b070572ed2e1c01cd0a8b3d7821c80"],["/2022/08/30/计算机网络-物理层(二)8-29/11.png","c54f1e5e633d582f56da337563558d66"],["/2022/08/30/计算机网络-物理层(二)8-29/12.png","7cf2330c3fec60e2736a7d6a61ed5ff9"],["/2022/08/30/计算机网络-物理层(二)8-29/13.png","c0206847a67d509dae5cc67cd0b38249"],["/2022/08/30/计算机网络-物理层(二)8-29/14.png","e420283146d47c257440f45e766ee774"],["/2022/08/30/计算机网络-物理层(二)8-29/15.png","e6f98f039f73a63ffe083a4fe3b31957"],["/2022/08/30/计算机网络-物理层(二)8-29/16.png","108d36289e4ccfba88ffd36ad5feb0c3"],["/2022/08/30/计算机网络-物理层(二)8-29/17.png","67995fda0ba6a5371155f989f0d7ca6b"],["/2022/08/30/计算机网络-物理层(二)8-29/18.png","7c20c90755f6a43fca8459fa233499b2"],["/2022/08/30/计算机网络-物理层(二)8-29/19.png","bbb0911ea80f84ec607e5f8a6e32b981"],["/2022/08/30/计算机网络-物理层(二)8-29/2.png","7ea1472b3435a23ae4f7d08d3b6e5cc2"],["/2022/08/30/计算机网络-物理层(二)8-29/20.png","ac9beb23ad1897fcf7ab68311870b516"],["/2022/08/30/计算机网络-物理层(二)8-29/21.png","0bd693ce029ce153b8aad342e71996db"],["/2022/08/30/计算机网络-物理层(二)8-29/22.png","995a2de04c1512e7cc44d26debaa97b8"],["/2022/08/30/计算机网络-物理层(二)8-29/23.png","65d8c470e10e4cab1a462880ed06f11d"],["/2022/08/30/计算机网络-物理层(二)8-29/24.png","f44ad8cb896982b4e53408f196b14a4b"],["/2022/08/30/计算机网络-物理层(二)8-29/25.png","e17bef4e7d0e4a829ed63830b10da53a"],["/2022/08/30/计算机网络-物理层(二)8-29/3.png","9ce6520d12aa88460f09715da4fbfd9c"],["/2022/08/30/计算机网络-物理层(二)8-29/4.png","0455cb7c855baaac06c5e7e90bc01c12"],["/2022/08/30/计算机网络-物理层(二)8-29/5.png","0adefbd2095ffe0d1995fdce4d4b5f25"],["/2022/08/30/计算机网络-物理层(二)8-29/6.png","177ec9ca3cd191a5bed5ad957205debf"],["/2022/08/30/计算机网络-物理层(二)8-29/7.png","5083f2eed5d9bd57815a4ee8eefb74ec"],["/2022/08/30/计算机网络-物理层(二)8-29/8.png","9718f2af529e80afb466202b10c1ff92"],["/2022/08/30/计算机网络-物理层(二)8-29/9.png","6ae1316660be43b21de77957bbe19ab7"],["/2022/08/30/计算机网络-物理层(二)8-29/index.html","01e418c5c036e23cae70752c7089b6b3"],["/2022/08/31/分享壁纸(二)/index.html","22217d0146726456e073cd4149fa46c8"],["/2022/08/31/计算机网络-数据链路(二)8-31/1.png","3181265d5cfaf33cf7d100e804bede09"],["/2022/08/31/计算机网络-数据链路(二)8-31/10.png","bb57e10a0ffd0cb0fe4aaf953e422363"],["/2022/08/31/计算机网络-数据链路(二)8-31/11.png","069ca59636b3cbef9a19c7dcbb2a4557"],["/2022/08/31/计算机网络-数据链路(二)8-31/12.png","4b8b0c56b9d6b98ab2b4f2603c0e5e6a"],["/2022/08/31/计算机网络-数据链路(二)8-31/2.png","230358bad608ba831a114b0c44585eac"],["/2022/08/31/计算机网络-数据链路(二)8-31/3-1.png","d0c5dd069b4367a7fc101b32c253eb96"],["/2022/08/31/计算机网络-数据链路(二)8-31/3-2.png","550507c43100113be1cb107c64716485"],["/2022/08/31/计算机网络-数据链路(二)8-31/3.png","965eb5f28c08435c3b20b8c4cfc635c3"],["/2022/08/31/计算机网络-数据链路(二)8-31/4.png","e5a7fd04ac4afdc2a28a7481e54d7523"],["/2022/08/31/计算机网络-数据链路(二)8-31/5.png","4afd546265ec37ed879f04d3c6513c2d"],["/2022/08/31/计算机网络-数据链路(二)8-31/6.png","568be92492ef17aeff09511e94c2fcc1"],["/2022/08/31/计算机网络-数据链路(二)8-31/7.png","f12b6d9ba4e84ce2ab4a9336bce34d18"],["/2022/08/31/计算机网络-数据链路(二)8-31/8.png","fc1487e6d79516069a9603524f0f2dda"],["/2022/08/31/计算机网络-数据链路(二)8-31/9.png","d48d2267d67698bbde5d9ba0e177a4bf"],["/2022/08/31/计算机网络-数据链路(二)8-31/index.html","a3921524ba15670c196464aaa1be0e43"],["/2022/09/01/计算机网络-数据链路(三)/1.png","5db1e45acecfe7e668921b7b30d334c2"],["/2022/09/01/计算机网络-数据链路(三)/10.png","e1271f8f2d361ae83b04eac901231cb2"],["/2022/09/01/计算机网络-数据链路(三)/11.png","80532a7aacc7f93670631315130f44d8"],["/2022/09/01/计算机网络-数据链路(三)/12.png","a9fdb42ac744b5f3c153ee8f86127ca8"],["/2022/09/01/计算机网络-数据链路(三)/13.png","63d8e173f6bfaf61a19d4ea037e489a1"],["/2022/09/01/计算机网络-数据链路(三)/2.png","9a2f3fb132fe5069ad5595a892ce341a"],["/2022/09/01/计算机网络-数据链路(三)/3.png","93962340d54a1a651bac54cc2d1dc7c2"],["/2022/09/01/计算机网络-数据链路(三)/4.png","69298d4cbb42b355ad9b013915189577"],["/2022/09/01/计算机网络-数据链路(三)/5.png","01a08164f113bd8dedc0de8216f1c822"],["/2022/09/01/计算机网络-数据链路(三)/6.png","d29f76759586435e7e90164da90c07af"],["/2022/09/01/计算机网络-数据链路(三)/7.png","0468aa62abcad9d5b05966dcef7b4c37"],["/2022/09/01/计算机网络-数据链路(三)/8.png","f685fab44f94ba48f55f8172c5f4d77e"],["/2022/09/01/计算机网络-数据链路(三)/9.png","9c1fdaaf2e738421a8f8b8e9d880ff48"],["/2022/09/01/计算机网络-数据链路(三)/index.html","c96cd2fd733f34de5f8a75e4a42d4199"],["/2022/09/02/计算机网络-数据链路(四)/1.png","0726c8fe42dfaa84864e06f868d54985"],["/2022/09/02/计算机网络-数据链路(四)/10.png","87e983d66692d189b71031863eb35f32"],["/2022/09/02/计算机网络-数据链路(四)/2.png","da6db1b1cfbc8e6aaa2af32260756838"],["/2022/09/02/计算机网络-数据链路(四)/3.png","83b6aee8e6fee74a0a6f129f6a1e39ad"],["/2022/09/02/计算机网络-数据链路(四)/4.png","54adc1c0c1c136e66f65abe9ef488050"],["/2022/09/02/计算机网络-数据链路(四)/5.png","91b1518da54d0b4cc0394291b7497991"],["/2022/09/02/计算机网络-数据链路(四)/6.png","eb7ddb03f1cb5dc04f95c9658678f310"],["/2022/09/02/计算机网络-数据链路(四)/7.png","8ba939b83bb1aacc79e9136ae370b864"],["/2022/09/02/计算机网络-数据链路(四)/8.png","ccc1ff0f21db91da616f4588ac97b897"],["/2022/09/02/计算机网络-数据链路(四)/9.png","2daeae165bc52a4be6a08e3858f323ac"],["/2022/09/02/计算机网络-数据链路(四)/index.html","8ef4c54e7f1795f4f90f154c2088f07b"],["/2022/09/03/分享壁纸(三)/index.html","01ef0f60b162e9b99af48a41983c0de5"],["/2022/09/03/计算机网络-数据链路(五)/1.png","e123d3cb3357b1529f92a6c529be0b6e"],["/2022/09/03/计算机网络-数据链路(五)/2.png","ed9879b078a5b60b1760159d94b45882"],["/2022/09/03/计算机网络-数据链路(五)/3.png","c2ad0bd90ce93f3159573c7dae941647"],["/2022/09/03/计算机网络-数据链路(五)/4.png","0ea3c9c40837326b2071e117bb8cfcf8"],["/2022/09/03/计算机网络-数据链路(五)/5.png","b46939b7eaca37d82c51f6871d0568c5"],["/2022/09/03/计算机网络-数据链路(五)/6.png","d86acb9325dfab5b1e83c47fcdac5162"],["/2022/09/03/计算机网络-数据链路(五)/7.png","a61d3e35d411817aea7f2d5c91c32595"],["/2022/09/03/计算机网络-数据链路(五)/8.png","74ffeee34fcccb905c7b823aa2a26e15"],["/2022/09/03/计算机网络-数据链路(五)/index.html","e6874caddefe9de7625011f7ca20fd0e"],["/2022/09/04/计算机网络-数据链路(六)/1.png","ee784bec772e0ae019c6ed0ea42ab373"],["/2022/09/04/计算机网络-数据链路(六)/10.png","459fc8e6fc540f60b3f48d5997dce2f3"],["/2022/09/04/计算机网络-数据链路(六)/2.png","f2fef131e18d43cdec20c68fea336614"],["/2022/09/04/计算机网络-数据链路(六)/3.png","0522d25d0c934dbae0b5dec3bd18414f"],["/2022/09/04/计算机网络-数据链路(六)/4.png","af0ad5b6591dab5791cce1bb71eb7814"],["/2022/09/04/计算机网络-数据链路(六)/5.png","1af25810a7b35276181043f5a7c53a52"],["/2022/09/04/计算机网络-数据链路(六)/6.png","b40ccccde19a7eb07431a590edd0c8fa"],["/2022/09/04/计算机网络-数据链路(六)/7.png","73c5e12302aa35a31ecfc8965103b739"],["/2022/09/04/计算机网络-数据链路(六)/8.png","4332e7da56938e84aad95ca53729f27e"],["/2022/09/04/计算机网络-数据链路(六)/9.png","726c8631d8cc6a48bf7ca4698f655ed9"],["/2022/09/04/计算机网络-数据链路(六)/index.html","c67bf10aa831c89706fb276bf02c7c2b"],["/2022/09/05/计算机网络-数据链路层(七)9-5/1.png","d2dc77a45d32542abe214aa2715556c0"],["/2022/09/05/计算机网络-数据链路层(七)9-5/10.png","ec08f2f76fbd13ba4ea1aab6d46a7a01"],["/2022/09/05/计算机网络-数据链路层(七)9-5/11.png","1e12232fc83ce2ab697eb02879bec5a4"],["/2022/09/05/计算机网络-数据链路层(七)9-5/12.png","c5ff87912e0e51a69e07f3760fa23abe"],["/2022/09/05/计算机网络-数据链路层(七)9-5/13.png","1762e0ec12614feee9695a7a16cdb9ce"],["/2022/09/05/计算机网络-数据链路层(七)9-5/14.png","dbcc0d8e2b677e63fdaa906e22730782"],["/2022/09/05/计算机网络-数据链路层(七)9-5/15.png","a23200b08c7422b975adc6e1409c3a90"],["/2022/09/05/计算机网络-数据链路层(七)9-5/16.png","bd4ae03c2e3c3382fe2651e10cde3ee0"],["/2022/09/05/计算机网络-数据链路层(七)9-5/2.png","b1a7689ae843319a24d990215b23fbcf"],["/2022/09/05/计算机网络-数据链路层(七)9-5/3.png","38cdf75a39407893026c84f4bb7f24e2"],["/2022/09/05/计算机网络-数据链路层(七)9-5/4.png","8d6e9d5be231c379da73d55190d8758d"],["/2022/09/05/计算机网络-数据链路层(七)9-5/5.png","f6720fb141286b2621fa0811b0142b15"],["/2022/09/05/计算机网络-数据链路层(七)9-5/6.png","d8e548722c9cfa4716a28429c05132ce"],["/2022/09/05/计算机网络-数据链路层(七)9-5/7.png","8b4dbf94dcd051315c41e1ef732750ce"],["/2022/09/05/计算机网络-数据链路层(七)9-5/8.png","b6460abdf76bd14f5d890d48fc594a93"],["/2022/09/05/计算机网络-数据链路层(七)9-5/9.png","8d75e3ea5c45b60d1fc2430c3238e6d5"],["/2022/09/05/计算机网络-数据链路层(七)9-5/index.html","7fce470763f2b46c218096f214d06936"],["/2022/09/06/计算机网络-网络层(一)9-6/1.png","3599bd1f08cec89f2e304c665b36c8a6"],["/2022/09/06/计算机网络-网络层(一)9-6/10.png","84f71fa1744fc9135d5923e8d196870b"],["/2022/09/06/计算机网络-网络层(一)9-6/11.png","01032bac32ed95e96c76b2e9f9e6c76b"],["/2022/09/06/计算机网络-网络层(一)9-6/12.png","e96f3c719fb8388561fa34d1e1162e88"],["/2022/09/06/计算机网络-网络层(一)9-6/13.png","51b70f29b75c5299de52eb2f0d901c28"],["/2022/09/06/计算机网络-网络层(一)9-6/14.png","0e8ed6b7267b5aa45d88ee0149ff1ddc"],["/2022/09/06/计算机网络-网络层(一)9-6/15.png","cdede5ffe4b2d46cb164a25e9a188708"],["/2022/09/06/计算机网络-网络层(一)9-6/2.png","52c51953a27d6f9369ab4404145cd16b"],["/2022/09/06/计算机网络-网络层(一)9-6/3.png","5e925a61eec6e1eb43e80960e528b04a"],["/2022/09/06/计算机网络-网络层(一)9-6/4.png","6a5f5dc9703aff9f30f0642b73c7b441"],["/2022/09/06/计算机网络-网络层(一)9-6/5.png","60fb040ac42421d9e174557f8cd6116a"],["/2022/09/06/计算机网络-网络层(一)9-6/6.png","118156d148652f5dc6a19b6fcb6bf231"],["/2022/09/06/计算机网络-网络层(一)9-6/7.png","d60f414175ce745a5f52da095b657625"],["/2022/09/06/计算机网络-网络层(一)9-6/8.png","4c7363967cf18eb9048790f50f593dc6"],["/2022/09/06/计算机网络-网络层(一)9-6/9.png","0abc2b0e39f726d1922718f0bbb5ab33"],["/2022/09/06/计算机网络-网络层(一)9-6/index.html","831535e18d57b9654620026fd9e1d54b"],["/about/index.html","54ce85419bc2bf8a8ff2e5693dccc3c1"],["/archives/2022/08/index.html","0e0579a4ab85b56380eed3a89042a62c"],["/archives/2022/08/page/2/index.html","5dbe9c2669b023b30d158c82a17a097b"],["/archives/2022/09/index.html","67186598333a739c009a36e161305029"],["/archives/2022/index.html","a4fc6aa2a94cdba5c0f9d4bf32019e2e"],["/archives/2022/page/2/index.html","b1945a8f9ccdf6d8ce8808b68ed9d509"],["/archives/index.html","13fceb3f7b5f44ca01ad4ca8408c8548"],["/archives/page/2/index.html","9e8dba690dccf7bba336c5b5d569a7de"],["/baidu_verify_code-7wQqNukg63.html","db1e07e2f710d00db73424531a5096a7"],["/categories/index.html","4a63768b7a15de31cb02aff88e2cf5e5"],["/categories/壁纸/index.html","cf3e999dcb2d1925cd3eb6f51e63305d"],["/categories/机网/index.html","a234f493151fdbdb5107131c828f6a73"],["/categories/机网/page/2/index.html","5cad2b8c429b6d0a478904c2cbf9f969"],["/css/main.css","75cec5a83aa8c509fac6c6ba11328732"],["/google47c145bfb7c98004.html","2d07a3853d978c4c34c79f77746ee935"],["/images/1.jpg","0a53047d1013252766cd4485628483a9"],["/images/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/images/3.jpg","f50648c341b6890be845a076e2c4773b"],["/images/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/images/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/images/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/s.jpg","2daac5896292bac19bdd98123d3758e7"],["/images/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/images/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/images/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/images/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/images/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/images/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/index.html","d6f2458873df2fb46894c963fed37a70"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/three/README.html","50a33f3253d5b324fba8c591ef6ca7f5"],["/js/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/js/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/js/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/js/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/js/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/js/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/js/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/js/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/js/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/js/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","319112f59d0017c051638fe3a44f64fd"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","1d0fe73894c9b39d6424f994da80df0b"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/message/index.html","70f17e9ba755fba64b1f248bd8d0c22e"],["/page/2/index.html","a9c0d7791b99c69fa2275faed8021f35"],["/photos/index.html","24098b27183430889c712b8e4f309840"],["/sw-register.js","e6f80a104cf21402d9da2d941e5df2a9"],["/tags/index.html","bf17c5fc787427639cecd53bba6042a3"],["/tags/养眼/index.html","ced1344971f4c7603512c1e9ca95a650"],["/tags/日常/index.html","dd747c194664ce1772ff53f03feed597"],["/tags/第一篇/index.html","8cee3002201efdd46fc8ad83036f669e"],["/tags/网络/index.html","0718976d86716f16b51555a631949a31"],["/tags/网络/page/2/index.html","f6b5d83fbdb12e88ad0e03e9e84a3141"]];
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
