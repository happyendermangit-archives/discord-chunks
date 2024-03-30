function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        },
        getForumPostSeenManagerId: function() {
            return f
        },
        markForumPostItemAsSeen: function() {
            return d
        },
        markForumPostItemAsUnseen: function() {
            return _
        }
    });
    var r = n("242364"),
        o = n("499525"),
        i = n("719378"),
        a = n("805393");

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function f(e) {
        return "".concat(o.AnalyticsFeedTypes.FORUM_CHANNEL, "_").concat(e)
    }

    function d(e, t, n) {
        (0, r.markAnalyticsFeedItemSeen)(f(e), t, n)
    }

    function _(e, t, n) {
        (0, r.markAnalyticsFeedItemUnseen)(f(e), t, n)
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
            }), t && c(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var a = l(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : u(e)
        });

        function o(e) {
            var t, n = e.guildId,
                l = e.channelId,
                c = e.windowId,
                d = e.isPaused;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), s(u(t = r.call(this, {
                windowId: c,
                isPaused: d,
                id: f(l)
            })), "guildId", void 0), s(u(t), "channelId", void 0), s(u(t), "sessionId", void 0), s(u(t), "createFlushSeenItemsFunction", function(e) {
                var n = t.trackedFeedItems,
                    r = t.channelId,
                    o = {
                        guildId: t.guildId,
                        channelId: r,
                        sessionId: t.sessionId,
                        trackedFeedItems: n,
                        isForcedFlush: null != e
                    };
                return function() {
                    return function(e) {
                        var t = e.guildId,
                            n = e.channelId,
                            r = e.sessionId,
                            o = e.trackedFeedItems,
                            a = e.isForcedFlush,
                            u = [],
                            s = [],
                            l = !0,
                            c = !1,
                            f = void 0;
                        try {
                            for (var d, _ = Object.keys(o)[Symbol.iterator](); !(l = (d = _.next()).done); l = !0) {
                                var E = d.value,
                                    p = o[E].computeSeenTimeDestructive(a);
                                p > 0 && (u.push(E), s.push(p))
                            }
                        } catch (e) {
                            c = !0, f = e
                        } finally {
                            try {
                                !l && null != _.return && _.return()
                            } finally {
                                if (c) throw f
                            }
                        }
                        0 !== u.length && (0, i.trackForumChannelSeenBatch)({
                            guildId: t,
                            channelId: n,
                            sessionId: r,
                            postIds: u,
                            additionalTimes: s
                        })
                    }(o)
                }
            }), t.guildId = n, t.channelId = l, t.sessionId = (0, a.getForumChannelSessionId)(l), t
        }
        return o
    }(o.AnalyticsFeedItemSeenManager)
}