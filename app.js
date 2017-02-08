const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

imagemin(['images/*.jpeg'], 'build/images', {
    use: [imageminMozjpeg({
        quality: 50
    })]
}).then(() => {
    console.log('Images optimized');
});