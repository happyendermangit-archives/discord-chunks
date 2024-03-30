function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeShapes: function() {
            return l
        },
        CircleBadge: function() {
            return T
        },
        IconBadge: function() {
            return I
        },
        NumberBadge: function() {
            return _
        },
        PremiumBadge: function() {
            return E
        },
        TextBadge: function() {
            return c
        },
        getBadgeCountString: function() {
            return d
        },
        getBadgeWidthForValue: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r);
    n("481060");
    var a = n("377171");
    n("689938");
    var o = n("248682");
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
    let _ = e => {
            let {
                count: t,
                color: n = a.default.STATUS_DANGER,
                disableColor: r = !1,
                shape: _ = l.ROUND,
                className: c,
                style: E,
                ...I
            } = e;
            return (0, i.jsx)("div", {
                className: s()(c, o.numberBadge, _),
                style: {
                    backgroundColor: r ? void 0 : n,
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
                    ...E
                },
                ...I,
                children: d(t)
            })
        },
        c = e => {
            let {
                text: t,
                className: n,
                color: r = a.default.STATUS_DANGER,
                shape: u = l.ROUND,
                disableColor: d = !1,
                style: _,
                ...c
            } = e;
            return (0, i.jsx)("div", {
                className: s()(n, o.textBadge, u),
                style: {
                    backgroundColor: d ? void 0 : r,
                    ..._
                },
                ...c,
                children: t
            })
        },
        E = e => {
            let {
                text: t,
                className: n,
                ...r
            } = e;
            return (0, i.jsx)(c, {
                className: s()(o.premiumBadge, n),
                text: t,
                ...r
            })
        },
        I = e => {
            let {
                icon: t,
                className: n,
                color: r = a.default.STATUS_DANGER,
                shape: u = l.ROUND,
                disableColor: d = !1,
                style: _
            } = e;
            return (0, i.jsx)("div", {
                className: s()(n, o.iconBadge, u),
                style: {
                    backgroundColor: d ? void 0 : r,
                    ..._
                },
                children: (0, i.jsx)(t, {
                    className: o.icon
                })
            })
        },
        T = e => {
            let {
                className: t,
                color: n = a.default.INTERACTIVE_ACTIVE,
                shape: r = l.ROUND,
                disableColor: u = !1,
                style: d,
                ..._
            } = e;
            return (0, i.jsx)("div", {
                className: s()(t, o.circleBadge, r),
                style: {
                    backgroundColor: u ? void 0 : n,
                    ...d
                },
                ..._
            })
        }
}