function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LayerClassName: function() {
            return h
        },
        LayerProvider: function() {
            return E
        },
        LayerContainer: function() {
            return g
        },
        getParentLayerContainer: function() {
            return m
        },
        Layer: function() {
            return p
        },
        createLayer: function() {
            return S
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("627445"),
        l = n.n(o),
        u = n("817736"),
        d = n.n(u),
        c = n("117362"),
        f = n("411093"),
        _ = n("855265");
    let h = _.layerContainer;
    class E extends s.Component {
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
            super(...e), this.state = {
                layerContainerElement: null
            }, this.setLayerContainerElement = e => {
                this.setState({
                    layerContainerElement: e
                })
            }, this.getContextValue = (0, c.cachedFunction)(e => [e, this.setLayerContainerElement])
        }
    }
    let g = e => {
        let {
            layerContext: t,
            className: n
        } = e, [, r] = s.useContext(t);
        return (0, i.jsx)("div", {
            className: a(h, n),
            ref: r
        })
    };

    function m(e) {
        let t = (0, f.default)(e, _.layerContainer);
        return l(null != t, "Unexpected missing parent container"), t
    }
    let p = e => {
        let {
            layerContext: t,
            children: n
        } = e;
        return (0, i.jsx)(t.Consumer, {
            children: e => (function(e, t) {
                let [n] = e;
                return null == n ? null : d.createPortal(s.Children.only(t), n)
            })(e, n)
        })
    };

    function S(e) {
        let t = s.createContext([null, () => {}]),
            n = {
                LayerProvider: e => (0, i.jsx)(E, {
                    layerContext: t,
                    ...e
                }),
                LayerContainer: e => (0, i.jsx)(g, {
                    layerContext: t,
                    ...e
                }),
                Layer: e => (0, i.jsx)(p, {
                    layerContext: t,
                    ...e
                }),
                layerContext: t
            };
        return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
    }
}