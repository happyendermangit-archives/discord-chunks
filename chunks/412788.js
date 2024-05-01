function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("653041");
    var i, r, a, s, o = n("512722"),
        l = n.n(o),
        u = n("442837"),
        d = n("433517"),
        _ = n("570140");
    class c extends(i = u.default.Store) {
        static clearAll() {
            c.allStores.forEach(e => e.clear())
        }
        get persistKey() {
            return "".concat(this.getClass().displayName, "-snapshot")
        }
        clear() {
            d.Storage.remove(this.persistKey)
        }
        save() {
            d.Storage.set(this.persistKey, this.takeSnapshot())
        }
        readSnapshot(e) {
            let t = d.Storage.get(this.persistKey);
            return null == t || t.version !== e ? null : t.data
        }
        getClass() {
            return this.constructor
        }
        constructor(e) {
            super(_.default, {
                ...e,
                CLEAR_CACHES: () => this.clear(),
                WRITE_CACHES: () => this.save()
            }), l()(null != this.getClass().displayName, "Snapshot stores need a display name"), l()(!("CLEAR_CACHES" in e), "SnapshotStores cannot use the 'CLEAR_CACHES' action"), l()(!("WRITE_CACHES" in e), "SnapshotStores cannot use the 'WRITE_CACHES' action"), c.allStores.push(this)
        }
    }
    s = [], (a = "allStores") in(r = c) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s
}