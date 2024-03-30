function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StaffPTOBar: function() {
            return g
        },
        useShouldShowPTONotice: function() {
            return v
        }
    });
    var r, o = n("470079"),
        i = n("898511"),
        a = n("784184"),
        u = n("629815"),
        s = n("935741"),
        l = n("957808"),
        c = n("894288"),
        f = n("208454"),
        d = n("437404"),
        _ = n("941504"),
        E = n("842471");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = new Set,
        T = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
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
                var e, r, o, i = I(t);
                if (n) {
                    var a = I(this).constructor;
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
                key: "initialize",
                value: function(e) {
                    null != e && (O = new Set(e))
                }
            }, {
                key: "hasId",
                value: function(e) {
                    return O.has(e)
                }
            }, {
                key: "getState",
                value: function() {
                    var e;
                    return function(e) {
                        if (Array.isArray(e)) return p(e)
                    }(e = O) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return p(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                        }
                    }(e) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }
            }], m(r.prototype, o), i && m(r, i), u
        }(i.default.PersistedStore);
    y(T, "displayName", "PTOStore"), y(T, "persistKey", "PTOStore");
    var S = new T(u.default, {}),
        v = function(e) {
            return (0, i.useStateFromStores)([l.default, f.default, S], function() {
                var t = f.default.getCurrentUser();
                if (null == t || !t.isStaff() || !e.isDM()) return !1;
                var n = f.default.getUser(e.getRecipientId());
                if (!(null == n ? void 0 : n.isStaff())) return !1;
                var r = l.default.getNicknames(n.id).some(function(e) {
                    return e.endsWith("[PTO]") || e.endsWith("[OOO]")
                });
                return r ? !S.hasId(n.id) && r : (O.delete(n.id) && S.emitChange(), !1)
            })
        },
        g = function() {
            return o.createElement("div", {
                className: E.bar
            }, _.default.Messages.STAFF_PTO_NOTICE, o.createElement(a.Clickable, {
                className: E.closeButton,
                onClick: function() {
                    var e = c.default.getChannelId();
                    if (null != e) {
                        var t = s.default.getChannel(e);
                        null != t && t.isPrivate() && !O.has(t.getRecipientId()) && (O.add(t.getRecipientId()), S.emitChange())
                    }
                }
            }, o.createElement(d.default, {
                className: E.closeIcon
            })))
        }
}