import $ from 'jquery';

const exp = /(http|https):\/\/.+/;

const $in = $('.js-input');
const $btn = $('.js-get');

$btn.on('click',()=>{
    const textdata = $in.val();
    const urls = textdata.split('\n');
    $.each(urls,(index,url)=>{
        if(url.match(exp)){
            let a = document.createElement("a");
            a.target = "blank";
            a.href = url;
            a.download = index;
            a.click();
        }
    })
})

