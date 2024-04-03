function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, d;
    n.r(t), n.d(t, {
        DiscordCanvasExporterOutputFormats: function() {
            return s
        },
        DrawResultStatus: function() {
            return a
        },
        FillMode: function() {
            return r
        },
        TextTruncationMethod: function() {
            return i
        }
    }), (o = i || (i = {}))[o.None = 0] = "None", o[o.Truncate = 1] = "Truncate", o[o.Wrap = 2] = "Wrap", (l = r || (r = {}))[l.Stretch = 0] = "Stretch", l[l.Contain = 1] = "Contain", l[l.Cover = 2] = "Cover", (u = s || (s = {}))[u.Base64 = 0] = "Base64", u[u.Blob = 1] = "Blob", u[u.File = 2] = "File", u[u.CloudUpload = 3] = "CloudUpload", (d = a || (a = {}))[d.Success = 0] = "Success", d[d.Failure = 1] = "Failure", d[d.ImageNotLoaded = 2] = "ImageNotLoaded"
}