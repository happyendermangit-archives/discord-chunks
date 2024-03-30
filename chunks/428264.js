function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("784184"),
        l = n("372844"),
        c = n("849056");

    function f(e) {
        var t, n, o = e.className,
            a = e.maxGuilds,
            f = e.guilds,
            d = e.onFocus,
            _ = e.onClick,
            E = e.size,
            p = void 0 === E ? l.default.Sizes.SMALLER : E,
            m = e.hideOverflowCount,
            y = void 0 !== m && m,
            I = e.disableGuildNameTooltip,
            h = void 0 !== I && I;
        if (f.length <= 0) return null;
        return r.createElement("div", {
            className: i()(o, c.avatars)
        }, (t = u()(f).take(a).map(function(e) {
            var t = e.name;
            return h ? r.createElement("div", {
                className: c.avatar
            }, r.createElement(l.default, {
                guild: e,
                onClick: _,
                size: p,
                showTooltip: !1
            })) : r.createElement(s.TooltipContainer, {
                key: e.id,
                text: t,
                className: c.avatar
            }, r.createElement(l.default, {
                guild: e,
                onClick: _,
                size: p
            }))
        }).value(), (n = f.length - a) > 0 && !y && (t[t.length - 1] = r.createElement(s.Button, {
            className: i()(c.avatar, c.overflow),
            onFocus: d,
            onClick: function(e) {
                return null == _ ? void 0 : _(e)
            },
            look: s.Button.Looks.BLANK,
            size: s.Button.Sizes.NONE
        }, "+", n + 1)), t))
    }
}