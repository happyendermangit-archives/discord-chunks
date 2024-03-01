function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("424973"), n("222007");
    var s = n("917351"),
        i = n.n(s),
        r = n("866227"),
        a = n.n(r),
        o = class e {
            overwriteHistory(e, t) {
                this.usageHistory = i.mapValues(null != e ? e : {}, e => ({
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
                if (null == e) return null;
                this.dirty && this.compute();
                let t = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
                return t
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
                let e = a();
                i.forEach(this.usageHistory, (t, n) => {
                    let {
                        totalUses: s,
                        recentUses: r,
                        frecency: o
                    } = t;
                    if (-1 !== o) return;
                    let d = this.computeBonus(n) / 100;
                    t.score = 0, i.forEach(r, (n, s) => {
                        if (s >= this.maxSamples) return !1;
                        let i = this.computeWeight(e.diff(a(n), "days"));
                        t.score += d * i
                    }), t.score > 0 ? (t.recentUses.length > 0 && (t.frecency = Math.ceil(s * (t.score / r.length))), this.usageHistory[n] = t) : delete this.usageHistory[n]
                }), this.frequently = i(this.usageHistory).map((e, t) => {
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
                afterCompute: s,
                numFrequentlyItems: i = 32,
                maxSamples: r = 10
            }) {
                this.computeBonus = e, this.computeWeight = t, this.afterCompute = s, this.lookupKey = n, this.usageHistory = {}, this.frequently = [], this.maxSamples = r, this.numFrequentlyItems = i, this.dirty = !1
            }
        }
}