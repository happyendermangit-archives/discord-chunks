function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("913527"),
        a = n.n(s);

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = class e {
        overwriteHistory(e, t) {
            this.usageHistory = r().mapValues(null != e ? e : {}, e => ({
                ...e,
                frecency: -1
            })), null == t || t.forEach(e => {
                let {
                    key: t,
                    timestamp: n
                } = e;
                return this.track(t, n)
            }), this.markDirty()
        }
        markDirty() {
            this.dirty = !0
        }
        isDirty() {
            return this.dirty
        }
        track(e, t) {
            if (null == e) return;
            let n = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
            if (null == n) n = {
                totalUses: 1,
                recentUses: [null != t ? t : Date.now()],
                frecency: -1,
                score: 0
            };
            else
                for (n.frecency = -1, n.totalUses += 1, null == t ? n.recentUses.push(Date.now()) : (n.recentUses.push(t), n.recentUses.sort()); n.recentUses.length > this.maxSamples;) n.recentUses.shift();
            this.usageHistory[e] = n, this.markDirty()
        }
        getEntry(e) {
            return null == e ? null : (this.dirty && this.compute(), Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0)
        }
        getScore(e) {
            let t = this.getEntry(e);
            return null != t ? t.score : null
        }
        getFrecency(e) {
            let t = this.getEntry(e);
            return null != t ? t.frecency : null
        }
        compute() {
            let e = a()();
            r().forEach(this.usageHistory, (t, n) => {
                let {
                    totalUses: i,
                    recentUses: s,
                    frecency: o
                } = t;
                if (-1 !== o) return;
                let l = this.computeBonus(n) / 100;
                t.score = 0, r().forEach(s, (n, i) => {
                    if (i >= this.maxSamples) return !1;
                    let r = this.computeWeight(e.diff(a()(n), "days"));
                    t.score += l * r
                }), t.score > 0 ? (t.recentUses.length > 0 && (t.frecency = Math.ceil(t.score / s.length * i)), this.usageHistory[n] = t) : delete this.usageHistory[n]
            }), this.frequently = r()(this.usageHistory).map((e, t) => {
                let n = this.lookupKey(t);
                return null == n ? null : [n, e.frecency]
            }).filter(e => null !== e).sortBy(e => {
                let [t, n] = e;
                return -n
            }).map(e => {
                let [t] = e;
                return t
            }).take(this.numFrequentlyItems).value(), this.dirty = !1, this.afterCompute(this.usageHistory, this._frequently)
        }
        get frequently() {
            return this.dirty && this.compute(), this._frequently
        }
        set frequently(e) {
            this._frequently = e
        }
        constructor({
            computeBonus: e,
            computeWeight: t,
            lookupKey: n,
            afterCompute: i,
            numFrequentlyItems: r = 32,
            maxSamples: s = 10
        }) {
            o(this, "dirty", void 0), o(this, "_frequently", void 0), o(this, "numFrequentlyItems", void 0), o(this, "maxSamples", void 0), o(this, "computeBonus", void 0), o(this, "computeWeight", void 0), o(this, "lookupKey", void 0), o(this, "usageHistory", void 0), o(this, "afterCompute", void 0), this.computeBonus = e, this.computeWeight = t, this.afterCompute = i, this.lookupKey = n, this.usageHistory = {}, this.frequently = [], this.maxSamples = s, this.numFrequentlyItems = r, this.dirty = !1
        }
    }
}