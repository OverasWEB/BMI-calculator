// script javascript
// mengambil nlai
function Calculate(){
    var height = document.getElementById("t-input").value;
    var weight = document.getElementById("b-input").value;
    
    var result = parseFloat(weight) /(parseFloat(height)/100)**2;

// menghasilkan
    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = result;
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "Kekurangan berat badan";
            document.getElementById("bmi-add").innerHTML = "Utamakan hidup sehat dan perhatikan konsumsi harian";
        }
        else if(result < 25){
            document.getElementById("bmi-status").innerHTML = "Normal (ideal)";
            document.getElementById("bmi-add").innerHTML = "Diet yang baik dapat mempertahankan kesehatan & imun";
        }
        else if(result < 30){
            document.getElementById("bmi-status").innerHTML = "Kelebihan berat badan";
            document.getElementById("bmi-add").innerHTML = "Dalam 60% kasus, pola makan yang buruk dapat berisiko Diabetes";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Kegemukan (obesitas)";
            document.getElementById("bmi-add").innerHTML = "Utamakan hidup sehat dan sering sering berolahraga";
        }
    }
}


function resetForm() {
    var inputs = document.querySelectorAll('#myForm input');
    inputs.forEach(input => {
        input.value = '';
        document.getElementById('bmi-output').innerHTML = '';
        document.getElementById('bmi-status').innerHTML = '';
        document.getElementById('bmi-add').innerHTML = '';
    });
}