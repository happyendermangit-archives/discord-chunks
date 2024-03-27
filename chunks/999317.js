function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateImageFromCanvas: function() {
            return a
        }
    });
    var i = n("304367"),
        l = n("404605");
    async function a(e) {
        let {
            assetsToLoad: t,
            drawImage: a,
            exportConfigs: s
        } = e, r = await (0, i.loadAssetMap)(t), o = n("480647").default, u = n("800044").default, d = document.createElement("canvas"), c = new o(d, r), f = new u, m = new l.default(c, f);
        a(m.canvas);
        let p = await m.export(s);
        return d.remove(), p
    }
}