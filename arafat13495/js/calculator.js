var resultField = $('#result');

function insertNumber(number){
    var existngNumber = resultField.val()
    resultField.val(existngNumber + number)
}
function clearResult(){
    resultField.val('')
}
function calculate(){
    var result = eval(resultField.val())
    resultField.val(result)

}
function deletNumber(){
    var presentValue = resultField.val()
    if (presentValue!='') {
        resultField.val(presentValue.slice(0, -1))
    }
}