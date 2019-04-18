import console from './console'

console.log('Hi from ExtendScript!')

const comp = app.project.activeItem
if (comp instanceof CompItem) {
    const nl = comp.layers.addNull()
    nl.transform.position.setValue([120, 120])
}