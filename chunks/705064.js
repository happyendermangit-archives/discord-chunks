function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isStageActivity: function() {
            return _
        },
        packStageChannelPartyId: function() {
            return f
        },
        shouldShowActivity: function() {
            return E
        },
        unpackStageChannelParty: function() {
            return d
        }
    });
    var r = n("217014"),
        o = n("935741"),
        i = n("306912"),
        a = n("488764"),
        u = n("886708"),
        s = n("281767");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var c = "stage:";

    function f(e, t) {
        var n = 0,
            o = r.default.getId();
        a.default.isSpeaker(o, e.id) && (n |= 1);
        var u = i.default.getGuild(e.getGuildId());
        null != u && (u.hasFeature(s.GuildFeatures.PARTNERED) && (n |= 2), u.hasFeature(s.GuildFeatures.VERIFIED) && (n |= 4));
        var l = n.toString(16);
        return "".concat(c).concat(e.guild_id, ":").concat(e.id, ":").concat(l, ":").concat(t.id)
    }

    function d(e) {
        if (null != e && null != e.party) {
            var t = e.party,
                n = t.id,
                r = t.size;
            try {
                if (null == n || !n.startsWith(c)) return;
                var o, i, a = (o = n.split(":"), i = 5, function(e) {
                        if (Array.isArray(e)) return e
                    }(o) || function(e, t) {
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
                    }(o, i) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                        }
                    }(o, i) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    u = a[1],
                    s = a[2],
                    f = a[3],
                    d = a[4],
                    _ = parseInt(f, 16);
                return {
                    guildId: u,
                    channelId: s,
                    size: r,
                    userIsSpeaker: (1 & _) != 0,
                    guildIsPartnered: (2 & _) != 0,
                    guildIsVerified: (4 & _) != 0,
                    stageInstanceId: d
                }
            } catch (e) {
                return null
            }
        }
    }

    function _(e) {
        return (null == e ? void 0 : e.application_id) === u.STAGE_APPLICATION_ID
    }

    function E(e) {
        var t = d(e);
        if (null == t) return !1;
        var n = t.channelId;
        return null != o.default.getChannel(n)
    }
}