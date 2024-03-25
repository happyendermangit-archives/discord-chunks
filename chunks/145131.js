function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("37983"),
        r = n("884691"),
        o = n("414456"),
        s = n.n(o),
        l = n("763206"),
        a = n("125047");
    let u = {
            VERTICAL: a.vertical,
            HORIZONTAL: l.horizontal,
            HORIZONTAL_REVERSE: l.horizontalReverse
        },
        c = {
            START: a.justifyStart,
            END: a.justifyEnd,
            CENTER: a.justifyCenter,
            BETWEEN: a.justifyBetween,
            AROUND: a.justifyAround
        },
        d = {
            START: a.alignStart,
            END: a.alignEnd,
            CENTER: a.alignCenter,
            STRETCH: a.alignStretch,
            BASELINE: a.alignBaseline
        },
        _ = {
            NO_WRAP: a.noWrap,
            WRAP: a.wrap,
            WRAP_REVERSE: a.wrapReverse
        },
        f = e => {
            let {
                children: t,
                className: n,
                shrink: o,
                grow: a,
                basis: u,
                style: c,
                wrap: d = !1,
                ..._
            } = e;
            n = null != n ? n : l.flexChild;
            let f = {
                className: n,
                style: {
                    flexGrow: a,
                    flexShrink: o,
                    flexBasis: u,
                    ...c
                },
                ..._
            };
            if (!d && "string" != typeof t && 1 === r.Children.count(t)) {
                let e = r.Children.only(t);
                return f.style = {
                    ...f.style,
                    ...e.props.style
                }, f.className = s(e.props.className, n), r.cloneElement(e, f)
            }
            return (0, i.jsx)("div", {
                ...f,
                children: t
            })
        };
    f.defaultProps = {
        shrink: 1,
        grow: 1,
        basis: "auto",
        wrap: !1
    };
    let S = e => {
        let {
            children: t,
            className: n,
            direction: r = u.HORIZONTAL,
            justify: o = c.START,
            align: a = d.STRETCH,
            wrap: f = _.NO_WRAP,
            shrink: S,
            grow: E,
            basis: g,
            style: m,
            ...h
        } = e;
        return (0, i.jsx)("div", {
            style: {
                flexShrink: S,
                flexGrow: E,
                flexBasis: g,
                ...m
            },
            className: s(l.flex, r, o, a, f, n),
            ...h,
            children: t
        })
    };
    S.defaultProps = {
        shrink: 1,
        grow: 1,
        basis: "auto"
    }, S.Child = f, S.Direction = u, S.Align = d, S.Justify = c, S.Wrap = _;
    var E = S
}