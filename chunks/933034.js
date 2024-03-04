function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("161454");

    function s(e) {
        let t, n;
        if (null == e) return {};
        let s = e.sourcePid;
        if (null != s) {
            let e = i.default.getGameForPID(s);
            t = null == e ? void 0 : e.name, n = null == e ? void 0 : e.id
        }
        return {
            soundshare_session: e.soundshareSession,
            share_game_name: t,
            share_game_id: n
        }
    }
}