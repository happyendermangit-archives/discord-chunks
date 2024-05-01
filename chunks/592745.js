function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140");
    let u = new Set,
        d = {};

    function _(e) {
        let {
            applicationId: t
        } = e;
        u.add(t)
    }

    function c(e) {
        let {
            applicationId: t
        } = e;
        u.delete(t)
    }
    class E extends(i = o.default.Store) {
        get launchingGames() {
            return u
        }
        get launchableGames() {
            return d
        }
        isLaunchable(e) {
            return null != d[e] ? d[e] : (d[e] = !1, l.default.dispatch({
                type: "CHECK_LAUNCHABLE_GAME",
                gameId: e
            }), !1)
        }
    }
    a = "LaunchableGameStore", (s = "displayName") in(r = E) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new E(l.default, {
        GAME_LAUNCHABLE_UPDATE: function(e) {
            let {
                gameId: t,
                isLaunchable: n
            } = e;
            d[t] = n
        },
        GAME_CLOUD_SYNC_START: _,
        GAME_LAUNCH_START: _,
        GAME_LAUNCH_SUCCESS: c,
        GAME_LAUNCH_FAIL: c,
        GAME_CLOUD_SYNC_CONFLICT: c,
        GAME_CLOUD_SYNC_ERROR: c,
        GAME_CLOUD_SYNC_COMPLETE: c
    })
}