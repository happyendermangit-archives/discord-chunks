function(e, t) {
    "use strict";
    var n = "(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})",
        r = "[0-9a-wy-z]",
        i = r + "(?:-[a-z0-9]{2,8})+",
        a = "x(?:-[a-z0-9]{1,8})+",
        o = RegExp("^(?:" + ("(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-" + n + ")*(?:-" + i + ")*(?:-" + a) + ")?|" + a + "|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$", "i"),
        s = RegExp("^(?!x).*?-(" + n + ")-(?:\\w{4,8}-(?!x-))*\\1\\b", "i"),
        u = RegExp("^(?!x).*?-(" + r + ")-(?:\\w+-(?!x-))*\\1\\b", "i"),
        c = RegExp("-" + i, "ig");
    t.expBCP47Syntax = o, t.expVariantDupes = s, t.expSingletonDupes = u, t.expExtSequences = c
}