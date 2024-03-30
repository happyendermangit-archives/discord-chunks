function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("252546"),
        l = n("629815");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
    var _ = {},
        E = {},
        p = {
            scrollTop: 0
        };

    function m(e) {
        return {
            guildId: e,
            scrollTop: null,
            scrollTo: null
        }
    }

    function y(e) {
        if (null != _[e]) {
            var t = _[e];
            return t.scrollTop === t.scrollHeight - t.offsetHeight
        }
        return !0
    }
    var I = function(e) {
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
            key: "percentageScrolled",
            value: function(e) {
                if (null != _[e]) {
                    var t = _[e];
                    return t.scrollTop / t.scrollHeight
                }
                return 1
            }
        }, {
            key: "getChannelDimensions",
            value: function(e) {
                return _[e]
            }
        }, {
            key: "getGuildDimensions",
            value: function(e) {
                var t;
                return null !== (t = E[e]) && void 0 !== t ? t : m(e)
            }
        }, {
            key: "getGuildListDimensions",
            value: function() {
                return p
            }
        }, {
            key: "isAtBottom",
            value: function(e) {
                return y(e)
            }
        }], c(r.prototype, o), i && c(r, i), u
    }(u.default.Store);
    i = "DimensionStore", (o = "displayName") in(r = I) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new I(l.default, {
        UPDATE_CHANNEL_DIMENSIONS: function(e) {
            var t = e.channelId,
                n = e.scrollTop,
                r = e.scrollHeight,
                o = e.offsetHeight,
                i = _[t];
            if (null == n || null == r || null == o) {
                if (null == i) return !1;
                delete _[t]
            } else {
                var a = {
                    channelId: t,
                    scrollTop: n,
                    scrollHeight: r,
                    offsetHeight: o
                };
                if (null != i && (0, s.default)(i, a)) return !1;
                _[t] = a
            }
        },
        UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
            var t = e.guildId,
                n = e.scrollTop,
                r = e.scrollTo;
            null == E[t] && (E[t] = m(t)), void 0 !== n && (E[t].scrollTop = n);
            var o = !1;
            return void 0 !== r && (o = E[t].scrollTo !== r, E[t].scrollTo = r), null != r || o
        },
        UPDATE_GUILD_LIST_DIMENSIONS: function(e) {
            var t = e.scrollTop;
            p.scrollTop = t
        },
        CALL_CREATE: function(e) {
            var t = e.channelId;
            y(t) && delete _[t]
        }
    })
}