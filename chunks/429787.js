function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuActionType: function() {
            return i
        },
        default: function() {
            return c
        }
    }), n("424973"), n("222007"), n("70102");
    var i, s, r = n("942367");

    function a(e, t) {
        return e.findIndex(e => t === e.key)
    }

    function o(e) {
        return e.focusPath[e.focusPath.length - 1]
    }

    function l(e) {
        let t = e.items;
        for (let n = 0; n < e.focusPath.length - 1; n++) {
            if (null == t) return;
            let i = a(t, e.focusPath[n]);
            t = t[i].children
        }
        return t
    }

    function u(e, t) {
        let n = e,
            i = [];
        for (let e = 0; e < t.length && null != n; e++) {
            let s = t[e],
                r = a(n, s);
            if (r < 0 || r >= n.length) {
                let e = n[0];
                null != e && i.push(e.key);
                break
            }
            i.push(s), n = n[r].children
        }
        return i
    }(s = i || (i = {})).UPDATE_ITEMS = "UPDATE_ITEMS", s.SET_FOCUS_PATH = "SET_FOCUS_PATH";

    function d(e) {
        let t = o(e),
            n = l(e);
        return null == n ? -1 : a(n, t)
    }

    function c(e, t) {
        switch (t.type) {
            case r.ActionType.NAVIGATE_UP:
                return function(e, t) {
                    let n = o(e),
                        i = l(e);
                    if (null == i) return e;
                    let s = a(i, n),
                        r = (s - 1) % i.length;
                    if (r < 0 && (r = i.length - 1), null == i[r]) return e;
                    let u = {
                        ...e,
                        focusPath: [...e.focusPath.slice(0, -1), i[r].key]
                    };
                    return {
                        ...u,
                        focusIndex: d(u)
                    }
                }(e, 0);
            case r.ActionType.NAVIGATE_DOWN:
                return function(e, t) {
                    let n = o(e),
                        i = l(e);
                    if (null == i) return e;
                    let s = a(i, n),
                        r = (s + 1) % i.length;
                    if (null == i[r]) return e;
                    let u = {
                        ...e,
                        focusPath: [...e.focusPath.slice(0, -1), i[r].key]
                    };
                    return {
                        ...u,
                        focusIndex: d(u)
                    }
                }(e, 0);
            case r.ActionType.NAVIGATE_IN:
                return function(e, t) {
                    var n;
                    let i = o(e),
                        s = l(e);
                    if (null == s) return e;
                    let r = s[a(s, i)],
                        u = null == r ? void 0 : null === (n = r.children) || void 0 === n ? void 0 : n[0];
                    if (null == u) return e;
                    let c = {
                        ...e,
                        focusPath: [...e.focusPath, u.key]
                    };
                    return {
                        ...c,
                        focusIndex: d(c)
                    }
                }(e, 0);
            case r.ActionType.NAVIGATE_OUT:
                return function(e, t) {
                    if (e.focusPath.length <= 1) return e;
                    let n = {
                        ...e,
                        focusPath: e.focusPath.slice(0, -1)
                    };
                    return {
                        ...n,
                        focusIndex: d(n)
                    }
                }(e, 0);
            case "UPDATE_ITEMS":
                return function(e, t) {
                    let {
                        items: n
                    } = t, i = {
                        ...e,
                        items: n,
                        focusPath: u(n, e.focusPath)
                    };
                    return {
                        ...i,
                        focusIndex: d(i)
                    }
                }(e, t);
            case "SET_FOCUS_PATH":
                return function(e, t) {
                    let {
                        path: n
                    } = t, i = {
                        ...e,
                        focusPath: u(e.items, n)
                    };
                    return {
                        ...i,
                        focusIndex: d(i)
                    }
                }(e, t);
            case r.ActionType.SELECT_FOCUSED_ITEM:
                break;
            default:
                throw Error("Menu navigator was given an unhandled action ".concat(t.type))
        }
        return e
    }
}