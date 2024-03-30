function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("98660"),
        a = n("120046"),
        u = n("914535"),
        s = n("29604"),
        l = n("879547"),
        c = n("870331"),
        f = n("523018"),
        d = n("281767"),
        _ = n("24729");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e) {
        return function(e) {
            if (Array.isArray(e)) return E(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e, t, n) {
        var r = o().flatMap(e, function(e) {
            var t = s.default.getSelectableChannelIds(e),
                n = s.default.getVocalChannelIds(e),
                r = p(t).concat(p(n)),
                o = u.default.getActiveJoinedThreadsForGuild(e),
                i = !0,
                a = !1,
                l = void 0;
            try {
                for (var c, f = t[Symbol.iterator](); !(i = (c = f.next()).done); i = !0) {
                    var d, _ = c.value,
                        E = null !== (d = o[_]) && void 0 !== d ? d : {};
                    for (var m in E) r.push(m)
                }
            } catch (e) {
                a = !0, l = e
            } finally {
                try {
                    !i && null != f.return && f.return()
                } finally {
                    if (a) throw l
                }
            }
            return r
        }).map(function(e) {
            return {
                channelId: e,
                readStateType: _.ReadStateTypes.CHANNEL,
                messageId: l.default.lastMessageId(e)
            }
        });
        return e.forEach(function(e) {
            r.push({
                channelId: f.default.cast(e),
                readStateType: _.ReadStateTypes.GUILD_EVENT,
                messageId: l.default.lastMessageId(e, _.ReadStateTypes.GUILD_EVENT)
            }), r.push({
                channelId: f.default.cast(e),
                readStateType: _.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                messageId: a.default.ackIdForGuild(e)
            })
        }), c.default.track(d.AnalyticEvents.MARK_AS_READ, {
            source: t,
            type: "guild"
        }), (0, i.bulkAck)(r, n)
    }
}