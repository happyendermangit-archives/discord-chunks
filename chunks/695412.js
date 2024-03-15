function(e, t, n) {
    "use strict";
    var i, l, a, s, r, o, u, d;
    n.r(t), n.d(t, {
        TextTruncationMethod: function() {
            return i
        },
        FillMode: function() {
            return l
        },
        DiscordCanvasExporterOutputFormats: function() {
            return a
        },
        DrawResultStatus: function() {
            return s
        }
    }), (r = i || (i = {}))[r.None = 0] = "None", r[r.Truncate = 1] = "Truncate", r[r.Wrap = 2] = "Wrap", (o = l || (l = {}))[o.Stretch = 0] = "Stretch", o[o.Contain = 1] = "Contain", o[o.Cover = 2] = "Cover", (u = a || (a = {}))[u.Base64 = 0] = "Base64", u[u.Blob = 1] = "Blob", u[u.File = 2] = "File", (d = s || (s = {}))[d.Success = 0] = "Success", d[d.Failure = 1] = "Failure", d[d.ImageNotLoaded = 2] = "ImageNotLoaded"
}