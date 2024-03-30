function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FULLSCREEN_CHANGE_EVENT: function() {
            return s
        },
        exitFullScreen: function() {
            return a
        },
        getFullScreenNode: function() {
            return o
        },
        isFullScreen: function() {
            return u
        },
        requestFullScreen: function() {
            return i
        },
        subscribeDocumentToFullScreenChange: function() {
            return l
        }
    });
    var r = n("35523");

    function o() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.find(function(e) {
            return null != e && function(e) {
                return null != e.requestFullscreen || null != e.webkitRequestFullscreen || e.webkitSupportsFullscreen || null != e.mozRequestFullScreen || null != e.msRequestFullscreen
            }(e)
        })
    }

    function i(e) {
        "function" == typeof e.requestFullscreen ? e.requestFullscreen() : "function" == typeof e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : "function" == typeof e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : "function" == typeof e.mozRequestFullScreen ? e.mozRequestFullScreen() : "function" == typeof e.msRequestFullscreen ? e.msRequestFullscreen() : new r.default("FullScreenUtils").warn("Fullscreen API is not supported.")
    }

    function a(e, t) {
        var n = null != t ? t : document;
        u(null, n) && ("function" == typeof n.exitFullscreen ? n.exitFullscreen() : "function" == typeof n.webkitExitFullscreen ? n.webkitExitFullscreen() : "function" == typeof e.webkitExitFullscreen ? e.webkitExitFullscreen() : "function" == typeof n.mozCancelFullScreen ? n.mozCancelFullScreen() : "function" == typeof n.msExitFullscreen ? n.msExitFullscreen() : new r.default("FullScreenUtils").warn("Fullscreen API is not supported."))
    }

    function u(e, t) {
        var n = null != t ? t : document;
        return !!(null != n.fullscreenElement || null != n.mozFullScreenElement || null != n.webkitFullscreenElement || null != n.msFullscreenElement || null != e && e.webkitDisplayingFullscreen)
    }
    var s = function() {
        if ("undefined" != typeof document) {
            var e = document.createElement("video");
            if ("function" == typeof e.requestFullscreen);
            else if ("function" == typeof e.webkitRequestFullscreen) return "webkitfullscreenchange";
            else if ("function" == typeof e.webkitEnterFullscreen) return "webkitendfullscreen";
            else if ("function" == typeof e.mozRequestFullScreen) return "mozfullscreenchange";
            else if ("function" == typeof e.msRequestFullscreen) return "msfullscreenchange"
        } else console.warn("FullScreenUtils has been imported in a non-web environment");
        return "fullscreenchange"
    }();

    function l(e, t) {
        return e.addEventListener(s, t), e.addEventListener("webkitfullscreenchange", t),
            function() {
                e.removeEventListener(s, t), e.removeEventListener("webkitfullscreenchange", t)
            }
    }
}