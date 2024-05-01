function(e, t, n) {
    "use strict";
    n.r(t), n("653041");
    var i = n("97613"),
        r = n.n(i),
        a = n("570140"),
        s = n("777639"),
        o = n("272423"),
        l = n("808663"),
        u = n("178535"),
        d = n("981631");
    t.default = {
        push(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
                i = arguments.length > 3 ? arguments[3] : void 0,
                s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.AppContext.APP;
            return (0, o.pushModal)({
                key: n,
                modal: (0, u.default)(e, {}, t, n),
                ...i
            }), a.default.dispatch({
                type: "MODAL_PUSH",
                modal: e,
                props: t,
                key: n,
                appContext: s
            }), n
        },
        pushLazy(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
                i = arguments.length > 3 ? arguments[3] : void 0,
                a = (0, s.getRootNavigationRef)();
            return null != a && a.isReady() ? (e instanceof Promise ? e.then(e => {
                let {
                    default: t
                } = e;
                return t
            }) : e()).then(e => this.push(e, t, n, i)) : new Promise(r => l.default.enqueue(() => r(this.pushLazy(e, t, n, i))))
        },
        updateAnimation(e, t) {
            a.default.dispatch({
                type: "MODAL_UPDATE",
                key: e,
                props: {},
                partial: !0,
                animation: t
            })
        },
        pop() {
            (0, o.popModal)(), a.default.dispatch({
                type: "MODAL_POP"
            })
        },
        popWithKey(e, t) {
            (0, o.popModal)(e, t), a.default.dispatch({
                type: "MODAL_POP",
                key: e,
                onExited: t
            })
        },
        popAll() {
            (0, o.popAllModals)(), a.default.dispatch({
                type: "MODAL_POP_ALL"
            }), a.default.dispatch({
                type: "CHANNEL_SETTINGS_CLOSE"
            }), a.default.dispatch({
                type: "EMAIL_VERIFICATION_MODAL_CLOSE"
            }), a.default.dispatch({
                type: "GUILD_SETTINGS_CLOSE"
            }), a.default.dispatch({
                type: "HIDE_ACTION_SHEET"
            }), a.default.dispatch({
                type: "DISPLAYED_INVITE_CLEAR"
            }), a.default.dispatch({
                type: "DRAWER_CLOSE",
                animated: !0
            }), a.default.dispatch({
                type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
            }), a.default.dispatch({
                type: "QUICKSWITCHER_HIDE"
            }), a.default.dispatch({
                type: "MENTION_MODAL_CLOSE"
            }), a.default.dispatch({
                type: "USER_SETTINGS_MODAL_CLOSE"
            }), a.default.dispatch({
                type: "SEARCH_MODAL_CLOSE"
            }), a.default.dispatch({
                type: "CONNECTIONS_GRID_MODAL_HIDE"
            })
        }
    }
}