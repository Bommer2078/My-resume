var { Query,User} = AV;
var APP_ID = '47pYxANbBIxqId788IlcFweQ-gzGzoHsz';
var APP_KEY = 'REnrn0VHRWyf3FPKGkgqO7zA';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


var submitBtn = $('#submitToCloud');

submitBtn.on('click',function(event){
    event.preventDefault()
    var nameInput = $('#port-contact-name')[0].value;
    var emailInput = $('#port-contact-email')[0].value;
    var phoneInput = $('#port-contact-phone')[0].value;
    var msgInput = $('#port-contact-msg')[0].value;
    if(nameInput&&emailInput&&phoneInput&&msgInput){
        postToCloud({
            nickName:nameInput,
            email:emailInput,
            phone:phoneInput,
            msg:msgInput,
        });

        $('#port-contact-name')[0].value = '';
        $('#port-contact-email')[0].value = '';
        $('#port-contact-phone')[0].value = '';
        $('#port-contact-msg')[0].value = '';
    }else{
        alert('不好意思请把四个框框都填满哦')
    }
})

function postToCloud({nickName,email,phone,msg}){
    var News = AV.Object.extend('News');
    var news = new News();
    news.save({
        nickName,
        email,
        phone,
        msg,
    }).then(function(object) {
        alert('会尽快与您联系，谢谢您');
    })

}

