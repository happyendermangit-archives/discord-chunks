function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        getSystemLocale: function() {
            return I
        },
        default: function() {
            return t
        }
    }), E("222007"), E("70102");
    var t, o = E("44170"),
        n = E("860347"),
        r = E.n(n),
        i = E("907407");
    E.g.IntlMessageFormat = r, E("394069"), E("351752"), E("329547"), E("784943"), E("643072"), E("258947"), E("575137"), E("27213"), E("753950"), E("677642"), E("276542"), E("351643"), E("8575"), E("658724"), E("23647"), E("362209"), E("735062"), E("994548"), E("975990"), E("870043"), E("73319"), E("583263"), E("714405"), E("272318"), E("403290"), E("408237"), E("138432"), E("601337"), delete E.g.IntlMessageFormat, "undefined" == typeof Intl && E("246663");
    let a = "en-US";

    function I() {
        let e;
        {
            let _ = Array.isArray(navigator.languages) ? navigator.languages[0] : null;
            e = _ || navigator.language || navigator.browserLanguage || navigator.userLanguage
        }
        return null != e ? e : ""
    }
    class s {
        getMessages() {
            return this._parsedMessages
        }
        constructor(e) {
            this._context = {
                messages: {},
                defaultMessages: {},
                locale: a
            }, this._parsedMessages = {}, this._getParsedMessages = e
        }
    }
    class T extends s {
        refresh(e) {
            this._context = e, this._refresh(e, this._parsedMessages)
        }
        constructor(...e) {
            var _;
            super(...e), _ = this, this._refresh = function(e) {
                let E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object.keys(e.defaultMessages).forEach(t => {
                    Object.defineProperty(E, t, {
                        configurable: !0,
                        get: () => (delete E[t], E[t] = _._getParsedMessages(e, t, _._refresh))
                    })
                }), E
            }
        }
    }
    class S extends s {
        refresh(e) {
            Object.assign(this._context, e), Object.keys(this._parsedMessages).forEach(e => {
                delete this._parsedMessages[e]
            })
        }
        constructor(e) {
            var _;
            super(e), _ = this, this._createProxy = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _._context;
                return new Proxy({}, {
                    get: (E, t) => E[t] || (E[t] = _._getParsedMessages(e, t, _._createProxy))
                })
            }, this._parsedMessages = this._createProxy(this._context)
        }
    }
    t = class extends o.EventEmitter {
        updateMessagesForExperiment(e, _) {
            let E = this._fetchMessages(e);
            if (E instanceof Promise) {
                E.then(E => {
                    this._applyMessagesForLocale(_(E), e)
                });
                return
            }
            this._applyMessagesForLocale(_(E), e)
        }
        setLocale(e) {
            if (this._chosenLocale === e) return;
            this._requestedLocale = e;
            let _ = this._chosenLocale;
            this._chosenLocale = e, this.loadPromise = this._loadMessagesForLocale(e), this.emit("locale", this._chosenLocale, _)
        }
        setUpdateRules(e) {
            (0, i.setUpdateRules)(e)
        }
        getLanguages() {
            return this._languages
        }
        getAvailableLocales() {
            return this._languages.filter(e => {
                let {
                    enabled: _
                } = e;
                return _
            }).map(e => {
                var _;
                let {
                    code: E,
                    name: t
                } = e;
                return {
                    value: E,
                    name: t,
                    localizedName: null !== (_ = this.Messages[E]) && void 0 !== _ ? _ : t
                }
            }).sort((e, _) => {
                let {
                    name: E
                } = e, {
                    name: t
                } = _;
                return E = E.toLowerCase(), E < (t = t.toLowerCase()) ? -1 : E > t ? 1 : 0
            })
        }
        getLocale() {
            return this._chosenLocale
        }
        getLocaleInfo() {
            return this._languages.find(e => e.code === this._chosenLocale)
        }
        getDefaultLocale() {
            var e, _, E;
            let t = null !== (e = I()) && void 0 !== e ? e : a,
                o = this._languages.filter(e => {
                    let {
                        enabled: _
                    } = e;
                    return _
                }).map(e => {
                    let {
                        code: _
                    } = e;
                    return _
                });
            if (o.includes(t)) return t;
            let n = t.split("-");
            return o.includes(n[0]) ? n[0] : "zh" === n[0] && n.length > 1 && "Hant" === n[1] ? null !== (_ = o.find(e => "zh-TW" === e)) && void 0 !== _ ? _ : a : null !== (E = o.find(e => e.split("-")[0] === n[0])) && void 0 !== E ? E : a
        }
        _loadMessagesForLocale(e) {
            let _ = this._fetchMessages(e);
            return _ instanceof Promise ? _.then(_ => this._applyMessagesForLocale(_, e)) : (this._applyMessagesForLocale(_, e), Promise.resolve())
        }
        _applyMessagesForLocale(e, _) {
            let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._findMessages(a);
            this._requestedLocale === _ && (this._provider.refresh({
                messages: e,
                defaultMessages: E,
                locale: _
            }), this.resolveLanguageLoaded())
        }
        _findMessages(e) {
            let _ = this._fetchMessages(e);
            if (_ instanceof Promise) throw Error("Messages are still loading.");
            return _
        }
        _fetchMessages(e) {
            let _ = e === a ? () => {
                throw Error("Error Loading ".concat(a))
            } : () => (console.warn("Unsupported Locale", e), -1 === e.indexOf("-")) ? this._fetchMessages(a) : this._fetchMessages(e.split("-")[0]);
            try {
                let E = this._getMessages(e);
                return E instanceof Promise ? E.catch(_) : E
            } catch (e) {
                return _()
            }
        }
        constructor({
            initialLocale: e,
            getMessages: _,
            getLanguages: t
        }) {
            super(), this.loadPromise = Promise.resolve(), this.resolveLanguageLoaded = () => {}, this._languages = [], this._chosenLocale = "", this._getParsedMessages = (e, _, E) => {
                let {
                    messages: t,
                    defaultMessages: o,
                    locale: n
                } = e, r = t[_] || o[_];
                if ("object" == typeof r) return E({
                    messages: r,
                    defaultMessages: o[_],
                    locale: n
                });
                try {
                    return (0, i.getMessage)(r, n)
                } catch (e) {
                    if (console.warn("Failed parsing intl key '".concat(String(_), "' in locale '").concat(n, "' defaulting to English"), e), "string" == typeof(r = o[_])) return (0, i.getMessage)(r, n)
                }
                return ""
            }, this._handleNewListener = e => {
                if ("locale" === e) this.emit(e, this._chosenLocale)
            }, this.initialLanguageLoad = new Promise((e, _) => {
                this.resolveLanguageLoaded = e
            }), Intl.__addLocaleData && Intl.__addLocaleData(E("169123")), this._languages = t(), this._provider = null != window.Proxy ? new S(this._getParsedMessages) : new T(this._getParsedMessages), this.Messages = this._provider.getMessages(), this._getMessages = _, this.setLocale(e || this.getDefaultLocale()), this.on("newListener", this._handleNewListener)
        }
    }
}