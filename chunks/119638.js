function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PopoutList: function() {
            return f
        }
    });
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("507274"),
        d = n("770102"),
        _ = n("6048"),
        c = n("679342"),
        E = n("410190");

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class T extends(i = a.PureComponent) {
        render() {
            let {
                className: e,
                ...t
            } = this.props;
            return (0, s.jsx)(_.default, {
                ...t,
                className: l()(E.popoutListInput, e)
            })
        }
    }
    I(T, "defaultProps", {
        autoFocus: !0
    });
    class f extends(r = a.PureComponent) {
        render() {
            let {
                className: e,
                children: t
            } = this.props;
            return (0, s.jsx)(u.Dialog, {
                className: l()(E.popoutList, e),
                "aria-label": this.props["aria-label"],
                children: t
            })
        }
    }
    I(f, "SearchBar", T), I(f, "Item", c.default), I(f, "Divider", () => (0, s.jsx)(d.FormDivider, {
        className: E.divider
    })), I(f, "Empty", e => {
        let {
            children: t
        } = e;
        return (0, s.jsx)("div", {
            className: E.popoutListEmpty,
            children: t
        })
    })
}