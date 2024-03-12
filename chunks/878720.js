function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChangePhoneReason: function() {
            return a
        },
        default: function() {
            return d
        }
    });
    var l, a, u = n("759843"),
        r = n("872717"),
        s = n("913144"),
        i = n("271938"),
        o = n("840707"),
        _ = n("482931"),
        E = n("49111");
    (l = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required", l.USER_SETTINGS_UPDATE = "user_settings_update", l.GUILD_PHONE_REQUIRED = "guild_phone_required", l.MFA_PHONE_UPDATE = "mfa_phone_update", l.CONTACT_SYNC = "contact_sync";
    var d = {
        setCountryCode(e) {
            s.default.dispatch({
                type: "PHONE_SET_COUNTRY_CODE",
                countryCode: e
            })
        },
        removePhone: (e, t) => r.default.delete({
            url: E.Endpoints.PHONE,
            body: {
                password: e,
                change_phone_reason: t
            },
            oldFormErrors: !0
        }),
        resendCode(e) {
            let t = {},
                n = i.default.getFingerprint();
            return null != n && "" !== n && (t["X-Fingerprint"] = n), r.default.post({
                url: E.Endpoints.RESEND_PHONE,
                headers: t,
                body: {
                    phone: e
                }
            })
        },
        beginAddPhone: (e, t) => r.default.post({
            url: E.Endpoints.PHONE,
            body: {
                phone: e,
                change_phone_reason: t
            }
        }),
        addPhone: (e, t, n) => r.default.post({
            url: E.Endpoints.PHONE,
            body: {
                phone_token: e,
                password: t,
                change_phone_reason: n
            },
            oldFormErrors: !0
        }),
        addPhoneWithoutPassword: e => r.default.post({
            url: E.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: {
                code: e
            }
        }),
        beginReverifyPhone: (e, t) => r.default.post({
            url: E.Endpoints.PHONE_REVERIFY,
            body: {
                phone: e,
                change_phone_reason: t
            }
        }),
        reverifyPhone: (e, t, n) => r.default.post({
            url: E.Endpoints.PHONE_REVERIFY,
            body: {
                phone_token: e,
                password: t,
                change_phone_reason: n
            },
            oldFormErrors: !0
        }),
        validatePhoneForSupport: e => r.default.post({
            url: E.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: {
                token: e
            },
            oldFormErrors: !0
        }),
        async verifyPhone(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                a = {},
                r = i.default.getFingerprint();
            null != r && "" !== r && (a["X-Fingerprint"] = r), l && (a.authorization = "");
            let d = await o.default.post({
                url: E.Endpoints.VERIFY_PHONE,
                headers: a,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: u.NetworkActionNames.USER_VERIFY_PHONE
                }
            });
            return n && s.default.dispatch({
                type: "MODAL_POP",
                key: _.PHONE_VERIFICATION_MODAL_KEY
            }), d.body
        }
    }
}