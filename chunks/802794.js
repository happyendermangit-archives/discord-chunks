function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("898511"),
        l = n("242880"),
        c = n("629815"),
        f = n("822853"),
        d = n("2432"),
        _ = n("935776");

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = "MaskedLinkStore",
        I = new Set,
        h = new Set,
        O = null === (a = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === a ? void 0 : a.replace("//", "");

    function T(e) {
        var t = (0, d.getHostname)(e);
        switch (t) {
            case window.GLOBAL_ENV.CDN_HOST:
            case window.GLOBAL_ENV.INVITE_HOST:
            case window.GLOBAL_ENV.GIFT_CODE_HOST:
            case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
            case O:
            case location.hostname:
                return !0;
            default:
                return _.SPOTIFY_HOSTNAMES.includes(t) || f.default.isDiscordHostname(t) || I.has(t)
        }
    }

    function S(e) {
        var t = (0, d.getProtocol)(e);
        return h.has(t)
    }
    var v = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
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
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
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
            value: function() {
                var e, t = null !== (e = l.Storage.get(y)) && void 0 !== e ? e : {};
                if (Array.isArray(t)) I = new Set(null != t ? Array.from(t) : null), h = new Set;
                else {
                    var n = t.trustedDomains,
                        r = t.trustedProtocols;
                    I = new Set(null != n ? Array.from(n) : null), h = new Set(null != r ? Array.from(r) : null)
                }
            }
        }, {
            key: "isTrustedDomain",
            value: function(e) {
                return T(e)
            }
        }, {
            key: "isTrustedProtocol",
            value: function(e) {
                return S(e)
            }
        }], E(r.prototype, o), i && E(r, i), u
    }(s.default.Store);
    i = "MaskedLinkStore", (o = "displayName") in(r = v) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new v(c.default, {
        MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
            var t = e.url;
            if (T(t)) return !1;
            I.add((0, d.getHostname)(t)), l.Storage.set(y, {
                trustedDomains: I,
                trustedProtocols: h
            })
        },
        MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
            var t = e.url;
            if (S(t)) return !1;
            h.add((0, d.getProtocol)(t)), l.Storage.set(y, {
                trustedDomains: I,
                trustedProtocols: h
            })
        }
    })
}