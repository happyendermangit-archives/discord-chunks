function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var s = n("917351"),
        r = n.n(s),
        a = n("446674"),
        o = n("95410"),
        l = n("913144"),
        u = n("49111");
    let d = "GameLibraryViewStore",
        c = u.TableSortDirections.ASCENDING,
        f = u.GameTableListKeys.LAST_PLAYED,
        _ = !1,
        E = r.debounce(() => {
            _ = !1, g.emitChange()
        }, 200);
    class h extends a.default.Store {
        initialize() {
            var e;
            let t = null !== (e = o.default.get(d)) && void 0 !== e ? e : {};
            null != t.sortDirection && null != t.sortKey && (c = t.sortDirection, f = t.sortKey)
        }
        get sortDirection() {
            return c
        }
        get sortKey() {
            return f
        }
        get activeRowKey() {
            return i
        }
        get isNavigatingByKeyboard() {
            return _
        }
    }
    h.displayName = "GameLibraryViewStore";
    let g = new h(l.default, {
        LIBRARY_TABLE_SORT_UPDATE: function(e) {
            let {
                direction: t,
                key: n
            } = e;
            c = t, f = n, o.default.set(d, {
                sortDirection: c,
                sortKey: f
            })
        },
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
            let {
                key: t,
                isKeyboardEvent: n
            } = e;
            n && (_ = !0, E()), i = t
        }
    });
    var m = g
}