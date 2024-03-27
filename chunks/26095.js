function(e, t, n) {
    "use strict";
    var r = n("165566"),
        i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        o = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        s = {};

    function u(e) {
        return r.isMemo(e) ? o : s[e.$$typeof] || i
    }
    s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }, s[r.Memo] = o;
    var c = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
    e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
            if (h) {
                var i = p(n);
                i && i !== h && e(t, i, r)
            }
            var o = l(n);
            d && (o = o.concat(d(n)));
            for (var s = u(t), m = u(n), g = 0; g < o.length; ++g) {
                var _ = o[g];
                if (!a[_] && !(r && r[_]) && !(m && m[_]) && !(s && s[_])) {
                    var b = f(n, _);
                    try {
                        c(t, _, b)
                    } catch (e) {}
                }
            }
        }
        return t
    }
}