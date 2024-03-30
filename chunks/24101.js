function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NO_MEMBER_VERIFICATION_FORM: function() {
            return p
        }
    });
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("599527");

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = {
            version: "",
            description: "",
            formFields: []
        },
        m = {},
        y = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = _(t);
                if (n) {
                    var a = _(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "get",
                value: function(e) {
                    if (null != e) return m[e]
                }
            }, {
                key: "getRulesPrompt",
                value: function(e) {
                    var t;
                    return s().find(null === (t = m[e]) || void 0 === t ? void 0 : t.formFields, f.isTermsFormField)
                }
            }], d(r.prototype, o), i && d(r, i), u
        }(l.default.Store);
    i = "MemberVerificationFormStore", (o = "displayName") in(r = y) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new y(c.default, {
        INVITE_ACCEPT_SUCCESS: function(e) {
            var t, n = e.invite,
                r = n.member_verification_form,
                o = n.guild;
            return null != o && null != r && (m[o.id] = {
                version: r.version,
                description: null !== (t = r.description) && void 0 !== t ? t : "",
                formFields: r.form_fields,
                guild: o
            }, !0)
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
            var t = e.form;
            m[e.guildId] = null != t ? t : p
        },
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
            var t, n = e.guildId;
            m[n] = null !== (t = m[n]) && void 0 !== t ? t : p
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            delete m[null == t ? void 0 : t.id]
        }
    })
}