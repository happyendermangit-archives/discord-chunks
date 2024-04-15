function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TabBar: function() {
            return R
        }
    }), n("757143"), n("411104"), n("47120");
    var i, r, s, a, o = n("735250"),
        l = n("470079"),
        u = n("120356"),
        d = n.n(u),
        _ = n("372817"),
        c = n("866442"),
        E = n("692547"),
        I = n("1561"),
        T = n("993365"),
        f = n("981631"),
        S = n("243013");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let A = {
            side: S.side,
            top: S.top,
            "top-pill": S.topPill
        },
        m = l.forwardRef(function(e, t) {
            let {
                children: n,
                id: i,
                ...r
            } = e;
            return (0, o.jsx)("div", {
                ...r,
                ref: t,
                role: "tabpanel",
                id: N(i),
                tabIndex: -1,
                children: n
            })
        });

    function N(e) {
        return "".concat(e.replace(/\s+/g, "-").toLowerCase(), "-tab")
    }

    function p(e, t) {
        if (null == e) return;
        let n = {};
        return "Selected" === t ? (n.backgroundColor = e, n.color = E.default.unsafe_rawColors.WHITE_500.css, n) : ("Hover" === t && (n.backgroundColor = (0, c.hex2rgb)(e, .1)), n.color = e, n)
    }(a = i || (i = {})).DEFAULT = "Default", a.HOVER = "Hover", a.SELECTED = "Selected";
    class O extends(r = l.Component) {
        getStyle() {
            let {
                color: e,
                id: t,
                selectedItem: n,
                itemType: i
            } = this.props, {
                hover: r,
                active: s
            } = this.state;
            if (null != e) {
                if ("side" === i) return null != t && n === t || s ? p(e, "Selected") : r ? p(e, "Hover") : p(e);
                if ("top" === i) return n === t ? {
                    borderColor: e,
                    color: e
                } : r ? {
                    borderColor: (0, c.hex2rgb)(e, .1),
                    color: (0, c.hex2rgb)(e, .6)
                } : {
                    borderColor: "transparent",
                    color: (0, c.hex2rgb)(e, .4)
                };
                if ("top-pill" === i) return n === t ? {
                    backgroundColor: (0, c.hex2rgb)(e, .2),
                    color: e
                } : {
                    backgroundColor: e,
                    color: E.default.unsafe_rawColors.WHITE_500.css
                }
            }
        }
        render() {
            let {
                children: e,
                className: t,
                id: n,
                selectedItem: i,
                color: r,
                disabled: s,
                onContextMenu: a,
                clickableRef: l,
                look: u,
                disableItemStyles: _
            } = this.props, c = this.props["aria-label"], E = i === n;
            return (0, o.jsx)(I.Clickable, {
                className: d()(t, {
                    [S.item]: !_,
                    [S.brand]: "brand" === u,
                    [S.selected]: null == r && E,
                    [S.themed]: "grey" === u,
                    [S.disabled]: null == r && s
                }),
                style: this.getStyle(),
                role: "tab",
                "aria-selected": E,
                "aria-controls": E ? N("".concat(n)) : void 0,
                "aria-disabled": s,
                tabIndex: E ? 0 : -1,
                onMouseEnter: null != r ? this.handleMouseOver : void 0,
                onClick: this.handleClick,
                onMouseLeave: null != r ? this.handleMouseOut : void 0,
                onMouseUp: null != r ? this.handleMouseUp : void 0,
                onMouseDown: this.handleMouseDown,
                onContextMenu: a,
                "aria-label": c,
                ref: l,
                children: e
            })
        }
        constructor(...e) {
            super(...e), h(this, "state", {
                hover: !1,
                active: !1
            }), h(this, "handleClick", e => {
                let {
                    disabled: t,
                    onClick: n,
                    id: i,
                    onItemSelect: r
                } = this.props;
                !t && (null != n ? n(e) : null != r && r(i))
            }), h(this, "handleMouseDown", () => {
                let {
                    color: e
                } = this.props;
                null != e && this.setState({
                    active: !0
                })
            }), h(this, "handleMouseUp", () => {
                this.setState({
                    active: !1
                })
            }), h(this, "handleMouseOver", () => {
                this.setState({
                    hover: !0
                })
            }), h(this, "handleMouseOut", () => {
                this.setState({
                    hover: !1,
                    active: !1
                })
            })
        }
    }
    h(O, "defaultProps", {
        disabled: !1,
        look: "grey",
        disableItemStyles: !1
    });
    class R extends(s = l.Component) {
        render() {
            let {
                className: e,
                children: t,
                type: n = "side",
                style: i,
                "aria-label": r,
                orientation: s = "horizontal"
            } = this.props;
            return (0, o.jsx)("div", {
                ref: this.tabBarRef,
                className: d()(e, A[n]),
                style: i,
                role: "tablist",
                "aria-orientation": s,
                onKeyDown: this.handleKeyDown,
                "aria-label": r,
                children: l.Children.map(t, this.renderChildren)
            })
        }
        constructor(...e) {
            super(...e), h(this, "tabBarRef", l.createRef()), h(this, "focusManager", (0, _.createFocusManager)({
                getFocusableElements: () => {
                    let e = this.tabBarRef.current;
                    return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : []
                },
                getActiveElement: () => {
                    var e;
                    return null === (e = this.tabBarRef.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
                }
            })), h(this, "renderChildren", e => {
                let {
                    selectedItem: t,
                    onItemSelect: n,
                    type: i = "side",
                    look: r = "grey"
                } = this.props;
                return l.isValidElement(e) ? l.cloneElement(e, {
                    selectedItem: t,
                    onItemSelect: n,
                    itemType: i,
                    look: r
                }) : null
            }), h(this, "getNodeForKeydownEvent", async e => {
                let {
                    orientation: t = "horizontal"
                } = this.props, n = "vertical" === t ? f.KeyboardKeys.ARROW_UP : f.KeyboardKeys.ARROW_LEFT, i = "vertical" === t ? f.KeyboardKeys.ARROW_DOWN : f.KeyboardKeys.ARROW_RIGHT;
                switch (e.which) {
                    case n:
                        return this.focusManager.getPreviousFocusableElement();
                    case i:
                        return this.focusManager.getNextFocusableElement();
                    case f.KeyboardKeys.HOME:
                        return this.focusManager.getFirstFocusableElement();
                    case f.KeyboardKeys.END:
                        return this.focusManager.getLastFocusableElement()
                }
                return null
            }), h(this, "handleKeyDown", async e => {
                let t = await this.getNodeForKeydownEvent(e);
                null != t && (e.preventDefault(), t.focus())
            })
        }
    }
    h(R, "Header", function(e) {
        let {
            className: t,
            onClick: n,
            children: i,
            "aria-expanded": r,
            "aria-controls": s
        } = e;
        return (0, o.jsx)(I.Clickable, {
            tabIndex: null == n ? -1 : 0,
            className: d()(S.header, t),
            onClick: n,
            "aria-expanded": r,
            "aria-controls": s,
            focusProps: {
                offset: {
                    top: -6
                }
            },
            children: (0, o.jsx)(T.Text, {
                variant: "eyebrow",
                color: "none",
                className: S.headerText,
                children: i
            })
        })
    }), h(R, "Item", O), h(R, "Separator", function(e) {
        let {
            style: t
        } = e;
        return (0, o.jsx)("div", {
            className: S.separator,
            style: t
        })
    }), h(R, "Panel", m)
}