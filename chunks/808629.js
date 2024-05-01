function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuActionType: function() {
            return i
        },
        default: function() {
            return _
        }
    }), n("653041"), n("47120"), n("411104");
    var i, r, s = n("536895");

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
            let r = t[e],
                s = a(n, r);
            if (s < 0 || s >= n.length) {
                let e = n[0];
                null != e && i.push(e.key);
                break
            }
            i.push(r), n = n[s].children
        }
        return i
    }(r = i || (i = {})).UPDATE_ITEMS = "UPDATE_ITEMS", r.SET_FOCUS_PATH = "SET_FOCUS_PATH";

    function d(e) {
        let t = o(e),
            n = l(e);
        return null == n ? -1 : a(n, t)
    }

    function _(e, t) {
        switch (t.type) {
            case s.ActionType.NAVIGATE_UP:
                return function(e, t) {
                    let n = o(e),
                        i = l(e);
                    if (null == i) return e;
                    let r = (a(i, n) - 1) % i.length;
                    if (r < 0 && (r = i.length - 1), null == i[r]) return e;
                    let s = {
                        ...e,
                        focusPath: [...e.focusPath.slice(0, -1), i[r].key]
                    };
                    return {
                        ...s,
                        focusIndex: d(s)
                    }
                }(e, 0);
            case s.ActionType.NAVIGATE_DOWN:
                return function(e, t) {
                    let n = o(e),
                        i = l(e);
                    if (null == i) return e;
                    let r = (a(i, n) + 1) % i.length;
                    if (null == i[r]) return e;
                    let s = {
                        ...e,
                        focusPath: [...e.focusPath.slice(0, -1), i[r].key]
                    };
                    return {
                        ...s,
                        focusIndex: d(s)
                    }
                }(e, 0);
            case s.ActionType.NAVIGATE_IN:
                return function(e, t) {
                    var n;
                    let i = o(e),
                        r = l(e);
                    if (null == r) return e;
                    let s = r[a(r, i)],
                        u = null == s ? void 0 : null === (n = s.children) || void 0 === n ? void 0 : n[0];
                    if (null == u) return e;
                    let _ = {
                        ...e,
                        focusPath: [...e.focusPath, u.key]
                    };
                    return {
                        ..._,
                        focusIndex: d(_)
                    }
                }(e, 0);
            case s.ActionType.NAVIGATE_OUT:
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
            case s.ActionType.SELECT_FOCUSED_ITEM:
                break;
            default:
                throw Error("Menu navigator was given an unhandled action ".concat(t.type))
        }
        return e
    }
}