function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateImageFromCanvas: function() {
            return a
        }
    }), n("411104");
    var i = n("4646"),
        r = n("665672");
    async function a(e) {
        let {
            assetsToLoad: t,
            drawImage: a,
            exportConfigs: s
        } = e, o = await (0, i.loadAssetMap)(t);
        await o.loadFonts();
        {
            let e = n("503082").default,
                t = n("97008").default,
                i = document.createElement("canvas"),
                l = new e(i, o),
                u = new t,
                d = new r.default(l, u);
            a(d.canvas);
            let _ = await d.export(s);
            return i.remove(), _
        }
    }
}