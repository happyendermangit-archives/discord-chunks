function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var s = n("446674"),
        r = n("913144"),
        a = n("161454"),
        o = n("546463");
    class l extends s.default.Store {
        getGameForPID(e) {
            var t;
            if (__OVERLAY__ || null == e) return null;
            let n = null === (t = a.default.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
            return o.default.getGameByName(n)
        }
        getGame() {
            return __OVERLAY__ ? i : null
        }
    }
    l.displayName = "OverlayRunningGameStore";
    var u = new l(r.default, {
        OVERLAY_INITIALIZE: function(e) {
            i = e.currentGame
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            i = e.associatedGame
        }
    })
}