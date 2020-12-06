var city ='amsterdam'
undefined
city.toUpperCase()
"AMSTERDAM"
city.toLowerCase()
"amsterdam"
city.length
9
city.charAt(0)
"a"
city.charAt(8)
"m"
city[0]
"a"
city[1]
"m"
city[8]
"m"


var city = 'lOnDon'
'London'

var name= '  Priyanka '
name.trim()
"Priyanka"

 var name ='  Priyanka .'
name.trim()
"Priyanka ."

var a = 'John'
var b = 'john'

a==b
false
a.toLowerCase()==b.toLowerCase()
true

var a= 'John'
undefined
a.charAt(0)
"J"
a.slice(0)
"John"
a.slice(1)
"ohn"
a.slice(2)
"hn"

 var city = 'amsterdam'
undefined
city.slice(2,5)
"ste"

var city ='lOnDon'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"


var city ='amsterdam'
city.slice(2,5)
"ste"
city.substring(2,5)
"ste"
city.substr(2,5)
"sterd"

slice(start,end)
substring(start,end)
substr(start, length)

var city ='amsterdam'
city.slice(-1)
"m"
city.substring(-1)
"amsterdam"
city.slice(-1,-3)
""
city.substring(-1,-3)
""
city.slice(-3,-1)
"da"
city.substring(-3,-1)
""
city.slice(2,-1)
"sterda"
city.substring(2,-1)
"am"
city.slice(-2,1)
""
city.substring(-2,1)
"a"

var data ='I am learning Javascript'
data.replace('Javascript','JS')
"I am learning JS"

var data ='Javascript i am learning Javascript'
data.replace('Javascript','Js')
"Js i am learning Javascript"

data.replace(/Javascript/g ,'JS')
"JS i am learning JS"


var name ='Priyanka . '
name.replace(/ /g,'')
"Priyanka."

var url ='https://github.com/Aakashdeveloper/Oct_javaScript_Eveng'
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "Oct_javaScript_Eveng"]

var data ='I am learning Javascript'
data.split(' ')
(4) ["I", "am", "learning", "Javascript"]

var a = "Javascript"
a.split("")
(10) ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
var out =["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
out.toString()
"J,a,v,a,s,c,r,i,p,t"
out.toString().replace(/,/g ,'')
"Javascript"





