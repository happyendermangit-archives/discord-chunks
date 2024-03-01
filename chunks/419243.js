function(e, _, E) {
    "use strict";
    let t;
    E.r(_), E.d(_, {
        ObjectStorage: function() {
            return o
        },
        impl: function() {
            return n
        }
    });
    try {
        t = window.localStorage
    } catch (e) {}
    try {
        delete window.localStorage
    } catch (e) {}
    class o {
        get(e, _) {
            return this.storage.hasOwnProperty(e) ? this.storage[e] : _
        }
        set(e, _) {
            this.storage[e] = _
        }
        remove(e) {
            delete this.storage[e]
        }
        clear() {
            this.storage = {}
        }
        stringify() {
            return JSON.stringify(this.storage)
        }
        asyncGetRaw(e, _) {
            return Promise.resolve(t.getItem(e))
        }
        setRaw(e, _) {
            t.setItem(e, _)
        }
        getAfterRefresh(e) {
            return Promise.resolve(this.get(e))
        }
        constructor() {
            this.storage = {}
        }
    }
    let n = ! function() {
        let e = "test";
        try {
            return t.setItem(e, e), t.removeItem(e), !0
        } catch (e) {
            return !1
        }
    }() ? new o : new class e {
        get(e, _) {
            let E = t.getItem(e);
            if (null != E) try {
                E = JSON.parse(E)
            } catch (e) {
                E = _
            } else E = _;
            return E
        }
        set(e, _) {
            t.setItem(e, JSON.stringify(_))
        }
        remove(e) {
            t.removeItem(e)
        }
        clear() {
            t.clear()
        }
        stringify() {
            return JSON.stringify(t || {})
        }
        asyncGetRaw(e, _) {
            return Promise.resolve(t.getItem(e))
        }
        setRaw(e, _) {
            t.setItem(e, _)
        }
        getAfterRefresh(e) {
            return Promise.resolve(this.get(e))
        }
    }
}