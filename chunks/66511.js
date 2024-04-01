function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("952265"),
        s = n("626135"),
        a = n("863249"),
        o = n("266395"),
        l = n("592286"),
        u = n("981631");
    let d = () => {
            s.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                type: l.MEMBER_VERIFICATION_TYPE
            })
        },
        _ = e => {
            s.default.track(u.AnalyticEvents.OPEN_MODAL, {
                type: l.MEMBER_VERIFICATION_TYPE,
                guild_id: e
            })
        };
    t.default = {
        openMemberVerificationModal(e, t) {
            _(e);
            let s = async t => {
                await a.default.submitVerificationForm(e, t)
            };
            (0, r.openModalLazy)(async () => {
                let {
                    default: t
                } = await Promise.all([n.e("49237"), n.e("99387"), n.e("80026"), n.e("70935")]).then(n.bind(n, "645264"));
                return n => (0, i.jsx)(t, {
                    ...n,
                    guildId: e,
                    onComplete: s,
                    onClose: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (!e) {
                            if (o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                (0, o.setShowWarning)(!0);
                                return
                            }
                            d()
                        }
                        n.onClose()
                    }
                })
            }, {
                modalKey: l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                onCloseRequest: () => {
                    d(), o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, o.setShowWarning)(!0) : (0, r.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                },
                onCloseCallback: t
            })
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            !e && d(), (0, r.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
        }
    }
}