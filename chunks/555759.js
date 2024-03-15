function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return u
        }
    });
    var n = i("968194"),
        l = i("884385"),
        a = i("170108"),
        r = i("922174");
    async function u(t, e, i) {
        let {
            hasSpotifyAccount: u,
            activity: d,
            user: s
        } = t;
        (0, r.default)(u) && null != d && null != d.sync_id && (await (0, l.ensureSpotifyPlayable)(), n.play(d, s.id), (0, a.default)(e, s, d, i))
    }
}