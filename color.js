var Body = {
    setColor:function (newCol){
        // var liList =  document.querySelectorAll('li');
        // var len = liList.length;
        // while(len--){
        //     liList[len].style.color=newCol;
        // }
        $("li").css("color", newCol); //jQuery를 사용하면 더 간결하게 쓸 수 있지만, 왜 나는 안되지? 어랍쇼 됐다
    }
}; /*객체 생성 ,로 함수 구분*/

function toggleHandler(self) {
    var target = document.querySelector('body');

    if (self.value === 'night'){
        target.style.backgroundColor='black';
        target.style.color='white';
        self.value = 'day';

        Body.setColor('yellow');
    } else{
        target.style.backgroundColor='white';
        target.style.color='black';
        self.value = 'night';

        Body.setColor('green');
    }
}