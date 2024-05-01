function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Clickable: function() {
            return c
        }
    }), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("532712"),
        u = n("84735"),
        d = n("981631");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class c extends(i = s.Component) {
        renderNonInteractive() {
            let {
                tag: e,
                focusProps: t,
                innerRef: n,
                onClick: i,
                role: r,
                tabIndex: a,
                ...o
            } = this.props;
            return s.createElement(e, {
                ref: this.setRef,
                ...o
            })
        }
        renderInner() {
            let {
                tag: e,
                onClick: t,
                className: n,
                children: i,
                focusProps: r,
                innerRef: a,
                ...l
            } = this.props;
            return null == t ? s.createElement(e, {
                ref: this.setRef,
                className: o()(n),
                ...l
            }, i) : s.createElement(e, {
                onClick: t,
                ref: this.setRef,
                onKeyPress: this.handleKeyPress,
                className: o()(n),
                ...l
            }, i)
        }
        render() {
            return this.context ? this.renderNonInteractive() : (0, r.jsx)(u.FocusRing, {
                ...this.props.focusProps,
                children: this.renderInner()
            })
        }
        constructor(...e) {
            super(...e), _(this, "ref", void 0), _(this, "handleKeyPress", e => {
                let {
                    onClick: t,
                    href: n,
                    onKeyPress: i,
                    ignoreKeyPress: r
                } = this.props;
                !e.repeat && (!r && null != t && null != this.ref && (e.charCode === d.KeyboardKeys.SPACE || e.charCode === d.KeyboardKeys.ENTER) && (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != i && i(e))
            }), _(this, "setRef", e => {
                this.ref = e;
                let {
                    innerRef: t
                } = this.props;
                null != t && ("function" == typeof t ? t(e) : t.hasOwnProperty("current") && (t.current = e))
            })
        }
    }
    _(c, "contextType", l.BlockInteractionsContext), _(c, "defaultProps", {
        tag: "div",
        role: "button",
        tabIndex: 0
    })
}