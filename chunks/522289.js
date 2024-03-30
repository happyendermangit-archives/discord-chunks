function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("392711"),
        o = n.n(a),
        l = n("481060"),
        u = n("346656"),
        d = n("849056");

    function _(e) {
        let {
            className: t,
            maxGuilds: n,
            guilds: r,
            onFocus: a,
            onClick: _,
            size: c = u.default.Sizes.SMALLER,
            hideOverflowCount: E = !1,
            disableGuildNameTooltip: I = !1
        } = e;
        return r.length <= 0 ? null : (0, i.jsx)("div", {
            className: s()(t, d.avatars),
            children: function() {
                let e = o()(r).take(n).map(e => {
                        let t = e.name;
                        return I ? (0, i.jsx)("div", {
                            className: d.avatar,
                            children: (0, i.jsx)(u.default, {
                                guild: e,
                                onClick: _,
                                size: c,
                                showTooltip: !1
                            })
                        }) : (0, i.jsx)(l.TooltipContainer, {
                            text: t,
                            className: d.avatar,
                            children: (0, i.jsx)(u.default, {
                                guild: e,
                                onClick: _,
                                size: c
                            })
                        }, e.id)
                    }).value(),
                    t = r.length - n;
                return t > 0 && !E && (e[e.length - 1] = (0, i.jsxs)(l.Button, {
                    className: s()(d.avatar, d.overflow),
                    onFocus: a,
                    onClick: e => null == _ ? void 0 : _(e),
                    look: l.Button.Looks.BLANK,
                    size: l.Button.Sizes.NONE,
                    children: ["+", t + 1]
                })), e
            }()
        })
    }
}