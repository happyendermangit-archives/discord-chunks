function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChangePhoneReason: function() {
            return a
        },
        default: function() {
            return E
        }
    });
    var s, a, r = n("759843"),
        l = n("872717"),
        i = n("913144"),
        o = n("271938"),
        u = n("840707"),
        d = n("482931"),
        c = n("49111");
    (s = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required", s.USER_SETTINGS_UPDATE = "user_settings_update", s.GUILD_PHONE_REQUIRED = "guild_phone_required", s.MFA_PHONE_UPDATE = "mfa_phone_update", s.CONTACT_SYNC = "contact_sync";
    var E = {
        setCountryCode(e) {
            i.default.dispatch({
                type: "PHONE_SET_COUNTRY_CODE",
                countryCode: e
            })
        },
        removePhone: (e, t) => l.HTTP.del({
            url: c.Endpoints.PHONE,
            body: {
                password: e,
                change_phone_reason: t
            },
            oldFormErrors: !0
        }),
        resendCode(e) {
            let t = {},
                n = o.default.getFingerprint();
            return null != n && "" !== n && (t["X-Fingerprint"] = n), l.HTTP.post({
                url: c.Endpoints.RESEND_PHONE,
                headers: t,
                body: {
                    phone: e
                }
            })
        },
        beginAddPhone: (e, t) => l.HTTP.post({
            url: c.Endpoints.PHONE,
            body: {
                phone: e,
                change_phone_reason: t
            }
        }),
        addPhone: (e, t, n) => l.HTTP.post({
            url: c.Endpoints.PHONE,
            body: {
                phone_token: e,
                password: t,
                change_phone_reason: n
            },
            oldFormErrors: !0
        }),
        addPhoneWithoutPassword: e => l.HTTP.post({
            url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: {
                code: e
            }
        }),
        beginReverifyPhone: (e, t) => l.HTTP.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: {
                phone: e,
                change_phone_reason: t
            }
        }),
        reverifyPhone: (e, t, n) => l.HTTP.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: {
                phone_token: e,
                password: t,
                change_phone_reason: n
            },
            oldFormErrors: !0
        }),
        validatePhoneForSupport: e => l.HTTP.post({
            url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: {
                token: e
            },
            oldFormErrors: !0
        }),
        async verifyPhone(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                a = {},
                l = o.default.getFingerprint();
            null != l && "" !== l && (a["X-Fingerprint"] = l), s && (a.authorization = "");
            let E = await u.default.post({
                url: c.Endpoints.VERIFY_PHONE,
                headers: a,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.USER_VERIFY_PHONE
                }
            });
            return n && i.default.dispatch({
                type: "MODAL_POP",
                key: d.PHONE_VERIFICATION_MODAL_KEY
            }), E.body
        }
    }
}