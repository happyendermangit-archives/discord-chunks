function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("273829"),
        c = n("688221"),
        f = n("411372");

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
    var p = {};

    function m(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function y(e) {
        return !!(0, c.isEligibleForExplicitMediaRedaction)() && null != e.messages && (p = e.messages.reduce(function(e, t) {
            return t.forEach(function(t) {
                e[m(t)] = (0, l.createMessageRecord)(t)
            }), e
        }, {}), !0)
    }

    function I() {
        p = {}
    }
    var h = function(e) {
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
            key: "getMessage",
            value: function(e, t) {
                return p[m({
                    id: e,
                    channel_id: t
                })]
            }
        }], d(r.prototype, o), i && d(r, i), u
    }(u.default.Store);
    i = "SearchMessageStore", (o = "displayName") in(r = h) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new h(s.default, {
        SEARCH_FINISH: y,
        MOD_VIEW_SEARCH_FINISH: y,
        MESSAGE_UPDATE: function(e) {
            var t = e.message;
            if (!(0, c.isEligibleForExplicitMediaRedaction)() || null == t.id || null == t.channel_id) return !1;
            var n = m(t),
                r = p[n];
            return null != r && (p[n] = (0, l.updateMessageRecord)(r, {
                attachments: t.attachments,
                embeds: t.embeds
            }), !0)
        },
        LOGOUT: function() {
            (function() {
                p = {}
            })()
        },
        CONNECTION_OPEN: function() {
            (function() {
                p = {}
            })()
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            var t = m({
                    id: e.messageId,
                    channel_id: e.channelId
                }),
                n = p[t];
            null != n && (p[t] = (0, f.handleExplicitMediaScanTimeoutForMessage)(n))
        }
    })
}