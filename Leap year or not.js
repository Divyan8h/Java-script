function isleap(year)
{
  var a =year;
  if(year%4===0)
  {
    if(year%100===0)
    {
      if(year%400===0)
      {
        console.log("Leap year.");
      }
      else
      {
        console.log("Not Leap year.");
      }
    }
    else
    {
      console.log("Not Leap year.");
    }
   }
   else
   {
     console.log("Not Leap year.");
   }
 }
isleap(2400);
