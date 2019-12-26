// Global Variables
const inviteInput = document.querySelector('#inviteInput');
const form = document.querySelector('form');
const checkResponded = document.querySelector('.checkResponded');
const listInvitees = document.querySelector('.listInvitees');
const confirmed = document.querySelector('#confirmed');
const combo = document.querySelector('.combo');






// Load all Events
loadAllEvents()

function loadAllEvents(){
    // Get All People from Local Storage
    document.addEventListener('DOMContentLoaded', getAllPeople);
    // Add Someone to the List
    form.addEventListener('submit', addSomeone);
    // Delete a Person
    listInvitees.addEventListener('click', removePerson);
    // Editable Event
    listInvitees.addEventListener('click', editPerson);
    // Checkbox event responded
    checkResponded.addEventListener('input', checkR);
  
    
   
  
    
   


    
}
// create Element Function
function createE(){
    //create an li Element
    const li = document.createElement('li');
    // Create a text Node
    const text = document.createTextNode(inviteInput.value);
    // create div element
    const name = document.createElement('div');
    // Add Class to the Div
    name.className = 'name';
    // create h3
    const h3 = document.createElement('h3');
    // Append text to h3
    h3.appendChild(text);
    // Append h3 to name div
    name.appendChild(h3);
    // Append Text in the li
    li.appendChild(name);
    // Create span Element
    const span = document.createElement('span');
    // Create Span Content
    span.innerHTML = '<p class="faint">confirm<input type="checkbox" class="combo"></p>';
    // append Span Element to li
    li.appendChild(span);
    // Create div Element
    const div = document.createElement('div');
    // Create A Class
    div.className = 'buttonsB';
    // Create buttons in the div
    div.innerHTML = "<span class='btnE'><button class='edit'>edit</button></span><span class='btnR'><button class='remove'>remove</button></span>";
    // Append div to li
    li.appendChild(div);
    

  
    //Append li to ul    
    listInvitees.appendChild(li);
}


// Get All People
function getAllPeople(){
    let people;
    if(localStorage.getItem('people') === null){
        people = [];

    }else{
        people = JSON.parse(localStorage.getItem('people'));
    }
    people.forEach(function(person) {
        //create an li Element
    const li = document.createElement('li');
    // Create a text Node
    const text = document.createTextNode(person);
       // create div element
       const name = document.createElement('div');
       // Add Class to the Div
       name.className = 'name';
       // create h3
       const h3 = document.createElement('h3');
       // Append text to h3
       h3.appendChild(text);
       // Append h3 to name div
       name.appendChild(h3);
       // Append Text in the li
       li.appendChild(name);
    // Create span Element
    const span = document.createElement('span');
    // Create Span Content
    span.innerHTML = '<p class="faint">confirm<input type="checkbox" class="combo"></p>';
    // append Span Element to li
    li.appendChild(span);
    // Create div Element
    const div = document.createElement('div');
    // Create A Class
    div.className = 'buttonsB';
    // Create buttons in the div
    div.innerHTML =  "<span class='btnE'><button class='edit'>edit</button></span><span class='btnR'><button class='remove'>remove</button></span>";
    // Append div to li
    li.appendChild(div);
    


    //Append li to ul    
    listInvitees.appendChild(li)


    });

}


// Add Someone Who will attend
function addSomeone(e){
    if(inviteInput.value != ''){
        createE()
        
        addPersonToLocalStorage();
       
        inviteInput.value = '';

   
        e.preventDefault();

  

    }
   


}
// Add Person To Local Storage
function addPersonToLocalStorage(){
    let people;
    if(localStorage.getItem('people') === null){
        people = [];

    }else{
        people = JSON.parse(localStorage.getItem('people'));
    }
    people.push(inviteInput.value);
    localStorage.setItem('people', JSON.stringify(people));


}
// Remove A person
function removePerson(e){
    
        if(e.target.className === 'remove'){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.parentElement.remove();
            removePersonFromLocalStorage(e.target.parentElement.parentElement.parentElement);
        }
        }

    
 
   

}
// Remove Element From Local Storage 
function removePersonFromLocalStorage(person){
    let text = person.firstChild.textContent.toLowerCase()
    let people;
    if(localStorage.getItem('people') === null){
        people = [];

    }else{
        people = JSON.parse(localStorage.getItem('people'));

    }
    people.forEach((human, index)=>{
        if(text === human.toLowerCase()){
            people.splice(index, 1);

        }

    });
     
    
    localStorage.setItem('people', JSON.stringify(people));


}

// Edit Person
 function editPerson(e){
    if(e.target.className === 'edit'){
        const text = e.target.parentElement.parentElement.parentElement.firstChild.firstChild.textContent; 
        e.target.parentElement.parentElement.parentElement.firstChild.innerHTML = `<input type='text' value='${text}' class='editable'>`;
        e.target.parentElement.innerHTML = "<button class='save'>save</button>";
        const editable = document.querySelector('.editable');
        editable.addEventListener('input', editNow);
        
        
        
       
    

      
        
        
     }
 }
 
 function editNow(e){
      const btn = document.querySelector('.save');
      btn.addEventListener('click', function() {
            e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.firstChild.innerHTML = `<button class='edit'>edit</button>`;
            e.target.parentElement.innerHTML = `<h3>${e.target.value}<h3>`;
            let people;
            if(localStorage.getItem('people') === null){
                people = [];

            }else{
                people = JSON.parse(localStorage.getItem('people'));

            }
            const all = document.querySelectorAll('li');
            all.forEach(function(item, index){
                people[index] = item.firstChild.firstChild.textContent;

            });
            localStorage.setItem('people', JSON.stringify(people));

            
           
          
            
});
          
 }

 function checkR(e){
     if(e.target.checked == true){
        const liv = document.querySelectorAll('li');
         liv.forEach((item)=>{
             if(item.firstChild.nextSibling.firstChild.firstChild.nextSibling.checked != true){
                 item.style.display = 'none';

             }
         })
  
        }else{
        const liv = document.querySelectorAll('li');
        liv.forEach((item)=>{
            if(item.firstChild.nextSibling.firstChild.firstChild.nextSibling.checked == true || item.firstChild.nextSibling.firstChild.firstChild.nextSibling.checked == false){
                item.style.display = 'flex';

            }

           


        })
        

     }
        

           


        
        
       
         

     }

 


 










