function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return f
        }
    });
    var i = n("59079"),
        r = n("261438"),
        a = n("728983"),
        s = n("446873");
    n("416037");
    var o = n("884691"),
        l = n.n(o),
        u = n("433479"),
        c = n("11092"),
        p = Object.values || function(t) {
            return Object.keys(t).map(function(e) {
                return t[e]
            })
        },
        d = function(t) {
            function e(e, n) {
                var i, r = (i = t.call(this, e, n) || this).handleExited.bind((0, s.default)((0, s.default)(i)));
                return i.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: r,
                    firstRender: !0
                }, i
            }(0, a.default)(e, t);
            var n = e.prototype;
            return n.componentDidMount = function() {
                this.mounted = !0, this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                })
            }, n.componentWillUnmount = function() {
                this.mounted = !1
            }, e.getDerivedStateFromProps = function(t, e) {
                var n = e.children,
                    i = e.handleExited;
                return {
                    children: e.firstRender ? (0, c.getInitialChildMapping)(t, i) : (0, c.getNextChildMapping)(t, n, i),
                    firstRender: !1
                }
            }, n.handleExited = function(t, e) {
                var n = (0, c.getChildMapping)(this.props.children);
                !(t.key in n) && (t.props.onExited && t.props.onExited(e), this.mounted && this.setState(function(e) {
                    var n = (0, r.default)({}, e.children);
                    return delete n[t.key], {
                        children: n
                    }
                }))
            }, n.render = function() {
                var t = this.props,
                    e = t.component,
                    n = t.childFactory,
                    r = (0, i.default)(t, ["component", "childFactory"]),
                    a = this.state.contextValue,
                    s = p(this.state.children).map(n);
                return (delete r.appear, delete r.enter, delete r.exit, null === e) ? l.createElement(u.default.Provider, {
                    value: a
                }, s) : l.createElement(u.default.Provider, {
                    value: a
                }, l.createElement(e, r, s))
            }, e
        }(l.Component);
    d.propTypes = {}, d.defaultProps = {
        component: "div",
        childFactory: function(t) {
            return t
        }
    };
    var f = d
}