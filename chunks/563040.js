function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TimeOptions: function() {
            return A
        },
        convertToTimeOfADay: function() {
            return I
        },
        timeAtSpecificDay: function() {
            return f
        }
    }), n("757143"), n("653041"), n("47120"), n("411104");
    var i = n("913527"),
        r = n.n(i),
        s = n("55935");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = /^[0]+/,
        l = /:00/,
        u = /(AM|ΠΜ|सुबह)/i,
        d = /(PM|ΜΜ|शाम)/i,
        _ = /\s+/,
        c = e => e.replace(o, "").replace(l, "").replace(u, "").replace(_, ""),
        E = e => e.replace(o, "").replace(d, "").replace(_, ""),
        I = (e, t) => {
            let n = t.toUpperCase().trim();
            if (n.length > 0) {
                let t = r()("".concat(null == e ? void 0 : e.format("YYYY-MM-DD"), " ").concat(n), "YYYY-MM-DD LT");
                if (c(t.format("LT")) === c(n)) return t
            }
        },
        T = r()("2021-04-12T00:00:00"),
        f = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
        S = (e, t) => e.value.unix() - t.value.unix();
    class A {
        lookupByValue(e) {
            if (null == e) return;
            let t = f(T, e);
            return this._index[t.unix()]
        }
        _createLabel(e) {
            return (0, s.dateFormat)(e.locale(r().locale()), this.labelFormat)
        }
        _generateTimeOptions() {
            this.options = [], this._index = {};
            let e = r()(T),
                t = r()(e).add(1, "day"),
                n = r()(e);
            for (; n < t;) {
                let e = this._createNewOption(n.clone());
                this.options.push(e), this._index[e.value.unix()] = e.value, n.add(this.intervalInMinutes, "minutes")
            }
        }
        _createNewOption(e) {
            let t = f(T, e);
            return {
                label: this._createLabel(t),
                value: t
            }
        }
        _addNewOption(e) {
            let t = f(T, e),
                n = this._createLabel(t);
            return this._index[t.unix()] = t, this.options.push({
                label: n,
                value: t
            }), this.options.sort(S), e
        }
        _guessOptions(e) {
            let t = [];
            if (/[:\\.]/.test(e)) {
                let n = I(T, e);
                if (null != n) {
                    t.push(n.clone());
                    let i = n.add({
                        hours: 12
                    });
                    i.isBefore(T.clone().add({
                        hours: 24
                    })) && E(i.format("LT")) === E(e) && t.push(i)
                }
            }
            return t
        }
        getOptions(e) {
            let t = this._guessOptions(e);
            if (!(t.length > 0)) return this.options;
            {
                let e = [...this.options];
                return t.forEach(t => {
                    null == this.lookupByValue(t) && e.push(this._createNewOption(t))
                }), e.sort(S), e
            }
        }
        selectValue(e) {
            let t = this.lookupByValue(e);
            return null == t ? this._addNewOption(e) : t
        }
        constructor({
            intervalInMinutes: e = 15,
            labelFormat: t = "LT"
        } = {}) {
            if (a(this, "intervalInMinutes", void 0), a(this, "labelFormat", void 0), a(this, "options", []), a(this, "_index", {}), e <= 0) throw Error("intervalInMinutes should be positive number, got ".concat(e));
            this.intervalInMinutes = e, this.labelFormat = t, this._generateTimeOptions()
        }
    }
}