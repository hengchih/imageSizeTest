const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

imagemin(['cakeOriginImages/*.jpeg'], 'buildCakeOriginImages', {
    use: [imageminMozjpeg({
        quality: 50
    })]
}).then(() => {
    console.log('Images optimized');
});