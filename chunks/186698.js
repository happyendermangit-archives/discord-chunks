function(e, t, n) {
    var r, i;
    r = this, i = function(e) {
        "use strict";
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function n(e, n, r, i) {
            var a = function(e) {
                var n = Math.floor(e % 1e3 / 100),
                    r = Math.floor(e % 100 / 10),
                    i = e % 10,
                    a = "";
                return n > 0 && (a += t[n] + "vatlh"), r > 0 && (a += ("" !== a ? " " : "") + t[r] + "maH"), i > 0 && (a += ("" !== a ? " " : "") + t[i]), "" === a ? "pagh" : a
            }(e);
            switch (r) {
                case "ss":
                    return a + " lup";
                case "mm":
                    return a + " tup";
                case "hh":
                    return a + " rep";
                case "dd":
                    return a + " jaj";
                case "MM":
                    return a + " jar";
                case "yy":
                    return a + " DIS"
            }
        }
        return e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                ss: n,
                m: "wa’ tup",
                mm: n,
                h: "wa’ rep",
                hh: n,
                d: "wa’ jaj",
                dd: n,
                M: "wa’ jar",
                MM: n,
                y: "wa’ DIS",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }, "object" == typeof t ? i(n("913527")) : "function" == typeof define && define.amd ? define(["../moment"], i) : i(r.moment)
}