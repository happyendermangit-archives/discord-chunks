function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        BACKUP_CODE_MAX_LENGTH: function() {
            return l
        },
        BACKUP_CODE_MIN_LENGTH: function() {
            return a
        },
        SMS_CODE_LENGTH: function() {
            return i
        },
        TOTP_CODE_LENGTH: function() {
            return r
        },
        trySubmit: function() {
            return u
        }
    }), s("411104");
    var n = s("544891");
    let a = 8,
        l = 11,
        r = 6,
        i = 6;
    async function o(e) {
        let {
            ticket: t,
            mfaType: s,
            data: a
        } = e, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        try {
            return (await n.HTTP.post({
                url: "/mfa/finish",
                body: {
                    ticket: t,
                    mfa_type: s,
                    data: a
                },
                retries: l
            })).body
        } catch (e) {
            var r;
            if (null === (r = e.body) || void 0 === r ? void 0 : r.message) throw Error(e.body.message);
            throw e
        }
    }
    async function u(e, t) {
        let {
            token: s
        } = await o(e);
        return new Promise((e, n) => {
            t({
                "X-Discord-MFA-Authorization": s
            }, t => {
                var s, a;
                return (null === (s = t.body) || void 0 === s ? void 0 : s.code) === 60008 || (null === (a = t.body) || void 0 === a ? void 0 : a.code) === 60003 ? (n(Error(t.body.message)), !0) : (e(), !1)
            })
        })
    }
}