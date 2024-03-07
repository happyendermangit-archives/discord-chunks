function(r, a, e) {
    "use strict";
    e.r(a), e.d(a, {
        BadgeShapes: function() {
            return n
        },
        getBadgeWidthForValue: function() {
            return o
        },
        getBadgeCountString: function() {
            return N
        },
        NumberBadge: function() {
            return O
        },
        TextBadge: function() {
            return A
        },
        PremiumBadge: function() {
            return d
        },
        IconBadge: function() {
            return i
        },
        CircleBadge: function() {
            return D
        }
    });
    var _ = e("37983");
    e("884691");
    var E = e("414456"),
        t = e.n(E);
    e("77078");
    var R = e("20606");
    e("782340");
    var T = e("227940");
    let n = {
        ROUND: T.baseShapeRound,
        ROUND_LEFT: T.baseShapeRoundLeft,
        ROUND_RIGHT: T.baseShapeRoundRight,
        SQUARE: ""
    };

    function o(r) {
        return r < 10 ? 16 : r < 100 ? 22 : 30
    }

    function N(r) {
        return r < 1e3 ? "".concat(r) : "".concat(Math.min(Math.floor(r / 1e3), 9), "k+")
    }
    let O = r => {
            let {
                count: a,
                color: e = R.default.STATUS_DANGER,
                disableColor: E = !1,
                shape: O = n.ROUND,
                className: A,
                style: d,
                ...i
            } = r;
            return (0, _.jsx)("div", {
                className: t(A, T.numberBadge, O),
                style: {
                    backgroundColor: E ? void 0 : e,
                    width: o(a),
                    paddingRight: function(r) {
                        switch (r) {
                            case 1:
                            case 4:
                            case 6:
                                return 1;
                            default:
                                return
                        }
                    }(a),
                    ...d
                },
                ...i,
                children: N(a)
            })
        },
        A = r => {
            let {
                text: a,
                className: e,
                color: E = R.default.STATUS_DANGER,
                shape: o = n.ROUND,
                disableColor: N = !1,
                style: O,
                ...A
            } = r;
            return (0, _.jsx)("div", {
                className: t(e, T.textBadge, o),
                style: {
                    backgroundColor: N ? void 0 : E,
                    ...O
                },
                ...A,
                children: a
            })
        },
        d = r => {
            let {
                text: a,
                className: e,
                ...E
            } = r;
            return (0, _.jsx)(A, {
                className: t(T.premiumBadge, e),
                text: a,
                ...E
            })
        },
        i = r => {
            let {
                icon: a,
                className: e,
                color: E = R.default.STATUS_DANGER,
                shape: o = n.ROUND,
                disableColor: N = !1,
                style: O
            } = r;
            return (0, _.jsx)("div", {
                className: t(e, T.iconBadge, o),
                style: {
                    backgroundColor: N ? void 0 : E,
                    ...O
                },
                children: (0, _.jsx)(a, {
                    className: T.icon
                })
            })
        },
        D = r => {
            let {
                className: a,
                color: e = R.default.INTERACTIVE_ACTIVE,
                shape: E = n.ROUND,
                disableColor: o = !1,
                style: N,
                ...O
            } = r;
            return (0, _.jsx)("div", {
                className: t(a, T.circleBadge, E),
                style: {
                    backgroundColor: o ? void 0 : e,
                    ...N
                },
                ...O
            })
        }
}