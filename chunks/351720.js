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
        c = t.n(n),
        i = t("353927");

    function r(e, a, t) {
        let d = window.DiscordNative;
        s(null != d, "Can't get desktop sources outside of native app"), a = null != a ? a : [i.DesktopSources.WINDOW, i.DesktopSources.SCREEN], t = null != t ? t : {
            width: 150,
            height: 150
        };
        let n = [];
        return a.includes(i.DesktopSources.SCREEN) && e.supports(i.Features.SCREEN_PREVIEWS) && (n.push(e.getScreenPreviews(t.width, t.height)), a = a.filter(e => e !== i.DesktopSources.SCREEN)), a.includes(i.DesktopSources.WINDOW) && e.supports(i.Features.WINDOW_PREVIEWS) && (n.push(e.getWindowPreviews(t.width, t.height)), a = a.filter(e => e !== i.DesktopSources.WINDOW)), 0 !== a.length && n.push(d.desktopCapture.getDesktopCaptureSources({
            types: a,
            thumbnailSize: t
        })), Promise.all(n).then(e => c(e))
    }
}