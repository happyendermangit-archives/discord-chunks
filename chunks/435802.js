function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("194649"),
        i = n("226512"),
        a = n("782726");
    n("476400");
    var o = n("898061"),
        s = n("862127"),
        u = n("470079"),
        c = n.n(u),
        l = n("73793"),
        d = function(e, t) {
            return e && t && t.split(" ").forEach(function(t) {
                return (0, s.default)(e, t)
            })
        },
        f = function(e) {
            function t() {
                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {}
                }, t.onEnter = function(e, n) {
                    t.removeClasses(e, "exit"), t.addClass(e, n ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n)
                }, t.onEntering = function(e, n) {
                    t.addClass(e, n ? "appear" : "enter", "active"), t.props.onEntering && t.props.onEntering(e, n)
                }, t.onEntered = function(e, n) {
                    var r = n ? "appear" : "enter";
                    t.removeClasses(e, r), t.addClass(e, r, "done"), t.props.onEntered && t.props.onEntered(e, n)
                }, t.onExit = function(e) {
                    t.removeClasses(e, "appear"), t.removeClasses(e, "enter"), t.addClass(e, "exit", "base"), t.props.onExit && t.props.onExit(e)
                }, t.onExiting = function(e) {
                    t.addClass(e, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
                }, t.onExited = function(e) {
                    t.removeClasses(e, "exit"), t.addClass(e, "exit", "done"), t.props.onExited && t.props.onExited(e)
                }, t.getClassNames = function(e) {
                    var n = t.props.classNames,
                        r = "string" == typeof n,
                        i = r ? (r && n ? n + "-" : "") + e : n[e],
                        a = r ? i + "-active" : n[e + "Active"],
                        o = r ? i + "-done" : n[e + "Done"];
                    return {
                        baseClassName: i,
                        activeClassName: a,
                        doneClassName: o
                    }
                }, t
            }(0, a.default)(t, e);
            var n = t.prototype;
            return n.addClass = function(e, t, n) {
                var r, i, a = this.getClassNames(t)[n + "ClassName"];
                "appear" === t && "done" === n && (a += " " + this.getClassNames("enter").doneClassName), "active" === n && e && e.scrollTop, this.appliedClasses[t][n] = a, r = e, i = a, r && i && i.split(" ").forEach(function(e) {
                    return (0, o.default)(r, e)
                })
            }, n.removeClasses = function(e, t) {
                var n = this.appliedClasses[t],
                    r = n.base,
                    i = n.active,
                    a = n.done;
                this.appliedClasses[t] = {}, r && d(e, r), i && d(e, i), a && d(e, a)
            }, n.render = function() {
                var e = this.props,
                    t = (e.classNames, (0, i.default)(e, ["classNames"]));
                return c().createElement(l.default, (0, r.default)({}, t, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                }))
            }, t
        }(c().Component);
    f.defaultProps = {
        classNames: ""
    }, f.propTypes = {}, t.default = f
}