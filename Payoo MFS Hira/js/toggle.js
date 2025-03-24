
// Toggle use kori czz jei button e click korbo so that sheta show kore
document.getElementById('btncashout').addEventListener('click', function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});

// Toggle use korlam for Add Money er jonno 
document.getElementById('btnaddmoney').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
});
