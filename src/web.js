import Markuapad from "./markuapad"

// Call the api to create a new markuapad instance on the #main element
Markuapad.create("main", { fileAccessor: ExampleFileAccessor, CHANGED_INTERVAL: 100, enablePreview: true, slug: 'my-first-markuapad-book' });
