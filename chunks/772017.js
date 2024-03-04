function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("424973");
    var i = n("995008"),
        s = n.n(i),
        r = n("913144"),
        a = n("693051"),
        o = n("153498"),
        l = n("76493"),
        u = n("91731"),
        d = n("49111"),
        c = {
            push(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s("modal"),
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d.AppContext.APP;
                return (0, o.pushModal)({
                    key: n,
                    modal: (0, u.default)(e, {}, t, n),
                    ...i
                }), r.default.dispatch({
                    type: "MODAL_PUSH",
                    modal: e,
                    props: t,
                    key: n,
                    appContext: a
                }), n
            },
            pushLazy(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s("modal"),
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    r = (0, a.getRootNavigationRef)();
                return null != r && r.isReady() ? (e instanceof Promise ? e.then(e => {
                    let {
                        default: t
                    } = e;
                    return t
                }) : e()).then(e => this.push(e, t, n, i)) : new Promise(s => l.default.enqueue(() => s(this.pushLazy(e, t, n, i))))
            },
            updateAnimation(e, t) {
                r.default.dispatch({
                    type: "MODAL_UPDATE",
                    key: e,
                    props: {},
                    partial: !0,
                    animation: t
                })
            },
            pop() {
                (0, o.popModal)(), r.default.dispatch({
                    type: "MODAL_POP"
                })
            },
            popWithKey(e, t) {
                (0, o.popModal)(e, t), r.default.dispatch({
                    type: "MODAL_POP",
                    key: e,
                    onExited: t
                })
            },
            popAll() {
                (0, o.popAllModals)(), r.default.dispatch({
                    type: "MODAL_POP_ALL"
                }), r.default.dispatch({
                    type: "CHANNEL_SETTINGS_CLOSE"
                }), r.default.dispatch({
                    type: "EMAIL_VERIFICATION_MODAL_CLOSE"
                }), r.default.dispatch({
                    type: "GUILD_SETTINGS_CLOSE"
                }), r.default.dispatch({
                    type: "HIDE_ACTION_SHEET"
                }), r.default.dispatch({
                    type: "DISPLAYED_INVITE_CLEAR"
                }), r.default.dispatch({
                    type: "DRAWER_CLOSE",
                    animated: !0
                }), r.default.dispatch({
                    type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                }), r.default.dispatch({
                    type: "QUICKSWITCHER_HIDE"
                }), r.default.dispatch({
                    type: "MENTION_MODAL_CLOSE"
                }), r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_CLOSE"
                }), r.default.dispatch({
                    type: "SEARCH_MODAL_CLOSE"
                }), r.default.dispatch({
                    type: "CONNECTIONS_GRID_MODAL_HIDE"
                })
            }
        }
}