function check() {
    let password = document.getElementById('password').value
    let confirm_password = document.getElementById('confirm-password').value

if( password === '') {
document.getElementById('demo1').innerText = 'fill in the blank spaces'
}

else if (confirm_password === password ) {
  alert('Access granted') 
} else {
    alert('unmatched password');
}

}  


