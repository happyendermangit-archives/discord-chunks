function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GridActionType: function() {
            return o
        },
        default: function() {
            return c
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
    }

    function s(e, t) {
        return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t)
    }

    function l(e, t) {
        return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t)
    }(r = o || (o = {})).UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS", r.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION";

    function c(e, t) {
        var n, r, o, c, f, d, _, E, p, m, y, I, h, O, T, S, v, g, A, b, N, R, C, P, D, L, M, U, w, k;
        switch (t.type) {
            case i.ActionType.NAVIGATE_UP:
                ;
                return r = 0, o = s(0, (n = e).focusedY - 1), u(a({}, n), {
                    focusedX: l(n.columnCounts[o] - 1, n.focusedX),
                    focusedY: o
                });
            case i.ActionType.NAVIGATE_DOWN:
                ;
                return f = 0, d = l((c = e).focusedY + 1, c.columnCounts.length - 1), u(a({}, c), {
                    focusedX: l(c.columnCounts[d] - 1, c.focusedX),
                    focusedY: d
                });
            case i.ActionType.NAVIGATE_RIGHT:
                ;
                return E = 0, m = (p = (_ = e).focusedY !== _.columnCounts.length - 1 && _.focusedX + 1 === _.columnCounts[_.focusedY]) ? 0 : l(_.focusedX + 1, _.columnCounts[_.focusedY] - 1), y = p ? _.focusedY + 1 : _.focusedY, u(a({}, _), {
                    focusedX: m,
                    focusedY: y
                });
            case i.ActionType.NAVIGATE_LEFT:
                ;
                return h = 0, T = (O = 0 !== (I = e).focusedY && 0 === I.focusedX) ? I.focusedY - 1 : I.focusedY, S = O ? I.columnCounts[T] - 1 : s(0, I.focusedX - 1), u(a({}, I), {
                    focusedX: S,
                    focusedY: T
                });
            case i.ActionType.NAVIGATE_INLINE_START:
                ;
                return v = 0, u(a({}, e), {
                    focusedX: 0
                });
            case i.ActionType.NAVIGATE_INLINE_END:
                ;
                return A = 0, u(a({}, g = e), {
                    focusedX: g.columnCounts[g.focusedY] - 1
                });
            case i.ActionType.NAVIGATE_START:
                ;
                return b = 0, u(a({}, e), {
                    focusedX: 0,
                    focusedY: 0
                });
            case i.ActionType.NAVIGATE_END:
                ;
                return R = 0, C = (N = e).columnCounts.length - 1, u(a({}, N), {
                    focusedX: N.columnCounts[C] - 1,
                    focusedY: C
                });
            case "UPDATE_COLUMN_COUNTS":
                ;
                return P = e, L = l(s(0, (D = t.columnCounts).length - 1), P.focusedY), u(a({}, P), {
                    columnCounts: D,
                    focusedX: l(null == D[L] ? 0 : D[L] - 1, P.focusedX),
                    focusedY: L
                });
            case "SET_FOCUSED_POSITION":
                ;
                return M = e, w = (U = t).x, k = s(0, l(U.y, M.columnCounts.length - 1)), u(a({}, M), {
                    focusedX: s(0, l(w, M.columnCounts[k] - 1)),
                    focusedY: k
                });
            case i.ActionType.SELECT_FOCUSED_ITEM:
                break;
            default:
                console.warn("Grid navigator was given an unhandled action ".concat(t.type))
        }
        return e
    }
}