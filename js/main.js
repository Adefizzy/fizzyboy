

// grab our template code from the DOM


var source   = $("#todo-template").html();

// compile the template so we can use it
var template = Handlebars.compile(source);

// create some data
var task1 = {
    skills: [
      {
        "skillName":"HTML5",
        "percentage": 0,
        "percent":95
      },
      {
        "skillName":"CSS3",
        "percentage": 0,
        "percent":85
      },
      {
        "skillName":"JavaScript",
        "percentage": 0,
        "percent":90
      },
      {
        "skillName":"JQuery",
        "percentage": 0,
        "percent":75
      },
      {
        "skillName":"React.Js",
        "percentage": 0,
        "percent":75
      },
      {
        "skillName":"Sass",
        "percentage": 0,
        "percent":80
      },
      {
        "skillName":"NodeJs",
        "percentage": 0,
        "percent":70
      }
    ]
   
};
var targetPos = $('#aboutMe').offset().top;
var targetPosAbout = targetPosAbout = $('#about').offset().top;

function renderDom(data, htmlDiv){
  var html    = template(data);
  $(htmlDiv).html(html)
}


$(document).ready(function(){

  renderDom(task1, "#skill_set")
// Function to Load a bar
  function loadEachBar(index, percent){
    $(window).scroll(()=>{

    var scrollPos = $(window).scrollTop();

      if(scrollPos > targetPos){
        let handle = setInterval(function (){
          
          if(task1["skills"][index]["percentage"] < percent){
            
            task1["skills"][index]["percentage"]++;

            renderDom(task1,"#skill_set");
          }
        }, 50);
      }
    });
  }
  
  for(let i = 0; i < task1["skills"].length; i++){
    loadEachBar(i, task1["skills"][i]["percent"]);
  }
 
});


const headerSection = document.querySelector('#header-section');
const scrollUp= document.querySelector('#scroll-up');
let windowOffSet;
let headerSectionHeight;
window.addEventListener('scroll', () => {
   windowOffSet = window.pageYOffset;
  headerSectionHeight = headerSection.getBoundingClientRect();
  // console.log('window', windowOffSet);
  // console.log('height', headerSectionHeight.height);
  if((headerSectionHeight.height / 2) > windowOffSet){
    // scrollUp.classList.add('hide');
    scrollUp.style.display = 'none';
    console.log('hidden')
  }else{
    // scrollUp.classList.remove('hide');
    console.log('display')
    scrollUp.style.display = 'flex';
  }
});