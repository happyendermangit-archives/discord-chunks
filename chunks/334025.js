function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("32637"),
        o = n("935741"),
        i = n("837133");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var c = new Set,
        f = new Set,
        d = !1,
        _ = null;

    function E(e) {
        return e.isMessageRequest && !e.isSpam
    }

    function p(e) {
        var t = !1;
        return E(e) && !c.has(e.id) && (c.add(e.id), t = !0), !E(e) && c.has(e.id) && (c.delete(e.id), t = !0), !E(e) && f.has(e.id) && (f.delete(e.id), t = !0), t
    }

    function m(e) {
        var t;
        null != e && (_ = null !== (t = (0, r.getCountryCodeByAlpha2)(e)) && void 0 !== t ? t : (0, r.getDefaultCountryCode)())
    }

    function y(e) {
        "CONNECTION_OPEN" === e.type && m(e.countryCode), c.clear(), f.clear(), Object.values(o.default.getMutablePrivateChannels()).forEach(function(e) {
            p(e)
        }), d = !0
    }

    function I(e) {
        var t = e.channelId;
        f.add(t)
    }

    function h(e) {
        return p(e.channel)
    }

    function O(e) {
        var t = e.channels,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                p(u)
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
    }

    function T(e) {
        var t = e.channel;
        return !!c.has(t.id) && (c.delete(t.id), !0)
    }

    function S(e) {
        e.messageRequestChannelIds.forEach(function(e) {
            return c.add(e)
        })
    }

    function v(e) {
        m(e.countryCode)
    }
    var g = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(p, e);
        var t, n, r, i, u, E = (t = p, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = s(t);
            if (n) {
                var a = s(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function p() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, p), e = E.call(this, {
                CONNECTION_OPEN: y,
                CONNECTION_OPEN_SUPPLEMENTAL: y,
                CACHE_LOADED_LAZY: function() {
                    return e.loadCache()
                },
                OVERLAY_INITIALIZE: S,
                CHANNEL_CREATE: h,
                CHANNEL_UPDATES: O,
                CHANNEL_DELETE: T,
                SET_LOCATION_METADATA: v,
                MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: I
            })
        }
        return r = p, i = [{
            key: "initialize",
            value: function() {
                this.waitFor(o.default)
            }
        }, {
            key: "loadCache",
            value: function() {
                var e = this.readSnapshot(p.LATEST_SNAPSHOT_VERSION);
                null != e && (c = new Set(e))
            }
        }, {
            key: "takeSnapshot",
            value: function() {
                return {
                    version: p.LATEST_SNAPSHOT_VERSION,
                    data: Array.from(c)
                }
            }
        }, {
            key: "getMessageRequestChannelIds",
            value: function() {
                return c
            }
        }, {
            key: "getMessageRequestsCount",
            value: function() {
                return c.size
            }
        }, {
            key: "isMessageRequest",
            value: function(e) {
                return c.has(e)
            }
        }, {
            key: "isAcceptedOptimistic",
            value: function(e) {
                return f.has(e)
            }
        }, {
            key: "getUserCountryCode",
            value: function() {
                return _
            }
        }, {
            key: "isReady",
            value: function() {
                return d
            }
        }], a(r.prototype, i), u && a(r, u), p
    }(i.default);
    u(g, "displayName", "MessageRequestStore"), u(g, "LATEST_SNAPSHOT_VERSION", 1), t.default = new g
}