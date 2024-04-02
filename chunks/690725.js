function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateImageFromCanvas: function() {
            return s
        }
    });
    var i = n("4646"),
        r = n("665672");
    async function s(e) {
        let {
            assetsToLoad: t,
            drawImage: s,
            exportConfigs: a
        } = e, o = await (0, i.loadAssetMap)(t);
        await o.loadFonts();
        let l = n("503082").default,
            u = n("97008").default,
            d = document.createElement("canvas"),
            _ = new l(d, o),
            c = new u,
            E = new r.default(_, c);
        s(E.canvas);
        let I = await E.export(a);
        return d.remove(), I
    }
}