function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        i = n.n(r),
        a = n("782726"),
        o = n("476400"),
        s = n.n(o),
        u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : {},
        c = i().createContext || function(e, t) {
            var n, i, o, c = "__create-react-context-" + (u[n = "__global_unique_id__"] = (u[n] || 0) + 1) + "__",
                l = function(e) {
                    function n() {
                        var t, n, r;
                        return t = e.apply(this, arguments) || this, t.emitter = (n = t.props.value, r = [], {
                            on: function(e) {
                                r.push(e)
                            },
                            off: function(e) {
                                r = r.filter(function(t) {
                                    return t !== e
                                })
                            },
                            get: function() {
                                return n
                            },
                            set: function(e, t) {
                                n = e, r.forEach(function(e) {
                                    return e(n, t)
                                })
                            }
                        }), t
                    }(0, a.default)(n, e);
                    var r = n.prototype;
                    return r.getChildContext = function() {
                        var e;
                        return (e = {})[c] = this.emitter, e
                    }, r.componentWillReceiveProps = function(e) {
                        if (this.props.value !== e.value) {
                            var n, r, i, a = this.props.value,
                                o = e.value;
                            if ((n = a) === (r = o) ? 0 !== n || 1 / n == 1 / r : n != n && r != r) i = 0;
                            else 0 != (i = ("function" == typeof t ? t(a, o) : 1073741823) | 0) && this.emitter.set(e.value, i)
                        }
                    }, r.render = function() {
                        return this.props.children
                    }, n
                }(r.Component);
            l.childContextTypes = ((i = {})[c] = s().object.isRequired, i);
            var d = function(t) {
                function n() {
                    var e;
                    return e = t.apply(this, arguments) || this, e.state = {
                        value: e.getValue()
                    }, e.onUpdate = function(t, n) {
                        ((0 | e.observedBits) & n) != 0 && e.setState({
                            value: e.getValue()
                        })
                    }, e
                }(0, a.default)(n, t);
                var r = n.prototype;
                return r.componentWillReceiveProps = function(e) {
                    var t = e.observedBits;
                    this.observedBits = null == t ? 1073741823 : t
                }, r.componentDidMount = function() {
                    this.context[c] && this.context[c].on(this.onUpdate);
                    var e = this.props.observedBits;
                    this.observedBits = null == e ? 1073741823 : e
                }, r.componentWillUnmount = function() {
                    this.context[c] && this.context[c].off(this.onUpdate)
                }, r.getValue = function() {
                    return this.context[c] ? this.context[c].get() : e
                }, r.render = function() {
                    var e;
                    return (Array.isArray(e = this.props.children) ? e[0] : e)(this.state.value)
                }, n
            }(r.Component);
            return d.contextTypes = ((o = {})[c] = s().object, o), {
                Provider: l,
                Consumer: d
            }
        };
    t.default = c
}