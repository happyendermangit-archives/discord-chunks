function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var s = n("759843"),
        a = n("627929"),
        l = n("913144"),
        r = n("840707"),
        i = n("49111"),
        u = {
            signup: (e, t) => r.default.post({
                url: i.Endpoints.HUB_WAITLIST_SIGNUP,
                body: {
                    email: e,
                    school: t
                },
                trackedActionData: {
                    event: s.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                    properties: e => {
                        var t;
                        let n = !1,
                            s = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.email_domain;
                        if (null != s) {
                            let e = s.split(".");
                            n = -1 !== e.indexOf("edu")
                        }
                        return (0, a.exact)({
                            is_edu_email: n
                        })
                    }
                }
            }),
            async sendVerificationEmail(e, t, n) {
                let l = await r.default.post({
                    url: i.Endpoints.HUB_EMAIL_VERIFY_SEND,
                    body: {
                        email: e,
                        guild_id: n,
                        allow_multiple_guilds: t,
                        use_verification_code: !0
                    },
                    trackedActionData: {
                        event: s.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                        properties: e => {
                            var t;
                            let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.has_matching_guild;
                            return (0, a.exact)({
                                has_matching_guild: n
                            })
                        }
                    }
                });
                return l.body
            },
            async verify(e) {
                if (null != e) try {
                    var t;
                    let n = await r.default.post({
                            url: i.Endpoints.HUB_EMAIL_VERIFY,
                            body: {
                                token: e
                            },
                            trackedActionData: {
                                event: s.NetworkActionNames.HUB_EMAIL_VERIFY
                            }
                        }),
                        a = null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
                    l.default.dispatch({
                        type: "HUB_VERIFY_EMAIL_SUCCESS",
                        guildId: a
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "HUB_VERIFY_EMAIL_FAILURE",
                        errors: e.body
                    })
                }
            },
            async verifyCode(e, t, n) {
                if (null != e) try {
                    var a;
                    let u = await r.default.post({
                            url: i.Endpoints.HUB_EMAIL_VERIFY_CODE,
                            body: {
                                code: e,
                                guild_id: t,
                                email: n
                            },
                            trackedActionData: {
                                event: s.NetworkActionNames.HUB_EMAIL_VERIFY
                            }
                        }),
                        o = null === (a = u.body.guild) || void 0 === a ? void 0 : a.id;
                    return l.default.dispatch({
                        type: "HUB_VERIFY_EMAIL_SUCCESS",
                        guildId: o
                    }), u.body
                } catch (e) {
                    throw l.default.dispatch({
                        type: "HUB_VERIFY_EMAIL_FAILURE",
                        errors: e.body
                    }), e
                }
            }
        }
}