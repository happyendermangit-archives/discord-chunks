function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TabBar: function() {
            return v
        }
    }), n("781738"), n("70102"), n("222007");
    var i, s, r = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("71185"),
        d = n("509043"),
        c = n("669491"),
        _ = n("227645"),
        f = n("577776"),
        E = n("49111"),
        h = n("426834");
    let g = {
            side: h.side,
            top: h.top,
            "top-pill": h.topPill
        },
        m = a.forwardRef(function(e, t) {
            let {
                children: n,
                id: i,
                ...s
            } = e;
            return (0, r.jsx)("div", {
                ...s,
                ref: t,
                role: "tabpanel",
                id: p(i),
                tabIndex: -1,
                children: n
            })
        });

    function p(e) {
        return "".concat(e.replace(/\s+/g, "-").toLowerCase(), "-tab")
    }

    function S(e, t) {
        if (null == e) return;
        let n = {};
        return "Selected" === t ? (n.backgroundColor = e, n.color = c.default.unsafe_rawColors.WHITE_500.css, n) : ("Hover" === t && (n.backgroundColor = (0, d.hex2rgb)(e, .1)), n.color = e, n)
    }(s = i || (i = {})).DEFAULT = "Default", s.HOVER = "Hover", s.SELECTED = "Selected";
    class T extends a.Component {
        getStyle() {
            let {
                color: e,
                id: t,
                selectedItem: n,
                itemType: i
            } = this.props, {
                hover: s,
                active: r
            } = this.state;
            if (null != e) {
                if ("side" === i) return null != t && n === t || r ? S(e, "Selected") : s ? S(e, "Hover") : S(e);
                if ("top" === i) return n === t ? {
                    borderColor: e,
                    color: e
                } : s ? {
                    borderColor: (0, d.hex2rgb)(e, .1),
                    color: (0, d.hex2rgb)(e, .6)
                } : {
                    borderColor: "transparent",
                    color: (0, d.hex2rgb)(e, .4)
                };
                if ("top-pill" === i) return n === t ? {
                    backgroundColor: (0, d.hex2rgb)(e, .2),
                    color: e
                } : {
                    backgroundColor: e,
                    color: c.default.unsafe_rawColors.WHITE_500.css
                }
            }
        }
        render() {
            let {
                children: e,
                className: t,
                id: n,
                selectedItem: i,
                color: s,
                disabled: a,
                onContextMenu: o,
                clickableRef: u,
                look: d,
                disableItemStyles: c
            } = this.props, f = this.props["aria-label"], E = i === n;
            return (0, r.jsx)(_.Clickable, {
                className: l(t, {
                    [h.item]: !c,
                    [h.brand]: "brand" === d,
                    [h.selected]: null == s && E,
                    [h.themed]: "grey" === d,
                    [h.disabled]: null == s && a
                }),
                style: this.getStyle(),
                role: "tab",
                "aria-selected": E,
                "aria-controls": E ? p("".concat(n)) : void 0,
                "aria-disabled": a,
                tabIndex: E ? 0 : -1,
                onMouseEnter: null != s ? this.handleMouseOver : void 0,
                onClick: this.handleClick,
                onMouseLeave: null != s ? this.handleMouseOut : void 0,
                onMouseUp: null != s ? this.handleMouseUp : void 0,
                onMouseDown: this.handleMouseDown,
                onContextMenu: o,
                "aria-label": f,
                ref: u,
                children: e
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                hover: !1,
                active: !1
            }, this.handleClick = e => {
                let {
                    disabled: t,
                    onClick: n,
                    id: i,
                    onItemSelect: s
                } = this.props;
                !t && (null != n ? n(e) : null != s && s(i))
            }, this.handleMouseDown = () => {
                let {
                    color: e
                } = this.props;
                null != e && this.setState({
                    active: !0
                })
            }, this.handleMouseUp = () => {
                this.setState({
                    active: !1
                })
            }, this.handleMouseOver = () => {
                this.setState({
                    hover: !0
                })
            }, this.handleMouseOut = () => {
                this.setState({
                    hover: !1,
                    active: !1
                })
            }
        }
    }
    T.defaultProps = {
        disabled: !1,
        look: "grey",
        disableItemStyles: !1
    };
    class v extends a.Component {
        render() {
            let {
                className: e,
                children: t,
                type: n = "side",
                style: i,
                "aria-label": s,
                orientation: o = "horizontal"
            } = this.props;
            return (0, r.jsx)("div", {
                ref: this.tabBarRef,
                className: l(e, g[n]),
                style: i,
                role: "tablist",
                "aria-orientation": o,
                onKeyDown: this.handleKeyDown,
                "aria-label": s,
                children: a.Children.map(t, this.renderChildren)
            })
        }
        constructor(...e) {
            super(...e), this.tabBarRef = a.createRef(), this.focusManager = (0, u.createFocusManager)({
                getFocusableElements: () => {
                    let e = this.tabBarRef.current;
                    if (null != e) {
                        let t = e.querySelectorAll('[role="tab"][aria-disabled="false"]');
                        return Array.from(t)
                    }
                    return []
                },
                getActiveElement: () => {
                    var e;
                    return null === (e = this.tabBarRef.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
                }
            }), this.renderChildren = e => {
                let {
                    selectedItem: t,
                    onItemSelect: n,
                    type: i = "side",
                    look: s = "grey"
                } = this.props;
                return a.isValidElement(e) ? a.cloneElement(e, {
                    selectedItem: t,
                    onItemSelect: n,
                    itemType: i,
                    look: s
                }) : null
            }, this.getNodeForKeydownEvent = async e => {
                let {
                    orientation: t = "horizontal"
                } = this.props, n = "vertical" === t ? E.KeyboardKeys.ARROW_UP : E.KeyboardKeys.ARROW_LEFT, i = "vertical" === t ? E.KeyboardKeys.ARROW_DOWN : E.KeyboardKeys.ARROW_RIGHT;
                switch (e.which) {
                    case n:
                        return this.focusManager.getPreviousFocusableElement();
                    case i:
                        return this.focusManager.getNextFocusableElement();
                    case E.KeyboardKeys.HOME:
                        return this.focusManager.getFirstFocusableElement();
                    case E.KeyboardKeys.END:
                        return this.focusManager.getLastFocusableElement()
                }
                return null
            }, this.handleKeyDown = async e => {
                let t = await this.getNodeForKeydownEvent(e);
                null != t && (e.preventDefault(), t.focus())
            }
        }
    }
    v.Header = function(e) {
        let {
            className: t,
            onClick: n,
            children: i,
            "aria-expanded": s,
            "aria-controls": a
        } = e;
        return (0, r.jsx)(_.Clickable, {
            tabIndex: null == n ? -1 : 0,
            className: l(h.header, t),
            onClick: n,
            "aria-expanded": s,
            "aria-controls": a,
            focusProps: {
                offset: {
                    top: -6
                }
            },
            children: (0, r.jsx)(f.Text, {
                variant: "eyebrow",
                color: "none",
                className: h.headerText,
                children: i
            })
        })
    }, v.Item = T, v.Separator = function(e) {
        let {
            style: t
        } = e;
        return (0, r.jsx)("div", {
            className: h.separator,
            style: t
        })
    }, v.Panel = m
}