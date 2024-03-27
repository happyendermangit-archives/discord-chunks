function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NumberFormatter: function() {
            return s
        },
        NumberParser: function() {
            return l
        }
    });
    let r = new Map,
        i = !1;
    try {
        i = "exceptZero" === new Intl.NumberFormat("de-DE", {
            signDisplay: "exceptZero"
        }).resolvedOptions().signDisplay
    } catch (e) {}
    let a = !1;
    try {
        a = "unit" === new Intl.NumberFormat("de-DE", {
            style: "unit",
            unit: "degree"
        }).resolvedOptions().style
    } catch (e) {}
    let o = {
        degree: {
            narrow: {
                default: "\xb0",
                "ja-JP": " 度",
                "zh-TW": "度",
                "sl-SI": " \xb0"
            }
        }
    };
    class s {
        format(e) {
            let t = "";
            if (t = i || null == this.options.signDisplay ? this.numberFormatter.format(e) : function(e, t, n) {
                    if ("auto" === t) return e.format(n);
                    {
                        if ("never" === t) return e.format(Math.abs(n));
                        let r = !1;
                        if ("always" === t ? r = n > 0 || Object.is(n, 0) : "exceptZero" === t && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : r = n > 0), !r) return e.format(n);
                        {
                            let t = e.format(-n),
                                r = e.format(n),
                                i = t.replace(r, "").replace(/\u200e|\u061C/, "");
                            return 1 != [...i].length && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), t.replace(r, "!!!").replace(i, "+").replace("!!!", r)
                        }
                    }
                }(this.numberFormatter, this.options.signDisplay, e), "unit" === this.options.style && !a) {
                var n;
                let {
                    unit: e,
                    unitDisplay: r = "short",
                    locale: i
                } = this.resolvedOptions();
                if (!e) return t;
                let a = null === (n = o[e]) || void 0 === n ? void 0 : n[r];
                t += a[i] || a.default
            }
            return t
        }
        formatToParts(e) {
            return this.numberFormatter.formatToParts(e)
        }
        formatRange(e, t) {
            if ("function" == typeof this.numberFormatter.formatRange) return this.numberFormatter.formatRange(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            return `${this.format(e)} \u{2013} ${this.format(t)}`
        }
        formatRangeToParts(e, t) {
            if ("function" == typeof this.numberFormatter.formatRangeToParts) return this.numberFormatter.formatRangeToParts(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            let n = this.numberFormatter.formatToParts(e),
                r = this.numberFormatter.formatToParts(t);
            return [...n.map(e => ({
                ...e,
                source: "startRange"
            })), {
                type: "literal",
                value: " – ",
                source: "shared"
            }, ...r.map(e => ({
                ...e,
                source: "endRange"
            }))]
        }
        resolvedOptions() {
            let e = this.numberFormatter.resolvedOptions();
            return !i && null != this.options.signDisplay && (e = {
                ...e,
                signDisplay: this.options.signDisplay
            }), !a && "unit" === this.options.style && (e = {
                ...e,
                style: "unit",
                unit: this.options.unit,
                unitDisplay: this.options.unitDisplay
            }), e
        }
        constructor(e, t = {}) {
            this.numberFormatter = function(e, t = {}) {
                let {
                    numberingSystem: n
                } = t;
                if (n && e.includes("-nu-") && (!e.includes("-u-") && (e += "-u-"), e += `-nu-${n}`), "unit" === t.style && !a) {
                    var i;
                    let {
                        unit: e,
                        unitDisplay: n = "short"
                    } = t;
                    if (!e) throw Error('unit option must be provided with style: "unit"');
                    if (!(null === (i = o[e]) || void 0 === i ? void 0 : i[n])) throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);
                    t = {
                        ...t,
                        style: "decimal"
                    }
                }
                let s = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
                if (r.has(s)) return r.get(s);
                let u = new Intl.NumberFormat(e, t);
                return r.set(s, u), u
            }(e, t), this.options = t
        }
    }
    let u = RegExp("^.*\\(.*\\).*$"),
        c = ["latn", "arab", "hanidec"];
    class l {
        parse(e) {
            return f(this.locale, this.options, e).parse(e)
        }
        isValidPartialNumber(e, t, n) {
            return f(this.locale, this.options, e).isValidPartialNumber(e, t, n)
        }
        getNumberingSystem(e) {
            return f(this.locale, this.options, e).options.numberingSystem
        }
        constructor(e, t = {}) {
            this.locale = e, this.options = t
        }
    }
    let d = new Map;

    function f(e, t, n) {
        let r = p(e, t);
        if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
            for (let i of c)
                if (i !== r.options.numberingSystem) {
                    let r = p(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
                    if (r.isValidPartialNumber(n)) return r
                }
        }
        return r
    }

    function p(e, t) {
        let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ""),
            r = d.get(n);
        return !r && (r = new h(e, t), d.set(n, r)), r
    }
    class h {
        parse(e) {
            let t = this.sanitize(e);
            if (this.symbols.group && (t = _(t, this.symbols.group, "")), this.symbols.decimal && (t = t.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (t = t.replace(this.symbols.minusSign, "-")), t = t.replace(this.symbols.numeral, this.symbols.index), "percent" === this.options.style) {
                let e = t.indexOf("-"),
                    n = (t = t.replace("-", "")).indexOf("."); - 1 === n && (n = t.length), t = t.replace(".", ""), t = n - 2 == 0 ? `0.${t}` : n - 2 == -1 ? `0.0${t}` : n - 2 == -2 ? "0.00" : `${t.slice(0,n-2)}.${t.slice(n-2)}`, e > -1 && (t = `-${t}`)
            }
            let n = t ? +t : NaN;
            if (isNaN(n)) return NaN;
            if ("percent" === this.options.style) {
                let e = {
                    ...this.options,
                    style: "decimal",
                    minimumFractionDigits: Math.min(this.options.minimumFractionDigits + 2, 20),
                    maximumFractionDigits: Math.min(this.options.maximumFractionDigits + 2, 20)
                };
                return new l(this.locale, e).parse(new s(this.locale, e).format(n))
            }
            return "accounting" === this.options.currencySign && u.test(e) && (n *= -1), n
        }
        sanitize(e) {
            return e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), "arab" === this.options.numberingSystem && (this.symbols.decimal && (e = (e = e.replace(",", this.symbols.decimal)).replace(String.fromCharCode(1548), this.symbols.decimal)), this.symbols.group && (e = _(e, ".", this.symbols.group))), "fr-FR" === this.options.locale && (e = _(e, ".", String.fromCharCode(8239))), e
        }
        isValidPartialNumber(e, t = -1 / 0, n = 1 / 0) {
            return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), !(this.symbols.group && e.startsWith(this.symbols.group) || this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && 0 === this.options.maximumFractionDigits) && (this.symbols.group && (e = _(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), 0 === e.length)
        }
        constructor(e, t = {}) {
            var n, r;
            this.locale = e, this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = function(e, t, n, r) {
                var i, a, o, s, u;
                let c = new Intl.NumberFormat(e, {
                        ...n,
                        minimumSignificantDigits: 1,
                        maximumSignificantDigits: 21
                    }),
                    l = c.formatToParts(-10000.111),
                    d = c.formatToParts(10000.111),
                    f = g.map(e => c.formatToParts(e)),
                    p = null !== (u = null === (i = l.find(e => "minusSign" === e.type)) || void 0 === i ? void 0 : i.value) && void 0 !== u ? u : "-",
                    h = null === (a = d.find(e => "plusSign" === e.type)) || void 0 === a ? void 0 : a.value;
                !h && ((null == r ? void 0 : r.signDisplay) === "exceptZero" || (null == r ? void 0 : r.signDisplay) === "always") && (h = "+");
                let _ = null === (o = new Intl.NumberFormat(e, {
                        ...n,
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).formatToParts(.001).find(e => "decimal" === e.type)) || void 0 === o ? void 0 : o.value,
                    v = null === (s = l.find(e => "group" === e.type)) || void 0 === s ? void 0 : s.value,
                    y = l.filter(e => !m.has(e.type)).map(e => b(e.value)),
                    E = f.flatMap(e => e.filter(e => !m.has(e.type)).map(e => b(e.value))),
                    S = [...new Set([...y, ...E])].sort((e, t) => t.length - e.length),
                    x = 0 === S.length ? RegExp("[\\p{White_Space}]", "gu") : RegExp(`${S.join("|")}|[\\p{White_Space}]`, "gu"),
                    w = [...new Intl.NumberFormat(n.locale, {
                        useGrouping: !1
                    }).format(9876543210)].reverse(),
                    T = new Map(w.map((e, t) => [e, t])),
                    C = RegExp(`[${w.join("")}]`, "g");
                return {
                    minusSign: p,
                    plusSign: h,
                    decimal: _,
                    group: v,
                    literals: x,
                    numeral: C,
                    index: e => String(T.get(e))
                }
            }(e, this.formatter, this.options, t), "percent" === this.options.style && ((null !== (n = this.options.minimumFractionDigits) && void 0 !== n ? n : 0) > 18 || (null !== (r = this.options.maximumFractionDigits) && void 0 !== r ? r : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.")
        }
    }
    let m = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]),
        g = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, .1, 1.1];

    function _(e, t, n) {
        return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n)
    }

    function b(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
}