
let do_list = [];
let data = [];
let List = [];
let updta_index ;
displayData();
function ADD(){
    event.preventDefault();

    let Text = document.getElementById('text').value;
    let Type = document.getElementById('type').value;
    do_list.push([Text,Type]);

    displayData()

}

function DEL(event,Y) {
    event.preventDefault()
    let index = parseInt(Y);
    do_list.splice(index,1);
    displayData();
}

function UPDATEbtn(x){
    let index = parseInt(x);
    updta_index = index;
    document.getElementById('updt').style.visibility = "visible";
}

function ArrayUPDTE(){
    event.preventDefault();
    let U_Text = document.getElementById('u_text').value;       
    let U_Type = document.getElementById('u_type').value; 
    do_list[updta_index][0] = U_Text;
    do_list[updta_index][1] = U_Type;
    document.getElementById('updt').style.visibility = "hidden";
    displayData();
}

function displayData(){
    data = do_list.map(function (item, index) {
        return "<tr><td>" + item[0] + "</td> <td>" + item[1] + "</td><td><i class='fa fa-pencil-square-o' ' onclick='UPDATEbtn("+index+")'></i></td><td> <i class='fa fa-window-close-o'' onclick='DEL(event, "+ index +")'></i> </td></tr>";
    });

    List = data.reduce(function (value, curr) {
        return value + curr;
    }, "");

    document.getElementById('demo').innerHTML = "<table border=1 class='demo_table'><tr><th id='todo'>To do</th><th id='type'>Category</th><th colspan='2'></th></tr>" + List + "</table>";
}
