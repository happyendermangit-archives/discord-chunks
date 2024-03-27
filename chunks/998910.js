function(e) {
    var t = "\ud800-\udfff",
        n = "\\u2700-\\u27bf",
        r = "a-z\\xdf-\\xf6\\xf8-\\xff",
        i = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        a = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        o = "['’]",
        s = "[" + a + "]",
        u = "[" + r + "]",
        c = "[^" + t + a + "\\d+" + n + r + i + "]",
        l = "(?:\ud83c[\udde6-\uddff]){2}",
        d = "[\ud800-\udbff][\udc00-\udfff]",
        f = "[" + i + "]",
        p = "(?:" + u + "|" + c + ")",
        h = "(?:" + o + "(?:d|ll|m|re|s|t|ve))?",
        m = "(?:" + o + "(?:D|LL|M|RE|S|T|VE))?",
        g = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
        _ = "[\\ufe0e\\ufe0f]?",
        b = "(?:\\u200d(?:" + ["[^" + t + "]", l, d].join("|") + ")" + _ + g + ")*",
        v = "(?:" + ["[" + n + "]", l, d].join("|") + ")" + (_ + g + b),
        y = RegExp([f + "?" + u + "+" + h + "(?=" + [s, f, "$"].join("|") + ")", "(?:" + f + "|" + c + ")+" + m + "(?=" + [s, f + p, "$"].join("|") + ")", f + "?" + p + "+" + h, f + "+" + m, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", v].join("|"), "g");
    e.exports = function(e) {
        return e.match(y) || []
    }
}