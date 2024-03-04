function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createInitialState: function() {
            return d
        },
        default: function() {
            return l
        }
    }), n("222007");
    var l, i = n("44170"),
        a = n("507217"),
        s = n("834725"),
        r = n("845579"),
        o = n("851745"),
        u = n("962254");

    function d() {
        return {
            query: null,
            selectedIndex: null,
            isVisible: !1,
            didInitialQuery: !1
        }
    }
    l = class extends i.EventEmitter {
        updateProps(e) {
            let t = this.props.focused !== e.focused,
                n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption,
                l = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
            if (this.props = e, n || l) this.updateResults(l, n), !this.state.didInitialQuery && (this.state = {
                ...this.state,
                didInitialQuery: !0
            });
            else if (t) {
                let e = this.state.query;
                this.setState({
                    isVisible: null != e && this.shouldShow(e.resultCount, e.isLoading, e.typeInfo)
                })
            }
        }
        setSelectedIndex(e) {
            this.setState({
                selectedIndex: e
            })
        }
        onTabOrEnter(e) {
            if (!this.state.isVisible) return !1;
            if (null == this.state.selectedIndex) {
                var t;
                let n = null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo.focusMode;
                return !e && (n === o.FocusMode.MANUAL || n === o.FocusMode.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0)
            }
            return this.selectResult(this.state.selectedIndex, e, !0)
        }
        onMoveSelection(e) {
            var t, n;
            if (!this.state.isVisible) return !1;
            if (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null === (t = this.state.query) || void 0 === t ? void 0 : t.type) === o.AutocompleteOptionTypes.COMMANDS) {
                let e = null === (n = this.state.query.results.commands) || void 0 === n ? void 0 : n[this.state.selectedIndex];
                null != e && a.setPreferredCommandId(this.props.channel.id, e.id)
            }
            return !0
        }
        onMaybeShowAutocomplete() {
            this.emit("update")
        }
        onHideAutocomplete() {
            let e = this.state.query;
            null != e && this.setState({
                isVisible: !1
            })
        }
        onResultHover(e) {
            this.props.navigator.setFocus(null), this.setSelectedIndex(null)
        }
        onResultClick(e) {
            this.selectResult(e, !0)
        }
        clearQuery() {
            this.setState({
                query: null,
                isVisible: !1,
                selectedIndex: null
            })
        }
        queryResults() {
            this.updateResults()
        }
        isVisible() {
            return this.state.isVisible
        }
        updateResults() {
            var e, t;
            let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == this.props.editorRef.current) return;
            let i = (0, u.getOptions)(this.props),
                a = (0, u.findMatchingAutocompleteType)({
                    channel: this.props.channel,
                    guild: this.props.guild,
                    options: i,
                    currentWord: this.props.currentWord,
                    currentWordIsAtStart: this.props.currentWordIsAtStart,
                    textValue: this.props.textValue,
                    optionText: this.props.optionText
                }),
                d = i.commands !== o.CommandMode.DISABLED ? (0, u.findCommandOptionAutocompleteType)(this.props.activeCommandOption, this.props.currentWord) : null;
            if (null == a && null != d) a = d;
            else if (null == a || null != d && a.type !== d.type) {
                this.clearQuery();
                return
            }
            let {
                type: c,
                typeInfo: f,
                query: m
            } = a, p = l || n && ((null === (e = this.state.query) || void 0 === e ? void 0 : e.queryText) !== m || (null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo) !== f), h = r.IncludeStickersInAutocomplete.getSetting();
            i.allowStickers = i.allowStickers ? h : i.allowStickers;
            let {
                results: E,
                metadata: g
            } = f.queryResults(this.props.channel, this.props.guild, m, i, p), C = 0;
            for (let e of Object.values(E)) Array.isArray(e) && (C += e.length);
            let S = !0 === E.isLoading,
                T = this.shouldShow(C, S, f),
                v = this.state.selectedIndex;
            !T || S ? v = null : null != v && v >= C && (v = C - 1), T && !this.state.isVisible && (0, s.trackAutocompleteOpen)(c, this.props.channel, g), this.setState({
                query: {
                    type: c,
                    typeInfo: f,
                    queryText: m,
                    results: E,
                    resultCount: C,
                    options: i,
                    isLoading: S
                },
                isVisible: T,
                selectedIndex: v
            })
        }
        shouldShow(e, t, n) {
            return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty)
        }
        selectResult(e, t, n) {
            var l, i, a;
            if (!this.state.isVisible) return !1;
            let {
                type: r,
                typeInfo: u,
                results: d,
                resultCount: c,
                options: f
            } = this.state.query;
            if (e >= c) return !1;
            let m = null === (i = u.onSelect) || void 0 === i ? void 0 : i.call(u, {
                results: d,
                index: e,
                type: t ? o.SelectType.SEND : o.SelectType.INSERT,
                options: f,
                channel: this.props.channel,
                tabOrEnter: n,
                queryText: null === (l = this.state.query) || void 0 === l ? void 0 : l.queryText
            });
            return null != m && (0, s.trackAutocompleteSelect)(r, null !== (a = m.type) && void 0 !== a ? a : null, this.props.channel, m.metadata), !0
        }
        setState(e) {
            for (let t in e)
                if (e[t] !== this.state[t]) {
                    this.state = {
                        ...this.state,
                        ...e
                    }, this.emit("change", this.state);
                    return
                }
        }
        constructor(e) {
            super(), this.props = e, this.state = d()
        }
    }
}