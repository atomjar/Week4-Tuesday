function getData(data) {
    console.log("data", data);
    var items = data.results.map(display => display.title + display.price + display.Shop.shop_name)
    var pictures = data.results.map(display => display.Images[0].url_170x135)


    items.forEach(function(item) {
        var list = [item]
        var name = document.createElement('li')
        var names = document.createTextNode(item)
        name.appendChild(names)
        document.getElementById('list').appendChild(name)
    })

    var photos = pictures.forEach(function(pic) {
        var img = document.createElement('IMG')
        img.src = pic
        document.getElementById('list').appendChild(img)
    })

}




    // items.forEach(function(item) {
    //     var list = [item]
    //     var name = document.createElement('li')
    //     var names = document.createTextNode(item)
    //     name.appendChild(names)
    //     document.getElementById('list').appendChild(name)
    // })
    //
    // pictures.forEach(function(pic) {
    //     var img = document.createElement('IMG')
    //     img.src = pic
    //     document.getElementById('list').appendChild(img)
    // })




    // pictures.forEach(function(pic) {
    //     var pics = [pic]
    //     var img = document.createElement('IMG')
    //     img.src = pics
    //     $('.list').append(img)
    // })
    //


  //   document.createElement('section')
  //
  // $section = $('<section>')
  //
  //   $section.html('this &amp; that')



    //     var source = $("#entry-template").html();
    //     var template = Handlebars.compile(source);
    //
    //     var display = [
    //       {img: picture}
    //     ];
    //
    //     for (var i = 0; i < display.length; i++) {
    //       var html = template(display[i]);
    //       $('#list').append(html)
    //     }
    //
    // }
