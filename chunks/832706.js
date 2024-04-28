function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("781212"),
        i = n("599295"),
        a = n("919499"),
        o = n("15393");
    n("476400");
    var s = n("470079"),
        u = n.n(s),
        c = n("717588"),
        l = n("46121"),
        d = Object.values || function(e) {
            return Object.keys(e).map(function(t) {
                return e[t]
            })
        },
        f = function(e) {
            function t(t, n) {
                var r, i = (r = e.call(this, t, n) || this).handleExited.bind((0, o.default)((0, o.default)(r)));
                return r.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: i,
                    firstRender: !0
                }, r
            }(0, a.default)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.mounted = !0, this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                })
            }, n.componentWillUnmount = function() {
                this.mounted = !1
            }, t.getDerivedStateFromProps = function(e, t) {
                var n = t.children,
                    r = t.handleExited;
                return {
                    children: t.firstRender ? (0, l.getInitialChildMapping)(e, r) : (0, l.getNextChildMapping)(e, n, r),
                    firstRender: !1
                }
            }, n.handleExited = function(e, t) {
                var n = (0, l.getChildMapping)(this.props.children);
                !(e.key in n) && (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
                    var n = (0, i.default)({}, t.children);
                    return delete n[e.key], {
                        children: n
                    }
                }))
            }, n.render = function() {
                var e = this.props,
                    t = e.component,
                    n = e.childFactory,
                    i = (0, r.default)(e, ["component", "childFactory"]),
                    a = this.state.contextValue,
                    o = d(this.state.children).map(n);
                return (delete i.appear, delete i.enter, delete i.exit, null === t) ? u().createElement(c.default.Provider, {
                    value: a
                }, o) : u().createElement(c.default.Provider, {
                    value: a
                }, u().createElement(t, i, o))
            }, t
        }(u().Component);
    f.propTypes = {}, f.defaultProps = {
        component: "div",
        childFactory: function(e) {
            return e
        }
    }, t.default = f
}