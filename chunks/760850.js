function(t, e, n) {
    "use strict";
    let a;
    n.r(e), n.d(e, {
        cleanExecutablePath: function() {
            return p
        },
        default: function() {
            return I
        }
    }), n("781738"), n("424973");
    var i = n("917351"),
        l = n.n(i),
        r = n("49671"),
        u = n("605250"),
        d = n("773336"),
        o = n("50885");
    let c = [];

    function s(t) {
        return t = t.toLowerCase(), (0, d.isWindows)() && (t = (t = t.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), t
    }

    function E(t) {
        null != t && "" !== t && (!(t = s(t)).endsWith("/") && (t += "/"), c.push(t))
    }

    function p(t) {
        t = s(t);
        let e = !1;
        return (c.forEach(n => {
            !e && t.startsWith(n) && (t = t.substr(n.length), e = !0)
        }), e) ? t = t.includes("dosbox.exe") ? t.split("/").slice(-3).join("/") : t.split("/").slice(-2).join("/") : null
    }
    async function I() {
        if (null != a) return a;
        try {
            await o.default.ensureModule("discord_game_utils"), a = await o.default.requireModule("discord_game_utils")
        } catch (t) {
            new(0, u.default)("GamesActionCreators").error("could not load discord_game_utils", t)
        }
        if ((0, d.isWindows)()) {
            let t = r.default.process.env;
            E(t.LOCALAPPDATA), E(t["PROGRAMFILES(X86)"]), E(t.PROGRAMFILES), E(t.PROGRAMW6432), E(t.PROGRAMDATA), E("/games/"), E("/steamlibrary/steamapps/common/")
        }
        let t = r.default.remoteApp.getPath;
        return E(await t("home")), E(await t("appData")), E(await t("desktop")), E(await t("documents")), E(await t("downloads")), (c = l.uniq(c)).sort((t, e) => e.length - t.length), a
    }
}