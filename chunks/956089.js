function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeShapes: function() {
            return l
        },
        getBadgeWidthForValue: function() {
            return u
        },
        getBadgeCountString: function() {
            return d
        },
        NumberBadge: function() {
            return c
        },
        TextBadge: function() {
            return _
        },
        PremiumBadge: function() {
            return f
        },
        IconBadge: function() {
            return E
        },
        CircleBadge: function() {
            return h
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s);
    n("77078");
    var a = n("20606");
    n("782340");
    var o = n("227940");
    let l = {
        ROUND: o.baseShapeRound,
        ROUND_LEFT: o.baseShapeRoundLeft,
        ROUND_RIGHT: o.baseShapeRoundRight,
        SQUARE: ""
    };

    function u(e) {
        return e < 10 ? 16 : e < 100 ? 22 : 30
    }

    function d(e) {
        return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
    }
    let c = e => {
            let {
                count: t,
                color: n = a.default.STATUS_DANGER,
                disableColor: s = !1,
                shape: c = l.ROUND,
                className: _,
                style: f,
                ...E
            } = e;
            return (0, i.jsx)("div", {
                className: r(_, o.numberBadge, c),
                style: {
                    backgroundColor: s ? void 0 : n,
                    width: u(t),
                    paddingRight: function(e) {
                        switch (e) {
                            case 1:
                            case 4:
                            case 6:
                                return 1;
                            default:
                                return
                        }
                    }(t),
                    ...f
                },
                ...E,
                children: d(t)
            })
        },
        _ = e => {
            let {
                text: t,
                className: n,
                color: s = a.default.STATUS_DANGER,
                shape: u = l.ROUND,
                disableColor: d = !1,
                style: c,
                ..._
            } = e;
            return (0, i.jsx)("div", {
                className: r(n, o.textBadge, u),
                style: {
                    backgroundColor: d ? void 0 : s,
                    ...c
                },
                ..._,
                children: t
            })
        },
        f = e => {
            let {
                text: t,
                className: n,
                ...s
            } = e;
            return (0, i.jsx)(_, {
                className: r(o.premiumBadge, n),
                text: t,
                ...s
            })
        },
        E = e => {
            let {
                icon: t,
                className: n,
                color: s = a.default.STATUS_DANGER,
                shape: u = l.ROUND,
                disableColor: d = !1,
                style: c
            } = e;
            return (0, i.jsx)("div", {
                className: r(n, o.iconBadge, u),
                style: {
                    backgroundColor: d ? void 0 : s,
                    ...c
                },
                children: (0, i.jsx)(t, {
                    className: o.icon
                })
            })
        },
        h = e => {
            let {
                className: t,
                color: n = a.default.INTERACTIVE_ACTIVE,
                shape: s = l.ROUND,
                disableColor: u = !1,
                style: d,
                ...c
            } = e;
            return (0, i.jsx)("div", {
                className: r(t, o.circleBadge, s),
                style: {
                    backgroundColor: u ? void 0 : n,
                    ...d
                },
                ...c
            })
        }
}