function validate(){
    let newWishInput = document.querySelector('#newWish').value;
    let errorMessage = document.querySelector('#errorMessage');
    let wishSubmit = document.querySelector('#wishSubmit');

    if(newWishInput === ""){
        errorMessage.innerHTML = "Enter Wish!";
        wishSubmit.disabled = true;
    } else {
        errorMessage.innerHTML = "";
        wishSubmit.disabled = false;
    }
}