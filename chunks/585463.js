function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GridActionType: function() {
            return s
        },
        default: function() {
            return l
        }
    });
    var i, s, r = n("942367");

    function a(e, t) {
        return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t)
    }

    function o(e, t) {
        return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t)
    }(i = s || (s = {})).UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS", i.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION";

    function l(e, t) {
        var n, i, s, l;
        switch (t.type) {
            case r.ActionType.NAVIGATE_UP:
                return function(e, t) {
                    let n = a(0, e.focusedY - 1);
                    return {
                        ...e,
                        focusedX: o(e.columnCounts[n] - 1, e.focusedX),
                        focusedY: n
                    }
                }(e, 0);
            case r.ActionType.NAVIGATE_DOWN:
                return function(e, t) {
                    let n = o(e.focusedY + 1, e.columnCounts.length - 1);
                    return {
                        ...e,
                        focusedX: o(e.columnCounts[n] - 1, e.focusedX),
                        focusedY: n
                    }
                }(e, 0);
            case r.ActionType.NAVIGATE_RIGHT:
                return function(e, t) {
                    let n = e.focusedY === e.columnCounts.length - 1,
                        i = !n && e.focusedX + 1 === e.columnCounts[e.focusedY],
                        s = i ? 0 : o(e.focusedX + 1, e.columnCounts[e.focusedY] - 1),
                        r = i ? e.focusedY + 1 : e.focusedY;
                    return {
                        ...e,
                        focusedX: s,
                        focusedY: r
                    }
                }(e, 0);
            case r.ActionType.NAVIGATE_LEFT:
                return function(e, t) {
                    let n = 0 === e.focusedY,
                        i = !n && 0 === e.focusedX,
                        s = i ? e.focusedY - 1 : e.focusedY,
                        r = i ? e.columnCounts[s] - 1 : a(0, e.focusedX - 1);
                    return {
                        ...e,
                        focusedX: r,
                        focusedY: s
                    }
                }(e, 0);
            case r.ActionType.NAVIGATE_INLINE_START:
                ;
                return n = 0, {
                    ...e,
                    focusedX: 0
                };
            case r.ActionType.NAVIGATE_INLINE_END:
                ;
                return s = 0, {
                    ...i = e,
                    focusedX: i.columnCounts[i.focusedY] - 1
                };
            case r.ActionType.NAVIGATE_START:
                ;
                return l = 0, {
                    ...e,
                    focusedX: 0,
                    focusedY: 0
                };
            case r.ActionType.NAVIGATE_END:
                return function(e, t) {
                    let n = e.columnCounts.length - 1;
                    return {
                        ...e,
                        focusedX: e.columnCounts[n] - 1,
                        focusedY: n
                    }
                }(e, 0);
            case "UPDATE_COLUMN_COUNTS":
                return function(e, t) {
                    let {
                        columnCounts: n
                    } = t, i = o(a(0, n.length - 1), e.focusedY);
                    return {
                        ...e,
                        columnCounts: n,
                        focusedX: o(null == n[i] ? 0 : n[i] - 1, e.focusedX),
                        focusedY: i
                    }
                }(e, t);
            case "SET_FOCUSED_POSITION":
                return function(e, t) {
                    let {
                        x: n,
                        y: i
                    } = t, s = a(0, o(i, e.columnCounts.length - 1));
                    return {
                        ...e,
                        focusedX: a(0, o(n, e.columnCounts[s] - 1)),
                        focusedY: s
                    }
                }(e, t);
            case r.ActionType.SELECT_FOCUSED_ITEM:
                break;
            default:
                console.warn("Grid navigator was given an unhandled action ".concat(t.type))
        }
        return e
    }
}