/*================= js ==================*/ 




/*================= jq ==================*/
$(document).ready(function(){

    alert("welcome to my page");
    $('#btn').on("click", function(){
        alert("hello");
    });

    // show/hide 
    $('#btnh').on("click", function(){
        $('#sh1').hide();
    });
    $('#btns').on("click", function(){
        $('#sh1').show();
    });
    $('#btnt').on("click", function(){
        $('#sh2').toggle();
    });

    // show/hide/toggle
    $('#btnh1').on("click", function(){
        $('#sh2').hide();
    });
    $('#btns1').on("click", function(){
        $('#sh2').show();
    });
    $('#btnt1').on("click", function(){
        $('#sh2').toggle(1000);
    });

    // fade(Out/In/Toggle)
    $('#btnin').on("click", function(){
        $('#oit').fadeIn();
    });
    $('#btnout').on("click", function(){
        $('#oit').fadeOut();
    });
    $('#btntoggle').on("click", function(){
        $('#oit').fadeToggle();
    });

    $( '#p1' ).on( "click", function() {
        $( this ).slideUp();
    });
    $( '#p2' ).on( "click", function() {
        $( this ).slideUp();
    });
    $( '#p3' ).on( "click", function() {
        $( this ).slideUp();
    });

    $('ques').on("click", function(){
        $('answ').slideToggle(500);
    });

    $('#changeText').click(function() {
        $('#text').text('Text Changed!');
    });

    $('#hideButton').click(function() {
        $('#box').hide();
    });

    $('#changeColor').click(function() {
        $('#colorBox').css('background-color', 'yellow');
    });

    $('#alertForm').submit(function(event) {
        event.preventDefault();
        alert('Submitted: ' + $('#username').val());
    });

    $('#validateEmail').click(function() {
        var email = $('#email').val();
        if(email.includes('@')) {
            alert('Valid Email');
        } else {
            alert('Invalid Email');
        }
    });

    $('#infoForm').submit(function(event) {
        event.preventDefault();
        $('#infoDisplay').text($('#info').val());
    });

    $('#resetButton').click(function() {
        $('#resetForm')[0].reset();
    });

    $('#addField').click(function() {
        $('#dynamicForm').append('<input type="text" class="dynamicField">');
    });

    $('#hoverBox').hover(function() {
        $(this).css('background-color', 'red');
    }, function() {
        $(this).css('background-color', 'blue');
    });

    $('#dblClickBox').dblclick(function() {
        $(this).css('color', 'green');
    });

    $('#keyInput').keypress(function(e) {
        alert('Key pressed: ' + String.fromCharCode(e.which));
    });

    $('#focusInput').focus(function() {
        $(this).css('border', '2px solid blue');
    }).blur(function() {
        $(this).css('border', '2px solid red');
    });

    $(window).resize(function() {
        $('body').css('background-color', 'lightgrey');
    });

    $('#loadContent').click(function() {
        $('#contentArea').load('content.html');
    });

    $('#getRequest').click(function() {
        $.get('data.json', function(data) {
            console.log(data);
        });
    });

    $('#postRequest').click(function() {
        $.post('submit.php', { name: 'John' }, function(response) {
            alert('Response: ' + response);
        });
    });

    $('#errorRequest').click(function() {
        $.get('invalid-url', function(data) {
            console.log(data);
        }).fail(function() {
            alert('Error loading data');
        });
    });

    $('#ajaxLoad').click(function() {
        $('#ajaxContent').load('data.html')
            .fail(function() {
                $(this).html('Failed to load data.');
            });
    });

    $('#fadeIn').click(function() {
        $('#fadeBox').fadeIn();
    });

    $('#fadeOut').click(function() {
        $('#fadeOutBox').fadeOut();
    });

    $( ".a1" ).on( "click", function( event ) {
        event.preventDefault();
        $( this ).hide();
    });

    $( ".b1" ).on( "click", function( event ) {
        $( ".a2" ).toggle();
    });
     // ex3
   $( "#b2" ).on( "click", function() {
    $( "#d1" ).animate({
      width: "70%",
      opacity: 0.4,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px",
    }, 1500 );
  });


  // ex4
  $( "#b3" ).on( "click", function() {
   var myDiv = $( ".d2" );
    myDiv.show( "slow" );
    myDiv.animate({
      left:"+=200"
    }, 5000 );
   
    myDiv.queue(function() {
      var that = $( this );
      that.addClass( "newcolor" );
      that.dequeue();
    });
   
    myDiv.animate({
      left:"-=200"
    }, 1500 );
    myDiv.queue(function() {
      var that = $( this );
      that.removeClass( "newcolor" );
      that.dequeue();
    });
    myDiv.slideUp();
  });
   
  $( "#b4" ).on( "click", function() {
    var myDiv = $( ".d2" );
    myDiv.clearQueue();
    myDiv.stop();
   });

  // ex5
  $( ".b5" ).on( "click", function() {
    $( ".d3" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
    $( ".d4" ).slideUp( 300 ).fadeIn( 400 );
  });

  // ex6
  $( ".b6" ).on( "click", function() {
    $( ".d5" )
      .animate({ left:"+=200px" }, 2000 )
      .animate({ top:"0px" }, 600 )
      .queue(function() {
        $( this ).toggleClass( "red" ).dequeue();
      })
      .animate({ left:"10px", top:"30px" }, 700 );
  });

  // ex7
  var horiz = $( "#d7" ).width() - 20,
    vert = $( "#d7" ).height() - 20;
   
  var btns = {
    bstt: function() {
      $( ".d6" ).stop( true, true );
    },
    bs: function() {
      $( ".d6" ).stop();
    },
    bsft: function() {
      $( ".d6" ).stop( false, true );
    },
    bf: function() {
      $( ".d6" ).finish();
    },
    bcf: function() {
      $( ".d6" ).clearQueue().finish();
    },
    bsff: function() {
      $( ".d6" ).stop( false, false );
    },
    bstf: function() {
      $( ".d6" ).stop( true, false );
    },
    bcs: function() {
      $( ".d6" ).clearQueue().stop();
    }
  };
   
  $( "button.b" ).on( "click", function() {
    btns[ this.id ]();
  });
   
  $( "#go" ).on( "click", function() {
    $( ".d6" )
      .clearQueue()
      .stop()
      .css({
        left: 10,
        top: 10
      })
      .animate({
        top: vert
      }, 3000 )
      .animate({
        left: horiz
      }, 3000 )
      .animate({
        top: 10
      }, 3000 );
  });


   // ex8
  var toggleFx = function() {
    $.fx.off = !$.fx.off;
  };
  $( ".b8" ).on( "click", toggleFx );
  $( ".i1" ).on( "click", function() {
    $( ".d8" ).toggle( "slow" );
  } );


  // // ex9
  $( "#og" ).on( "click", function() {
    $( ".d9" ).animate({ left: "+=100px" }, 2000 );
  });
   
  // Stop animation when button is clicked
  $( "#top" ).on( "click", function() {
    $( ".d9" ).stop();
  });
   
  // Start animation in the opposite direction
  $( "#back" ).on( "click", function() {
    $( ".d9" ).animate({ left: "-=100px" }, 2000 );
  });



  // ex10
  $( ".a2" ).on( "click", function() {
    $( "#d10" ).fadeIn( 3000, function() {
      $( ".spa" ).fadeIn( "slow" );
    });
    return false;
  });

  
  // ex11
  $( "#btn1" ).on( "click", function() {
    function complete() {
      $( "<div>" ).text( this.id ).appendTo( "#log" );
    }
    $( "#box1" ).fadeOut( 1600, "linear", complete );
    $( "#box2" ).fadeOut( 1600, complete );
  });
   
  $( "#btn2" ).on( "click", function() {
    $( "div" ).show();
    $( "#log" ).empty();
  });

  // ex12
  $( "#one, #two, #three" ).on( "click", function() {
    $( this ).fadeTo( "fast", Math.random() );
  });

  // ex13
  $( ".b10" ).first().on( "click", function() {
    $( ".pup" ).first().fadeToggle( "slow", "linear" );
  } );

  // ex14
  $(".pao").on( "click", function () {
    if ( $( ".d11" ).first().is( ":hidden" ) ) {
      $( ".d11" ).slideDown( "slow" );
    } else {
      $( ".d11" ).hide();
    }
  });


  // ex15
  $( ".b12" ).on( "click", function() {
    $( ".shao" ).slideToggle( "slow" );
  });

  // ex16
  $(".lao").on( "click", function() {
    if ( $( ".d12" ).first().is( ":hidden" ) ) {
      $( ".d12" ).show( "slow" );
    } else {
      $( ".d12" ).slideUp();
    }
  });

  // ex17
   $('.b13').on ("click", function(){
       $('.box23 p').after ("<b>HELLO</b>");
   });


   // ex18
   $('.b14').on ("click", function(){
       $('.box24 p').before ("<b>HELLO</b>");
   });

   // ex19
   $('.b15'). on ("click", function(){
       $('.box22 p:contains("Name")').css ("background-color","tomato");

   });


   $('b16').on ("click", function(){
       $('.box20 p').css ("font-size","30px");
   });
   $('.b17').on ("click", function(){
       $('.box20 p').css ("font-weight","700");
   });
   $('.b18').on ("click", function(){
       $('.box20 p').css ("font-family","cursive");
   });
   $('.b19').on ("click", function(){
       $('.box20 p').css ("color","green");
   });

   $('.box19 p').on ("click", function(){
       $(this).slideUp(800);
   });

   $('.b20').on ("click", function(){
       $('.box18').css ("border-radius","35px 0px")
   })
   
   $('.b21').on ("click", function(){
       $('.box18').css ("border-radius","0px 35px")
   })

   $('.b22').on ("dblclick", function(){
       $('.box25').css ("background-color","tomato");
   });

   $('.b23').on ("click", function(){
       $('.box16 p').css ("color","red");
   });

});
