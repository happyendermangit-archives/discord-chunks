function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        getRecentBuildOverrides: function() {
            return i
        },
        addRecentBuildOverride: function() {
            return a
        }
    }), r("222007");
    var n = r("95410");
    let l = "recentBuildOverrides";

    function i() {
        var e;
        let t = null !== (e = n.default.get(l)) && void 0 !== e ? e : [];
        return t.filter(e => null == e.exp || e.exp > Date.now())
    }

    function a(e, t) {
        if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
        let r = {
                id: e.targetBuildOverride.discord_web.id,
                payload: t,
                exp: Date.parse(e.expiresAt)
            },
            a = i(),
            s = [r, ...a.filter(e => r.id !== e.id)].slice(0, 5);
        n.default.set(l, s)
    }
}