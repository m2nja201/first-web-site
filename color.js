var Body = {
    setColor:function (newCol){
        // var liList =  document.querySelectorAll('li');
        // var len = liList.length;
        // while(len--){
        //     liList[len].style.color=newCol;
        // }
        $("li").css("color", newCol); //jQuery�� ����ϸ� �� �����ϰ� �� �� ������, �� ���� �ȵ���? ����� �ƴ�
    }
}; /*��ü ���� ,�� �Լ� ����*/

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