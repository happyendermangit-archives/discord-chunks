function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DevSettingsCategory: function() {
            return o
        }
    });
    var r, o, i, a = n("898511"),
        u = n("629815");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(r = o || (o = {}))[r.MESSAGING = 0] = "MESSAGING", r[r.OVERLAYS = 1] = "OVERLAYS";
    var E = {
            visual_effect_view_overrides: {
                label: "Blur view overrides for designers to test with",
                category: 1
            },
            obscure_blur_effect_enabled: {
                label: "Force obscure blur effect on for message media and embeds",
                category: 1
            },
            explicit_media_redaction_ignore_pending_scan: {
                label: "Ignore pending scan on explicit media",
                category: 1
            },
            upload_fail_50: {
                label: "Uploads: Fail 50% of uploads with 500 status after a 1 second delay",
                category: 0
            },
            send_fail_100: {
                label: "Send: Fail with 500 status",
                category: 0
            }
        },
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
                }), t && d(e, t)
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
                var e, r, o, i = f(t);
                if (n) {
                    var a = f(this).constructor;
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
                key: "getUserAgnosticState",
                value: function() {
                    return {
                        toggleStates: p
                    }
                }
            }, {
                key: "initialize",
                value: function(e) {
                    for (var t in E) {
                        var n, r, o = null !== (r = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== r && r;
                        p[t] = o
                    }
                }
            }, {
                key: "get",
                value: function(e) {
                    var t;
                    return null !== (t = p[e]) && void 0 !== t && t
                }
            }, {
                key: "set",
                value: function(e, t) {
                    return p[e] = t, t
                }
            }, {
                key: "all",
                value: function() {
                    return p
                }
            }, {
                key: "allByCategory",
                value: function(e) {
                    return Object.entries(E).filter(function(t) {
                        var n = _(t, 2);
                        return (n[0], n[1]).category === e
                    }).map(function(e) {
                        var t = _(e, 2),
                            n = t[0],
                            r = t[1];
                        return [n, p[n], r]
                    })
                }
            }], l(r.prototype, o), i && l(r, i), u
        }(a.default.DeviceSettingsStore);
    c(m, "displayName", "DevToolsDevSettingsStore"), c(m, "persistKey", "DevToolsDevSettingsStore"), t.default = new m(u.default, {
        DEV_TOOLS_DEV_SETTING_SET: function(e) {
            p[e.toggle] = e.value
        }
    })
}