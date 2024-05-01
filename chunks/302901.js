function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Layer: function() {
            return A
        },
        LayerClassName: function() {
            return T
        },
        LayerContainer: function() {
            return S
        },
        LayerProvider: function() {
            return f
        },
        createLayer: function() {
            return m
        },
        getParentLayerContainer: function() {
            return h
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("512722"),
        l = n.n(o),
        u = n("699581"),
        d = n.n(u),
        _ = n("251625"),
        c = n("872801"),
        E = n("344535");

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let T = E.layerContainer;
    class f extends r.Component {
        componentWillUnmount() {
            this.state.layerContainerElement = null
        }
        render() {
            let {
                layerContext: e,
                children: t
            } = this.props, {
                layerContainerElement: n
            } = this.state;
            return (0, i.jsx)(e.Provider, {
                value: this.getContextValue(n),
                children: t
            })
        }
        constructor(...e) {
            super(...e), I(this, "state", {
                layerContainerElement: null
            }), I(this, "setLayerContainerElement", e => {
                this.setState({
                    layerContainerElement: e
                })
            }), I(this, "getContextValue", (0, _.cachedFunction)(e => [e, this.setLayerContainerElement]))
        }
    }
    let S = e => {
        let {
            layerContext: t,
            className: n
        } = e, [, s] = r.useContext(t);
        return (0, i.jsx)("div", {
            className: a()(T, n),
            ref: s
        })
    };

    function h(e) {
        let t = (0, c.default)(e, E.layerContainer);
        return l()(null != t, "Unexpected missing parent container"), t
    }
    let A = e => {
        let {
            layerContext: t,
            children: n
        } = e;
        return (0, i.jsx)(t.Consumer, {
            children: e => (function(e, t) {
                let [n] = e;
                return null == n ? null : d().createPortal(r.Children.only(t), n)
            })(e, n)
        })
    };

    function m(e) {
        let t = r.createContext([null, () => {}]),
            n = {
                LayerProvider: e => (0, i.jsx)(f, {
                    layerContext: t,
                    ...e
                }),
                LayerContainer: e => (0, i.jsx)(S, {
                    layerContext: t,
                    ...e
                }),
                Layer: e => (0, i.jsx)(A, {
                    layerContext: t,
                    ...e
                }),
                layerContext: t
            };
        return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
    }
}