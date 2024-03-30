function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var a = n("512722"),
        r = n.n(a),
        c = n("90757"),
        o = n.n(c),
        i = n("439386");

    function f(e, t, n) {
        var a = window.DiscordNative;
        r()(null != a, "Can't get desktop sources outside of native app"), t = null != t ? t : [i.DesktopSources.WINDOW, i.DesktopSources.SCREEN], n = null != n ? n : {
            width: 150,
            height: 150
        };
        var c = [];
        return t.includes(i.DesktopSources.SCREEN) && e.supports(i.Features.SCREEN_PREVIEWS) && (c.push(e.getScreenPreviews(n.width, n.height)), t = t.filter(function(e) {
            return e !== i.DesktopSources.SCREEN
        })), t.includes(i.DesktopSources.WINDOW) && e.supports(i.Features.WINDOW_PREVIEWS) && (c.push(e.getWindowPreviews(n.width, n.height)), t = t.filter(function(e) {
            return e !== i.DesktopSources.WINDOW
        })), 0 !== t.length && c.push(a.desktopCapture.getDesktopCaptureSources({
            types: t,
            thumbnailSize: n
        })), Promise.all(c).then(function(e) {
            return o()(e)
        })
    }
}