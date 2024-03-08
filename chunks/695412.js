function(e, t, n) {
    "use strict";
    var i, l, a, s, r, o;
    n.r(t), n.d(t, {
        TextTruncationMethod: function() {
            return i
        },
        DiscordCanvasExporterOutputFormats: function() {
            return l
        },
        DrawResultStatus: function() {
            return a
        }
    }), (s = i || (i = {}))[s.None = 0] = "None", s[s.Truncate = 1] = "Truncate", s[s.Wrap = 2] = "Wrap", (r = l || (l = {}))[r.Base64 = 0] = "Base64", r[r.Blob = 1] = "Blob", r[r.File = 2] = "File", (o = a || (a = {}))[o.Success = 0] = "Success", o[o.Failure = 1] = "Failure", o[o.ImageNotLoaded = 2] = "ImageNotLoaded"
}