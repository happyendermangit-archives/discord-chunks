function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CardTypes: function() {
            return l
        },
        Card: function() {
            return u
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("55258");
    let l = {
        PRIMARY: o.cardPrimary,
        DANGER: o.cardDanger,
        WARNING: o.cardWarning,
        SUCCESS: o.cardSuccess,
        BRAND: o.cardBrand,
        CUSTOM: o.card
    };
    class u extends s.PureComponent {
        render() {
            let e;
            let {
                children: t,
                editable: n,
                type: s,
                className: r,
                outline: u,
                ...d
            } = this.props;
            return u ? e = o.outline : s === l.PRIMARY && n && (e = o.editable), (0, i.jsx)("div", {
                className: a(r, s, e),
                ...d,
                children: t
            })
        }
    }
    u.Types = l, u.defaultProps = {
        type: l.PRIMARY,
        outline: !1,
        editable: !1
    }
}