function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createInitialState: function() {
            return d
        },
        default: function() {
            return _
        }
    }), n("47120");
    var i = n("836560"),
        r = n("555573"),
        s = n("376918"),
        a = n("695346"),
        o = n("590921"),
        l = n("152089");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d() {
        return {
            query: null,
            selectedIndex: null,
            isVisible: !1,
            didInitialQuery: !1
        }
    }
    class _ extends i.EventEmitter {
        updateProps(e) {
            let t = this.props.focused !== e.focused,
                n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption,
                i = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
            if (this.props = e, n || i) this.updateResults(i, n), !this.state.didInitialQuery && (this.state = {
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
                null != e && r.setPreferredCommandId(this.props.channel.id, e.id)
            }
            return !0
        }
        onMaybeShowAutocomplete() {
            this.emit("update")
        }
        onHideAutocomplete() {
            null != this.state.query && this.setState({
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
                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == this.props.editorRef.current) return;
            let r = (0, l.getOptions)(this.props),
                u = (0, l.findMatchingAutocompleteType)({
                    channel: this.props.channel,
                    guild: this.props.guild,
                    options: r,
                    currentWord: this.props.currentWord,
                    currentWordIsAtStart: this.props.currentWordIsAtStart,
                    textValue: this.props.textValue,
                    optionText: this.props.optionText
                }),
                d = r.commands !== o.CommandMode.DISABLED ? (0, l.findCommandOptionAutocompleteType)(this.props.activeCommandOption, this.props.currentWord) : null;
            if (null == u && null != d) u = d;
            else if (null == u || null != d && u.type !== d.type) {
                this.clearQuery();
                return
            }
            let {
                type: _,
                typeInfo: c,
                query: E
            } = u, I = i || n && ((null === (e = this.state.query) || void 0 === e ? void 0 : e.queryText) !== E || (null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo) !== c), T = a.IncludeStickersInAutocomplete.getSetting();
            r.allowStickers = r.allowStickers ? T : r.allowStickers;
            let {
                results: f,
                metadata: S
            } = c.queryResults(this.props.channel, this.props.guild, E, r, I), h = 0;
            for (let e of Object.values(f)) Array.isArray(e) && (h += e.length);
            let A = !0 === f.isLoading,
                m = this.shouldShow(h, A, c),
                N = this.state.selectedIndex;
            !m || A ? N = null : null != N && N >= h && (N = h - 1), m && !this.state.isVisible && (0, s.trackAutocompleteOpen)(_, this.props.channel, S), this.setState({
                query: {
                    type: _,
                    typeInfo: c,
                    queryText: E,
                    results: f,
                    resultCount: h,
                    options: r,
                    isLoading: A
                },
                isVisible: m,
                selectedIndex: N
            })
        }
        shouldShow(e, t, n) {
            return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty)
        }
        selectResult(e, t, n) {
            var i, r, a;
            if (!this.state.isVisible) return !1;
            let {
                type: l,
                typeInfo: u,
                results: d,
                resultCount: _,
                options: c
            } = this.state.query;
            if (e >= _) return !1;
            let E = null === (r = u.onSelect) || void 0 === r ? void 0 : r.call(u, {
                results: d,
                index: e,
                type: t ? o.SelectType.SEND : o.SelectType.INSERT,
                options: c,
                channel: this.props.channel,
                tabOrEnter: n,
                queryText: null === (i = this.state.query) || void 0 === i ? void 0 : i.queryText
            });
            return null != E && (0, s.trackAutocompleteSelect)(l, null !== (a = E.type) && void 0 !== a ? a : null, this.props.channel, E.metadata), !0
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
            super(), u(this, "props", void 0), u(this, "state", void 0), this.props = e, this.state = d()
        }
    }
}