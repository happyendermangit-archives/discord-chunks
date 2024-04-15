function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuItem: function() {
            return T
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("1561"),
        l = n("761224"),
        u = n("898560"),
        d = n("743236"),
        _ = n("468210"),
        c = n("692437"),
        E = n("939350"),
        I = n("989608");

    function T(e) {
        let {
            color: t = "default",
            label: n,
            icon: s,
            showIconFirst: T = !1,
            imageUrl: f,
            hint: S,
            subtext: A,
            hasSubmenu: h,
            disabled: m,
            isFocused: N,
            menuItemProps: O,
            action: p,
            onClose: R,
            onFocus: C,
            className: g,
            focusedClassName: L,
            subMenuIconClassName: D,
            dontCloseOnActionIfHoldingShiftKey: v,
            dontCloseOnAction: M,
            iconProps: y,
            sparkle: P
        } = e, U = r.useContext(u.OnMenuSelectContext), b = r.useRef(null), G = r.useCallback(e => {
            if (null == p) return !1;
            !(e.shiftKey && v) && !M && R(), e.persist(), null == U || U(), requestAnimationFrame(() => p(e))
        }, [p, R, U, v, M]);
        return r.useEffect(() => {
            N && ((0, d.ensureItemVisible)(b), null == C || C())
        }, [N, C]), (0, i.jsxs)(o.Clickable, {
            innerRef: b,
            className: a()(I.item, I.labelContainer, E.MENU_ITEM_COLORS[t], g, {
                [I.disabled]: m,
                [I.focused]: N,
                [null != L ? L : ""]: N
            }),
            onClick: m ? void 0 : G,
            "aria-disabled": m,
            ...O,
            "data-menu-item": "true",
            children: [T && null != s && (0, i.jsx)("div", {
                className: I.iconContainerLeft,
                children: (0, i.jsx)(s, {
                    ...y,
                    className: a()(I.icon, null == y ? void 0 : y.className),
                    isFocused: N
                })
            }), (0, i.jsxs)("div", {
                className: I.label,
                children: [(0, l.renderSubnode)(n, e), null != A && (0, i.jsx)("div", {
                    className: I.subtext,
                    children: A
                })]
            }), null != S && (0, i.jsx)("div", {
                className: I.hintContainer,
                children: (0, l.renderSubnode)(S, e)
            }), !T && null != s && (0, i.jsx)("div", {
                className: I.iconContainer,
                children: (0, i.jsx)(s, {
                    ...y,
                    className: a()(I.icon, null == y ? void 0 : y.className),
                    isFocused: N
                })
            }), null != f && (0, i.jsx)("div", {
                className: I.imageContainer,
                children: (0, i.jsx)("img", {
                    className: I.image,
                    src: (0, l.renderSubnode)(f, e),
                    alt: ""
                })
            }), h && (0, i.jsxs)("div", {
                className: I.iconContainer,
                children: [(0, i.jsx)(c.default, {
                    className: a()(I.caret, D)
                }), P && (0, i.jsx)(_.default, {
                    className: I.sparkles
                })]
            })]
        })
    }
}