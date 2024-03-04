function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Clickable: function() {
            return d
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("247716"),
        l = n("718776"),
        u = n("49111");
    class d extends s.Component {
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
                innerRef: o,
                ...l
            } = this.props;
            return null == t ? s.createElement(e, {
                ref: this.setRef,
                className: a(n),
                ...l
            }, i) : s.createElement(e, {
                onClick: t,
                ref: this.setRef,
                onKeyPress: this.handleKeyPress,
                className: a(n),
                ...l
            }, i)
        }
        render() {
            let e = this.context;
            return e ? this.renderNonInteractive() : (0, i.jsx)(l.FocusRing, {
                ...this.props.focusProps,
                children: this.renderInner()
            })
        }
        constructor(...e) {
            super(...e), this.handleKeyPress = e => {
                let {
                    onClick: t,
                    href: n,
                    onKeyPress: i,
                    ignoreKeyPress: s
                } = this.props;
                !e.repeat && (!s && null != t && null != this.ref && (e.charCode === u.KeyboardKeys.SPACE || e.charCode === u.KeyboardKeys.ENTER) && (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != i && i(e))
            }, this.setRef = e => {
                this.ref = e;
                let {
                    innerRef: t
                } = this.props;
                null != t && ("function" == typeof t ? t(e) : t.hasOwnProperty("current") && (t.current = e))
            }
        }
    }
    d.contextType = o.BlockInteractionsContext, d.defaultProps = {
        tag: "div",
        role: "button",
        tabIndex: 0
    }
}