function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("763472"),
        r = n("647162"),
        s = n("680686"),
        a = n("131303");
    async function o(e, t, n) {
        let {
            hasSpotifyAccount: o,
            activity: l,
            user: u
        } = e;
        (0, a.default)(o) && null != l && null != l.sync_id && (await (0, r.ensureSpotifyPlayable)(), i.play(l, u.id), (0, s.default)(t, u, l, n))
    }
}