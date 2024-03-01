function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return r
        }
    });
    var n = i("968194"),
        l = i("884385"),
        a = i("170108"),
        u = i("922174");
    async function r(e, t, i) {
        let {
            hasSpotifyAccount: r,
            activity: d,
            user: s
        } = e;
        (0, u.default)(r) && null != d && null != d.sync_id && (await (0, l.ensureSpotifyPlayable)(), n.play(d, s.id), (0, a.default)(t, s, d, i))
    }
}