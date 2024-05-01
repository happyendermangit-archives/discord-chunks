function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Card: function() {
            return _
        },
        CardTypes: function() {
            return d
        }
    });
    var i, r = n("735250"),
        a = n("470079"),
        s = n("120356"),
        o = n.n(s),
        l = n("705984");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = {
        PRIMARY: l.cardPrimary,
        DANGER: l.cardDanger,
        WARNING: l.cardWarning,
        SUCCESS: l.cardSuccess,
        BRAND: l.cardBrand,
        CUSTOM: l.card
    };
    class _ extends(i = a.PureComponent) {
        render() {
            let e;
            let {
                children: t,
                editable: n,
                type: i,
                className: a,
                outline: s,
                ...u
            } = this.props;
            return s ? e = l.outline : i === d.PRIMARY && n && (e = l.editable), (0, r.jsx)("div", {
                className: o()(a, i, e),
                ...u,
                children: t
            })
        }
    }
    u(_, "Types", d), u(_, "defaultProps", {
        type: d.PRIMARY,
        outline: !1,
        editable: !1
    })
}