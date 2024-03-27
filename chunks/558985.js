function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VisibilitySensor: function() {
            return _
        }
    }), n("47120"), n("411104");
    var i, r = n("470079"),
        s = n("153832"),
        a = n("324404");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let l = (0, s.v4)(),
        u = new Map,
        d = new Map;
    class _ extends(i = r.Component) {
        componentDidMount() {
            if (this.props.active) {
                let e = this.getVisibilityObserver();
                e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
            }
        }
        componentDidUpdate(e) {
            let t = this.getVisibilityObserver(),
                n = t.isVisible(this);
            this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
        }
        componentWillUnmount() {
            this.getVisibilityObserver().unobserve(this)
        }
        getVisibilityObserverId() {
            let {
                rootMargin: e,
                threshold: t
            } = this.props;
            return "".concat(this.elementId, " ").concat(e, " ").concat(t)
        }
        getVisibilityObserver() {
            let e = this.getVisibilityObserverId(),
                t = d.get(e);
            if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
            return t
        }
        render() {
            return r.Children.only(this.props.children)
        }
        constructor(e) {
            super(e), o(this, "elementId", void 0), o(this, "isVisible", !1);
            let {
                root: t,
                rootMargin: n,
                threshold: i
            } = e;
            t ? u.has(t) ? this.elementId = u.get(t) || "" : u.set(t, (0, s.v4)()) : this.elementId = l;
            let r = this.getVisibilityObserverId();
            !d.has(r) && d.set(r, new a.VisibilityObserver({
                root: t,
                rootMargin: n,
                threshold: i
            }))
        }
    }
    o(_, "defaultProps", {
        active: !0,
        children: r.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE]
    })
}