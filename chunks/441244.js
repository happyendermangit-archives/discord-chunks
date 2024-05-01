function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104");
    var i = n("735250"),
        r = n("470079"),
        a = n("902704"),
        s = n("250919");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        var t, n;
        return null !== (n = null !== (t = e.displayName) && void 0 !== t ? t : e.name) && void 0 !== n ? n : "<Unknown>"
    }
    t.default = function(e, t, n) {
        return null != n && n.forwardRef ? function(e, t) {
            return n => {
                var d;
                let _ = "FluxContainer(".concat(l(n), ")");
                class c extends(d = r.Component) {
                    componentDidMount() {
                        this.listener.attach(_)
                    }
                    componentWillUnmount() {
                        this.listener.detach(), this.memoizedGetStateFromStores.clear()
                    }
                    render() {
                        let {
                            forwardedConnectStoresRef: e,
                            childProps: t
                        } = this.props, r = this.memoizedGetStateFromStores(t);
                        return (0, i.jsx)(n, {
                            ref: e,
                            ...t,
                            ...r
                        })
                    }
                    constructor(...n) {
                        super(...n), o(this, "memoizedGetStateFromStores", u(t)), o(this, "listener", new s.BatchedStoreListener(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                            if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, a.default)(this.memoizedGetStateFromStores(this.props.childProps), e)))) this.forceUpdate()
                        }))
                    }
                }
                o(c, "displayName", _);
                let E = r.forwardRef((e, t) => (0, i.jsx)(c, {
                    childProps: e,
                    forwardedConnectStoresRef: t
                }));
                return E.displayName = "ForwardRef(".concat(_, ")"), E
            }
        }(e, t) : function(e, t) {
            return n => {
                var d;
                let _ = "FluxContainer(".concat(l(n), ")");
                class c extends(d = r.Component) {
                    componentDidMount() {
                        this.listener.attach(_)
                    }
                    componentWillUnmount() {
                        this.listener.detach(), this.memoizedGetStateFromStores.clear()
                    }
                    render() {
                        let e = this.memoizedGetStateFromStores(this.props);
                        return (0, i.jsx)(n, {
                            ...this.props,
                            ...e
                        })
                    }
                    constructor(...n) {
                        super(...n), o(this, "memoizedGetStateFromStores", u(t)), o(this, "listener", new s.BatchedStoreListener(e, () => {
                            let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                            if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, a.default)(this.memoizedGetStateFromStores(this.props), e)))) this.forceUpdate()
                        }))
                    }
                }
                return o(c, "displayName", _), c
            }
        }(e, t)
    };

    function u(e) {
        let t = null,
            n = null,
            i = e => null != t && null != n && (0, a.default)(t, e) ? n : null != t && null != n && (0, a.default)(t, e) ? (t = e, n) : null,
            r = r => {
                let a = i(r);
                return null != a ? a : n = e(t = r)
            };
        return r.getCachedResult = i, r.clear = () => {
            t = null, n = null
        }, r
    }
}