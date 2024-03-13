function(e, t, n) {
    var r = "\ud800-\udfff",
        i = "\\u2700-\\u27bf",
        o = "a-z\\xdf-\\xf6\\xf8-\\xff",
        s = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        a = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        c = "['’]",
        u = "[" + a + "]",
        d = "[" + o + "]",
        l = "[^" + r + a + "\\d+" + i + o + s + "]",
        f = "(?:\ud83c[\udde6-\uddff]){2}",
        p = "[\ud800-\udbff][\udc00-\udfff]",
        h = "[" + s + "]",
        v = "(?:" + d + "|" + l + ")",
        g = "(?:" + c + "(?:d|ll|m|re|s|t|ve))?",
        b = "(?:" + c + "(?:D|LL|M|RE|S|T|VE))?",
        m = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
        y = "[\\ufe0e\\ufe0f]?",
        x = "(?:\\u200d(?:" + ["[^" + r + "]", f, p].join("|") + ")" + y + m + ")*",
        w = "(?:" + ["[" + i + "]", f, p].join("|") + ")" + (y + m + x),
        S = RegExp([h + "?" + d + "+" + g + "(?=" + [u, h, "$"].join("|") + ")", "(?:" + h + "|" + l + ")+" + b + "(?=" + [u, h + v, "$"].join("|") + ")", h + "?" + v + "+" + g, h + "+" + b, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", w].join("|"), "g");
    e.exports = function(e) {
        return e.match(S) || []
    }
}