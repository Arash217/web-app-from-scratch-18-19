const removeChildren = (node) => {
    let last;
    while (last = node.lastChild) node.removeChild(last);
};

/* HoC for removing elements from DOM */
const nodeCleanupMiddleware = (node, fn) => {
    return (...data) => {
        if (node.hasChildNodes()){
            removeChildren(node);
        }

        return fn(...data);
    }
};

export default {
    nodeCleanupMiddleware
}