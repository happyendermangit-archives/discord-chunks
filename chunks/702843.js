function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DropTargetNavigator: function() {
            return a
        }
    }), n("222007"), n("808653"), n("424973");
    var i, r, s = n("71185");
    (r = i || (i = {})).UP = "ArrowUp", r.DOWN = "ArrowDown", r.DROP = "Shift", r.CANCEL = "Escape";
    class a {
        disconnect() {
            window.removeEventListener("keydown", this.handleDraggedElementKeyDown, {
                capture: !0
            })
        }
        hoverNode(e) {
            var t;
            let n = null === (t = Array.from(this.targetNodes.entries()).find(t => {
                let [n, i] = t;
                return e === i
            })) || void 0 === t ? void 0 : t[0];
            null != n && (this.actions.hover([n], {
                clientOffset: function(e) {
                    if (null == e) return {
                        x: 0,
                        y: 0
                    };
                    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
                    if (null == t) return {
                        x: 0,
                        y: 0
                    };
                    let {
                        top: n,
                        left: i
                    } = t.getBoundingClientRect();
                    return {
                        x: i,
                        y: n
                    }
                }(e)
            }), this.currentHoveredNode = e, this.previewer.render(this.monitor), this.announcer.announceHover(e, n), null == e || e.focus())
        }
        getNextDropTarget() {
            var e;
            return this.focusManager.getNextFocusableElement({
                wrap: !1,
                from: null !== (e = this.currentHoveredNode) && void 0 !== e ? e : void 0
            })
        }
        getPreviousDropTarget() {
            var e;
            return this.focusManager.getPreviousFocusableElement({
                wrap: !1,
                from: null !== (e = this.currentHoveredNode) && void 0 !== e ? e : void 0
            })
        }
        getViableTargets(e) {
            let t = this.getAllowedTargets(e);
            return t.sort((e, t) => {
                if (e === t) return 0;
                let n = e.compareDocumentPosition(t);
                return (n & (Node.DOCUMENT_POSITION_FOLLOWING | n & Node.DOCUMENT_POSITION_CONTAINED_BY)) != 0 ? -1 : (n & (Node.DOCUMENT_POSITION_PRECEDING | n & Node.DOCUMENT_POSITION_CONTAINS)) != 0 ? 1 : 0
            })
        }
        getAllowedTargets(e) {
            let t = this.monitor.getItemType();
            return null == t ? Array.from(e.values()) : Array.from(e).reduce((e, t) => {
                let [n, i] = t;
                return this.manager.getMonitor().canDropOnTarget(n) && e.push(i), e
            }, [])
        }
        constructor(e, t, n, i, r) {
            this.targetNodes = t, this.manager = n, this.previewer = i, this.announcer = r, this.handleDraggedElementKeyDown = async e => {
                switch (e.key) {
                    case "ArrowUp":
                        e.preventDefault(), e.stopPropagation(), this.hoverNode(await this.getPreviousDropTarget());
                        return;
                    case "ArrowDown":
                        e.preventDefault(), e.stopPropagation(), this.hoverNode(await this.getNextDropTarget())
                }
            }, this.currentHoveredNode = e, this.focusManager = (0, s.createFocusManager)({
                getFocusableElements: () => this.getViableTargets(t),
                getActiveElement: () => e.ownerDocument.activeElement
            }), this.actions = n.getActions(), this.monitor = n.getMonitor(), window.addEventListener("keydown", this.handleDraggedElementKeyDown, {
                capture: !0
            })
        }
    }
}