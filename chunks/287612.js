function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("314897"),
        o = n("706327"),
        l = n("285470"),
        u = n("421486"),
        d = n("735619");
    t.default = r.memo(function(e) {
        let {
            user: t,
            onClose: n
        } = e, r = (0, s.useStateFromStores)([a.default], () => a.default.getId()), _ = t.id === r, c = (0, l.useMutualGuilds)(t), E = (0, o.useMutualFriends)(t);
        return _ ? null : (0, i.jsx)("div", {
            className: d.container,
            children: (0, i.jsx)(u.SmallMutualFriendsAndGuilds, {
                user: t,
                mutualFriends: E,
                mutualGuilds: c,
                onClose: n,
                showNoMutuals: !0
            })
        })
    })
}