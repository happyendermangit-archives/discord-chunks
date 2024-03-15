function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        cleanExecutablePath: function() {
            return _
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

    function f(e) {
        null != e && "" !== e && (!(e = c(e)).endsWith("/") && (e += "/"), d.push(e))
    }

    function _(e) {
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
            f(e.LOCALAPPDATA), f(e["PROGRAMFILES(X86)"]), f(e.PROGRAMFILES), f(e.PROGRAMW6432), f(e.PROGRAMDATA), f("/games/"), f("/steamlibrary/steamapps/common/")
        }
        let e = a.default.remoteApp.getPath;
        return f(await e("home")), f(await e("appData")), f(await e("desktop")), f(await e("documents")), f(await e("downloads")), (d = r.uniq(d)).sort((e, t) => t.length - e.length), i
    }
}