exports.getTodayDateShort = function(){
    let today = new Date();

    let options = {
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString('en-US', options);
    return day;
}