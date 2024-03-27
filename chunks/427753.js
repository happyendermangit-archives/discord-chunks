function(e) {
    var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
    e.exports = function(e, a) {
        try {
            return function e(a, o) {
                if (a === o) return !0;
                if (a && o && "object" == typeof a && "object" == typeof o) {
                    var s, u, c, l;
                    if (a.constructor !== o.constructor) return !1;
                    if (Array.isArray(a)) {
                        if ((s = a.length) != o.length) return !1;
                        for (u = s; 0 != u--;)
                            if (!e(a[u], o[u])) return !1;
                        return !0
                    }
                    if (n && a instanceof Map && o instanceof Map) {
                        if (a.size !== o.size) return !1;
                        for (l = a.entries(); !(u = l.next()).done;)
                            if (!o.has(u.value[0])) return !1;
                        for (l = a.entries(); !(u = l.next()).done;)
                            if (!e(u.value[1], o.get(u.value[0]))) return !1;
                        return !0
                    }
                    if (r && a instanceof Set && o instanceof Set) {
                        if (a.size !== o.size) return !1;
                        for (l = a.entries(); !(u = l.next()).done;)
                            if (!o.has(u.value[0])) return !1;
                        return !0
                    }
                    if (i && ArrayBuffer.isView(a) && ArrayBuffer.isView(o)) {
                        if ((s = a.length) != o.length) return !1;
                        for (u = s; 0 != u--;)
                            if (a[u] !== o[u]) return !1;
                        return !0
                    }
                    if (a.constructor === RegExp) return a.source === o.source && a.flags === o.flags;
                    if (a.valueOf !== Object.prototype.valueOf && "function" == typeof a.valueOf && "function" == typeof o.valueOf) return a.valueOf() === o.valueOf();
                    if (a.toString !== Object.prototype.toString && "function" == typeof a.toString && "function" == typeof o.toString) return a.toString() === o.toString();
                    if ((s = (c = Object.keys(a)).length) !== Object.keys(o).length) return !1;
                    for (u = s; 0 != u--;)
                        if (!Object.prototype.hasOwnProperty.call(o, c[u])) return !1;
                    if (t && a instanceof Element) return !1;
                    for (u = s; 0 != u--;)
                        if (("_owner" !== c[u] && "__v" !== c[u] && "__o" !== c[u] || !a.$$typeof) && !e(a[c[u]], o[c[u]])) return !1;
                    return !0
                }
                return a != a && o != o
            }(e, a)
        } catch (e) {
            if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
            throw e
        }
    }
}