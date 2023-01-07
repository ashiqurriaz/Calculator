function calculate(newvalue){
    document.getElementById("myresult").value += newvalue;

}

function result(){
        var a = document.getElementById("myresult").value;
        var b = eval(a);
        document.getElementById("myresult").value = b
}

function DeleteMe(){
        document.getElementById("myresult").value = "";
}