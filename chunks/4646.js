function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    async function r(e) {
        let t = new a,
            n = [];
        for (let i of Object.keys(e)) n.push(t.loadRemoteImage(i, e[i]));
        return await Promise.all(n), t
    }
    n.r(t), n.d(t, {
        loadAssetMap: function() {
            return r
        }
    }), n("653041"), n("47120");
    class a {
        loadFonts() {
            return Promise.resolve()
        }
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
            i(this, "assets", {}), i(this, "fontManager", void 0)
        }
    }
}