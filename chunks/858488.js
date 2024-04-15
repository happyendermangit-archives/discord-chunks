function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("699516"),
        o = n("689938");

    function l(e) {
        let {
            user: t,
            onAction: l
        } = e, u = t.id, [d, _] = (0, r.useStateFromStoresArray)([a.default], () => {
            var e;
            return [a.default.isFriend(u), null !== (e = a.default.getNickname(u)) && void 0 !== e ? e : null]
        }, [u]);
        if (!d) return null;
        let c = null == _ ? o.default.Messages.ADD_FRIEND_NICKNAME : o.default.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, i.jsx)(s.MenuItem, {
            id: null == _ ? "add-friend-nickname" : "edit-friend-nickname",
            label: c,
            action: () => {
                null == l || l(), (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("25070")]).then(n.bind(n, "670794"));
                    return n => (0, i.jsx)(e, {
                        user: t,
                        nickname: _,
                        ...n
                    })
                })
            }
        })
    }
}