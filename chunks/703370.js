function(e, t, n) {
    "use strict";
    let s;
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("446674"),
        r = n("913144"),
        a = n("161454"),
        o = n("546463");
    class d extends i.default.Store {
        getGameForPID(e) {
            var t;
            if (__OVERLAY__ || null == e) return null;
            let n = null === (t = a.default.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
            return o.default.getGameByName(n)
        }
        getGame() {
            return __OVERLAY__ ? s : null
        }
    }
    d.displayName = "OverlayRunningGameStore";
    var u = new d(r.default, {
        OVERLAY_INITIALIZE: function(e) {
            s = e.currentGame
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            s = e.associatedGame
        }
    })
}