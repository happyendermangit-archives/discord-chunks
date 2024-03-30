function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("344666"),
        i = n("156251"),
        a = n("613857"),
        u = n("398244"),
        s = n("924504"),
        l = n("928204");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
    var E = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(y, e);
        var t, n, r, E, p, m = (t = y, n = function() {
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
            }(r) || "function" == typeof r) ? r : c(e)
        });

        function y() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, y), e = m.apply(this, arguments), t = c(e), n = "actions", r = {
                CHANNEL_PRELOAD: e.handleChannelPreload
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return r = y, E = [{
            key: "handleChannelPreload",
            value: function(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == t || n !== l.StaticChannelRoute.GUILD_HOME || !(0, s.canSeeGuildHome)(t)) return !1;
                (0, a.shouldFetchGuildFeed)(t, !1) && (0, i.fetchGuildFeed)({
                    guildId: t,
                    refresh: !0
                }), u.default.shouldFetch(t) && (0, o.fetchActiveChannels)(t)
            }
        }], f(r.prototype, E), p && f(r, p), y
    }(r.default);
    t.default = new E
}