const defaultStyle = `
@media (pointer: fine) {
    ::-webkit-scrollbar {
        width: 10px ;
    }
    ::-webkit-scrollbar-track {
        background: #cccccc ;
    }
    ::-webkit-scrollbar-thumb {
        background: #666666 ;
        width: 7px ;
        border-radius: 5px ;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #333333 ;
    }
    ::-webkit-scrollbar-track:hover {
        background: #aaaaaa ;
    }
}
`;
const attributeName = "fpIonScroll";

/**
 * 
 * @param {IonContent} ionContent The IonContent element to apply the style to
 * @param {String} style The style to apply to the scrollbar. Default style will be applied if not provided. It's a css string, not the file path.
 */
const setScrollStyle = async (ionContent, style = defaultStyle) => {
    if (!ionContent || ionContent.hasAttribute(attributeName)) return;
    const styleEl = document.createElement('style');
    styleEl.innerText = style;
    const scrollElement = await ionContent.getScrollElement();
    scrollElement.appendChild(styleEl);
    ionContent.setAttribute(attributeName, null);
};

export default setScrollStyle;