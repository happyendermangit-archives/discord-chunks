function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("481060"),
        s = n("194359"),
        o = n("699516"),
        l = n("689938");

    function u(e) {
        let {
            user: t,
            color: n,
            location: u,
            onAction: d
        } = e;
        return !(0, r.useStateFromStores)([o.default], () => o.default.isFriend(t.id)) || t.isNonUserBot() ? null : (0, i.jsx)(a.MenuItem, {
            id: "remove-friend",
            color: n,
            label: l.default.Messages.REMOVE_FRIEND,
            action: () => {
                (0, a.openModal)(e => (0, i.jsx)(a.ConfirmModal, {
                    header: l.default.Messages.REMOVE_FRIEND_TITLE.format({
                        name: t.username
                    }),
                    confirmText: l.default.Messages.REMOVE_FRIEND,
                    cancelText: l.default.Messages.CANCEL,
                    onConfirm: () => {
                        null == d || d(), s.default.removeFriend(t.id, null != u ? {
                            location: u
                        } : void 0)
                    },
                    ...e,
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: l.default.Messages.REMOVE_FRIEND_BODY.format({
                            name: t.username
                        })
                    })
                }))
            }
        })
    }
}