function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addRecentBuildOverride: function() {
            return a
        },
        getRecentBuildOverrides: function() {
            return s
        }
    }), n("47120");
    var i = n("433517");
    let r = "recentBuildOverrides";

    function s() {
        var e;
        return (null !== (e = i.Storage.get(r)) && void 0 !== e ? e : []).filter(e => null == e.exp || e.exp > Date.now())
    }

    function a(e, t) {
        if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
        let n = {
                id: e.targetBuildOverride.discord_web.id,
                payload: t,
                exp: Date.parse(e.expiresAt)
            },
            a = [n, ...s().filter(e => n.id !== e.id)].slice(0, 5);
        i.Storage.set(r, a)
    }
}