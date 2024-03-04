function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144");
    let r = new Set,
        a = {};

    function o(e) {
        let {
            applicationId: t
        } = e;
        r.add(t)
    }

    function l(e) {
        let {
            applicationId: t
        } = e;
        r.delete(t)
    }
    class u extends i.default.Store {
        get launchingGames() {
            return r
        }
        get launchableGames() {
            return a
        }
        isLaunchable(e) {
            return null != a[e] ? a[e] : (a[e] = !1, s.default.dispatch({
                type: "CHECK_LAUNCHABLE_GAME",
                gameId: e
            }), !1)
        }
    }
    u.displayName = "LaunchableGameStore";
    var d = new u(s.default, {
        GAME_LAUNCHABLE_UPDATE: function(e) {
            let {
                gameId: t,
                isLaunchable: n
            } = e;
            a[t] = n
        },
        GAME_CLOUD_SYNC_START: o,
        GAME_LAUNCH_START: o,
        GAME_LAUNCH_SUCCESS: l,
        GAME_LAUNCH_FAIL: l,
        GAME_CLOUD_SYNC_CONFLICT: l,
        GAME_CLOUD_SYNC_ERROR: l,
        GAME_CLOUD_SYNC_COMPLETE: l
    })
}