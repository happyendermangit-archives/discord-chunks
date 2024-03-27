function(e, t, n) {
    var r, i;
    r = this, i = function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", t[7], t[8], t[9]];

        function r(e, r, i, a) {
            var o = "";
            switch (i) {
                case "s":
                    return a ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return a ? "sekunnin" : "sekuntia";
                case "m":
                    return a ? "minuutin" : "minuutti";
                case "mm":
                    o = a ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return a ? "tunnin" : "tunti";
                case "hh":
                    o = a ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return a ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
                case "dd":
                    o = a ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
                    break;
                case "M":
                    return a ? "kuukauden" : "kuukausi";
                case "MM":
                    o = a ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return a ? "vuoden" : "vuosi";
                case "yy":
                    o = a ? "vuoden" : "vuotta"
            }
            return o = function(e, r) {
                return e < 10 ? r ? n[e] : t[e] : e
            }(e, a) + " " + o
        }
        return e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[t\xe4n\xe4\xe4n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p\xe4\xe4st\xe4",
                past: "%s sitten",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
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