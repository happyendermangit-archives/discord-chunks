function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ListActionType: function() {
            return r
        },
        default: function() {
            return a
        }
    });
    var i, r, s = n("942367");
    (i = r || (r = {})).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT", i.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX";

    function a(e, t) {
        var n, i, r, a, o, l, u;
        switch (t.type) {
            case s.ActionType.NAVIGATE_UP:
                ;
                return i = 0, {
                    ...n = e,
                    focusedIndex: Math.max(0, n.focusedIndex - 1)
                };
            case s.ActionType.NAVIGATE_DOWN:
                ;
                return a = 0, {
                    ...r = e,
                    focusedIndex: Math.min(r.focusedIndex + 1, r.itemCount - 1)
                };
            case s.ActionType.NAVIGATE_START:
                ;
                return o = 0, {
                    ...e,
                    focusedIndex: 0
                };
            case s.ActionType.NAVIGATE_END:
                ;
                return u = 0, {
                    ...l = e,
                    focusedIndex: l.itemCount - 1
                };
            case "UPDATE_ITEM_COUNT":
                return function(e, t) {
                    let {
                        itemCount: n
                    } = t;
                    return {
                        ...e,
                        itemCount: n,
                        focusedIndex: Math.min(n - 1, e.focusedIndex)
                    }
                }(e, t);
            case "SET_FOCUSED_INDEX":
                return function(e, t) {
                    let {
                        index: n
                    } = t;
                    return {
                        ...e,
                        focusedIndex: Math.max(0, Math.min(n, e.itemCount - 1))
                    }
                }(e, t);
            case s.ActionType.SELECT_FOCUSED_ITEM:
                break;
            default:
                console.warn("Listbox navigator was given an unhandled action ".concat(t.type))
        }
        return e
    }
}