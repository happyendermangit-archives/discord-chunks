function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addRecentBuildOverride: function() {
            return s
        },
        getRecentBuildOverrides: function() {
            return a
        }
    }), n("47120");
    var i = n("433517");
    let r = "recentBuildOverrides";

    function a() {
        var e;
        return (null !== (e = i.Storage.get(r)) && void 0 !== e ? e : []).filter(e => null == e.exp || e.exp > Date.now())
    }

    function s(e, t) {
        if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
        let n = {
                id: e.targetBuildOverride.discord_web.id,
                payload: t,
                exp: Date.parse(e.expiresAt)
            },
            s = [n, ...a().filter(e => n.id !== e.id)].slice(0, 5);
        i.Storage.set(r, s)
    }
}