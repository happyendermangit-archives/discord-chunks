function(e, t, n) {
    "use strict";
    n.r(t), n("653041");
    var i = n("97613"),
        r = n.n(i),
        s = n("570140"),
        a = n("777639"),
        o = n("272423"),
        l = n("808663"),
        u = n("178535"),
        d = n("981631");
    t.default = {
        push(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
                i = arguments.length > 3 ? arguments[3] : void 0,
                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.AppContext.APP;
            return (0, o.pushModal)({
                key: n,
                modal: (0, u.default)(e, {}, t, n),
                ...i
            }), s.default.dispatch({
                type: "MODAL_PUSH",
                modal: e,
                props: t,
                key: n,
                appContext: a
            }), n
        },
        pushLazy(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
                i = arguments.length > 3 ? arguments[3] : void 0,
                s = (0, a.getRootNavigationRef)();
            return null != s && s.isReady() ? (e instanceof Promise ? e.then(e => {
                let {
                    default: t
                } = e;
                return t
            }) : e()).then(e => this.push(e, t, n, i)) : new Promise(r => l.default.enqueue(() => r(this.pushLazy(e, t, n, i))))
        },
        updateAnimation(e, t) {
            s.default.dispatch({
                type: "MODAL_UPDATE",
                key: e,
                props: {},
                partial: !0,
                animation: t
            })
        },
        pop() {
            (0, o.popModal)(), s.default.dispatch({
                type: "MODAL_POP"
            })
        },
        popWithKey(e, t) {
            (0, o.popModal)(e, t), s.default.dispatch({
                type: "MODAL_POP",
                key: e,
                onExited: t
            })
        },
        popAll() {
            (0, o.popAllModals)(), s.default.dispatch({
                type: "MODAL_POP_ALL"
            }), s.default.dispatch({
                type: "CHANNEL_SETTINGS_CLOSE"
            }), s.default.dispatch({
                type: "EMAIL_VERIFICATION_MODAL_CLOSE"
            }), s.default.dispatch({
                type: "GUILD_SETTINGS_CLOSE"
            }), s.default.dispatch({
                type: "HIDE_ACTION_SHEET"
            }), s.default.dispatch({
                type: "DISPLAYED_INVITE_CLEAR"
            }), s.default.dispatch({
                type: "DRAWER_CLOSE",
                animated: !0
            }), s.default.dispatch({
                type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
            }), s.default.dispatch({
                type: "QUICKSWITCHER_HIDE"
            }), s.default.dispatch({
                type: "MENTION_MODAL_CLOSE"
            }), s.default.dispatch({
                type: "USER_SETTINGS_MODAL_CLOSE"
            }), s.default.dispatch({
                type: "SEARCH_MODAL_CLOSE"
            }), s.default.dispatch({
                type: "CONNECTIONS_GRID_MODAL_HIDE"
            })
        }
    }
}