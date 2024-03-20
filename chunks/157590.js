function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VisibilityObserver: function() {
            return l
        }
    }), n("222007");
    var i = n("817736"),
        r = n("118810");
    let s = {
        root: null,
        rootMargin: "0px",
        threshold: .5
    };
    class l {
        isVisible(e) {
            return null == this._observer || this._visibleComponents.has(e)
        }
        observe(e) {
            let t = this._observer;
            if (null == t) return;
            this.unobserve(e);
            let n = (0, i.findDOMNode)(e);
            (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
        }
        unobserve(e) {
            let t = this._observer;
            if (null == t) return;
            let n = this._components.get(e);
            null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
        }
        constructor(e = s) {
            this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                e.forEach(e => {
                    let t;
                    if (null != e.isIntersecting) t = e.isIntersecting;
                    else {
                        let {
                            threshold: n
                        } = this._options;
                        t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                    }
                    let n = this._nodes.get(e.target);
                    if (null != n) {
                        let e = !1;
                        t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                    }
                })
            }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
        }
    }
}