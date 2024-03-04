function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("551042"),
        r = n("599110"),
        a = n("50926"),
        o = n("347977"),
        l = n("394294"),
        u = n("49111");
    let d = () => {
            r.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                type: l.MEMBER_VERIFICATION_TYPE
            })
        },
        c = e => {
            r.default.track(u.AnalyticEvents.OPEN_MODAL, {
                type: l.MEMBER_VERIFICATION_TYPE,
                guild_id: e
            })
        };
    var f = {
        openMemberVerificationModal(e, t) {
            c(e);
            let r = async t => {
                await a.default.submitVerificationForm(e, t)
            };
            (0, s.openModalLazy)(async () => {
                let {
                    default: t
                } = await n.el("93184").then(n.bind(n, "93184"));
                return n => (0, i.jsx)(t, {
                    ...n,
                    guildId: e,
                    onComplete: r,
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
                    d(), o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, o.setShowWarning)(!0) : (0, s.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                },
                onCloseCallback: t
            })
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            !e && d(), (0, s.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
        }
    }
}