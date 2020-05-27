
/*var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function post() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("mytodo").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Enter the todo");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("mytodo").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}*/
function Get() {
    const url = 'https://localhost:44385/api/Student/';
    var ul = document.createElement('myUL');
    fetch(url)
        .then(resp => resp.json())
        .then(function (Todo) {
            return Todo.map(function (tod) {
                let li = document.createElement('li');
                li.innerText = tod.name + ",          " + tod.gender + ",          " + tod.subject;    
                //li.innerText = tod.gender,
                //li.innerText = tod.subject;
                console.log(Todo.indexOf(tod));
                let button = document.createElement('button');
                button.innerText = " x ";
                button.setAttribute("id", Todo.indexOf(tod));
                li.appendChild(button);
                ul.appendChild(li);
                document.getElementById("myUL").appendChild(li);
            })
        }).catch(function (error) {
            console.log(console.error);
        });
}