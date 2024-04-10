function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        MODAL_KEY: function() {
            return c
        },
        default: function() {
            return u
        },
        openGuildRoleConnectionsModal: function() {
            return h
        }
    });
    var l = i("735250");
    i("470079");
    var r = i("442837"),
        a = i("481060"),
        n = i("430824"),
        s = i("757698"),
        o = i("275759"),
        d = i("689938");
    let c = "guild-connection-roles";

    function h(t) {
        (0, a.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([i.e("99387"), i.e("40897")]).then(i.bind(i, "507294"));
            return i => (0, l.jsx)(e, {
                ...i,
                guildId: t
            })
        }, {
            modalKey: c,
            contextKey: a.DEFAULT_MODAL_CONTEXT,
            onCloseRequest: () => {
                (0, a.closeModal)(c, a.DEFAULT_MODAL_CONTEXT)
            }
        })
    }

    function u(t) {
        return (0, r.useStateFromStores)([n.default], () => (0, o.isVerifiedRolesChannelVisible)(t, n.default.getRoles(t.id)), [t]) ? (0, l.jsx)(a.MenuItem, {
            id: "guild-connection-roles",
            label: d.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
            icon: s.default,
            action: () => h(t.id)
        }) : null
    }
}