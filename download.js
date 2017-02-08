const fs = require('fs');
const download = require('download');

Promise.all([
    'http://diz36nn4q02zr.cloudfront.net/webapi/images/s/ShopOfficialLogo/4306/4306logo?v=201612201138',
    'http://diz36nn4q02zr.cloudfront.net/webapi/images/o/400/400//LayoutTemplateData/267261/2/110430',
    'http://diz36nn4q02zr.cloudfront.net/webapi/images/o/400/400//LayoutTemplateData/267261/0/115843',
    'http://diz36nn4q02zr.cloudfront.net/webapi/images/o/400/400//LayoutTemplateData/267261/1/195358',
    'http://diz36nn4q02zr.cloudfront.net/webapi/images/o/400/400//ECoupon/25713/0/135211',
    'http://diz36nn4q02zr.cloudfront.net/webapi/images/o/400/400//LayoutTemplateData/229142/0/184329',
    'http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/2417871/0/130328?v=1',
    'http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/2643754/0/125108?v=1',
    'http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/2488211/0/130051?v=1',
    'http://d1du811ltzbmji.cloudfront.net/V2/Content/Images/Icon/social-icon96.png',
    'http://d1du811ltzbmji.cloudfront.net/V2/Content/Images/Icon/badge_common_applestore.svg',
    'http://d1du811ltzbmji.cloudfront.net/V2/Content/Images/Icon/badge_common_googleplay.svg',
    'http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/2940823/0/101754?v=1',
    'http://d1du811ltzbmji.cloudfront.net/V2/Content/Images/SideBar/download-apple.jpg',
    'http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/2639754/0/125809?v=1',
    'http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/2488225/0/130002?v=1',
    'http://d1du811ltzbmji.cloudfront.net/V2/Content/Images/SideBar/download-google.jpg',
    'http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/2488151/0/130150?v=1',
    'http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/2639778/0/125740?v=1',
    'http://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/2417871/0/130328?v=1',
].map(x => download(x, 'cakeOriginImages'))).then(() => {
    console.log('files downloaded!');
});