function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NO_MEMBER_VERIFICATION_FORM: function() {
            return d
        },
        default: function() {
            return f
        }
    });
    var s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        a = n("913144"),
        o = n("567054");
    let d = {
            version: "",
            description: "",
            formFields: []
        },
        u = {};
    class l extends r.default.Store {
        get(e) {
            if (null != e) return u[e]
        }
        getRulesPrompt(e) {
            var t;
            return i.find(null === (t = u[e]) || void 0 === t ? void 0 : t.formFields, o.isTermsFormField)
        }
    }
    l.displayName = "MemberVerificationFormStore";
    var f = new l(a.default, {
        INVITE_ACCEPT_SUCCESS: function(e) {
            let {
                invite: t
            } = e, {
                member_verification_form: n
            } = t, {
                guild: s
            } = t;
            if (null != s && null != n) {
                var i;
                return u[s.id] = {
                    version: n.version,
                    description: null !== (i = n.description) && void 0 !== i ? i : "",
                    formFields: n.form_fields,
                    guild: s
                }, !0
            }
            return !1
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
            let {
                form: t,
                guildId: n
            } = e;
            u[n] = null != t ? t : d
        },
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
            var t;
            let {
                guildId: n
            } = e;
            u[n] = null !== (t = u[n]) && void 0 !== t ? t : d
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete u[null == t ? void 0 : t.id]
        }
    })
}