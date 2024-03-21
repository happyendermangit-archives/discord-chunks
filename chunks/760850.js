function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        cleanExecutablePath: function() {
            return f
        },
        default: function() {
            return E
        }
    }), n("781738"), n("424973");
    var s = n("917351"),
        r = n.n(s),
        a = n("49671"),
        o = n("605250"),
        l = n("773336"),
        u = n("50885");
    let d = [];

    function c(e) {
        return e = e.toLowerCase(), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e
    }

    function _(e) {
        null != e && "" !== e && (!(e = c(e)).endsWith("/") && (e += "/"), d.push(e))
    }

    function f(e) {
        e = c(e);
        let t = !1;
        return (d.forEach(n => {
            !t && e.startsWith(n) && (e = e.substr(n.length), t = !0)
        }), t) ? e = e.includes("dosbox.exe") ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/") : null
    }
    async function E() {
        if (null != i) return i;
        try {
            await u.default.ensureModule("discord_game_utils"), i = await u.default.requireModule("discord_game_utils")
        } catch (e) {
            new(0, o.default)("GamesActionCreators").error("could not load discord_game_utils", e)
        }
        if ((0, l.isWindows)()) {
            let e = a.default.process.env;
            _(e.LOCALAPPDATA), _(e["PROGRAMFILES(X86)"]), _(e.PROGRAMFILES), _(e.PROGRAMW6432), _(e.PROGRAMDATA), _("/games/"), _("/steamlibrary/steamapps/common/")
        }
        let e = a.default.remoteApp.getPath;
        return _(await e("home")), _(await e("appData")), _(await e("desktop")), _(await e("documents")), _(await e("downloads")), (d = r.uniq(d)).sort((e, t) => t.length - e.length), i
    }
}