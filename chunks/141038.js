function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return r
        }
    }), a("653041"), a("47120");
    var d = a("512722"),
        n = a.n(d),
        c = a("90757"),
        i = a.n(c),
        o = a("65154");

    function r(e, t, a) {
        let d = window.DiscordNative;
        n()(null != d, "Can't get desktop sources outside of native app"), t = null != t ? t : [o.DesktopSources.WINDOW, o.DesktopSources.SCREEN], a = null != a ? a : {
            width: 150,
            height: 150
        };
        let c = [];
        return t.includes(o.DesktopSources.SCREEN) && e.supports(o.Features.SCREEN_PREVIEWS) && (c.push(e.getScreenPreviews(a.width, a.height)), t = t.filter(e => e !== o.DesktopSources.SCREEN)), t.includes(o.DesktopSources.WINDOW) && e.supports(o.Features.WINDOW_PREVIEWS) && (c.push(e.getWindowPreviews(a.width, a.height)), t = t.filter(e => e !== o.DesktopSources.WINDOW)), 0 !== t.length && c.push(d.desktopCapture.getDesktopCaptureSources({
            types: t,
            thumbnailSize: a
        })), Promise.all(c).then(e => i()(e))
    }
}