function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var s = n("37983");
    n("884691");
    var i = n("551042"),
        r = n("599110"),
        a = n("50926"),
        o = n("347977"),
        d = n("394294"),
        u = n("49111");
    let l = () => {
            r.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                type: d.MEMBER_VERIFICATION_TYPE
            })
        },
        f = e => {
            r.default.track(u.AnalyticEvents.OPEN_MODAL, {
                type: d.MEMBER_VERIFICATION_TYPE,
                guild_id: e
            })
        };
    var _ = {
        openMemberVerificationModal(e, t) {
            f(e);
            let r = async t => {
                await a.default.submitVerificationForm(e, t)
            };
            (0, i.openModalLazy)(async () => {
                let {
                    default: t
                } = await n.el("93184").then(n.bind(n, "93184"));
                return n => (0, s.jsx)(t, {
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
                            l()
                        }
                        n.onClose()
                    }
                })
            }, {
                modalKey: d.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                onCloseRequest: () => {
                    l(), o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, o.setShowWarning)(!0) : (0, i.closeModal)(d.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                },
                onCloseCallback: t
            })
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            !e && l(), (0, i.closeModal)(d.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
        }
    }
}