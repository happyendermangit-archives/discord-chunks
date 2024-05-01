function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("433517"),
        a = n("570140"),
        s = n("443684"),
        o = n("663389"),
        l = n("626135"),
        u = n("768581"),
        d = n("546796"),
        _ = n("981631"),
        c = n("792101"),
        E = n("689938");
    t.default = {
        open() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    openWithoutBackstack: !1
                };
            (0, s.default)(e, t, n)
        },
        init: function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 ? arguments[2] : void 0;
            a.default.dispatch({
                type: "USER_SETTINGS_MODAL_INIT",
                section: e,
                subsection: t,
                ...n
            })
        },
        close() {
            let e = o.default.onClose;
            a.default.dispatch({
                type: "USER_SETTINGS_MODAL_CLOSE"
            }), null != e && e()
        },
        setSection(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            a.default.dispatch({
                type: "USER_SETTINGS_MODAL_SET_SECTION",
                section: e,
                subsection: t,
                ...n
            })
        },
        clearSubsection(e) {
            a.default.dispatch({
                type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                forSection: e
            })
        },
        clearScrollPosition(e) {
            a.default.dispatch({
                type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                forSection: e
            })
        },
        updateAccount(e) {
            a.default.dispatch({
                type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                settings: e
            })
        },
        submitComplete() {
            a.default.dispatch({
                type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
            })
        },
        reset() {
            a.default.dispatch({
                type: "USER_SETTINGS_MODAL_RESET"
            })
        },
        saveAccountChanges(e, t) {
            a.default.dispatch({
                type: "USER_SETTINGS_MODAL_SUBMIT"
            });
            let {
                username: n,
                email: s,
                emailToken: o,
                password: I,
                avatar: T,
                newPassword: f,
                discriminator: S
            } = e, {
                close: h
            } = t;
            return (0, d.default)(e => {
                let t = {
                        username: n,
                        email: s,
                        email_token: o,
                        password: I,
                        avatar: T,
                        new_password: f,
                        ...e,
                        discriminator: null != S && "" !== S ? S : void 0
                    },
                    a = r.Storage.get(_.DEVICE_TOKEN),
                    l = (0, c.getDevicePushProvider)();
                null != l && null != a && (t.push_provider = l, t.push_token = a);
                let u = r.Storage.get(_.DEVICE_VOIP_TOKEN);
                return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != u && (t.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = u), i.HTTP.patch({
                    url: _.Endpoints.ME,
                    oldFormErrors: !0,
                    body: t
                })
            }, {
                checkEnabled: !1,
                modalProps: {
                    title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT
                },
                hooks: {
                    onEarlyClose: () => a.default.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                        errors: {}
                    })
                }
            }).then(e => {
                let t = e.body,
                    n = t.token;
                return l.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                    animated: (0, u.isAnimatedIconHash)(t.avatar)
                }), delete t.token, a.default.dispatch({
                    type: "UPDATE_TOKEN",
                    token: n,
                    userId: t.id
                }), a.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: t
                }), null != f && a.default.dispatch({
                    type: "USER_PASSWORD_UPDATE",
                    user: t,
                    newPassword: f
                }), null != I && null != f && a.default.dispatch({
                    type: "PASSWORD_UPDATED",
                    userId: t.id
                }), h ? this.close() : this.submitComplete(), e
            }, e => (a.default.dispatch({
                type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                errors: e.body
            }), e))
        }
    }
}