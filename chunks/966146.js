function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MediaSinkWantsLadder: function() {
            return s
        }
    }), n("411104"), n("47120"), n("653041");
    var i = n("65154");

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class s {
        getMaxSinkValue(e) {
            if (e < 0) throw Error("getMaxSinkValue: Requested " + e);
            let t = this.orderedLadder[0].wantValue;
            for (let {
                    pixelCount: n,
                    wantValue: i
                }
                of this.orderedLadder) {
                if (n * e > this.pixelBudget) break;
                t = i
            }
            return t
        }
        getResolution(e) {
            let t = null;
            for (let n of this.orderedLadder)
                if (e >= n.wantValue) t = n;
                else break;
            return {
                width: (t = null != t ? t : this.orderedLadder[0]).width,
                height: t.height,
                budgetPortion: t.budgetPortion,
                mutedFramerate: t.mutedFramerate,
                framerate: t.framerate
            }
        }
        static calculateLadder(e) {
            let t = new Set([0, 4, 8, 10]),
                n = [];
            for (let i = 1; i < 4096; ++i) {
                let r = 16 * i / 9;
                if (t.has(r % 16) && t.has(i % 16)) {
                    let t = r * i;
                    n.push({
                        pixelCount: t,
                        width: r,
                        height: i,
                        budgetPortion: t / e,
                        wantValue: 0
                    })
                }
            }
            let r = {},
                a = 0,
                o = 100;
            for (let t = 1; t <= 25; ++t) {
                let l = 0,
                    u = 0,
                    d = 0;
                for (let i of n) {
                    if (i.pixelCount * t > e) break;
                    l = i.width, u = i.height, d = i.budgetPortion
                }
                if (a !== l) {
                    let e = s.getMutedFramerate(o);
                    r[o] = {
                        width: l,
                        height: u,
                        budgetPortion: d,
                        mutedFramerate: e,
                        framerate: i.VIDEO_QUALITY_FRAMERATE
                    }, o -= 10, a = l
                }
            }
            return r
        }
        static getMutedFramerate(e) {
            return e <= 20 ? i.VIDEO_QUALITY_FRAMERATE_MUTED_2 : i.VIDEO_QUALITY_FRAMERATE_MUTED
        }
        static calculateOrderedLadder(e) {
            let t = [];
            for (let n of Object.keys(e).map(e => Number(e)).sort((e, t) => e - t)) {
                if (0 === n) continue;
                let i = e[n];
                t.push({
                    pixelCount: i.width * i.height,
                    wantValue: n,
                    ...i
                })
            }
            return t
        }
        constructor(e = i.defaultVideoQualityOptions) {
            r(this, "pixelBudget", void 0), r(this, "ladder", void 0), r(this, "orderedLadder", void 0);
            let {
                width: t,
                height: n
            } = e.videoBudget;
            if (t <= 0 || n <= 0) throw Error("Invalid argument");
            this.pixelBudget = t * n, this.ladder = s.calculateLadder(this.pixelBudget), this.orderedLadder = s.calculateOrderedLadder(this.ladder)
        }
    }
}