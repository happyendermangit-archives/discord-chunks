function(e, t, n) {
    "use strict";
    var r = "(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})",
        a = "[0-9a-wy-z]",
        o = a + "(?:-[a-z0-9]{2,8})+",
        i = "x(?:-[a-z0-9]{1,8})+",
        s = RegExp("^(?:" + ("(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-" + r + ")*(?:-" + o + ")*(?:-" + i) + ")?|" + i + "|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$", "i"),
        u = RegExp("^(?!x).*?-(" + r + ")-(?:\\w{4,8}-(?!x-))*\\1\\b", "i"),
        l = RegExp("^(?!x).*?-(" + a + ")-(?:\\w+-(?!x-))*\\1\\b", "i"),
        c = RegExp("-" + o, "ig");
    t.expBCP47Syntax = s, t.expVariantDupes = u, t.expSingletonDupes = l, t.expExtSequences = c
}