function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("14149"),
        l = n("605094");
    let u = {
            VERTICAL: l.vertical,
            HORIZONTAL: o.horizontal,
            HORIZONTAL_REVERSE: o.horizontalReverse
        },
        d = {
            START: l.justifyStart,
            END: l.justifyEnd,
            CENTER: l.justifyCenter,
            BETWEEN: l.justifyBetween,
            AROUND: l.justifyAround
        },
        _ = {
            START: l.alignStart,
            END: l.alignEnd,
            CENTER: l.alignCenter,
            STRETCH: l.alignStretch,
            BASELINE: l.alignBaseline
        },
        c = {
            NO_WRAP: l.noWrap,
            WRAP: l.wrap,
            WRAP_REVERSE: l.wrapReverse
        },
        E = e => {
            let {
                children: t,
                className: n,
                shrink: s,
                grow: l,
                basis: u,
                style: d,
                wrap: _ = !1,
                ...c
            } = e, E = {
                className: n = null != n ? n : o.flexChild,
                style: {
                    flexGrow: l,
                    flexShrink: s,
                    flexBasis: u,
                    ...d
                },
                ...c
            };
            if (!_ && "string" != typeof t && 1 === r.Children.count(t)) {
                let e = r.Children.only(t);
                return E.style = {
                    ...E.style,
                    ...e.props.style
                }, E.className = a()(e.props.className, n), r.cloneElement(e, E)
            }
            return (0, i.jsx)("div", {
                ...E,
                children: t
            })
        };
    E.defaultProps = {
        shrink: 1,
        grow: 1,
        basis: "auto",
        wrap: !1
    };
    let I = e => {
        let {
            children: t,
            className: n,
            direction: r = u.HORIZONTAL,
            justify: s = d.START,
            align: l = _.STRETCH,
            wrap: E = c.NO_WRAP,
            shrink: I,
            grow: T,
            basis: f,
            style: S,
            ...h
        } = e;
        return (0, i.jsx)("div", {
            style: {
                flexShrink: I,
                flexGrow: T,
                flexBasis: f,
                ...S
            },
            className: a()(o.flex, r, s, l, E, n),
            ...h,
            children: t
        })
    };
    I.defaultProps = {
        shrink: 1,
        grow: 1,
        basis: "auto"
    }, I.Child = E, I.Direction = u, I.Align = _, I.Justify = d, I.Wrap = c, t.default = I
}