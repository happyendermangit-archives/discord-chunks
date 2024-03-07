function(e, t, n) {
    "use strict";
    var l, i, a, s, r, o;
    n.r(t), n.d(t, {
        TextTruncationMethod: function() {
            return l
        },
        DiscordCanvasExporterOutputFormats: function() {
            return i
        },
        DrawResultStatus: function() {
            return a
        }
    }), (s = l || (l = {}))[s.None = 0] = "None", s[s.Truncate = 1] = "Truncate", s[s.Wrap = 2] = "Wrap", (r = i || (i = {}))[r.Base64 = 0] = "Base64", r[r.Blob = 1] = "Blob", r[r.File = 2] = "File", (o = a || (a = {}))[o.Success = 0] = "Success", o[o.Failure = 1] = "Failure", o[o.ImageNotLoaded = 2] = "ImageNotLoaded"
}