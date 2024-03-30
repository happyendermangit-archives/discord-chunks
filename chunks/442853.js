function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        addNonEnumerableProperty: function() {
            return s
        },
        convertToPlainObject: function() {
            return d
        },
        dropUndefinedKeys: function() {
            return _
        },
        extractExceptionKeysForMessage: function() {
            return h
        },
        fill: function() {
            return o
        },
        getOriginalFunction: function() {
            return l
        },
        markFunctionWrapped: function() {
            return u
        },
        urlEncode: function() {
            return c
        }
    });
    var r = n("829919"),
        i = n("46834"),
        a = n("336344");

    function o(t, e, n) {
        if (!(e in t)) return;
        let r = t[e],
            i = n(r);
        if ("function" == typeof i) try {
            u(i, r)
        } catch (t) {}
        t[e] = i
    }

    function s(t, e, n) {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }

    function u(t, e) {
        let n = e.prototype || {};
        t.prototype = e.prototype = n, s(t, "__sentry_original__", e)
    }

    function l(t) {
        return t.__sentry_original__
    }

    function c(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
    }

    function d(t) {
        if ((0, i.isError)(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...p(t)
        };
        if (!(0, i.isEvent)(t)) return t;
        {
            let e = {
                type: t.type,
                target: f(t.target),
                currentTarget: f(t.currentTarget),
                ...p(t)
            };
            return "undefined" != typeof CustomEvent && (0, i.isInstanceOf)(t, CustomEvent) && (e.detail = t.detail), e
        }
    }

    function f(t) {
        try {
            return (0, i.isElement)(t) ? (0, r.htmlTreeAsString)(t) : Object.prototype.toString.call(t)
        } catch (t) {
            return "<unknown>"
        }
    }

    function p(t) {
        if ("object" != typeof t || null === t) return {};
        {
            let e = {};
            for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }
    }

    function h(t, e = 40) {
        let n = Object.keys(d(t));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= e) return (0, a.truncate)(n[0], e);
        for (let t = n.length; t > 0; t--) {
            let r = n.slice(0, t).join(", ");
            if (!(r.length > e)) {
                if (t === n.length) return r;
                return (0, a.truncate)(r, e)
            }
        }
        return ""
    }

    function _(t) {
        return function t(e, n) {
            if ((0, i.isPlainObject)(e)) {
                let r = n.get(e);
                if (void 0 !== r) return r;
                let i = {};
                for (let r of (n.set(e, i), Object.keys(e))) void 0 !== e[r] && (i[r] = t(e[r], n));
                return i
            }
            if (Array.isArray(e)) {
                let r = n.get(e);
                if (void 0 !== r) return r;
                let i = [];
                return n.set(e, i), e.forEach(e => {
                    i.push(t(e, n))
                }), i
            }
            return e
        }(t, new Map)
    }
}