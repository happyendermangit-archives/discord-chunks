function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NO_MEMBER_VERIFICATION_FORM: function() {
            return l
        },
        default: function() {
            return c
        }
    });
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("567054");
    let l = {
            version: "",
            description: "",
            formFields: []
        },
        u = {};
    class d extends r.default.Store {
        get(e) {
            if (null != e) return u[e]
        }
        getRulesPrompt(e) {
            var t;
            return s.find(null === (t = u[e]) || void 0 === t ? void 0 : t.formFields, o.isTermsFormField)
        }
    }
    d.displayName = "MemberVerificationFormStore";
    var c = new d(a.default, {
        INVITE_ACCEPT_SUCCESS: function(e) {
            let {
                invite: t
            } = e, {
                member_verification_form: n
            } = t, {
                guild: i
            } = t;
            if (null != i && null != n) {
                var s;
                return u[i.id] = {
                    version: n.version,
                    description: null !== (s = n.description) && void 0 !== s ? s : "",
                    formFields: n.form_fields,
                    guild: i
                }, !0
            }
            return !1
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
            let {
                form: t,
                guildId: n
            } = e;
            u[n] = null != t ? t : l
        },
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
            var t;
            let {
                guildId: n
            } = e;
            u[n] = null !== (t = u[n]) && void 0 !== t ? t : l
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete u[null == t ? void 0 : t.id]
        }
    })
}