let tableData = [];

function inputFields(){

    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const address = document.getElementById("address").value;
    const pin_code = document.getElementById("pin_code").value;
    const gender = document.getElementById("gender").value;
    let food =["pizza","burger","pasta","noodles","rice"];
    let food_result =[];
    food.forEach((f) => {
        if(document.getElementById(f).checked){
            food_result.push(f);
        }
    });
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
// console.log(food_result.length);
    if(food_result.length < 2){
        document.getElementById("error").style.visibility = "visible";
    }else{
        document.getElementById("error").style.visibility = "hidden";
        let data = {
            first_name: first_name,
            last_name: last_name,
            address:address,
            pin_code:pin_code,
            gender:gender,
            food: food_result,
            state:state,
            country:country
        };
    
        tableData.push(data);
    
        const tableList = document.querySelector("tbody");
        const length = tableData.length;
    
        tableList.innerHTML += ` <tr>
        <td> ${tableData[length -1].first_name}</td>
        <td> ${tableData[length -1].last_name}</td>
        <td>${tableData[length -1].address} </td>
        <td>${tableData[length -1].pin_code} </td>
        <td> ${tableData[length -1].gender}</td>
        <td> ${tableData[length -1].food}</td>
        <td> ${tableData[length -1].state}</td>
        <td> ${tableData[length -1].country}</td>
        </tr>`;
    
        document.getElementById("myForm").reset();
    }
  
}
