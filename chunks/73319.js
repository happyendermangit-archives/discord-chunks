function(e, t, n) {
    IntlMessageFormat.__addLocaleData({
        locale: "ru",
        pluralRuleFunction: function(e, t) {
            var n = String(e).split("."),
                r = n[0],
                a = !n[1],
                o = r.slice(-1),
                i = r.slice(-2);
            return t ? "other" : a && 1 == o && 11 != i ? "one" : a && o >= 2 && o <= 4 && (i < 12 || i > 14) ? "few" : a && 0 == o || a && o >= 5 && o <= 9 || a && i >= 11 && i <= 14 ? "many" : "other"
        }
    }), IntlMessageFormat.__addLocaleData({
        locale: "ru-BY",
        parentLocale: "ru"
    }), IntlMessageFormat.__addLocaleData({
        locale: "ru-KG",
        parentLocale: "ru"
    }), IntlMessageFormat.__addLocaleData({
        locale: "ru-KZ",
        parentLocale: "ru"
    }), IntlMessageFormat.__addLocaleData({
        locale: "ru-MD",
        parentLocale: "ru"
    }), IntlMessageFormat.__addLocaleData({
        locale: "ru-UA",
        parentLocale: "ru"
    })
}