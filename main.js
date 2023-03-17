    const element = document.getElementById("demo");
    element.remove();

    let h1 = document.createElement("h1");
    h1.innerText = "Lab7 Assignment";
    h1.style.color = "blue";
    document.body.appendChild(h1);

    hr = document.createElement ("hr");
    hr.style.borderColor = "black";
    hr.style.borderWidth = "0.5px"; 
    document.body.appendChild(hr);

    let h2 = document.createElement("h2");
    h2.innerText = "Task";
    h2.style.color = "red";
    document.body.appendChild(h2);

    let p1 = document.createElement("p1");
    p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
    p1.style.color = "black";
    document.body.appendChild(p1);

    let li1 = document.createElement("li");
    li1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
    li1.classList.add("odd");

    let li2 = document.createElement("li");
    li2.innerHTML = "create/add/remove elements (<b>5 points</b>);";
    li2.classList.add("even");

    let li3 = document.createElement("li");
    li3.innerHTML = "change content of the elements (<b>5 points</b>);";
    li3.classList.add("odd");

    let li4 = document.createElement("li");
    li4.innerHTML = "change styles of the elements (<b>5 points</b>);";
    li4.classList.add("even");

    let li5 = document.createElement("li");
    li5.innerHTML = "change attributes of the elements (<b>5 points</b>);";
    li5.classList.add("odd");

    let li6 = document.createElement("li");
    li6.innerHTML = "change classes of the elements (<b>5 points</b>).";
    li6.classList.add("even");

    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)
    ul.appendChild(li6)
    
    hr = document.createElement ("hr");
    hr.style.borderColor = "black";
    hr.style.borderWidth = "0.5px"; 
    document.body.appendChild(hr);

    let h02 = document.createElement("h2");
    h02.innerText = "Submission";
    h02.style.color = "red";
    document.body.appendChild(h02);

    let p01 = document.createElement("p1");
    p01.innerHTML = "To submit your work, follow these instructions:";
    p01.style.color = "black";
    document.body.appendChild(p01);

    let li01 = document.createElement("li");
    li01.innerHTML = "Create a new repository on Github, named <b>lab7 (1 point)</b>.";
    li01.classList.add("odd");

    let li02 = document.createElement("li");
    li02.innerHTML = "Clone this repository to your local machine and work inside it.";
    li02.classList.add("even");

    let li03 = document.createElement("li");
    li03.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with  &quot;Hello, World!&quot; message (<b>1 point</b>).";
    li03.classList.add("odd");

    let li04 = document.createElement("li");
    li04.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above <b>(1 point)</b>.";
    li04.classList.add("even");

    let li05 = document.createElement("li");
    li05.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
    li05.classList.add("odd");

    let li06 = document.createElement("li");
    li06.innerHTML = "Write a JavaScript program in <b>main.js</b>  to make your <b>index.html</b>  look identical to this HTML file <b>(5 points)</b>.";
    li06.classList.add("even");

    let li07 = document.createElement("li");
    li07.innerHTML = "After you finish your work, submit it to the Github <b>(2 points)</b>.";
    li07.classList.add("odd");

    let ul1 = document.createElement("ul");
    document.body.appendChild(ul1);
    ul1.appendChild(li01)
    ul1.appendChild(li02)
    ul1.appendChild(li03)
    ul1.appendChild(li04)
    ul1.appendChild(li05)
    ul1.appendChild(li06)  
    ul1.appendChild(li07)        

    hr = document.createElement ("hr");
    hr.style.borderColor = "black";
    hr.style.borderWidth = "0.5px"; 
    document.body.appendChild(hr);

    console.log(document);