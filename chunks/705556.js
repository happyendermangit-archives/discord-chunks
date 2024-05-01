function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
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
        c = n("993409"),
        E = n("537387"),
        I = n("689938");

    function T(e) {
        let {
            type: t,
            user: n,
            guildId: T,
            onClose: f
        } = e, S = "action" === t ? c.default : E.default, h = (0, r.useStateFromStores)([o.default], () => o.default.getId() === n.id), A = (0, r.useStateFromStores)([l.default], () => null != T ? l.default.getGuild(T) : null), {
            trackUserProfileAction: m
        } = (0, d.useUserProfileAnalyticsContext)(), N = (0, a.default)();
        return h ? null == A ? (0, i.jsx)(S, {
            icon: u.default,
            text: I.default.Messages.EDIT_PROFILE,
            onClick: () => {
                m({
                    action: "EDIT_PROFILE"
                }), N(), null == f || f()
            }
        }) : (0, i.jsx)(s.Popout, {
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, i.jsx)(_.default, {
                    guild: A,
                    onClose: () => {
                        t(), null == f || f()
                    }
                })
            },
            children: e => (0, i.jsx)(S, {
                icon: u.default,
                text: I.default.Messages.EDIT_PROFILE,
                ...e
            })
        }) : null
    }
}