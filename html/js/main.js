var videos = [ {
    title: "How to Do a Rainbow Kick",
    artist: "Annie Clark",
    link: "https://player.vimeo.com/video/85067428?api=1&player_id=player1",
    length: "3:08",
    category: "ya ladies"
}, {
    title: "Bach: The Well Tempered Clavier for Sinfini Music",
    artist: "Alan Warburton",
    link: "https://player.vimeo.com/video/128275855?api=1&player_id=player1",
    length: "5:12",
    category: "stunning classical"
}, {
    title: "THE RIDGE",
    artist: "Danny Macaskill",
    link: "https://player.vimeo.com/video/125896742?api=1&player_id=player1",
    length: "6:45",
    category: "sssports"
}, {
    title: "A Day with Everyone Is Gay",
    artist: "Kristin & Dannielle",
    link: "https://player.vimeo.com/video/100338311?api=1&player_id=player1",
    length: "2:39",
    category: "ya ladies"
}, {
    title: "ANNIE BOULANGER",
    artist: "Salomon Snowboards",
    link: "https://player.vimeo.com/video/82395995?api=1&player_id=player1",
    length: "3:44",
    category: "sssports"
}, {
    title: "How to Do a Rainbow Kick",
    artist: "Ilana Glazer",
    link: "https://player.vimeo.com/video/5860928?api=1&player_id=player1",
    length: "8:49",
    category: "ya ladies"
}, {
    title: "Draw a Map",
    artist: "Hilary Hahn and Hauschka",
    link: "https://player.vimeo.com/video/43167298?api=1&player_id=player1",
    length: "2:32",
    category: "fun & random"
}, {
    title: "Relax",
    artist: "Rami Lob",
    link: "https://player.vimeo.com/video/7109534?api=1&player_id=player1",
    length: "4:29",
    category: "music & science"
}, {
    title: "Adam Persson - Raw Run",
    artist: "TMI Skate",
    link: "https://player.vimeo.com/video/99567876?api=1&player_id=player1",
    length: "3:15",
    category: "sssports"
}, {
    title: "CRYSTALS ver I",
    artist: "Bruno Levy",
    link: "https://player.vimeo.com/video/67958283?api=1&player_id=player1",
    length: "4:11",
    category: "music & science"
}, {
    title: "Cruel",
    artist: "St. Vincent",
    link: "https://player.vimeo.com/video/28663610?api=1&player_id=player1",
    length: "3:17",
    category: "ya ladies"
}, {
    title: "Classical Music Season",
    artist: "Barbican",
    link: "https://player.vimeo.com/video/75013716?api=1&player_id=player1",
    length: "1:29",
    category: "stunning classical"
}, {
    title: "HEY U",
    artist: "Basement Jaxx vs. Metropole Orkest",
    link: "https://player.vimeo.com/video/29086109?api=1&player_id=player1",
    length: "5:06",
    category: "stunning classical"
}, {
    title: "Reading Kills",
    artist: "Beto Gomez",
    link: "https://player.vimeo.com/video/33877437?api=1&player_id=player1",
    length: "2:56",
    category: "fun & random"
}, {
    title: "Fuck Was I",
    artist: "Jenny Owen Youngs",
    link: "https://player.vimeo.com/video/35712172?api=1&player_id=player1",
    length: "3:25",
    category: "ya ladies"
}, {
    title: "Morphing Madness",
    artist: "Henrique Barone",
    link: "https://player.vimeo.com/video/134587344?api=1&player_id=player1",
    length: "0:41",
    category: "fun & random"
}, {
    title: "Chandelier Performance at Pride",
    artist: "Kristin & Dannielle",
    link: "https://player.vimeo.com/video/99745257?api=1&player_id=player1",
    length: "1:40",
    category: "ya ladies"
}, {
    title: "SNOWBOARDING [intro]",
    artist: "Burton",
    link: "https://player.vimeo.com/video/72060869?api=1&player_id=player1",
    length: "4:35",
    category: "sssports"
}, {
    title: "Waxing",
    artist: "Broad City",
    link: "https://player.vimeo.com/video/31677652?api=1&player_id=player1",
    length: "3:56",
    category: "ya ladies"
}, {
    title: "FAT MONK",
    artist: "RAT Vs POSSUM",
    link: "https://player.vimeo.com/video/29112172?api=1&player_id=player1",
    length: "4:00",
    category: "fun & random"
}, {
    title: "Meta",
    artist: "Jurriën Boogert",
    link: "https://player.vimeo.com/video/19089326?api=1&player_id=player1",
    length: "2:16",
    category: "v satisfying"
}, {
    title: "Do the Right Thing",
    artist: "Broad City",
    link: "https://player.vimeo.com/video/33328152?api=1&player_id=player1",
    length: "4:36",
    category: "ya ladies"
}, {
    title: "SENSE OF FLYING",
    artist: "Goovinn",
    link: "https://player.vimeo.com/video/32875422?api=1&player_id=player1",
    length: "5:47",
    category: "sssports"
} ];

$(function() {
    function onFinish(id) {
        $("#img").css("display", "block"), $("#replay").css("display", "block"), $(".interactive-img").css("display", "block");
    }
    function frameListen(data, id) {}
    function play() {
        player.api("play");
    }
    function startVideo() {
        iframe.attr("src", videos[count].link), updateInfo(), play();
    }
    function nextVideo() {
        $(infoCards).removeClass("fade-in"), shuffle === !1 ? (count++, count === videos.length && (count = 0)) : count = Math.floor(Math.random() * videos.length), 
        console.log(count), startVideo();
    }
    function lastVideo() {
        0 !== count && (count--, startVideo());
    }
    function updateInfo() {
        $(".title").text(videos[count].title), $(".artist").html("By: " + videos[count].artist), 
        $(".category").html("<span class='constant'>category:</span> " + videos[count].category), 
        $(".time").html("<span class='constant'>time you'll need:</span> " + videos[count].length), 
        $(infoCards).addClass("fade-in");
    }
    function init() {
        startVideo();
    }
    var iframe = $("#player1"), player = $f(iframe[0]), count = 0, shuffle = (videos[count], 
    !1), infoCards = ".info p, .info-container";
    player.addEvent("ready", function() {
        player.addEvent("finish", onFinish), player.addEvent("playProgress", frameListen);
    }), $(".next").click(function() {
        nextVideo();
    }), $(".last").click(function() {
        lastVideo();
    }), $("#myonoffswitch").click(function() {
        shuffle = $(this.checked)[0] === !0 ? !0 : !1;
    }), $(infoCards).click(function() {
        $(this).removeClass("fade-in"), player.api("play"), $(".next, .last").addClass("playing");
    }), init();
});