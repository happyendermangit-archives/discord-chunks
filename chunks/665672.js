function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("512722"),
        r = n.n(i);

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class s {
        setExporter(e) {
            this.exporter = e
        }
        export (e) {
            r()(null != this.exporter, "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.");
            let t = this.canvas.getCanvasForExport();
            return r()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e)
        }
        constructor(e, t) {
            a(this, "canvas", void 0), a(this, "exporter", void 0), this.canvas = e, this.exporter = t
        }
    }
}