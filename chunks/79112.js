function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("872717"),
        s = n("95410"),
        r = n("913144"),
        a = n("211895"),
        o = n("26092"),
        l = n("599110"),
        u = n("315102"),
        d = n("730622"),
        c = n("49111"),
        f = n("191349"),
        _ = n("782340"),
        h = {
            open() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                (0, a.default)(e, t, n)
            },
            init: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_INIT",
                    section: e,
                    subsection: t,
                    ...n
                })
            },
            close() {
                let e = o.default.onClose;
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_CLOSE"
                }), null != e && e()
            },
            setSection(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_SET_SECTION",
                    section: e,
                    subsection: t,
                    ...n
                })
            },
            clearSubsection(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                    forSection: e
                })
            },
            clearScrollPosition(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                    forSection: e
                })
            },
            updateAccount(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                    settings: e
                })
            },
            submitComplete() {
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                })
            },
            reset() {
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_RESET"
                })
            },
            saveAccountChanges(e, t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_SUBMIT"
                });
                let {
                    username: n,
                    email: a,
                    emailToken: o,
                    password: h,
                    avatar: E,
                    newPassword: g,
                    discriminator: m
                } = e, {
                    close: p
                } = t;
                return (0, d.default)(e => {
                    let t = {
                            username: n,
                            email: a,
                            email_token: o,
                            password: h,
                            avatar: E,
                            new_password: g,
                            ...e,
                            discriminator: null != m && "" !== m ? m : void 0
                        },
                        r = s.default.get(c.DEVICE_TOKEN),
                        l = (0, f.getDevicePushProvider)();
                    null != l && null != r && (t.push_provider = l, t.push_token = r);
                    let u = s.default.get(c.DEVICE_VOIP_TOKEN);
                    return null != f.DEVICE_PUSH_VOIP_PROVIDER && null != u && (t.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = u), i.default.patch({
                        url: c.Endpoints.ME,
                        oldFormErrors: !0,
                        body: t
                    })
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body,
                        n = t.token;
                    return l.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), delete t.token, r.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: n,
                        userId: t.id
                    }), r.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: t
                    }), null != g && r.default.dispatch({
                        type: "USER_PASSWORD_UPDATE",
                        user: t,
                        newPassword: g
                    }), null != h && null != g && r.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: t.id
                    }), p ? this.close() : this.submitComplete(), e
                }, e => (r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }
        }
}