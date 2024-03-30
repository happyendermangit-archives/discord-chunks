function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ListActionType: function() {
            return o
        },
        default: function() {
            return s
        }
    });
    var r, o, i = n("639340");

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function u(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }(r = o || (o = {})).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT", r.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX";

    function s(e, t) {
        var n, r, o, s, l, c, f, d, _, E, p;
        switch (t.type) {
            case i.ActionType.NAVIGATE_UP:
                ;
                return r = 0, u(a({}, n = e), {
                    focusedIndex: Math.max(0, n.focusedIndex - 1)
                });
            case i.ActionType.NAVIGATE_DOWN:
                ;
                return s = 0, u(a({}, o = e), {
                    focusedIndex: Math.min(o.focusedIndex + 1, o.itemCount - 1)
                });
            case i.ActionType.NAVIGATE_START:
                ;
                return l = 0, u(a({}, e), {
                    focusedIndex: 0
                });
            case i.ActionType.NAVIGATE_END:
                ;
                return f = 0, u(a({}, c = e), {
                    focusedIndex: c.itemCount - 1
                });
            case "UPDATE_ITEM_COUNT":
                ;
                return d = e, _ = t.itemCount, u(a({}, d), {
                    itemCount: _,
                    focusedIndex: Math.min(_ - 1, d.focusedIndex)
                });
            case "SET_FOCUSED_INDEX":
                ;
                return E = e, p = t.index, u(a({}, E), {
                    focusedIndex: Math.max(0, Math.min(p, E.itemCount - 1))
                });
            case i.ActionType.SELECT_FOCUSED_ITEM:
                break;
            default:
                console.warn("Listbox navigator was given an unhandled action ".concat(t.type))
        }
        return e
    }
}