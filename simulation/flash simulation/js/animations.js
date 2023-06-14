//arrow down animation
function moveArrowDown(id, position) {
    var elem = document.getElementById(id);
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);

    function frame() {
        if (pos == position) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.bottom = pos + 'px';
        }
    }

}


function moveArrowLeft(id,position) {
  var elem = document.getElementById(id);   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  
  function frame() {
    if (pos == position) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos - 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

function moveArrowRight(id,position) {
  var elem = document.getElementById(id);   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  
  function frame() {
    if (pos == position) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos - 'px'; 
      elem.style.right = pos + 'px'; 
    }
  }
}



//arrow obervaitons
function animateObserve(ele, val) {

    anime({
        targets: ele,
        duration: 1000,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        direction: "alternate",
        delay: anime.stagger(200),
        d: [{
                value1: val
            },
            {
                value2: val
            }
        ],
        loop: false
    });
}


function cantiPlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-pl-main-beam', // target shape
        {
            path: '#canti-pl-main-beam'
        }, // from shape
        {
            path: '#canti-beam-pl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function cantiUdlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-pl-main-beam', // target shape
        {
            path: '#canti-pl-main-beam'
        }, // from shape
        {
            path: '#canti-beam-udl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}


function fixedPlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-pl-main-beam', // target shape
        {
            path: '#canti-pl-main-beam'
        }, // from shape
        {
            path: '#fixed-beam-pl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function fixedUdlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-pl-main-beam', // target shape
        {
            path: '#canti-pl-main-beam'
        }, // from shape
        {
            path: '#fixed-beam-udl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function onessPlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-pl-main-beam', // target shape
        {
            path: '#canti-pl-main-beam'
        }, // from shape
        {
            path: '#oness-beam-pl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function onessUdlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-pl-main-beam', // target shape
        {
            path: '#canti-pl-main-beam'
        }, // from shape
        {
            path: '#oness-beam-udl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function steelBeamOne(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-udl-main-beam', // target shape
        {
            path: '#canti-udl-main-beam'
        }, // from shape
        {
            path: '#steel-beam-1'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function steelBeamTwo(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-udl-main-beam', // target shape
        {
            path: '#canti-udl-main-beam'
        }, // from shape
        {
            path: '#steel-beam-2'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function steelBeamThree(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-udl-main-beam', // target shape
        {
            path: '#canti-udl-main-beam'
        }, // from shape
        {
            path: '#steel-beam-3'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}
function steelBeamFour(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-udl-main-beam', // target shape
        {
            path: '#canti-udl-main-beam'
        }, // from shape
        {
            path: '#steel-beam-4'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}
function steelBeamFive(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-udl-main-beam', // target shape
        {
            path: '#canti-udl-main-beam'
        }, // from shape
        {
            path: '#steel-beam-5'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}
function steelBeamSix(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-udl-main-beam', // target shape
        {
            path: '#canti-udl-main-beam'
        }, // from shape
        {
            path: '#beam12'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}