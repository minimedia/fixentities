/*
    Removes pasted non-breaking spaces in CKEditor 4.x
    Does not disable basicEntitites which would be opening a XSS hole
 */


CKEDITOR.on('instanceReady', function (ev) {
    ev.editor.on('paste', function (evt) {
        if (evt.data["html"]) {
            evt.data["html"].replace(/&nbsp;/g, '');
        }
    }, null, null, 9);
});