function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("941055"),
        u = n("261535"),
        s = n("53867"),
        l = n("204394");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = {},
        p = {},
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
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
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
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
                key: "isEditing",
                value: function(e, t) {
                    var n;
                    return (null === (n = E[e]) || void 0 === n ? void 0 : n.messageId) === t
                }
            }, {
                key: "isEditingAny",
                value: function(e) {
                    return null != E[e]
                }
            }, {
                key: "getEditingTextValue",
                value: function(e) {
                    var t;
                    return null === (t = E[e]) || void 0 === t ? void 0 : t.textValue
                }
            }, {
                key: "getEditingRichValue",
                value: function(e) {
                    var t;
                    return null === (t = E[e]) || void 0 === t ? void 0 : t.richValue
                }
            }, {
                key: "getEditingMessageId",
                value: function(e) {
                    var t;
                    return null === (t = E[e]) || void 0 === t ? void 0 : t.messageId
                }
            }, {
                key: "getEditingMessage",
                value: function(e) {
                    var t = E[e];
                    return null != t && null != t.messageId ? l.default.getMessage(e, t.messageId) : null
                }
            }, {
                key: "getEditActionSource",
                value: function(e) {
                    return p[e]
                }
            }], c(r.prototype, o), i && c(r, i), u
        }(o.default.Store);
    f(m, "displayName", "EditMessageStore"), t.default = new m(i.default, {
        MESSAGE_START_EDIT: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = e.content,
                o = e.source,
                i = s.UseLegacyChatInput.getSetting(),
                l = u.default.unparse(r, t);
            E[t] = {
                channelId: t,
                messageId: n,
                textValue: l,
                richValue: (0, a.toRichValue)(i ? l : r)
            }, p[t] = o
        },
        MESSAGE_UPDATE_EDIT: function(e) {
            var t, n, r = e.channelId,
                o = e.textValue,
                i = e.richValue,
                a = E[r];
            if (null == a) return !1;
            E[r] = (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        f(e, t, n[t])
                    })
                }
                return e
            }({}, a), n = (n = {
                textValue: o,
                richValue: i
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t)
        },
        MESSAGE_END_EDIT: function(e) {
            var t = e.channelId;
            if (null == t || null == E[t]) return !1;
            delete E[t], delete p[t]
        }
    })
}