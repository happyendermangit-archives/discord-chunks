function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        MODAL_KEY: function() {
            return c
        },
        openGuildRoleConnectionsModal: function() {
            return h
        },
        default: function() {
            return u
        }
    });
    var l = i("37983");
    i("884691");
    var r = i("446674"),
        a = i("77078"),
        n = i("305961"),
        s = i("83900"),
        o = i("535013"),
        d = i("782340");
    let c = "guild-connection-roles";

    function h(t) {
        (0, a.openModalLazy)(async () => {
            let {
                default: e
            } = await i.el("918771").then(i.bind(i, "918771"));
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
        let e = (0, r.useStateFromStores)([n.default], () => (0, o.isVerifiedRolesChannelVisible)(t, n.default.getRoles(t.id)), [t]);
        return e ? (0, l.jsx)(a.MenuItem, {
            id: "guild-connection-roles",
            label: d.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
            icon: s.default,
            action: () => h(t.id)
        }) : null
    }
}