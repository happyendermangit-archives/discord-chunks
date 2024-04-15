function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MODAL_KEY: function() {
            return d
        },
        default: function() {
            return c
        },
        openGuildRoleConnectionsModal: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("430824"),
        o = n("757698"),
        l = n("275759"),
        u = n("689938");
    let d = "guild-connection-roles";

    function _(e) {
        (0, s.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("40897")]).then(n.bind(n, "507294"));
            return n => (0, i.jsx)(t, {
                ...n,
                guildId: e
            })
        }, {
            modalKey: d,
            contextKey: s.DEFAULT_MODAL_CONTEXT,
            onCloseRequest: () => {
                (0, s.closeModal)(d, s.DEFAULT_MODAL_CONTEXT)
            }
        })
    }

    function c(e) {
        return (0, r.useStateFromStores)([a.default], () => (0, l.isVerifiedRolesChannelVisible)(e, a.default.getRoles(e.id)), [e]) ? (0, i.jsx)(s.MenuItem, {
            id: "guild-connection-roles",
            label: u.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
            icon: o.default,
            action: () => _(e.id)
        }) : null
    }
}