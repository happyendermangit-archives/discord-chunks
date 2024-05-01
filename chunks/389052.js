function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("194359"),
        o = n("699516"),
        l = n("594174"),
        u = n("981631"),
        d = n("689938");

    function _(e) {
        let {
            user: t,
            color: n,
            onBlock: _,
            onUnblock: c,
            location: E = "ContextMenu"
        } = e, {
            id: I
        } = t, T = (0, r.useStateFromStores)([l.default], () => {
            var e;
            return (null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === I
        }, [I]), f = (0, r.useStateFromStores)([o.default], () => o.default.isBlocked(I), [I]);
        return T ? null : (0, i.jsx)(s.MenuItem, {
            id: "block",
            color: n,
            label: f ? d.default.Messages.UNBLOCK : d.default.Messages.BLOCK,
            action: f ? () => {
                null == c || c(), a.default.unblockUser(I, {
                    location: E
                })
            } : () => {
                (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
                    header: d.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                        name: t.username
                    }),
                    confirmText: d.default.Messages.BLOCK,
                    cancelText: d.default.Messages.CANCEL,
                    onConfirm: () => {
                        null == _ || _(), a.default.addRelationship({
                            userId: I,
                            context: {
                                location: E
                            },
                            type: u.RelationshipTypes.BLOCKED
                        })
                    },
                    ...e,
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: d.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
                            name: t.username
                        })
                    })
                }))
            }
        })
    }
}