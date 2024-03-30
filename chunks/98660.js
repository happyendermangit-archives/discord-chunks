function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ack: function() {
            return d
        },
        ackChannel: function() {
            return _
        },
        ackGuildFeature: function() {
            return I
        },
        ackUserFeature: function() {
            return h
        },
        bulkAck: function() {
            return E
        },
        disableAutomaticAck: function() {
            return y
        },
        enableAutomaticAck: function() {
            return m
        },
        localAck: function() {
            return p
        }
    });
    var r = n("629815"),
        o = n("914535"),
        i = n("569492"),
        a = n("935741"),
        u = n("25079"),
        s = n("208454"),
        l = n("523018"),
        c = n("281767");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0;
        r.default.dispatch({
            type: "CHANNEL_ACK",
            channelId: e,
            messageId: o,
            immediate: t,
            force: n,
            context: c.CURRENT_APP_CONTEXT,
            location: i
        })
    }

    function _(e) {
        e.isCategory() ? ! function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = a.default.getChannel(e);
            if (null != r && null != r.guild_id) {
                var s = u.default.getCategories(r.guild_id);
                if (null != s[e]) {
                    var l = s[e].filter(function(e) {
                        var t = e.channel;
                        return (0, i.isGuildReadableType)(t.type)
                    }).map(function(e) {
                        return e.channel.id
                    });
                    var c = function(e) {
                        if (Array.isArray(e)) return f(e)
                    }(m = l) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(m) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return f(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                        }
                    }(m) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }();
                    l.forEach(function(e) {
                        var t = o.default.getActiveJoinedThreadsForParent(r.guild_id, e);
                        for (var n in t) c.push(n)
                    });
                    var _ = !0,
                        E = !1,
                        p = void 0;
                    try {
                        for (var m, y, I = c[Symbol.iterator](); !(_ = (y = I.next()).done); _ = !0) {
                            var h = y.value;
                            d(h, t, n)
                        }
                    } catch (e) {
                        E = !0, p = e
                    } finally {
                        try {
                            !_ && null != I.return && I.return()
                        } finally {
                            if (E) throw p
                        }
                    }
                }
            }
        }(e.id, !0, !0) : e.isForumLikeChannel() ? d(e.id, !0, !0, l.default.fromTimestamp(Date.now())) : d(e.id, !0, !0)
    }

    function E(e, t) {
        r.default.dispatch({
            type: "BULK_ACK",
            channels: e,
            context: c.CURRENT_APP_CONTEXT,
            onFinished: t
        })
    }

    function p(e) {
        r.default.dispatch({
            type: "CHANNEL_LOCAL_ACK",
            channelId: e
        })
    }

    function m(e, t) {
        r.default.dispatch({
            type: "ENABLE_AUTOMATIC_ACK",
            channelId: e,
            windowId: t
        })
    }

    function y(e, t) {
        r.default.dispatch({
            type: "DISABLE_AUTOMATIC_ACK",
            channelId: e,
            windowId: t
        })
    }

    function I(e, t, n) {
        r.default.dispatch({
            type: "GUILD_FEATURE_ACK",
            id: e,
            ackType: t,
            ackedId: n,
            local: !1
        })
    }

    function h(e, t) {
        var n;
        null != (null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && r.default.dispatch({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e,
            ackedId: t,
            local: !1
        })
    }
}