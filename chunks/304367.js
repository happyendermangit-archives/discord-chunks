function(e, t, n) {
    "use strict";
    async function i(e) {
        let t = new l,
            n = [];
        for (let i of Object.keys(e)) n.push(t.loadRemoteImage(i, e[i]));
        return await Promise.all(n), t
    }
    n.r(t), n.d(t, {
        loadAssetMap: function() {
            return i
        }
    }), n("424973"), n("222007");
    class l {
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
            this.assets = {}
        }
    }
}