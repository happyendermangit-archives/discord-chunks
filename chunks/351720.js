function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return r
        }
    }), t("424973"), t("222007");
    var d = t("627445"),
        s = t.n(d),
        n = t("257859"),
        i = t.n(n),
        c = t("353927");

    function r(e, a, t) {
        let d = window.DiscordNative;
        s(null != d, "Can't get desktop sources outside of native app"), a = null != a ? a : [c.DesktopSources.WINDOW, c.DesktopSources.SCREEN], t = null != t ? t : {
            width: 150,
            height: 150
        };
        let n = [];
        return a.includes(c.DesktopSources.SCREEN) && e.supports(c.Features.SCREEN_PREVIEWS) && (n.push(e.getScreenPreviews(t.width, t.height)), a = a.filter(e => e !== c.DesktopSources.SCREEN)), a.includes(c.DesktopSources.WINDOW) && e.supports(c.Features.WINDOW_PREVIEWS) && (n.push(e.getWindowPreviews(t.width, t.height)), a = a.filter(e => e !== c.DesktopSources.WINDOW)), 0 !== a.length && n.push(d.desktopCapture.getDesktopCaptureSources({
            types: a,
            thumbnailSize: t
        })), Promise.all(n).then(e => i(e))
    }
}