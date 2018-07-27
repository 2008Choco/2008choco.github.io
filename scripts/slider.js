function iterateAndPerform(component, recursiveFunction, listModificationFunction) {
    if (!component.classList.contains("slider-bar")) {
        for (let child of component.children) {
            recursiveFunction(child);
        }
        
        return;
    }
    
    for (let child of component.children) {
        listModificationFunction.call(this, child, "shown");
    }
}

function showInformationBars(component) {
    iterateAndPerform(component, showInformationBars, (child, className) => child.classList.add(className));
}

function hideInformationBars(component) {
    iterateAndPerform(component, hideInformationBars, (child, className) => child.classList.remove(className));
}