function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("585949"),
        a = n("29884"),
        u = n("545072"),
        s = n("870331"),
        l = n("521862"),
        c = n("281767"),
        f = n("941504");

    function d(e) {
        var t, n, d = e.className,
            _ = e.color,
            E = e.look,
            p = e.hangStatusChannel,
            m = (0, o.useStateFromStores)([u.default], function() {
                return u.default.getChannelId() === p.id
            });
        return r.createElement(r.Fragment, null, r.createElement(l.default, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({
            key: "join-hang",
            className: d,
            disabled: m,
            onClick: function() {
                a.default.can(c.Permissions.CONNECT, p), i.default.selectVoiceChannel(p.id), s.default.track(c.AnalyticEvents.HANG_STATUS_CTA_CLICKED, {
                    source: "UserProfilePopout",
                    guild_id: p.guild_id,
                    channel_id: p.id
                })
            }
        }, {
            color: _,
            look: E
        }), n = (n = {
            fullWidth: !0
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), f.default.Messages.PROFILE_JOIN_VOICE_CHANNEL))
    }
}