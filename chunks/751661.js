function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openStageChannelSettings: function() {
            return _
        },
        openEndGuildEventConfirmationModal: function() {
            return E
        },
        openStageChannelAudienceNoticeModal: function() {
            return h
        },
        openStageBlockedUsersSheet: function() {
            return g
        },
        openEndStageModal: function() {
            return m
        },
        shouldShowBlockedUsers: function() {
            return p
        },
        navigateToStage: function() {
            return S
        },
        showChannelChangeConfirmationAlert: function() {
            return v
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("551042"),
        r = n("144491"),
        a = n("271938"),
        o = n("325861"),
        l = n("834052"),
        u = n("534471"),
        d = n("151642"),
        c = n("49111"),
        f = n("625611");

    function _(e, t) {
        (0, s.openModalLazy)(async () => {
            let {
                default: t
            } = await n.el("435768").then(n.bind(n, "435768"));
            return n => (0, i.jsx)(t, {
                ...n,
                channel: e
            })
        }, {
            contextKey: t === c.AppContext.POPOUT ? f.POPOUT_MODAL_CONTEXT : f.DEFAULT_MODAL_CONTEXT
        })
    }

    function E(e, t) {
        (0, s.openModalLazy)(async () => {
            let {
                default: t
            } = await n.el("312953").then(n.bind(n, "312953"));
            return n => (0, i.jsx)(t, {
                ...n,
                channel: e
            })
        }, {
            contextKey: t === c.AppContext.POPOUT ? f.POPOUT_MODAL_CONTEXT : f.DEFAULT_MODAL_CONTEXT
        })
    }

    function h(e) {}

    function g(e, t) {
        (0, s.openModalLazy)(async () => {
            let {
                default: s
            } = await n.el("203966").then(n.bind(n, "203966"));
            return n => (0, i.jsx)(s, {
                ...n,
                channel: e,
                onAccept: t
            })
        })
    }

    function m(e, t) {
        (0, s.openModalLazy)(async () => {
            let {
                default: t
            } = await n.el("281645").then(n.bind(n, "281645"));
            return n => (0, i.jsx)(t, {
                ...n,
                channel: e
            })
        }, {
            contextKey: t === c.AppContext.POPOUT ? f.POPOUT_MODAL_CONTEXT : f.DEFAULT_MODAL_CONTEXT
        })
    }

    function p(e) {
        let t = a.default.getId(),
            n = (0, d.getStageBlockedUsersCount)(e),
            i = o.default.isModerator(t, e);
        return !i && n > 0
    }

    function S(e, t) {
        var d;
        let c = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        t !== e.id && (0, u.setIsOnStartStageScreen)(!0), d = e, (0, r.transitionToChannel)(d.id), t !== e.id && c && ! function(e) {
            let t = a.default.getId(),
                r = o.default.isModerator(t, e.id),
                u = l.default.isLive(e.id);
            r && !u ? _(e) : r && u && function(e) {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("337649").then(n.bind(n, "337649"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e
                    })
                })
            }(e)
        }(e)
    }

    function v(e, t) {
        return (0, s.openModalLazy)(async () => {
            let {
                default: s
            } = await n.el("371895").then(n.bind(n, "371895"));
            return n => (0, i.jsx)(s, {
                channel: e,
                onConfirm: t,
                ...n
            })
        }), !0
    }
}