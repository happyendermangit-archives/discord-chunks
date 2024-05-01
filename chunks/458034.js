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
        a = n("481060"),
        s = n("430824"),
        o = n("757698"),
        l = n("275759"),
        u = n("689938");
    let d = "guild-connection-roles";

    function _(e) {
        (0, a.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("40897")]).then(n.bind(n, "507294"));
            return n => (0, i.jsx)(t, {
                ...n,
                guildId: e
            })
        }, {
            modalKey: d,
            contextKey: a.DEFAULT_MODAL_CONTEXT,
            onCloseRequest: () => {
                (0, a.closeModal)(d, a.DEFAULT_MODAL_CONTEXT)
            }
        })
    }

    function c(e) {
        return (0, r.useStateFromStores)([s.default], () => (0, l.isVerifiedRolesChannelVisible)(e, s.default.getRoles(e.id)), [e]) ? (0, i.jsx)(a.MenuItem, {
            id: "guild-connection-roles",
            label: u.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
            icon: o.default,
            action: () => _(e.id)
        }) : null
    }
}