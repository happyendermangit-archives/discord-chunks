function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, s, a, o, l = n("392711"),
        u = n.n(l),
        d = n("442837"),
        _ = n("433517"),
        c = n("570140"),
        E = n("981631");
    let I = "GameLibraryViewStore",
        T = E.TableSortDirections.ASCENDING,
        f = E.GameTableListKeys.LAST_PLAYED,
        S = !1,
        A = u().debounce(() => {
            S = !1, m.emitChange()
        }, 200);
    class h extends(o = d.default.Store) {
        initialize() {
            var e;
            let t = null !== (e = _.Storage.get(I)) && void 0 !== e ? e : {};
            null != t.sortDirection && null != t.sortKey && (T = t.sortDirection, f = t.sortKey)
        }
        get sortDirection() {
            return T
        }
        get sortKey() {
            return f
        }
        get activeRowKey() {
            return i
        }
        get isNavigatingByKeyboard() {
            return S
        }
    }
    a = "GameLibraryViewStore", (s = "displayName") in(r = h) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a;
    let m = new h(c.default, {
        LIBRARY_TABLE_SORT_UPDATE: function(e) {
            let {
                direction: t,
                key: n
            } = e;
            T = t, f = n, _.Storage.set(I, {
                sortDirection: T,
                sortKey: f
            })
        },
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
            let {
                key: t,
                isKeyboardEvent: n
            } = e;
            n && (S = !0, A()), i = t
        }
    });
    t.default = m
}