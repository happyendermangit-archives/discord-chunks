function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("424973"), n("222007");
    var i, s, r = n("884691"),
        a = n("665317");
    (i = class e extends r.Component {
        static getDerivedStateFromProps(e, t) {
            let {
                children: n,
                firstRender: i
            } = t, s = (0, a.getChildMapping)(e.children);
            return {
                children: i ? s : (0, a.mergeChildMappings)(n, s),
                firstRender: !1
            }
        }
        componentDidMount() {
            this._isMounted = !0;
            let {
                children: e
            } = this.state;
            if (this.props.transitionAppear)
                for (let t in e) e[t] && this.performAppear(t)
        }
        componentWillUnmount() {
            this._isMounted = !1, this._keyChildMapping = {}, this.state.children = {}
        }
        componentDidUpdate(e, t) {
            if (e !== this.props) {
                let e = (0, a.getChildMapping)(this.props.children),
                    n = t.children;
                if (this.props.transitionEnter ? this._enqueueTransitions(e, n, this._keysToEnter) : this._keysToEnter.length && (this._keysToEnter = []), this.props.transitionLeave) this._enqueueTransitions(n, e, this._keysToLeave);
                else {
                    let t = [];
                    this._enqueueTransitions(n, e, t);
                    let i = (0, a.mergeChildMappings)(n, e);
                    for (let e = 0, n = t.length; e < n; e++) delete i[t[e]];
                    this._isMounted && this.setState({
                        children: i
                    }), this._keysToLeave.length && (this._keysToLeave = [])
                }
            }
            if (this._keysToEnter.length) {
                let e = this._keysToEnter;
                this._keysToEnter = [], e.forEach(this.performEnter, this)
            }
            if (this._keysToLeave.length) {
                let e = this._keysToLeave;
                this._keysToLeave = [], e.forEach(this.performLeave, this)
            }
        }
        _enqueueTransitions(e, t, n) {
            for (let i in e) {
                let s = t && t.hasOwnProperty(i);
                e[i] && !s && !this._currentlyTransitioningKeys.has(i) && n.push(i)
            }
        }
        _perform(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            this._currentlyTransitioningKeys.add(e);
            let s = () => this._handleDonePerform(e, n, i),
                r = this._keyChildMapping[e];
            null != r && null != r[t] ? r[t](s) : s()
        }
        _handleDonePerform(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = this._keyChildMapping[e];
            null != i && null != i[t] && i[t](), this._currentlyTransitioningKeys.delete(e);
            let s = (0, a.getChildMapping)(this.props.children);
            n ? null != s && s.hasOwnProperty(e) ? this.performEnter(e) : this.setState(t => {
                let {
                    children: n
                } = t, {
                    [e]: i,
                    ...s
                } = n;
                return {
                    children: s
                }
            }) : (null == s || !s.hasOwnProperty(e)) && this.performLeave(e)
        }
        performAppear(e) {
            this._perform(e, "componentWillAppear", "componentDidAppear")
        }
        performEnter(e) {
            this._perform(e, "componentWillEnter", "componentDidEnter")
        }
        performLeave(e) {
            this._perform(e, "componentWillLeave", "componentDidLeave", !0)
        }
        render() {
            let {
                childFactory: t,
                component: n
            } = this.props, {
                children: i
            } = this.state, s = [];
            for (let e in i) {
                let n = i[e];
                null != n && r.isValidElement(n) && s.push(r.cloneElement(null == t ? n : t(n), {
                    ref: t => this.addChildRef(e, t),
                    key: e
                }))
            }
            let a = {
                ...this.props
            };
            return Object.keys(e.defaultProps).forEach(e => delete a[e]), r.createElement(n, a, s)
        }
        constructor(e) {
            super(e), this._keyChildMapping = {}, this.addChildRef = (e, t) => {
                this._keyChildMapping[e] = t
            }, this.state = {
                children: (0, a.getChildMapping)(e.children),
                firstRender: !0
            }, this._currentlyTransitioningKeys = new Set, this._keysToEnter = [], this._keysToLeave = [], this._isMounted = !1
        }
    }).defaultProps = {
        component: "span",
        transitionAppear: !0,
        transitionLeave: !0,
        transitionEnter: !0,
        childFactory: null
    }, s = i
}