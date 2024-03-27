function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        applyAggregateErrorsToEvent: function() {
            return a
        }
    });
    var r = n("46834"),
        i = n("336344");

    function a(t, e, n = 250, a, u, c, l) {
        if (!c.exception || !c.exception.values || !l || !(0, r.isInstanceOf)(l.originalException, Error)) return;
        let d = c.exception.values.length > 0 ? c.exception.values[c.exception.values.length - 1] : void 0;
        d && (c.exception.values = function(t, e) {
            return t.map(t => (t.value && (t.value = (0, i.truncate)(t.value, e)), t))
        }(function t(e, n, i, a, u, c, l, d) {
            if (c.length >= i + 1) return c;
            let f = [...c];
            if ((0, r.isInstanceOf)(a[u], Error)) {
                o(l, d);
                let r = e(n, a[u]),
                    c = f.length;
                s(r, u, c, d), f = t(e, n, i, a[u], u, [r, ...f], r, c)
            }
            return Array.isArray(a.errors) && a.errors.forEach((a, c) => {
                if ((0, r.isInstanceOf)(a, Error)) {
                    o(l, d);
                    let r = e(n, a),
                        p = f.length;
                    s(r, `errors[${c}]`, p, d), f = t(e, n, i, a, u, [r, ...f], r, p)
                }
            }), f
        }(t, e, u, l.originalException, a, c.exception.values, d, 0), n))
    }

    function o(t, e) {
        t.mechanism = t.mechanism || {
            type: "generic",
            handled: !0
        }, t.mechanism = {
            ...t.mechanism,
            is_exception_group: !0,
            exception_id: e
        }
    }

    function s(t, e, n, r) {
        t.mechanism = t.mechanism || {
            type: "generic",
            handled: !0
        }, t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: n,
            parent_id: r
        }
    }
}