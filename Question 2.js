var library=[
{
  author:'Bill Gates',
  title:'The Road Ahead',
  readingStatus:true
  },
  {
  author:'Steve Jobs',
  title:'Walter Isaacsob',
  readingStatus:true
  },
  {
  author:'Suzanne Collins',
  title:'Mockingjay:The Final Book Of The Hunger Games',
  readingStatus:false
  }];
  for(var i=0;i<library.length;i++)
  {
     var book="'"+library[i].title+"'"+' by '+"'"+library[i].author+"'";
     if(library[i].readingStatus)
     {
       console.log("Already Read "+book);
     }
     else
     {
       console.log("Not Read "+book);
       }
}