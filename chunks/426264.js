function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuItem: function() {
            return h
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("227645"),
        l = n("199285"),
        u = n("107728"),
        d = n("697917"),
        c = n("886074"),
        f = n("772280"),
        _ = n("389802"),
        E = n("639826");

    function h(e) {
        let {
            color: t = "default",
            label: n,
            icon: r,
            showIconFirst: h = !1,
            imageUrl: g,
            hint: m,
            subtext: p,
            hasSubmenu: S,
            disabled: v,
            isFocused: T,
            menuItemProps: I,
            action: A,
            onClose: C,
            onFocus: y,
            className: N,
            focusedClassName: R,
            subMenuIconClassName: O,
            dontCloseOnActionIfHoldingShiftKey: D,
            dontCloseOnAction: P,
            iconProps: L,
            sparkle: M
        } = e, b = s.useContext(u.OnMenuSelectContext), U = s.useRef(null), w = s.useCallback(e => {
            if (null == A) return !1;
            !(e.shiftKey && D) && !P && C(), e.persist(), null == b || b(), requestAnimationFrame(() => A(e))
        }, [A, C, b, D, P]);
        return s.useEffect(() => {
            T && ((0, d.ensureItemVisible)(U), null == y || y())
        }, [T, y]), (0, i.jsxs)(o.Clickable, {
            innerRef: U,
            className: a(E.item, E.labelContainer, _.MENU_ITEM_COLORS[t], N, {
                [E.disabled]: v,
                [E.focused]: T,
                [null != R ? R : ""]: T
            }),
            onClick: v ? void 0 : w,
            "aria-disabled": v,
            ...I,
            "data-menu-item": "true",
            children: [h && null != r && (0, i.jsx)("div", {
                className: E.iconContainerLeft,
                children: (0, i.jsx)(r, {
                    ...L,
                    className: a(E.icon, null == L ? void 0 : L.className),
                    isFocused: T
                })
            }), (0, i.jsxs)("div", {
                className: E.label,
                children: [(0, l.renderSubnode)(n, e), null != p && (0, i.jsx)("div", {
                    className: E.subtext,
                    children: p
                })]
            }), null != m && (0, i.jsx)("div", {
                className: E.hintContainer,
                children: (0, l.renderSubnode)(m, e)
            }), !h && null != r && (0, i.jsx)("div", {
                className: E.iconContainer,
                children: (0, i.jsx)(r, {
                    ...L,
                    className: a(E.icon, null == L ? void 0 : L.className),
                    isFocused: T
                })
            }), null != g && (0, i.jsx)("div", {
                className: E.imageContainer,
                children: (0, i.jsx)("img", {
                    className: E.image,
                    src: (0, l.renderSubnode)(g, e),
                    alt: ""
                })
            }), S && (0, i.jsxs)("div", {
                className: E.iconContainer,
                children: [(0, i.jsx)(f.default, {
                    className: a(E.caret, O)
                }), M && (0, i.jsx)(c.default, {
                    className: E.sparkles
                })]
            })]
        })
    }
}