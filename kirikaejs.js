const pachi = ["単発","ラッシュ"];


let x = 5;
console.log(x);

const btn = document.getElementById("rush");
const disp = document.getElementById("disp")

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

    const title = document.getElementById("app").querySelector("h1");
    const message = document.querySelector(".message");

    console.log(title.textContent);
    console.log(message.textContent);

    const list = document.getElementById("list");

    const newItem = document.createElement("li");
    newItem.textContent = "新しいアイテム";

    list.appendChild(newItem);




    
    async function fetchData(){
        return new Promise((resolve,reject) => {
            setTimeout(() =>{
                const data ="データ";
                resolve(data);
            }, 1000);
        });
    }

    async function main(){
        try{
            const data = await fetchdData();
            console.log(data);
        }catch(error){
            console.error;
        }
    }

    main();


    for(let i=0;i<=10;i++){
        if(i%2===0){
        console.log(i);
        }
    }
    let sum =0;
    for(let p=0;p<=10;p++){
        sum+=i;
        console.log(i);
    }

    function add(num1,num2){
        return num1 + num2;
    }

    const person = {
        name: John,
        SayHello: function(){
            console.log("HELLO," + this.name + "!");
        }
    };
    console.log(SayHello);

    


