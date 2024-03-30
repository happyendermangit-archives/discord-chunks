function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("935741"),
        o = n("837133");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var l = new Set,
        c = new Set,
        f = !1;

    function d(e) {
        return e.isSpam
    }

    function _(e) {
        var t = !1;
        if (e.isSpam && !l.has(e.id)) l.add(e.id), t = !0;
        if (!e.isSpam && l.has(e.id)) l.delete(e.id), t = !0;
        if (!e.isSpam && c.has(e.id)) c.delete(e.id), t = !0;
        return t
    }

    function E() {
        l.clear(), c.clear(), Object.values(r.default.getMutablePrivateChannels()).forEach(function(e) {
            _(e)
        }), f = !0
    }

    function p(e) {
        var t = e.channelId;
        c.add(t)
    }

    function m(e) {
        return _(e.channel)
    }

    function y(e) {
        var t = e.channels,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                _(u)
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

    function I(e) {
        var t = e.channel,
            n = !1;
        return l.has(t.id) && (l.delete(t.id), n = !0), n
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
            }), t && s(e, t)
        }(h, e);
        var t, n, o, a, d, _ = (t = h, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = u(t);
            if (n) {
                var a = u(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function h() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h), e = _.call(this, {
                CONNECTION_OPEN: E,
                CONNECTION_OPEN_SUPPLEMENTAL: E,
                CACHE_LOADED_LAZY: function() {
                    return e.loadCache()
                },
                CHANNEL_CREATE: m,
                CHANNEL_UPDATES: y,
                CHANNEL_DELETE: I,
                MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: p
            })
        }
        return o = h, a = [{
            key: "initialize",
            value: function() {
                this.waitFor(r.default)
            }
        }, {
            key: "loadCache",
            value: function() {
                var e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
                null != e && (l = new Set(e))
            }
        }, {
            key: "takeSnapshot",
            value: function() {
                return {
                    version: h.LATEST_SNAPSHOT_VERSION,
                    data: Array.from(l)
                }
            }
        }, {
            key: "getSpamChannelIds",
            value: function() {
                return l
            }
        }, {
            key: "getSpamChannelsCount",
            value: function() {
                return l.size
            }
        }, {
            key: "isSpam",
            value: function(e) {
                return l.has(e)
            }
        }, {
            key: "isAcceptedOptimistic",
            value: function(e) {
                return c.has(e)
            }
        }, {
            key: "isReady",
            value: function() {
                return f
            }
        }], i(o.prototype, a), d && i(o, d), h
    }(o.default);
    a(h, "displayName", "SpamMessageRequestStore"), a(h, "LATEST_SNAPSHOT_VERSION", 1), t.default = new h
}