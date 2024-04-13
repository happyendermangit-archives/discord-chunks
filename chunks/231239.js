function(e, t, n) {
    "use strict";
    n.r(t);
    var l = n("990547"),
        a = n("283693"),
        u = n("570140"),
        r = n("573261"),
        i = n("981631");
    t.default = {
        signup: (e, t) => r.default.post({
            url: i.Endpoints.HUB_WAITLIST_SIGNUP,
            body: {
                email: e,
                school: t
            },
            trackedActionData: {
                event: l.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: e => {
                    var t;
                    let n = !1,
                        l = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.email_domain;
                    return null != l && (n = -1 !== l.split(".").indexOf("edu")), (0, a.exact)({
                        is_edu_email: n
                    })
                }
            }
        }),
        sendVerificationEmail: async (e, t, n) => (await r.default.post({
            url: i.Endpoints.HUB_EMAIL_VERIFY_SEND,
            body: {
                email: e,
                guild_id: n,
                allow_multiple_guilds: t,
                use_verification_code: !0
            },
            trackedActionData: {
                event: l.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                properties: e => {
                    var t;
                    let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.has_matching_guild;
                    return (0, a.exact)({
                        has_matching_guild: n
                    })
                }
            }
        })).body,
        async verify(e) {
            if (null != e) try {
                var t;
                let n = await r.default.post({
                        url: i.Endpoints.HUB_EMAIL_VERIFY,
                        body: {
                            token: e
                        },
                        trackedActionData: {
                            event: l.NetworkActionNames.HUB_EMAIL_VERIFY
                        }
                    }),
                    a = null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
                u.default.dispatch({
                    type: "HUB_VERIFY_EMAIL_SUCCESS",
                    guildId: a
                })
            } catch (e) {
                u.default.dispatch({
                    type: "HUB_VERIFY_EMAIL_FAILURE",
                    errors: e.body
                })
            }
        },
        async verifyCode(e, t, n) {
            if (null != e) try {
                var a;
                let s = await r.default.post({
                        url: i.Endpoints.HUB_EMAIL_VERIFY_CODE,
                        body: {
                            code: e,
                            guild_id: t,
                            email: n
                        },
                        trackedActionData: {
                            event: l.NetworkActionNames.HUB_EMAIL_VERIFY
                        }
                    }),
                    o = null === (a = s.body.guild) || void 0 === a ? void 0 : a.id;
                return u.default.dispatch({
                    type: "HUB_VERIFY_EMAIL_SUCCESS",
                    guildId: o
                }), s.body
            } catch (e) {
                throw u.default.dispatch({
                    type: "HUB_VERIFY_EMAIL_FAILURE",
                    errors: e.body
                }), e
            }
        }
    }
}