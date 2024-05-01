function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        cleanExecutablePath: function() {
            return E
        },
        default: function() {
            return I
        }
    }), n("757143"), n("653041");
    var r = n("392711"),
        s = n.n(r),
        a = n("579806"),
        o = n("710845"),
        l = n("358085"),
        u = n("998502");
    let d = [];

    function _(e) {
        return e = e.toLowerCase(), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e
    }

    function c(e) {
        null != e && "" !== e && (!(e = _(e)).endsWith("/") && (e += "/"), d.push(e))
    }

    function E(e) {
        e = _(e);
        let t = !1;
        return (d.forEach(n => {
            !t && e.startsWith(n) && (e = e.substr(n.length), t = !0)
        }), t) ? e = e.includes("dosbox.exe") ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/") : null
    }
    async function I() {
        if (null != i) return i;
        try {
            await u.default.ensureModule("discord_game_utils"), i = await u.default.requireModule("discord_game_utils")
        } catch (e) {
            new o.default("GamesActionCreators").error("could not load discord_game_utils", e)
        }
        if ((0, l.isWindows)()) {
            let e = a.default.process.env;
            c(e.LOCALAPPDATA), c(e["PROGRAMFILES(X86)"]), c(e.PROGRAMFILES), c(e.PROGRAMW6432), c(e.PROGRAMDATA), c("/games/"), c("/steamlibrary/steamapps/common/")
        }
        let e = a.default.remoteApp.getPath;
        return c(await e("home")), c(await e("appData")), c(await e("desktop")), c(await e("documents")), c(await e("downloads")), (d = s().uniq(d)).sort((e, t) => t.length - e.length), i
    }
}