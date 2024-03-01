function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ExtendedMemoryLru: function() {
            return s
        }
    }), n("222007");
    var a = n("475838"),
        l = n("185496");
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
            return a.chain(this.extended.entries(), this.primary.entries())
        }
        allKeys() {
            return a.chain(this.extended.keys(), this.primary.keys())
        }
        allValues() {
            return a.chain(this.extended.values(), this.primary.values())
        }
        constructor(e, t) {
            this.primary = new l.Lru(e), this.extended = new l.Lru(t)
        }
    }
}