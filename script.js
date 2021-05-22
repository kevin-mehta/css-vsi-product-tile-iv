$(document).ready(function() {
  console.log("ready!");

  var ellipsizeTextBox = function(el, sentence) {
    el.innerHTML = sentence;
    wordArray = el.innerHTML.split(" ");
    console.log("wordArray: ", wordArray);
    console.log("el.scrollHeight: ", el.scrollHeight);
    console.log("el.offsetHeight: ", el.offsetHeight);
    while (el.scrollHeight > el.offsetHeight) {
      wordArray.pop();
      el.innerHTML = wordArray.join(" ") + "...";
    }
  };

  var titleEllipsis = function(tileClassName, titleClassName) {
    console.log(tileClassName);
    console.log(titleClassName);
    $(tileClassName).each(function() {
      // var title = $(this).find(titleClassName);
      var title = $(titleClassName);
      console.log(title);
      ellipsizeTextBox(title[0], title.attr("data-title"));
    });
  };

  titleEllipsis(".order-prod--name-para", ".order-prod--name-text");
  // titleEllipsis(".order-prod--name", ".order-prod--name-text");
  // ellipsizeTextBox(
  //   $(".order-prod--name-text"),
  //   "Gold Standard 100% Whey Protein - Double Rich Chocolate (5 Lbs. / 74 Servings) Abc Abcd Abcdef Abc Abcd Abcdef Abc Abcd Abcdef Abc Abcd Abcdef Abc Abcd Abcdef"
  // );
});
