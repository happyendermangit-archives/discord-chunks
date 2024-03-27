function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        loadAssetMap: function() {
            return i
        }
    }), n("653041"), n("47120");
    async function i(e) {
        let t = new r,
            n = [];
        for (let i of Object.keys(e)) n.push(t.loadRemoteImage(i, e[i]));
        return await Promise.all(n), t
    }
    class r {
        async loadRemoteImage(e, t) {
            let n = new Image;
            return n.src = t, n.crossOrigin = "anonymous", await n.decode(), this.assets[e] = n, Promise.resolve()
        }
        get(e) {
            return this.assets[e]
        }
        has(e) {
            return null != this.assets[e]
        }
        constructor() {
            var e, t, n;
            e = this, n = {}, (t = "assets") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
}