function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("97613"),
        o = n.n(r),
        i = n("629815"),
        a = n("681446"),
        u = n("164161"),
        s = n("905606"),
        l = n("418786"),
        c = n("281767");
    t.default = {
        push: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o()("modal"),
                r = arguments.length > 3 ? arguments[3] : void 0,
                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c.AppContext.APP;
            return (0, u.pushModal)(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({
                key: n,
                modal: (0, l.default)(e, {}, t, n)
            }, r)), i.default.dispatch({
                type: "MODAL_PUSH",
                modal: e,
                props: t,
                key: n,
                appContext: a
            }), n
        },
        pushLazy: function(e, t) {
            var n, r, i = this,
                u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o()("modal"),
                l = arguments.length > 3 ? arguments[3] : void 0,
                c = (0, a.getRootNavigationRef)();
            if (null == c || !c.isReady()) return new Promise(function(n) {
                return s.default.enqueue(function() {
                    return n(i.pushLazy(e, t, u, l))
                })
            });
            return ((n = e, null != (r = Promise) && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r) ? e.then(function(e) {
                return e.default
            }) : e()).then(function(e) {
                return i.push(e, t, u, l)
            })
        },
        updateAnimation: function(e, t) {
            i.default.dispatch({
                type: "MODAL_UPDATE",
                key: e,
                props: {},
                partial: !0,
                animation: t
            })
        },
        pop: function() {
            (0, u.popModal)(), i.default.dispatch({
                type: "MODAL_POP"
            })
        },
        popWithKey: function(e, t) {
            (0, u.popModal)(e, t), i.default.dispatch({
                type: "MODAL_POP",
                key: e,
                onExited: t
            })
        },
        popAll: function() {
            (0, u.popAllModals)(), i.default.dispatch({
                type: "MODAL_POP_ALL"
            }), i.default.dispatch({
                type: "CHANNEL_SETTINGS_CLOSE"
            }), i.default.dispatch({
                type: "EMAIL_VERIFICATION_MODAL_CLOSE"
            }), i.default.dispatch({
                type: "GUILD_SETTINGS_CLOSE"
            }), i.default.dispatch({
                type: "HIDE_ACTION_SHEET"
            }), i.default.dispatch({
                type: "DISPLAYED_INVITE_CLEAR"
            }), i.default.dispatch({
                type: "DRAWER_CLOSE",
                animated: !0
            }), i.default.dispatch({
                type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
            }), i.default.dispatch({
                type: "QUICKSWITCHER_HIDE"
            }), i.default.dispatch({
                type: "MENTION_MODAL_CLOSE"
            }), i.default.dispatch({
                type: "USER_SETTINGS_MODAL_CLOSE"
            }), i.default.dispatch({
                type: "SEARCH_MODAL_CLOSE"
            }), i.default.dispatch({
                type: "CONNECTIONS_GRID_MODAL_HIDE"
            })
        }
    }
}