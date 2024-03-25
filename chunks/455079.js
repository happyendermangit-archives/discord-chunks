function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("424973");
    var i, s, r = n("627445"),
        a = n.n(r),
        o = n("446674"),
        l = n("95410"),
        u = n("913144");
    (i = class e extends o.default.Store {
        static clearAll() {
            e.allStores.forEach(e => e.clear())
        }
        get persistKey() {
            return "".concat(this.getClass().displayName, "-snapshot")
        }
        clear() {
            l.Storage.remove(this.persistKey)
        }
        save() {
            l.Storage.set(this.persistKey, this.takeSnapshot())
        }
        readSnapshot(e) {
            let t = l.Storage.get(this.persistKey);
            return null == t || t.version !== e ? null : t.data
        }
        getClass() {
            return this.constructor
        }
        constructor(t) {
            super(u.default, {
                ...t,
                CLEAR_CACHES: () => this.clear(),
                WRITE_CACHES: () => this.save()
            }), a(null != this.getClass().displayName, "Snapshot stores need a display name"), a(!("CLEAR_CACHES" in t), "SnapshotStores cannot use the 'CLEAR_CACHES' action"), a(!("WRITE_CACHES" in t), "SnapshotStores cannot use the 'WRITE_CACHES' action"), e.allStores.push(this)
        }
    }).allStores = [], s = i
}