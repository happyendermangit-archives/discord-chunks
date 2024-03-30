function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("37295"),
        i = n("784184"),
        a = n("965067"),
        u = n("225098"),
        s = n("372844"),
        l = n("636146"),
        c = n("523018"),
        f = n("941504"),
        d = n("590354");

    function _(e) {
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
    }

    function E(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function p(e) {
        var t = e.userId,
            n = e.headingClassName,
            p = e.textClassName,
            m = e.guild,
            y = e.guildMember,
            I = (0, o.useStateFromStores)([u.default], function() {
                return u.default.locale
            }),
            h = null != m && null != y;
        return r.createElement(r.Fragment, null, r.createElement(i.Heading, {
            variant: "eyebrow",
            className: n
        }, h ? f.default.Messages.USER_PROFILE_MEMBER_SINCE : f.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE), r.createElement("div", {
            className: d.memberSinceContainer
        }, h && r.createElement(i.Tooltip, {
            text: f.default.Messages.DISCORD_NAME
        }, function(e) {
            return r.createElement(l.default, E(_({}, e), {
                className: d.discordIcon
            }))
        }), r.createElement(i.Text, {
            className: p,
            variant: "text-sm/normal"
        }, (0, a.getCreatedAtDate)(c.default.extractTimestamp(t), I)), null != m && null != y && r.createElement(r.Fragment, null, r.createElement("div", {
            className: d.divider
        }), r.createElement(i.Tooltip, {
            text: m.name
        }, function(e) {
            return r.createElement(s.default, E(_({}, e), {
                guild: m,
                size: s.default.Sizes.SMOL
            }))
        }), r.createElement(i.Text, {
            className: p,
            variant: "text-sm/normal"
        }, (0, a.getCreatedAtDate)(y.joinedAt, I)))))
    }
}