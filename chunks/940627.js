function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("481060"),
        d = n("823379"),
        _ = n("797717"),
        c = n("24514"),
        E = n("665786"),
        I = n("192091"),
        T = n("507957"),
        f = n("981631"),
        S = n("689938"),
        h = n("35962");
    (r = i || (i = {}))[r.PARTNERED = 0] = "PARTNERED", r[r.STAFF = 1] = "STAFF", r[r.VERIFIED = 2] = "VERIFIED", r[r.VERIFIED_AND_PARTNERED = 3] = "VERIFIED_AND_PARTNERED", r[r.VERIFIED_AND_HUB = 4] = "VERIFIED_AND_HUB", r[r.HUB = 5] = "HUB", r[r.NONE = 6] = "NONE";
    class A extends a.PureComponent {
        renderBadge(e, t, n) {
            let {
                className: i,
                badgeStrokeColor: r,
                tooltipColor: a = u.Tooltip.Colors.BRAND,
                tooltipPosition: o,
                size: c = 16,
                badgeColor: E,
                iconClassName: I,
                flowerStarClassName: T
            } = this.props, f = function(e) {
                switch (e) {
                    case 2:
                        return S.default.Messages.GUILD_VERIFIED;
                    case 0:
                        return S.default.Messages.GUILD_PARTNERED;
                    case 3:
                        return S.default.Messages.GUILD_VERIFIED_AND_PARTNERED;
                    case 4:
                        return S.default.Messages.HUB_VERIFIED_DISCORD_HUB;
                    case 5:
                        return S.default.Messages.HUB_DISCORD_HUB;
                    case 1:
                        return S.default.Messages.INTERNAL_EMPLOYEE_ONLY;
                    case 6:
                        return null;
                    default:
                        (0, d.assertNever)(e)
                }
            }(e);
            return (0, s.jsx)(u.Tooltip, {
                color: a,
                position: o,
                text: f,
                children: a => 5 === e || 4 === e ? (0, s.jsx)("div", {
                    ...a,
                    className: l()(n, i),
                    style: {
                        width: c,
                        height: c
                    },
                    children: (0, s.jsx)(t, {
                        className: l()(h.icon, I)
                    })
                }) : (0, s.jsx)(_.default, {
                    ...a,
                    className: l()(n, i),
                    flowerStarClassName: T,
                    color: E,
                    stroke: r,
                    size: c,
                    children: (0, s.jsx)(t, {
                        className: l()(h.icon, I)
                    })
                })
            })
        }
        render() {
            let {
                guild: e
            } = this.props, t = new Set(e.features);
            return t.has(f.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, I.default, h.staff) : t.has(f.GuildFeatures.VERIFIED) && t.has(f.GuildFeatures.HUB) ? this.renderBadge(4, c.default, h.verifiedHub) : t.has(f.GuildFeatures.HUB) ? this.renderBadge(5, c.default, h.hub) : t.has(f.GuildFeatures.VERIFIED) && t.has(f.GuildFeatures.PARTNERED) ? this.renderBadge(3, T.default, h.verified) : t.has(f.GuildFeatures.VERIFIED) ? this.renderBadge(2, T.default, h.verified) : t.has(f.GuildFeatures.PARTNERED) ? this.renderBadge(0, E.default, h.partnered) : null
        }
    }
    t.default = A
}