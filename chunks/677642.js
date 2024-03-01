function(e, t, n) {
    IntlMessageFormat.__addLocaleData({
        locale: "hr",
        pluralRuleFunction: function(e, t) {
            var n = String(e).split("."),
                r = n[0],
                a = n[1] || "",
                o = !n[1],
                i = r.slice(-1),
                s = r.slice(-2),
                u = a.slice(-1),
                l = a.slice(-2);
            return t ? "other" : o && 1 == i && 11 != s || 1 == u && 11 != l ? "one" : o && i >= 2 && i <= 4 && (s < 12 || s > 14) || u >= 2 && u <= 4 && (l < 12 || l > 14) ? "few" : "other"
        }
    }), IntlMessageFormat.__addLocaleData({
        locale: "hr-BA",
        parentLocale: "hr"
    })
}