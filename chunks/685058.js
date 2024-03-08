function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        MODAL_KEY: function() {
            return o
        },
        openGuildRoleConnectionsModal: function() {
            return d
        },
        default: function() {
            return c
        }
    });
    var l = i("37983");
    i("884691");
    var r = i("77078"),
        a = i("83900"),
        n = i("535013"),
        s = i("782340");
    let o = "guild-connection-roles";

    function d(t) {
        (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await i.el("918771").then(i.bind(i, "918771"));
            return i => (0, l.jsx)(e, {
                ...i,
                guildId: t
            })
        }, {
            modalKey: o,
            contextKey: r.DEFAULT_MODAL_CONTEXT,
            onCloseRequest: () => {
                (0, r.closeModal)(o, r.DEFAULT_MODAL_CONTEXT)
            }
        })
    }

    function c(t) {
        let e = (0, n.isVerifiedRolesChannelVisible)(t);
        return e ? (0, l.jsx)(r.MenuItem, {
            id: "guild-connection-roles",
            label: s.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
            icon: a.default,
            action: () => d(t.id)
        }) : null
    }
}