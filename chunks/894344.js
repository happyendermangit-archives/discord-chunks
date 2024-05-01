function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("763472"),
        s = n("647162"),
        o = n("680686"),
        l = n("131303");
    async function u(e, t, u) {
        let {
            hasSpotifyAccount: d,
            activity: _,
            user: c
        } = e;
        (0, l.default)(d) && null != _ && null != _.sync_id && (await (0, s.ensureSpotifyPlayable)(), await (0, s.ensureSpotifyPremium)().catch(e => ((0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("99387"), n.e("58690")]).then(n.bind(n, "841178"));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }), Promise.reject(e))), a.sync(_, c.id), (0, o.default)(t, c, _, u))
    }
}