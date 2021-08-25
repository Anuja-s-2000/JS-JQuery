let paragraph = "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!";
let sentences=paragraph.replace(/[0-9]{10}/ , '\'XXXXXXXXXX\'').split(/(?=[])|(?<=[.?!])/g);
//console.log(sentence);
//console.log(sentences.length);
let x=0;
sentences.forEach(func);
function func(item) {
  if(item.trim().split(' ').length > 3){ 
    console.log(++x + '. ' +item.trim());
  }
}
