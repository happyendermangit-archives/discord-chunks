function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
            return l
        },
        MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
            return a
        },
        MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
            return s
        },
        MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
            return o
        },
        insertAccessibilityLabelElements: function() {
            return u
        }
    });
    var i = n("153124"),
        r = n("689938");
    let a = (0, i.uid)(),
        s = (0, i.uid)(),
        o = (0, i.uid)(),
        l = (0, i.uid)();

    function u() {
        [{
            id: a,
            text: ","
        }, {
            id: s,
            text: ","
        }, {
            id: o,
            text: r.default.Messages.REACTIONS
        }, {
            id: l,
            text: r.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
        }].forEach(e => {
            let {
                id: t,
                text: n
            } = e, i = document.getElementById(t);
            null == i && ((i = document.createElement("div")).setAttribute("id", t), i.innerText = n, i.style.display = "none", document.body.appendChild(i))
        })
    }
}