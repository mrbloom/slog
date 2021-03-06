"use strict";

// Generated by CoffeeScript 2.1.1
var addElement, change_input_text, check_form, hyf, _recursiveReplaceAll, rpls, split_text;

rpls = {
  ru: [[/[йьъ]/g, "X"], [/[аеёиоуыэюяaeiouy]/g, "G"], [/[бвгджзклмнпрстфхцчшщbcdfghjklmnpqrstvwxz]/g, "S"]],
  uk: [[/[йьъї]/g, "X"], [/[аеёиоуыэюяaeiouyаеуоиійєюя]/g, "G"], [/[бвгджзклмнпрстфхцчшщbcdfghjklmnpqrstvwxz]/g, "S"]]
};

hyf = [["xgg", "x-gg"], ["xgs", "x-gs"], ["xsg", "x-sg"], ["xss", "x-ss"], ["gssssg", "gss-ssg"], ["gsssg", "gss-sg"], ["gsssg", "gs-ssg"], ["sgsg", "sg-sg"], ["gssg", "gs-sg"], ["sggg", "sg-gg"], ["sggs", "sg-gs"]];

_recursiveReplaceAll = function recursiveReplaceAll(str, search, replacement) {
  var tmp;
  tmp = str.replace(new RegExp(search, 'g'), replacement);
  if (tmp.indexOf(search) > 0) {
    return _recursiveReplaceAll(tmp, search, replacement);
  } else {
    return tmp;
  }
};

check_form = function check_form(event) {
  var input, output;
  // event.preventDefault() 
  input = document.getElementById("input_text");
  output = document.getElementById("output_text");
  output.value = split_text(input.value);
  addElement(output.value, "zero");
  input.value = "";
  output.value = "";
};

change_input_text = function change_input_text(e) {
  var output_text, txt;
  txt = split_text(e.target.value);
  output_text = document.getElementById("output_text");
  output_text.value = txt;
  return console.log(e);
};

split_text = function split_text(txt) {
  var chng, hy, i, j, k, l, len, len1, len2, m, n, new_txt, ref, rpl, tmp, wht;
  tmp = txt.toLowerCase();
  ref = rpls["uk"];
  for (k = 0, len = ref.length; k < len; k++) {
    rpl = ref[k];
    tmp = tmp.replace(rpl[0], rpl[1]);
  }
  tmp = tmp.toLowerCase();
  for (i = m = 0, len1 = hyf.length; m < len1; i = ++m) {
    hy = hyf[i];
    wht = hy[0];
    chng = hy[1];
    tmp = _recursiveReplaceAll(tmp, wht, chng);
    console.log(i + "." + " " + wht + " => " + chng + " = " + tmp);
  }
  new_txt = "";
  j = 0;
  for (i = n = 0, len2 = tmp.length; n < len2; i = ++n) {
    l = tmp[i];
    if (l !== "-") {
      new_txt += txt[j];
      j += 1;
    } else {
      new_txt += l;
    }
  }
  console.log(i + " . " + new_txt);
  return new_txt;
};

addElement = function addElement(txt, element_name) {
  var currentDiv, newContent, newDiv;

  // // create a new div element 
  newDiv = document.createElement("div");
  newContent = document.createTextNode(txt);
  newDiv.appendChild(newContent);
  currentDiv = document.getElementById(element_name);
  document.body.insertBefore(newDiv, currentDiv);
};