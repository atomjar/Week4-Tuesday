
// QUIZ

var purchase = [bananas: .75, milk: 1, ground beef: 1.4]

var prices = [bananas: .8, milk: 2.95, ground beef: 5.99]



let bananas = {food: "bananas", amount: .75, unit: "lb", rate: .8}
let milk = {food: "milk", amount: 1, unit: "gallon", rate: 2.95}
let beef = {food: "ground beef", amount: 0.75, unit: "lb", rate: .8}


let purchase = [bananas, milk, beef]

purchase
[object, object, object]

purchase.map(item +> item.amount * item.rate)

[0.6000000000001, 2.95, 8.386]

purchase.map(item +> item.amount * item.rate).reduce(function(accumulator, current){return accumulator + current}, 0)
11.936

or:
purchase.reduce(function(accumulator, current){return accumulator + current.amount * current.rate}, 0)
11.936

or:

let total = 0

purchase.forEach(item => total = total + item.amount * item.rate)

total = 11.936

////////

$.get(`{url}\amway_events/2016/12`, function(response) {console.log(response)})

var eventCount = 0

$.get(`{url}\amway_events/2016/12`, function(response) {eventCount = response.events.length)})
console..log('event count is', eventCount)

function showEventNames (response) {
  let events = response.events
  let list = $('<ul>')
  events.forEach(fiunction(event)){
    let li = $('<li>')
    li.text(event.Title)
    list.append(li)
  })
  $("#events").append(list)
}
$.get(`${url}/amway_events/2016/12`, showEventNames)


function showMagic (response) {
  let events = response.events.filter(event => event.Title.includes("MAGIC")
  events.forEach(function(event){
    let section = $('<section>')
    section.html(event.Description)
    $("#events").append(section)
  })
}
$.get(`${url}/amway_events/2016/12`, showMagic)
