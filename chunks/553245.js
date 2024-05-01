function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ExtendedMemoryLru: function() {
            return s
        }
    }), n("47120");
    var i = n("689320"),
        r = n("143806");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class s {
        get totalLength() {
            return this.primary.length + this.extended.length
        }
        get primaryCapacity() {
            return this.primary.capacity
        }
        get extendedCapacity() {
            return this.extended.capacity
        }
        clear() {
            this.primary.clear(), this.extended.clear()
        }
        has(e) {
            return this.primary.has(e)
        }
        hasExtended(e) {
            return this.primary.has(e) || this.extended.has(e)
        }
        get(e) {
            return this.primary.get(e)
        }
        put(e, t) {
            let n = this.primary.put(e, t);
            void 0 !== n && this.extended.put(n[0], n[1])
        }
        delete(e) {
            let t = this.primary.delete(e),
                n = this.extended.delete(e);
            return this.upstreamItems(), t || n
        }
        upstreamItems() {
            if (this.canUpstreamItems()) {
                for (let [e, t] of this.extended.entries())
                    if (this.primary.put(e, t), this.extended.delete(e), !this.canUpstreamItems()) break
            }
        }
        canUpstreamItems() {
            return this.primary.length < this.primary.capacity && this.extended.length > 0
        }
        entries() {
            return this.primary.entries()
        }
        keys() {
            return this.primary.keys()
        }
        values() {
            return this.primary.values()
        }
        allEntries() {
            return i.chain(this.extended.entries(), this.primary.entries())
        }
        allKeys() {
            return i.chain(this.extended.keys(), this.primary.keys())
        }
        allValues() {
            return i.chain(this.extended.values(), this.primary.values())
        }
        constructor(e, t) {
            a(this, "primary", void 0), a(this, "extended", void 0), this.primary = new r.Lru(e), this.extended = new r.Lru(t)
        }
    }
}