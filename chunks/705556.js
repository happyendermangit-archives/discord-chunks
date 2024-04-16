function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("300284"),
        o = n("314897"),
        l = n("430824"),
        u = n("185403"),
        d = n("785717"),
        _ = n("841040"),
        c = n("537387"),
        E = n("689938");

    function I(e) {
        let {
            user: t,
            guildId: n,
            onClose: I
        } = e, T = (0, r.useStateFromStores)([o.default], () => o.default.getId() === t.id), f = (0, r.useStateFromStores)([l.default], () => null != n ? l.default.getGuild(n) : null), {
            trackUserProfileAction: S
        } = (0, d.useUserProfileAnalyticsContext)(), h = (0, a.default)();
        return T ? null == f ? (0, i.jsx)(c.default, {
            icon: u.default,
            text: E.default.Messages.EDIT_PROFILE,
            onClick: () => {
                S({
                    action: "EDIT_PROFILE"
                }), h(), null == I || I()
            }
        }) : (0, i.jsx)(s.Popout, {
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, i.jsx)(_.default, {
                    guild: f,
                    onClose: () => {
                        t(), null == I || I()
                    }
                })
            },
            children: e => (0, i.jsx)(c.default, {
                icon: u.default,
                text: E.default.Messages.EDIT_PROFILE,
                ...e
            })
        }) : null
    }
}