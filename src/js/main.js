var fields = document.querySelectorAll(".form__field");
var capts = document.querySelectorAll(".form__capt");


for(var i = 0; i < fields.length; i++) {
  fields[i].placeholder = "";
}

var focusField = function(item, capt) {
  item.addEventListener("focus", function() {
    capt.classList.add("form__capt--full");
  });
};

var blurField = function(item, capt) {
  item.addEventListener("blur", function() {
    if(!(item.value)) {
      capt.classList.remove("form__capt--full");
    }
  });
};

var interSearch = function () {
  for(var i = 0; i < fields.length; i++) {
    if(!(fields[i].value)) {
      focusField(fields[i], capts[i]);
      blurField(fields[i], capts[i]);
    }
  }
};

interSearch();


