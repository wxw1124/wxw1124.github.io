let arr = [];
document.getElementById('aaa').addEventListener('input', function() {    
    const buttons = document.querySelectorAll('button');   
    if (this.value.trim() !== '') {    
        // 如果文本框有内容，将按钮颜色设置为绿色  
        buttons.forEach(button => {  
            button.classList.add('btn-green');  
            button.classList.remove('btn-red');  
        });  
    } else {    
        // 如果文本框没有内容，将按钮颜色设置为红色  
        buttons.forEach(button => {  
            button.classList.add('btn-red');  
            button.classList.remove('btn-green');  
        });  
    }    
});
function myinput() {  
    let myarr = document.getElementById('aaa').value;  
    if (myarr.trim() !== '') { // 确保不是空字符串  
        arr.push(myarr);  
        alert('成功保存');  
        document.getElementById('aaa').value = ''; // 清空文本框  
  
        // 更新按钮颜色为红色，因为文本框已清空  
        const buttons = document.querySelectorAll('button');  
        buttons.forEach(button => {  
            button.classList.add('btn-red');  
            button.classList.remove('btn-green');  
        });  
    }  
    console.log(arr);  
}

function myprint() {
    let pr = '';
    for (let i = 0; i < arr.length; i++) {
         pr += arr[i] + '\n';
    }
    document.getElementById('bbb').value = pr;
}
