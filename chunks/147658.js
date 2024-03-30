function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        applyAggregateErrorsToEvent: function() {
            return a
        }
    });
    var r = n("46834"),
        i = n("336344");

    function a(t, e, n = 250, a, u, l, c) {
        if (!l.exception || !l.exception.values || !c || !(0, r.isInstanceOf)(c.originalException, Error)) return;
        let d = l.exception.values.length > 0 ? l.exception.values[l.exception.values.length - 1] : void 0;
        d && (l.exception.values = function(t, e) {
            return t.map(t => (t.value && (t.value = (0, i.truncate)(t.value, e)), t))
        }(function t(e, n, i, a, u, l, c, d) {
            if (l.length >= i + 1) return l;
            let f = [...l];
            if ((0, r.isInstanceOf)(a[u], Error)) {
                o(c, d);
                let r = e(n, a[u]),
                    l = f.length;
                s(r, u, l, d), f = t(e, n, i, a[u], u, [r, ...f], r, l)
            }
            return Array.isArray(a.errors) && a.errors.forEach((a, l) => {
                if ((0, r.isInstanceOf)(a, Error)) {
                    o(c, d);
                    let r = e(n, a),
                        p = f.length;
                    s(r, `errors[${l}]`, p, d), f = t(e, n, i, a, u, [r, ...f], r, p)
                }
            }), f
        }(t, e, u, c.originalException, a, l.exception.values, d, 0), n))
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