function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("763472"),
        r = n("647162"),
        a = n("680686"),
        s = n("131303");
    async function o(e, t, n) {
        let {
            hasSpotifyAccount: o,
            activity: l,
            user: u
        } = e;
        (0, s.default)(o) && null != l && null != l.sync_id && (await (0, r.ensureSpotifyPlayable)(), i.play(l, u.id), (0, a.default)(t, u, l, n))
    }
}