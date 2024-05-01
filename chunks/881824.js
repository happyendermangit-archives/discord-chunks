function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        navigateToStage: function() {
            return A
        },
        openEndGuildEventConfirmationModal: function() {
            return I
        },
        openEndStageModal: function() {
            return S
        },
        openStageBlockedUsersSheet: function() {
            return f
        },
        openStageChannelAudienceNoticeModal: function() {
            return T
        },
        openStageChannelSettings: function() {
            return E
        },
        shouldShowBlockedUsers: function() {
            return h
        },
        showChannelChangeConfirmationAlert: function() {
            return m
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("952265"),
        a = n("359110"),
        s = n("314897"),
        o = n("88751"),
        l = n("427679"),
        u = n("513449"),
        d = n("930180"),
        _ = n("981631"),
        c = n("602091");

    function E(e, t) {
        (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("38779"), n.e("24753")]).then(n.bind(n, "581355"));
            return n => (0, i.jsx)(t, {
                ...n,
                channel: e
            })
        }, {
            contextKey: t === _.AppContext.POPOUT ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT
        })
    }

    function I(e, t) {
        (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("2634")]).then(n.bind(n, "548841"));
            return n => (0, i.jsx)(t, {
                ...n,
                channel: e
            })
        }, {
            contextKey: t === _.AppContext.POPOUT ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT
        })
    }

    function T(e) {}

    function f(e, t) {
        (0, r.openModalLazy)(async () => {
            let {
                default: r
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("1906")]).then(n.bind(n, "854510"));
            return n => (0, i.jsx)(r, {
                ...n,
                channel: e,
                onAccept: t
            })
        })
    }

    function S(e, t) {
        (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("85885")]).then(n.bind(n, "124779"));
            return n => (0, i.jsx)(t, {
                ...n,
                channel: e
            })
        }, {
            contextKey: t === _.AppContext.POPOUT ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT
        })
    }

    function h(e) {
        let t = s.default.getId(),
            n = (0, d.getStageBlockedUsersCount)(e);
        return !o.default.isModerator(t, e) && n > 0
    }

    function A(e, t) {
        var d;
        let _ = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        t !== e.id && (0, u.setIsOnStartStageScreen)(!0), d = e, (0, a.transitionToChannel)(d.id), t !== e.id && _ && ! function(e) {
            let t = s.default.getId(),
                a = o.default.isModerator(t, e.id),
                u = l.default.isLive(e.id);
            a && !u ? E(e) : a && u && function(e) {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("84686")]).then(n.bind(n, "665111"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e
                    })
                })
            }(e)
        }(e)
    }

    function m(e, t) {
        return (0, r.openModalLazy)(async () => {
            let {
                default: r
            } = await n.e("65045").then(n.bind(n, "143782"));
            return n => (0, i.jsx)(r, {
                channel: e,
                onConfirm: t,
                ...n
            })
        }), !0
    }
}