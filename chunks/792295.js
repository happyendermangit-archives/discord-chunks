function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("735250"),
        a = n("470079"),
        s = n("120356"),
        o = n.n(s),
        l = n("481060"),
        u = n("131298");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = {
        SMALL: u.sizeSmall,
        MEDIUM: u.sizeMedium,
        LARGE: u.sizeLarge
    };
    class c extends(i = a.PureComponent) {
        calculateScroll() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
            if (null == e) return;
            let {
                scrollTop: t
            } = e.getScrollerState(), {
                hideSeparator: n
            } = this.state;
            0 !== t || n ? t > 0 && n && this.setState({
                hideSeparator: !1
            }) : this.setState({
                hideSeparator: !0
            })
        }
        getScroller() {
            return this._scroller
        }
        renderChildren() {
            let {
                hideSeparator: e
            } = this.state;
            return a.Children.map(this.props.children, t => a.isValidElement(t) ? t.type === l.ModalContent || t.type === l.ModalListContent ? a.cloneElement(t, {
                scrollerRef: this.setRef,
                onScroll: this.handleScroll,
                onResize: this.handleScroll
            }) : t.type === l.ModalHeader && e ? a.cloneElement(t, {
                separator: !1
            }) : t : t)
        }
        render() {
            let {
                className: e,
                children: t,
                tag: n,
                size: i,
                fullscreenOnMobile: a,
                ...s
            } = this.props;
            return (0, r.jsx)(n, {
                className: o()(u.modal, e, i, {
                    [u.fullscreenOnMobile]: a
                }),
                ...s,
                children: this.renderChildren()
            })
        }
        constructor(e) {
            super(e), d(this, "_scroller", null), d(this, "setRef", e => {
                this._scroller = e, null != e && this.calculateScroll()
            }), d(this, "handleScroll", e => {
                this.calculateScroll();
                let {
                    onScroll: t
                } = this.props;
                null == t || t(e)
            }), this.state = {
                hideSeparator: !1
            }
        }
    }
    d(c, "Header", l.ModalHeader), d(c, "Footer", l.ModalFooter), d(c, "Content", l.ModalContent), d(c, "ListContent", l.ModalListContent), d(c, "CloseButton", l.ModalCloseButton), d(c, "Sizes", _), d(c, "defaultProps", {
        fullscreenOnMobile: !0,
        size: _.SMALL,
        tag: "div"
    }), t.default = c
}