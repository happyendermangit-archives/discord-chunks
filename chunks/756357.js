function(e, t, n) {
    var r, i;
    r = this, i = function(e) {
        "use strict";

        function t(e, t, n, r) {
            var i = {
                s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["\xfche minuti", "\xfcks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["\xfche tunni", "tund aega", "\xfcks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
                M: ["kuu aja", "kuu aega", "\xfcks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["\xfche aasta", "aasta", "\xfcks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? i[n][2] ? i[n][2] : i[n][1] : r ? i[n][0] : i[n][1]
        }
        return e.defineLocale("et", {
            months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[T\xe4na,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[J\xe4rgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p\xe4rast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d p\xe4eva",
                M: t,
                MM: t,
                y: t,
                yy: t
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