function(e, t, n) {
    n("222007"), n("702976");
    var r = "undefined" != typeof Element,
        a = "function" == typeof Map,
        o = "function" == typeof Set,
        i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
    e.exports = function(e, t) {
        try {
            return function e(t, n) {
                if (t === n) return !0;
                if (t && n && "object" == typeof t && "object" == typeof n) {
                    var s, u, l, c;
                    if (t.constructor !== n.constructor) return !1;
                    if (Array.isArray(t)) {
                        if ((s = t.length) != n.length) return !1;
                        for (u = s; 0 != u--;)
                            if (!e(t[u], n[u])) return !1;
                        return !0
                    }
                    if (a && t instanceof Map && n instanceof Map) {
                        if (t.size !== n.size) return !1;
                        for (c = t.entries(); !(u = c.next()).done;)
                            if (!n.has(u.value[0])) return !1;
                        for (c = t.entries(); !(u = c.next()).done;)
                            if (!e(u.value[1], n.get(u.value[0]))) return !1;
                        return !0
                    }
                    if (o && t instanceof Set && n instanceof Set) {
                        if (t.size !== n.size) return !1;
                        for (c = t.entries(); !(u = c.next()).done;)
                            if (!n.has(u.value[0])) return !1;
                        return !0
                    }
                    if (i && ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
                        if ((s = t.length) != n.length) return !1;
                        for (u = s; 0 != u--;)
                            if (t[u] !== n[u]) return !1;
                        return !0
                    }
                    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
                    if (t.valueOf !== Object.prototype.valueOf && "function" == typeof t.valueOf && "function" == typeof n.valueOf) return t.valueOf() === n.valueOf();
                    if (t.toString !== Object.prototype.toString && "function" == typeof t.toString && "function" == typeof n.toString) return t.toString() === n.toString();
                    if ((s = (l = Object.keys(t)).length) !== Object.keys(n).length) return !1;
                    for (u = s; 0 != u--;)
                        if (!Object.prototype.hasOwnProperty.call(n, l[u])) return !1;
                    if (r && t instanceof Element) return !1;
                    for (u = s; 0 != u--;)
                        if (("_owner" !== l[u] && "__v" !== l[u] && "__o" !== l[u] || !t.$$typeof) && !e(t[l[u]], n[l[u]])) return !1;
                    return !0
                }
                return t != t && n != n
            }(e, t)
        } catch (e) {
            if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
            throw e
        }
    }
}