function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("654370");

    function o(e) {
        if (null == e) return {};
        var t, n, o = e.sourcePid;
        if (null != o) {
            var i = r.default.getGameForPID(o);
            t = null == i ? void 0 : i.name, n = null == i ? void 0 : i.id
        }
        return {
            soundshare_session: e.soundshareSession,
            share_game_name: t,
            share_game_id: n
        }
    }
}