function() {
    IntlMessageFormat.__addLocaleData({
        locale: "hr",
        pluralRuleFunction: function(e, t) {
            var n = String(e).split("."),
                r = n[0],
                i = n[1] || "",
                a = !n[1],
                o = r.slice(-1),
                s = r.slice(-2),
                u = i.slice(-1),
                c = i.slice(-2);
            return t ? "other" : a && 1 == o && 11 != s || 1 == u && 11 != c ? "one" : a && o >= 2 && o <= 4 && (s < 12 || s > 14) || u >= 2 && u <= 4 && (c < 12 || c > 14) ? "few" : "other"
        }
    }), IntlMessageFormat.__addLocaleData({
        locale: "hr-BA",
        parentLocale: "hr"
    })
}