/*========================================================*\
|| #######################################################||
|| # Megavid Player v1.0.0                               #||
|| # ----------------------------------------------------#||
|| # (c) 2016-2017 Megavid Co., Ltd.                     #||
|| # All Rights Reserved.                                #||
|| # https://megavid.net                                 #||
\*========================================================*/
var VideoPlayer=function(){function c(b,a){this.opts=b;this.obj=a;this.isMobileDevice();this.options=b;this.thumb=a.t;this.title=a.tt;this.buildSource(a.s);this.video=document.getElementById("video");this.barListeners=[];this.dom={};this.dom.container=document.getElementById("mv-player");this.dom.bufferedBar=document.getElementById("buffer-bar");this.dom.progressHover=document.getElementById("progress-hover");this.dom.currentHoverTime=document.getElementById("current-hover-time");this.dom.volumebar=
document.getElementById("volume-bar");this.dom.volume=document.getElementById("volume");this.dom.eslaped=document.getElementById("video-eslaped");this.dom.currentHoverSeekBar=document.getElementById("current-hover-seekbar");this.dom.progressBar=document.getElementById("progress-bar");this.dom.timeBar=document.getElementById("time-bar");this.dom.remaining=document.getElementById("video-remaining");this.isPaused=!1;this.preload()}c.prototype.isTouchDevice=function(){try{return document.createEvent("TouchEvent"),
!0}catch(b){return!1}};c.prototype.checkIsMobile=function(){var b=!1,a=navigator.userAgent||navigator.vendor||window.opera;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,
4)))b=!0;return b};c.prototype.checkIsMobileOrTablet=function(){var b=!1,a=navigator.userAgent||navigator.vendor||window.opera;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,
4)))b=!0;return b};c.prototype.isMobileDevice=function(){this.isMobile=!1;this.isTouchDevice()?this.isMobile=!0:this.isMobile=this.checkIsMobile()};c.prototype.buildSource=function(b){this.source=!0===this.isMobile?{360:b["360"]}:b};c.prototype.setCookie=function(b,a,d){var c="";d&&(c=new Date,c.setTime(c.getTime()+864E5*d),c="; expires="+c.toUTCString());document.cookie=b+"="+a+c+"; path=/"};c.prototype.getCookie=function(b){b+="=";for(var a=document.cookie.split(";"),d=0;d<a.length;d++){for(var c=
a[d];" "==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(b))return c.substring(b.length,c.length)}};c.prototype.startBuffer=function(){var b=this,a=this.video.buffered.end(0===this.video.buffered.length?0:this.video.buffered.length-1);this.dom.bufferedBar.style.width=100*a/this.video.duration+"%";a<this.video.duration&&setTimeout(function(){b.startBuffer()},500)};c.prototype.parse_timestamp=function(b){var a=b.match(/^(?:([0-9]+):)?([0-5][0-9]):([0-5][0-9](?:[.,][0-9]{0,3})?)/);if(null==a)throw"Invalid timestamp format: "+
b;b=parseInt(a[1]||"0",10);var d=parseInt(a[2],10);return parseFloat(a[3].replace(",","."))+60*d+3600*b};c.prototype.getOffsetLeft=function(b){return b.getBoundingClientRect().left};c.prototype.getIndexOfBuffer=function(b){var a=this.video.buffered.length;if(0>=a)return-1;for(;a--;){if(this.video.buffered.start(a)<=b&&b<=this.video.buffered.end(a))return a;if(0===a)return-1}};c.prototype.convertSubtitle=function(b){try{var a=b.trim().replace("\r\n","\n").split(/[\r\n]/).map(function(a){return a.trim()});
b=[];for(var d=null,c=0;c<a.length;c++)if(isNaN(a[c])&&null!==d)if(0<=a[c].indexOf("--\x3e")){var f=a[c].split(/[ \t]+--\x3e[ \t]+/);if(2!=f.length)throw'Error when splitting "--\x3e": '+a[c];b[d].startTime=this.parse_timestamp(f[0]);b[d].endTime=this.parse_timestamp(f[1])}else b[d].text="null"==b[d].text?a[c]:b[d].text+("\n"+a[c]);else if(0<Number(a[c]))var g=new window.VTTCue(null,null,null),d=b.push(g)-1;return b}catch(h){return[]}};c.prototype.addSubtitleToVideo=function(b){this.video.textTracks[0].mode=
"showing";b=this.convertSubtitle(b);for(var a=b.length,c=0;c<a;c++)this.video.textTracks[0].addCue(b[c])};c.prototype.hideAllSubtitle=function(){for(var b=0;b<this.video.textTracks.length;b++)this.video.textTracks[b].mode="hidden"};c.prototype.convertDuration=function(b,a){var c=Math.round(a)||0,e=Math.round(b-a)||0;0>c&&(c=0);0>e&&(e=0);return{eslaped:this.formatTime(c),remaining:this.formatTime(e)}};c.prototype.formatTime=function(b){var a=Math.floor(b/3600%24),c=Math.floor(b/60%60);b=Math.floor(b%
60);c=10>c?"0"+c:""+c;b=10>b?"0"+b:""+b;return 0===a?c+":"+b:10>a?(10>a?"0"+a:""+a)+":"+c+":"+b:"undefined:"+c+":"+b};c.prototype.initTouchEvents=function(){var b=this;this.dom.progressBar.addEventListener("touchend",function(a){b.dom.currentHoverSeekBar.style.display="none"});this.dom.progressBar.addEventListener("touchstart",function(a){-1===b.dom.progressBar.className.indexOf("show")&&(b.dom.progressBar.className+=" show")});document.addEventListener("touchstart",this.touchHandler);document.addEventListener("touchmove",
this.touchHandler);document.addEventListener("touchcancel",this.touchHandler);document.addEventListener("touchend",function(a){b.touchHandler(a);b.handleBar()},!0)};c.prototype.touchHandler=function(b){var a=b.changedTouches[0],c=document.createEvent("MouseEvent");c.initMouseEvent({touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"}[b.type],!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null);a.target.dispatchEvent(c)};c.prototype.handleBar=function(b,a){var c=this;
void 0===b&&(b=3E3);void 0===a&&(a=!1);if(this.readyForHideBar||a)clearTimeout(this.hideBarTimeout),this.dom.container.className=this.dom.container.className.replace(/ hide-bar/g,""),this.removedBarListener&&this.setupListener("addBarListener"),this.readyForHideBar=!1;this.video.paused||(this.readyForHideBar=!0,this.hideBarTimeout=setTimeout(function(){c.dom.container.className+=" hide-bar";c.setupListener("removeBarListener");c.removedBarListener=!0},b))};c.prototype.toggleFullScreen=function(){document.webkitIsFullScreen?
document.webkitCancelFullScreen&&document.webkitCancelFullScreen():this.dom.container.requestFullscreen?this.dom.container.requestFullscreen():this.dom.container.mozRequestFullScreen?this.video.mozRequestFullScreen():this.dom.container.webkitRequestFullscreen&&this.dom.container.webkitRequestFullscreen()};c.addLoading=function(){var b=document.getElementById("mv-player");-1===b.className.indexOf("is-loading")&&(b.className+=" is-loading")};c.setError=function(b,a){void 0===a&&(a=!1);var c=document.getElementById("mv-player");
document.getElementById("video").remove();c.className=c.className.replace(/ is-loading/g,"")+" error";!0===a&&(c.className+=" no-bg");document.getElementById("mv-error").innerHTML=b};c.init=function(){document.getElementById("mv-player-bg").addEventListener("click",function(){c.addLoading();c.isClickedPlay=!0});document.getElementById("mv-player-play-button").addEventListener("click",function(){c.addLoading();c.isClickedPlay=!0})};c.prototype.updatebar=function(b,a,c){void 0===c&&(c=!0);1<a&&(a=1);
0>a&&(a=0);this.dom[b].style.width=100*a+"%";switch(b){case "volume":this.setVolume(a);this.setCookie("mv_volume",a,365);b=document.getElementById("volume-scrubber");c&&-1===b.className.indexOf("dragging")&&(b.className+=" dragging");break;case "timeBar":b=document.getElementById("progress-scrubber"),c&&-1===b.className.indexOf("dragging")&&(b.className+=" dragging")}return a};c.prototype.muteVolume=function(){this.updatebar("volume",0,!1)};c.prototype.maxVolume=function(){this.updatebar("volume",
100,!1)};c.prototype.getHashValue=function(b){return(b=location.hash.match(new RegExp(b+"=([^&]*)")))?b[1]:null};c.prototype.firstPlay=function(){c.addLoading();this.isStarted||this.loadVideo()};c.prototype.playOrPauseVideo=function(){return this.isPaused?this.video.play():this.video.pause()};c.prototype.getPlaySource=function(){var b=this.getCookie("mv_ufq"),a=Object.keys(this.source),c=b||"360",b=Math.max.apply(Math,a);b<c&&(c=b);void 0===this.source[c]&&(c=a.filter(function(a){return a<c}).pop()||
"360");return this.currentSource={key:c,src:this.source[c]}};c.prototype.setupListener=function(b){var a=this;switch(b){case "bar":this.barListeners.push({dom:"this.dom.progressBar",eventName:"mousedown",event:function(b){a.dragging="time";b=(b.pageX-a.getOffsetLeft(a.dom.progressBar))/a.dom.progressBar.offsetWidth;a.video.currentTime=a.video.duration*b;a.updatebar("timeBar",b)}},{dom:"this.dom.volumebar",eventName:"mousedown",event:function(b){a.dragging="volume";var c=a.dom.volumebar.getBoundingClientRect();
a.updatebar("volume",(b.pageX-c.left)/a.dom.volumebar.offsetWidth)}},{dom:"this.dom.progressBar",eventName:"mousemove",event:function(b){a.dom.currentHoverSeekBar.style.display="block";b=(b.pageX-a.getOffsetLeft(a.dom.progressBar))/a.dom.progressBar.offsetWidth;a.dom.progressHover.style.width=100*b+"%";a.dom.currentHoverSeekBar.style.left=100*b+"%";a.dom.currentHoverTime.innerHTML=a.formatTime(a.video.duration*b);-1===a.dom.progressBar.className.indexOf("show")&&(a.dom.progressBar.className+=" show")}},
{dom:"this.dom.progressBar",eventName:"mouseout",event:function(b){a.dom.currentHoverSeekBar.style.display="none";a.dom.progressBar.className=a.dom.progressBar.className.replace(/ show/g,"")}},{dom:"document",eventName:"mouseout",event:function(b){a.handleBar(0)}},{dom:"this.video",eventName:"timeupdate",event:function(){if(a.video.duration&&a.video.currentTime){var b=100/a.video.duration*a.video.currentTime,c=a.convertDuration(a.video.duration,a.video.currentTime);a.dom.timeBar.style.width=b+"%";
a.dom.eslaped.innerHTML=c.eslaped;a.dom.remaining.innerHTML=c.remaining}}},{dom:"this.video",eventName:"progress",event:function(b){b=a.getIndexOfBuffer(a.video.currentTime);-1!=b&&(b=b+1<a.video.buffered.length?b+1:b,b=100*a.video.buffered.end(b)/a.video.duration,a.dom.bufferedBar.style.width=b+"%")}});break;case "load":this.setupListener("bar");this.setupListener("addBarListener");document.addEventListener("mouseup",function(b){if(a.dragging){if("time"===a.dragging){var c=b.pageX-a.getOffsetLeft(a.dom.progressBar);
c/=a.dom.progressBar.offsetWidth;a.video.currentTime=a.video.duration*c;a.updatebar("timeBar",c);a.video.play();a.dom.progressBar.className=a.dom.progressBar.className.replace(/ show/g,"")}"volume"===a.dragging&&(c=a.dom.volumebar.getBoundingClientRect(),c=b.pageX-c.left,c/=a.dom.volumebar.offsetWidth,a.updatebar("volume",c));b=document.getElementsByClassName("dragging");b[0]&&(b[0].className=b[0].className.replace(/ dragging/g,""));a.dragging=null}a.handleBar()});document.addEventListener("mousemove",
function(b){if(a.dragging){if("time"===a.dragging){var c=b.pageX-a.getOffsetLeft(a.dom.progressBar);c/=a.dom.progressBar.offsetWidth;a.video.currentTime=a.video.duration*c;a.updatebar("timeBar",c)}"volume"===a.dragging&&(c=a.dom.volumebar.getBoundingClientRect(),c=b.pageX-c.left,c/=a.dom.volumebar.offsetWidth,a.updatebar("volume",c))}a.handleBar()});document.getElementById("video-play-button").addEventListener("click",function(){a.playOrPauseVideo()});this.dom.container.addEventListener("webkitfullscreenchange",
function(b){document.webkitIsFullScreen?a.dom.container.className+=" isFullScreen":(a.video.removeAttribute("style"),a.dom.container.className=a.dom.container.className.replace(/ isFullScreen/g,""))});this.dom.container.addEventListener("mozfullscreenchange",function(b){document.webkitIsFullScreen?a.dom.container.className+=" isFullScreen":(a.video.removeAttribute("style"),a.dom.container.className=a.dom.container.className.replace(/ isFullScreen/g,""))});this.dom.container.addEventListener("fullscreenchange",
function(b){document.webkitIsFullScreen?a.dom.container.className+=" isFullScreen":(a.video.removeAttribute("style"),a.dom.container.className=a.dom.container.className.replace(/ isFullScreen/g,""))});document.getElementById("muteVolume").addEventListener("click",function(){a.muteVolume()});document.getElementById("muteVolume2").addEventListener("click",function(){a.muteVolume()});document.getElementById("maxVolume").addEventListener("click",function(){a.maxVolume()});document.getElementById("full-screen-button").addEventListener("click",
function(){a.toggleFullScreen()});document.getElementById("vid").addEventListener("dblclick",function(b){clearTimeout(a.playPauseTimeout);setTimeout(function(){a.playPauseTimeout=void 0},300);a.toggleFullScreen()});document.addEventListener("keydown",function(b){b.altKey&&13===b.keyCode?a.toggleFullScreen():37===b.keyCode?a.video.currentTime-=10:39===b.keyCode&&(a.video.currentTime+=10)});document.addEventListener("keypress",function(b){32===b.keyCode&&a.playOrPauseVideo()});this.video.addEventListener("loadeddata",
function(b){a.video.play()});this.video.addEventListener("click",function(b){b.preventDefault();void 0===a.playPauseTimeout&&(a.playPauseTimeout=setTimeout(function(){a.playOrPauseVideo();a.playPauseTimeout=void 0},300))});this.video.addEventListener("waiting",function(a){c.addLoading()});this.video.addEventListener("playing",function(b){a.dom.container.className=a.dom.container.className.replace(/ is-loading/g,"");-1===a.dom.container.className.indexOf("playing")&&(a.dom.container.className+=" playing");
a.isPaused=!1});this.video.addEventListener("pause",function(){a.dom.container.className=a.dom.container.className.replace(/ playing/g,"");a.isPaused=!0});this.video.addEventListener("ended",function(){a.dom.container.className=a.dom.container.className.replace(/ playing/g,"");a.dom.eslaped.innerHTML=document.getElementById("video-duration").innerHTML;a.dom.timeBar.style.width="100%";a.dom.remaining.innerHTML="00:00";a.handleBar(0,!0);a.getHashValue("cb")&&window.parent.postMessage(a.getHashValue("cb"),
"*")});var d=document.getElementById("mv-settings");d.addEventListener("click",function(b){a.openSettings(d,!1)});d.addEventListener("blur",function(b){a.openSettings(d,!0)});var e=document.getElementById("mv-speed").getElementsByTagName("li");b=function(b){var c=e[b];c.addEventListener("click",function(){a.changeSpeed(c,Number(c.getAttribute("speed")))})};for(var f=0;f<e.length;f++)b(f);break;case "addBarListener":for(var f=0,g=this.barListeners.length;f<g;f++)b=this.barListeners[f],eval(b.dom).addEventListener(b.eventName,
b.event);break;case "removeBarListener":f=0;for(g=this.barListeners.length;f<g;f++)b=this.barListeners[f],eval(b.dom).removeEventListener(b.eventName,b.event);break;default:if(c.isClickedPlay)this.firstPlay();else{var h=function(){a.isVideoError||a.firstPlay()};document.getElementById("mv-player-bg").addEventListener("click",function(){h();document.getElementById("mv-player-bg").removeEventListener("click",h)});document.getElementById("mv-player-play-button").addEventListener("click",function(){h();
document.getElementById("mv-player-play-button").removeEventListener("click",h)})}this.video.addEventListener("error",function(b){switch(b.srcElement.error.code){case b.target.error.MEDIA_ERR_ABORTED:b="You aborted the video playback.";break;case b.target.error.MEDIA_ERR_NETWORK:b="A network error caused the video download to fail part-way.";break;case b.target.error.MEDIA_ERR_DECODE:b="The video playback was aborted due to a corruption problem or because the video used features your browser did not support.";
break;case b.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:b="The video could not be loaded, either because the server or network failed or because the format is not supported.";break;default:b="An unknown error occurred."}a.isVideoError=!0;c.setError(b)})}};c.prototype.setVolume=function(b){this.video.volume=b;var a=document.getElementById("volume-ctrl");.5<b?-1===a.className.indexOf("high")&&(a.className=a.className.replace(/ mute/g,"")+" high"):0==b?-1===a.className.indexOf("mute")&&(a.className=a.className.replace(/ high/g,
"")+" mute"):a.className=a.className.replace(/ high/g,"").replace(/ mute/g,"")};c.prototype.preload=function(){var b=this,a=Object.keys(this.source),c=a.length,e=this.getCookie("mv_volume")||1,f=document.getElementById("mv-quality");this.getPlaySource();this.video.src=this.currentSource.src;for(var g=function(){var d=a[c],e=document.createElement("li");d==h.currentSource.key&&(e.className="mv-quality-active");e.appendChild(document.createTextNode(d+"p"));e.addEventListener("click",function(a){b.changeQuality(a,
d)},!1);f.appendChild(e)},h=this;c--;)g();document.getElementById("mv-cr-quality").innerHTML=this.currentSource.key+"p";this.video.volume=0;g=this.video.play();if(("object"===typeof g||"function"===typeof g)&&"function"===typeof g["catch"])g["catch"](function(a){});this.video.pause();setTimeout(function(){try{b.video.currentTime=0}catch(k){}},500);this.updatebar("volume",e,!1);void 0!==this.thumb&&(document.getElementById("mv-player-bg").style.backgroundImage="url('"+this.thumb+"')");void 0!==this.title&&
(e=document.getElementById("mv-title"),e.innerHTML=this.title,e.className+=" show",document.title=this.title+" - MegaVid");this.getHashValue("autoplay")&&this.firstPlay();this.setupListener("preload")};c.prototype.loadDuration=function(){var b=this;this.loadDurationTimeout&&clearTimeout(this.loadDurationTimeout);if(this.video.duration&&1<this.video.duration){var a=this.formatTime(this.video.duration);this.dom.remaining.innerHTML=a;document.getElementById("video-duration").innerHTML=a}else this.loadDurationTimeout=
setTimeout(function(){b.loadDuration()},500)};c.prototype.loadVideo=function(){if(!this.isStarted&&!this.isVideoError){this.isStarted=!0;document.getElementById("mv-title").className=document.getElementById("mv-title").className.replace(/ show/g,"");this.isTouchDevice()&&this.initTouchEvents();this.loadDuration();-1===this.dom.container.className.indexOf("preloaded")&&(this.dom.container.className+=" preloaded");this.dom.container.className=this.dom.container.className.replace(/ hide-bar/g,"");this.setupListener("load");
for(var b in this.options.events)this.video[b]=this.options.events[b];this.video.play()}};c.prototype.changeSpeed=function(b,a){this.video.playbackRate!==a&&(this.video.playbackRate=a,document.getElementsByClassName("mv-speed-active")[0].className="",b.className="mv-speed-active")};c.prototype.changeQuality=function(b,a){if(this.currentSource.key!==a){this.setCookie("mv_ufq",a,365);c.addLoading();document.getElementsByClassName("mv-quality-active")[0].className="";b.srcElement.className="mv-quality-active";
var d=this.video.currentTime;this.video.src=this.source[a];this.currentSource={key:a,src:this.video.src};try{this.video.currentTime=d}catch(e){}document.getElementById("mv-cr-quality").innerHTML=a+"p"}};c.prototype.openSettings=function(b,a){var c=b.className;-1!==c.indexOf("show")||a?b.className=c.replace(/ show/g,""):b.className+=" show"};return c}();
