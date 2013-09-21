var quotes = [
    {item : {
          text : "Knowledge speaks but wisdom listens",
          cite : "Jimi Hendrix"
        }},
    {item : {
          text : "Dissent is what rescues democracy from a quiet death behind closed doors",
          cite  : 'Molly Ivins'
       }},
   {item : {
       text : "The world is a tragedy to those who feel, but a comedy to those who think.",
       cite : "Horace Walpole"
      }},
   {item : {
       text : "Emancipate yourself from mental slavery, none but ourselves can free our mind.",
       cite : "Bob Marley"
      }},
   {item : {
       text : "Flee from hate, mischief and jealousy. Don't bury your thoughts, put your vision to reality. Wake Up and Live!",
       cite : "Bob Marley"
      }},
   {item : {
       text : "It is easy to hate and it is difficult to love. All good things are difficult to achieve; and bad things are very easy to get.",
       cite : "Confucius"
      }},
   {item : {
       text : "The notion that human life has greater value than any other form of life is both unjustifiable and arrogant.",
      cite : "Fingers Pointing Toward the Moon (Wei Wu Wei)"
     }},
  {item : {
      text : "...we reject as false the choice between our safety and our ideals. ...Those ideals still light the world, and we will not give them up for expedience's sake.",
      cite : "Barack Obama"
    }},
  {item : {
      text : "There's just a feeling you get from certain things you do in life that just kind of feel pure and independent of what's actually, physically, going on. All of a sudden you have this feeling of clarity. ",
      cite : "Craig Kelly"
     }},
   {item : {
       text : "The purpose of a fish trap is to catch fish, and when the fish are caught, the trap is forgotten. The purpose of a rabbit snare is to catch rabbits. When the rabbits are caught, the snare is forgotten. The purpose of words is to convey ideas. When the ideas are grasped, the words are forgotten. Where can I find a man who has forgotten words? He is the one I would like to talk to.",
       cite : "Chuang Tzu"
     }},
  {item : {
      text: "I am always doing that which I can not do, in order that I may learn how to do it.",
      cite : "Pablo Picasso"
    }},
  {item : {
      text : "Believe nothing, no matter where you read it, or who said it, no matter if I have said it, unless it agrees with your own reason and your own common sense.",
      cite : "Buddha"
    }},
  {item : {
      text : "Electricity is actually made up of extremely tiny particles called electrons, that you cannot see with the naked eye unless you have been drinking.",
      cite : "Dave Barry"
     }},
   {item : {
       text : "Glory is fleeting, but obscurity is forever.",
       cite : "Napolean"
      }},
   {item : {
       text : "So this is how liberty dies. With thunderous applause.",
       cite : "George Lucas"
      }},
    {item : {
          text : "I can picture in my mind a world without war, a world without hate. And I can picture us attacking that world, because they'd never expect it.",
          cite : "Jack Handey"
       }},
  {item : {
      text : "To punish me for my contempt for authority, fate made me an authority myself.",
      cite : "Albert Einstiein"
     }},
  {item : {
      text : "Humor is the only test of gravity, and gravity of humor; for a subject which will not bear raillery is suspicious, and a jest which will not bear serious examination is false wit.",
      cite : "Aristotle"
     }},
  {item : {
      text : "Time is that quality of nature which keeps events from happening all at once. Lately it doesn't seem to be working.",
      cite : "Anonymous"
    }},
  {item : 
      {text : "I'm glad I didn't have to fight in any war. I'm glad I didn't have to pick up a gun. I'm glad I didn't get killed or kill somebody. I hope my kids enjoy the same lack of manhood.",
          cite : "Tom Hanks"}
    }
]
var pos = ['x1','x2','x3'];
var block = ['w1','w2','w3'];
quotes.mathIsHard = function(num){
  return Math.floor(Math.random()*num);
};
quotes.classes = function(){
  return block[quotes.mathIsHard(3)];
};
quotes.classes2 = function(){
  return pos[quotes.mathIsHard(3)];
};
quotes.build = function(obj,inc){
  var text = obj.text;
  var cite = obj.cite;
  var html = $('.template').clone().removeClass('template')
  .addClass(quotes.classes2())
  .addClass('waiting')
  .attr('id','quote-'+inc);
  $('#quotes').append(html);
  var _q = $('#quote-'+inc);
  _q.children('p').addClass(quotes.classes())
  .text(text).siblings('cite')
  .text(cite);
}

$(function(){
  var obj = quotes;
  for(i=0;i<obj.length;i++){
    quotes.build(obj[i].item, i);
  }
  var box = $('blockquote');

  if(!box.hasClass('active'))
    box.first().addClass('active').removeClass('waiting');
 $('.next').on('click', function(e){
    e.preventDefault();
    var current = $('.active');
    if(!current.is(':last-child'))
    current.removeClass('active').addClass('leaving').next('blockquote').addClass('active').removeClass('waiting');
  });
  $('.previous').on('click', function(e){
    e.preventDefault();
    var current = $('.active');
    f(!current.is(':first-child'))
    current.removeClass('active').addClass('waiting').prev('blockquote').addClass('active').removeClass('leaving');
  });






});