function(e, t, n) {
    "use strict";
    var r, o, i, a, u, s, l, c;
    n.r(t), n.d(t, {
        DiscordCanvasExporterOutputFormats: function() {
            return i
        },
        DrawResultStatus: function() {
            return a
        },
        FillMode: function() {
            return o
        },
        TextTruncationMethod: function() {
            return r
        }
    }), (u = r || (r = {}))[u.None = 0] = "None", u[u.Truncate = 1] = "Truncate", u[u.Wrap = 2] = "Wrap", (s = o || (o = {}))[s.Stretch = 0] = "Stretch", s[s.Contain = 1] = "Contain", s[s.Cover = 2] = "Cover", (l = i || (i = {}))[l.Base64 = 0] = "Base64", l[l.Blob = 1] = "Blob", l[l.File = 2] = "File", (c = a || (a = {}))[c.Success = 0] = "Success", c[c.Failure = 1] = "Failure", c[c.ImageNotLoaded = 2] = "ImageNotLoaded"
}