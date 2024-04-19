function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChangePhoneReason: function() {
            return s
        }
    });
    var r, s, i = n("990547"),
        a = n("544891"),
        l = n("570140"),
        o = n("314897"),
        u = n("573261"),
        d = n("815660"),
        c = n("981631");
    (r = s || (s = {})).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync", t.default = {
        setCountryCode(e) {
            l.default.dispatch({
                type: "PHONE_SET_COUNTRY_CODE",
                countryCode: e
            })
        },
        removePhone: (e, t) => a.HTTP.del({
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
            return null != n && "" !== n && (t["X-Fingerprint"] = n), a.HTTP.post({
                url: c.Endpoints.RESEND_PHONE,
                headers: t,
                body: {
                    phone: e
                }
            })
        },
        beginAddPhone: (e, t) => a.HTTP.post({
            url: c.Endpoints.PHONE,
            body: {
                phone: e,
                change_phone_reason: t
            }
        }),
        addPhone: (e, t, n) => a.HTTP.post({
            url: c.Endpoints.PHONE,
            body: {
                phone_token: e,
                password: t,
                change_phone_reason: n
            },
            oldFormErrors: !0
        }),
        addPhoneWithoutPassword: e => a.HTTP.post({
            url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: {
                code: e
            }
        }),
        beginReverifyPhone: (e, t) => a.HTTP.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: {
                phone: e,
                change_phone_reason: t
            }
        }),
        reverifyPhone: (e, t, n) => a.HTTP.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: {
                phone_token: e,
                password: t,
                change_phone_reason: n
            },
            oldFormErrors: !0
        }),
        validatePhoneForSupport: e => a.HTTP.post({
            url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: {
                token: e
            },
            oldFormErrors: !0
        }),
        async verifyPhone(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                s = {},
                a = o.default.getFingerprint();
            null != a && "" !== a && (s["X-Fingerprint"] = a), r && (s.authorization = "");
            let p = await u.default.post({
                url: c.Endpoints.VERIFY_PHONE,
                headers: s,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.USER_VERIFY_PHONE
                }
            });
            return n && l.default.dispatch({
                type: "MODAL_POP",
                key: d.PHONE_VERIFICATION_MODAL_KEY
            }), p.body
        }
    }
}