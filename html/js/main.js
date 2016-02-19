var videos = [
    {
        title: "Cruel",
        artist: "St. Vincent",
        link: "https://player.vimeo.com/video/28663610?api=1&player_id=player1",
        length: "3:17"
    },
    {
        title: "A Day with Everyone Is Gay",
        artist: "Kristin & Dannielle",
        link: "https://player.vimeo.com/video/100338311?api=1&player_id=player1",
        length: "2:39"
    },
    {
        title: "Do the Right Thing",
        artist: "Broad City",
        link: "https://player.vimeo.com/video/33328152?api=1&player_id=player1",
        length: "4:36"
    },
    {
        title: "Chandelier Performance at Pride",
        artist: "Kristin & Dannielle",
        link: "https://player.vimeo.com/video/99745257?api=1&player_id=player1",
        length: "1:40"
    },
    {
        title: "How to Do a Rainbow Kick",
        artist: "Annie Clark",
        link: "https://player.vimeo.com/video/85067428?api=1&player_id=player1",
        length: "3:08"
    },
    {
        title: "How to Do a Rainbow Kick",
        artist: "Ilana Glazer",
        link: "https://player.vimeo.com/video/5860928?api=1&player_id=player1",
        length: "8:49"
    },
    {
        title: "What the Fuck Was I Thinking",
        artist: "Jenny Owen Youngs",
        link: "https://player.vimeo.com/video/35712172?api=1&player_id=player1",
        length: "3:25"
    },
    {
        title: "Waxing",
        artist: "Broad City",
        link: "https://player.vimeo.com/video/31677652?api=1&player_id=player1",
        length: "3:56"
    }
];

$(function(){

    var iframe = $('#player1'),
        player = $f(iframe[0]),
        count = 0,
        videoInPlay = videos[count],
        shuffle = false,
        linear = true,
        infoCards = '.info p, .info-container';

    // when the player is ready, add listeners
    player.addEvent('ready', function(){
        player.addEvent('finish', onFinish);
        player.addEvent('playProgress', frameListen);
    });

    function onFinish(id){
        $('#img').css('display','block');
        $('#replay').css('display','block');
        $('.interactive-img').css('display','block');
    }

    // jumps to appropriate time on video for timeline
    function jumpTo(time){
        player.api('seekTo', time);
    }

    function frameListen(data, id){
        // if (data.seconds){

        // }
    }

    function play(){
        player.api('play');
    }

    function startVideo(){
        iframe.attr("src", videos[count].link);
        updateInfo();
        play();
    }

    function nextVideo(){
        $(infoCards).removeClass('fade-in');
        if (shuffle === false) {
            count++;
            if (count === videos.length){
                count = 0;
            }
        } else {
            count = Math.floor(Math.random() * videos.length);
        }
        console.log(count);
        startVideo();
    }

    function lastVideo(){
        count--;
        startVideo();
    }

    function updateInfo(){
        $('.title').text(videos[count].title);
        $('.artist').text("By: " + videos[count].artist);
        $('.time').text("Can you spare " + videos[count].length + "?");

        $(infoCards).addClass('fade-in').delay(3000).queue(function(next){
            $(this).removeClass("fade-in");
            next();
        });
    }

    function init(){
        startVideo();
    }


    //*///////////////////////////////////////////
    // button functions
    ///////////////////////////////////////////*//

    $('.next').click(function(){
        nextVideo();
    });

    $('.last').click(function(){
        lastVideo();
    });

    $('#myonoffswitch').click(function(){
        if ($(this.checked)[0]===true) {
            shuffle = true;
        } else {
            shuffle = false;
        }
    });


    //*///////////////////////////////////////////
    // app functions
    ///////////////////////////////////////////*//

    init();
});

