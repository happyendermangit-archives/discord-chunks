function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a = n("470079"),
        s = n("112724");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e, t, n) {
        return Math.min(Math.max(Math.floor(e / t), 1), n)
    }
    t.default = (0, s.default)((r = class extends(i = a.Component) {
        static getDerivedStateFromProps(e, t) {
            let {
                width: n,
                desiredItemWidth: i,
                maxColumns: r
            } = e, a = l(n, i, r);
            return a !== t.columns ? {
                columns: a
            } : null
        }
        render() {
            let {
                width: e,
                height: t,
                children: n
            } = this.props, {
                columns: i
            } = this.state;
            return n(i, e, t)
        }
        constructor(...e) {
            super(...e), o(this, "state", {
                columns: l(this.props.width, this.props.desiredItemWidth, this.props.maxColumns)
            })
        }
    }, o(r, "defaultProps", {
        desiredItemWidth: 200
    }), r))
}