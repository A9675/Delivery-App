let balance=10000;
let selected=null;
let time=30;
const colors=['Red','Green','Violet'];

function placeBet(color){
  const amount=Number(document.getElementById('amount').value);
  if(!amount || amount<1){alert('Enter a valid demo amount');return;}
  if(amount>balance){alert('Not enough demo balance');return;}
  selected={color,amount};
  document.getElementById('message').textContent=`Selected ${color} for ₹${amount} demo coins`;
}

function finishRound(){
  const result=colors[Math.floor(Math.random()*colors.length)];
  let text=`Result: ${result}`;
  if(selected){
    if(selected.color===result){
      balance+=selected.amount;
      text+=` — You won ₹${selected.amount}`;
    }else{
      balance-=selected.amount;
      text+=` — You lost ₹${selected.amount}`;
    }
    selected=null;
    document.getElementById('balance').textContent=balance;
  }
  document.getElementById('message').textContent=text;
  const item=document.createElement('div');
  item.className='history-item';
  item.textContent=text;
  document.getElementById('history').prepend(item);
}

setInterval(()=>{
  time--;
  if(time<=0){finishRound();time=30;}
  document.getElementById('timer').textContent=time;
},1000);
