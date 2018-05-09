rpls = 
  ru:[
    [/[йьъ]/g,"X"],
    [/[аеёиоуыэюяaeiouy]/g,"G"],
    [/[бвгджзклмнпрстфхцчшщbcdfghjklmnpqrstvwxz]/g,"S"]
  ]
  uk:[
    [/[йьъї]/g,"X"],
    [/[аеёиоуыэюяaeiouyаеуоиійєюя]/g,"G"],
    [/[бвгджзклмнпрстфхцчшщbcdfghjklmnpqrstvwxz]/g,"S"]
  ]  


hyf=[
      ["xgg" , "x-gg"],
      ["xgs" , "x-gs"],
      ["xsg" , "x-sg"],
      ["xss" , "x-ss"],
      ["gssssg" , "gss-ssg"],
      ["gsssg" , "gss-sg"],
      ["gsssg" , "gs-ssg"],
      ["sgsg" , "sg-sg"],
      ["gssg" , "gs-sg"],
      ["sggg" , "sg-gg"],
      ["sggs" , "sg-gs"]
    ]

recursiveReplaceAll = (str, search, replacement)->      
  tmp = str.replace(new RegExp(search, 'g'), replacement);
  if tmp.indexOf(search)>0
    recursiveReplaceAll(tmp, search, replacement);
  else
    tmp    


check_form  = (event) ->
  # event.preventDefault() 
  input = document.getElementById("input_text") 
  output = document.getElementById("output_text")
  output.value = split_text(input.value)
  addElement(output.value,"zero")
  input.value = ""
  output.value = ""
  return

change_input_text = (e) ->
  txt = split_text(e.target.value)
  output_text = document.getElementById("output_text")
  output_text.value = txt
  console.log(e)

split_text = (txt) ->
  tmp = txt.toLowerCase()
  for rpl in rpls["uk"]
    tmp = tmp.replace(rpl[0],rpl[1])
  tmp = tmp.toLowerCase()
  
  for hy,i in hyf
    wht = hy[0];
    chng = hy[1]
    tmp = recursiveReplaceAll(tmp,wht,chng);
    console.log(i+"."+" "+wht+" => "+chng+" = "+tmp);
    
  new_txt = "";
  j=0
  for l,i in tmp
    if l != "-"
      new_txt += txt[j]
      j+=1
    else
      new_txt+=l
  console.log(i+" . "+new_txt);
  return new_txt;


addElement = (txt,element_name) -> 
  # // create a new div element 
  newDiv = document.createElement("div"); 
  # // and give it some content 
  newContent = document.createTextNode(txt); 
  # // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  # // add the newly created element and its content into the DOM 
  currentDiv = document.getElementById(element_name); 
  document.body.insertBefore(newDiv, currentDiv); 
  return
