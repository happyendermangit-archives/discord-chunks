function(e, t, n) {
    "use strict";
    let r;
    n.r(t), n.d(t, {
        LocalizedStringDictionary: function() {
            return o
        },
        LocalizedStringFormatter: function() {
            return l
        }
    }), n("70102"), n("222007");
    let a = Symbol.for("react-aria.i18n.locale"),
        i = Symbol.for("react-aria.i18n.strings");
    class o {
        getStringForLocale(e, t) {
            let n = this.getStringsForLocale(t)[e];
            if (!n) throw Error("Could not find intl message ".concat(e, " in ").concat(t, " locale"));
            return n
        }
        getStringsForLocale(e) {
            let t = this.strings[e];
            return !t && (t = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en-US";
                if (t[e]) return t[e];
                let r = function(e) {
                    return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0]
                }(e);
                if (t[r]) return t[r];
                for (let e in t)
                    if (e.startsWith(r + "-")) return t[e];
                return t[n]
            }(e, this.strings, this.defaultLocale), this.strings[e] = t), t
        }
        static getGlobalDictionaryForPackage(e) {
            if ("undefined" == typeof window) return null;
            let t = window[a];
            if (void 0 === r) {
                let e = window[i];
                if (!e) return null;
                for (let n in r = {}, e) r[n] = new o({
                    [t]: e[n]
                }, t)
            }
            let n = null == r ? void 0 : r[e];
            if (!n) throw Error('Strings for package "'.concat(e, '" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.'));
            return n
        }
        constructor(e, t = "en-US") {
            this.strings = {
                ...e
            }, this.defaultLocale = t
        }
    }
    let s = new Map,
        c = new Map;
    class l {
        format(e, t) {
            let n = this.strings.getStringForLocale(e, this.locale);
            return "function" == typeof n ? n(t, this) : n
        }
        plural(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "cardinal",
                r = t["=" + e];
            if (r) return "function" == typeof r ? r() : r;
            let a = this.locale + ":" + n,
                i = s.get(a);
            return !i && (i = new Intl.PluralRules(this.locale, {
                type: n
            }), s.set(a, i)), "function" == typeof(r = t[i.select(e)] || t.other) ? r() : r
        }
        number(e) {
            let t = c.get(this.locale);
            return !t && (t = new Intl.NumberFormat(this.locale), c.set(this.locale, t)), t.format(e)
        }
        select(e, t) {
            let n = e[t] || e.other;
            return "function" == typeof n ? n() : n
        }
        constructor(e, t) {
            this.locale = e, this.strings = t
        }
    }
}