const pachi = ["単発","ラッシュ"];


let x = 5;
console.log(x);

const btn = document.getElementById(rush);


btn.addEventListener('click',function(){

    const gomi = Math.floor(Math.random()* pachi.length);
    disp.innerHTML = pachi[gomi];
})

        // メッセージ表示、非表示切り替え
        function changedisp(mode){
            //表示モード
            if(mode=="disp"){
                document.getElementById("message").style.display="block";
            }
            //非表示モード
            else{
                document.getElementById("message").style.display="none";
            }
        }