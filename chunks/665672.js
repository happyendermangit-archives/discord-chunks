function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("512722"),
        r = n.n(i);

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class a {
        setExporter(e) {
            this.exporter = e
        }
        export (e) {
            r()(null != this.exporter, "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.");
            let t = this.canvas.getCanvasForExport();
            return r()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e)
        }
        constructor(e, t) {
            s(this, "canvas", void 0), s(this, "exporter", void 0), this.canvas = e, this.exporter = t
        }
    }
}