var typeArea = document.getElementById('typeArea');

var typewriter = new Typewriter(typeArea, {
    loop: true,
    delay: 55
})

typewriter.typeString('website copy')
    .pauseFor(500)
    .deleteAll()
    .typeString('product pages')
    .pauseFor(500)
    .deleteAll()
    .typeString('email sequences')
    .pauseFor(500)
    .deleteAll()
    .typeString('blogs and articles')
    .pauseFor(500)
    .deleteAll()
    .typeString('UI/UX copy')
    .pauseFor(500)
    .deleteAll()
    .typeString('sales pages')
    .pauseFor(500)
    .deleteAll()
    .start();