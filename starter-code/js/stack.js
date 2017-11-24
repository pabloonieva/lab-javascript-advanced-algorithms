$(document).ready(function() {
  var stack = new StackDataStructure();

  // ADD to the stack
  $(".stackStructure .add").click(function() {
    var element = $(".stackStructure #inputStack").val();
    if(stack.canPush()){
      stack.push(element);
      $(".stackStructure .greyBoxes div.greyBox:last").removeClass("greyBox").removeClass("redBox").addClass("blueBox").text(element);
    }else{
      $(".stackStructure div:first-child").addClass("redBox").text("Stack Overflow");
    }
  });


  //TAKE from the stack
  $(".take").click(function() {
    if(stack.isEmpty()){
      console.log("We cant remove an Item. Stack Underflow");
      $(".stackStructure .greyBoxes div:last-child").addClass("redBox").text("Stack Underflow");
    }else{
      stack.pop();
      console.log("We remove one item");
      $(".stackStructure .greyBoxes div.blueBox:first").removeClass("blueBox").removeClass("redBox").addClass("greyBox").text(" ");
    }
  });



});

// $(function(){
//   $(".add").click(function(){
//     $(".greyBox").removeClass("greyBox").addClass("blueBox");
//   });
// });
