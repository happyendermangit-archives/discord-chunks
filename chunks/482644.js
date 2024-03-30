function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("242880"),
        i = n("629815"),
        a = n("739266"),
        u = n("674594"),
        s = n("870331"),
        l = n("299529"),
        c = n("475743"),
        f = n("281767"),
        d = n("10077"),
        _ = n("941504");

    function E(e) {
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
    }
    t.default = {
        open: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    openWithoutBackstack: !1
                };
            (0, a.default)(e, t, n)
        },
        init: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 ? arguments[2] : void 0;
            i.default.dispatch(E({
                type: "USER_SETTINGS_MODAL_INIT",
                section: e,
                subsection: t
            }, n))
        },
        close: function() {
            var e = u.default.onClose;
            i.default.dispatch({
                type: "USER_SETTINGS_MODAL_CLOSE"
            }), null != e && e()
        },
        setSection: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            i.default.dispatch(E({
                type: "USER_SETTINGS_MODAL_SET_SECTION",
                section: e,
                subsection: t
            }, n))
        },
        clearSubsection: function(e) {
            i.default.dispatch({
                type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                forSection: e
            })
        },
        clearScrollPosition: function(e) {
            i.default.dispatch({
                type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                forSection: e
            })
        },
        updateAccount: function(e) {
            i.default.dispatch({
                type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                settings: e
            })
        },
        submitComplete: function() {
            i.default.dispatch({
                type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
            })
        },
        reset: function() {
            i.default.dispatch({
                type: "USER_SETTINGS_MODAL_RESET"
            })
        },
        saveAccountChanges: function(e, t) {
            var n = this;
            i.default.dispatch({
                type: "USER_SETTINGS_MODAL_SUBMIT"
            });
            var a = e.username,
                u = e.email,
                p = e.emailToken,
                m = e.password,
                y = e.avatar,
                I = e.newPassword,
                h = e.discriminator,
                O = t.close;
            return (0, c.default)(function(e) {
                var t, n, i = (t = E({
                        username: a,
                        email: u,
                        email_token: p,
                        password: m,
                        avatar: y,
                        new_password: I
                    }, e), n = (n = {
                        discriminator: null != h && "" !== h ? h : void 0
                    }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }), t),
                    s = o.Storage.get(f.DEVICE_TOKEN),
                    l = (0, d.getDevicePushProvider)();
                null != l && null != s && (i.push_provider = l, i.push_token = s);
                var c = o.Storage.get(f.DEVICE_VOIP_TOKEN);
                return null != d.DEVICE_PUSH_VOIP_PROVIDER && null != c && (i.push_voip_provider = d.DEVICE_PUSH_VOIP_PROVIDER, i.push_voip_token = c), r.HTTP.patch({
                    url: f.Endpoints.ME,
                    oldFormErrors: !0,
                    body: i
                })
            }, {
                checkEnabled: !1,
                modalProps: {
                    title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                },
                hooks: {
                    onEarlyClose: function() {
                        return i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }
            }).then(function(e) {
                var t = e.body,
                    r = t.token;
                return s.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                    animated: (0, l.isAnimatedIconHash)(t.avatar)
                }), delete t.token, i.default.dispatch({
                    type: "UPDATE_TOKEN",
                    token: r,
                    userId: t.id
                }), i.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: t
                }), null != I && i.default.dispatch({
                    type: "USER_PASSWORD_UPDATE",
                    user: t,
                    newPassword: I
                }), null != m && null != I && i.default.dispatch({
                    type: "PASSWORD_UPDATED",
                    userId: t.id
                }), O ? n.close() : n.submitComplete(), e
            }, function(e) {
                return i.default.dispatch({
                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                    errors: e.body
                }), e
            })
        }
    }
}