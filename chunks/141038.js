function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return o
        }
    }), a("653041"), a("47120");
    var d = a("512722"),
        n = a.n(d),
        i = a("90757"),
        c = a.n(i),
        r = a("65154");

    function o(e, t, a) {
        let d = window.DiscordNative;
        n()(null != d, "Can't get desktop sources outside of native app"), t = null != t ? t : [r.DesktopSources.WINDOW, r.DesktopSources.SCREEN], a = null != a ? a : {
            width: 150,
            height: 150
        };
        let i = [];
        return t.includes(r.DesktopSources.SCREEN) && e.supports(r.Features.SCREEN_PREVIEWS) && (i.push(e.getScreenPreviews(a.width, a.height)), t = t.filter(e => e !== r.DesktopSources.SCREEN)), t.includes(r.DesktopSources.WINDOW) && e.supports(r.Features.WINDOW_PREVIEWS) && (i.push(e.getWindowPreviews(a.width, a.height)), t = t.filter(e => e !== r.DesktopSources.WINDOW)), 0 !== t.length && i.push(d.desktopCapture.getDesktopCaptureSources({
            types: t,
            thumbnailSize: a
        })), Promise.all(i).then(e => c()(e))
    }
}