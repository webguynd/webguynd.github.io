var typeArea = document.getElementById('typeArea');

var typewriter = new Typewriter(typeArea, {
    loop: true,
    delay: 55
})

typewriter.typeString('API documentation')
    .pauseFor(500)
    .deleteAll()
    .typeString('developer documentation')
    .pauseFor(500)
    .deleteAll()
    .typeString('end-user documentation')
    .pauseFor(500)
    .deleteAll()
    .typeString('e-learning modules')
    .pauseFor(500)
    .deleteAll()
    .typeString('technical blogs and articles')
    .pauseFor(500)
    .deleteAll()
    .start();