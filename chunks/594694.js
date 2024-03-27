function(e, t, n) {
    var r, i;
    r = this, i = function(e) {
        "use strict";
        var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум"
        };
        return e.defineLocale("tg", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Имрӯз соати] LT",
                nextDay: "[Пагоҳ соати] LT",
                lastDay: "[Дирӯз соати] LT",
                nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "баъди %s",
                past: "%s пеш",
                s: "якчанд сония",
                m: "як дақиқа",
                mm: "%d дақиқа",
                h: "як соат",
                hh: "%d соат",
                d: "як рӯз",
                dd: "%d рӯз",
                M: "як моҳ",
                MM: "%d моҳ",
                y: "як сол",
                yy: "%d сол"
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function(e, t) {
                if (12 === e && (e = 0), "шаб" === t) return e < 4 ? e : e + 12;
                if ("субҳ" === t) return e;
                if ("рӯз" === t) return e >= 11 ? e : e + 12;
                else if ("бегоҳ" === t) return e + 12
            },
            meridiem: function(e, t, n) {
                if (e < 4) return "шаб";
                if (e < 11) return "субҳ";
                if (e < 16) return "рӯз";
                else if (e < 19) return "бегоҳ";
                else return "шаб"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }, "object" == typeof t ? i(n("913527")) : "function" == typeof define && define.amd ? define(["../moment"], i) : i(r.moment)
}